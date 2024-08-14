import {
  Challenge,
  ChallengeType,
  Event,
  ResultEvent,
  ResultEventType,
  RunGameState,
  RunGameStatus,
  TeamState,
  TravelBingoRules,
} from 'data/interfaces'

import { calculateBingos } from './calculate-bingos'
import { EngineError } from './types'

export function handleChallengeCompleted(
  event: Event,
  state: RunGameState,
  challenges: Challenge[][],
  rules: TravelBingoRules,
): ResultEvent[] {
  if (!event.team) throw new EngineError('"team" must be defined')
  if (!event.challenge) throw new EngineError('"challenge" must be defined')
  if (state.status !== RunGameStatus.Started)
    throw new EngineError('invalid state for a challengeCompleted event')

  let teamState = state.teams.find(t => t.team === event.team)
  const challenge = challenges.flat().find(c => c.key === event.challenge)

  if (!teamState) throw new EngineError(`team "${event.team}" not found`)
  if (!challenge) throw new EngineError(`challenge "${event.challenge}" not found`)
  if (teamState.completedChallenges.find(c => c === event.challenge))
    throw new EngineError(`challenge "${event.challenge}" already completed by ${event.team}`)

  const completedChallenges = teamState.completedChallenges.concat([challenge.key])
  const bingos = calculateBingos(completedChallenges, challenges)
  const newBingos = bingos.filter(b => !teamState?.bingos.includes(b))

  const cursedApplied = teamState.cursedMultiplier !== undefined

  teamState = {
    ...teamState,
    score:
      teamState.score + challenge.points * (cursedApplied ? (teamState.cursedMultiplier ?? 1) : 1),
    completedChallenges: completedChallenges,
  }

  const resultEvents: ResultEvent[] = [
    createChallengeCompletedEvent(event, state, challenge, teamState, cursedApplied),
  ]

  if (newBingos.length > 0 && teamState)
    resultEvents.push(...createBingoEvents(event, state, rules, teamState, newBingos))

  if (challenge.type === ChallengeType.Curse)
    resultEvents.push(createCurseEvent(event, resultEvents[0].state, challenge))

  return resultEvents
}

function createChallengeCompletedEvent(
  event: Event,
  state: RunGameState,
  challenge: Challenge,
  teamState: TeamState,
  cursedApplied: boolean,
): ResultEvent {
  const result: ResultEvent = {
    ...event,
    type: ResultEventType.ChallengeCompleted,
    points: challenge.points * (cursedApplied ? (teamState.cursedMultiplier ?? 1) : 1),
    state: {
      ...state,
      teams: state.teams
        .map(t => {
          if (t.team !== teamState.team) return t
          delete teamState.cursedMultiplier
          return teamState
        })
        .sort((a, b) => b.score - a.score)
        .map((t, idx) => {
          return { ...t, rank: idx + 1 }
        }),
    },
  } as ResultEvent

  if (cursedApplied) result.cursedApplied = true

  return result
}

function createBingoEvents(
  event: Event,
  state: RunGameState,
  rules: TravelBingoRules,
  teamState: TeamState,
  newBingos: string[],
): ResultEvent[] {
  return newBingos.map((newBingo, idx) => {
    return {
      type: ResultEventType.Bingo,
      timestamp: event.timestamp,
      team: teamState.team,
      newBingo: newBingo,
      points: rules.bonusPointsPerBingo,
      state: {
        ...state,
        teams: state.teams
          .map(t =>
            t.team === teamState.team
              ? {
                  ...teamState,
                  score: teamState.score + rules.bonusPointsPerBingo * (1 + idx),
                  bingos: teamState.bingos.concat(newBingos.slice(0, 1 + idx)),
                }
              : t,
          )
          .sort((a, b) => b.score - a.score)
          .map((t, idx) => {
            return { ...t, rank: idx + 1 }
          }),
      },
    } as ResultEvent
  })
}

function createCurseEvent(event: Event, state: RunGameState, challenge: Challenge): ResultEvent {
  if (!challenge.curseMultiplier)
    throw new EngineError(`curseMultiplier not defined for "${challenge.key}"`)
  if (!event.cursedTeam) throw new EngineError(`cursedTeam not defined on ${JSON.stringify(event)}`)
  return {
    ...event,
    type: ResultEventType.Curse,
    cursedTeam: event.cursedTeam,
    curseMultiplier: challenge.curseMultiplier,
    state: {
      ...state,
      teams: state.teams.map(t =>
        t.team === event.cursedTeam ? { ...t, cursedMultiplier: challenge.curseMultiplier } : t,
      ),
    },
  }
}
