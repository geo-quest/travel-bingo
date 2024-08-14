import {
  Challenge,
  Event,
  ResultEvent,
  ResultEventType,
  RunGameState,
  RunGameStatus,
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

  teamState = {
    ...teamState,
    score: teamState.score + challenge.points,
    bingos: bingos,
    completedChallenges: completedChallenges,
  }

  const resultEvents: ResultEvent[] = [
    {
      ...event,
      type: ResultEventType.ChallengeCompleted,
      points: challenge.points,
      state: {
        ...state,
        teams: state.teams
          .map(t => (teamState && t.team === teamState.team ? teamState : t))
          .sort((a, b) => b.score - a.score)
          .map((t, idx) => {
            return { ...t, rank: idx + 1 }
          }),
      },
    },
  ]

  if (newBingos.length > 0 && teamState) {
    resultEvents.push({
      type: ResultEventType.Bingo,
      timestamp: event.timestamp,
      team: teamState.team,
      newBingos: newBingos,
      points: rules.bonusPointsPerBingo * newBingos.length,
      state: {
        ...state,
        teams: state.teams
          .map(t =>
            teamState && t.team === teamState.team
              ? {
                  ...teamState,
                  score: teamState.score + rules.bonusPointsPerBingo * newBingos.length,
                }
              : t,
          )
          .sort((a, b) => b.score - a.score)
          .map((t, idx) => {
            return { ...t, rank: idx + 1 }
          }),
      },
    })
  }

  return resultEvents
}
