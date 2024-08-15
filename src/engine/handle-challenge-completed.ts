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
import { rules } from './tests.fixtures'
import { EngineError } from './types'

export function handleChallengeCompleted(
  event: Event,
  state: RunGameState,
  challenges: Challenge[][],
  rules: TravelBingoRules,
): ResultEvent[] {
  const { challenge, currentTeamState } = validateAndFetchData(event, state, challenges)
  let teamState = currentTeamState

  const completedChallenges = teamState.completedChallenges.concat([challenge.key])
  const bingos = calculateBingos(completedChallenges, challenges)
  const newBingos = bingos.filter(b => !teamState?.bingos.includes(b))
  const newPlace = event.place && !teamState.places.includes(event.place)

  const curseApplied = teamState.curseMultiplier !== undefined
  const boostApplied = teamState.boostMultiplier !== undefined

  teamState = {
    ...teamState,
    score:
      teamState.score +
      (challenge.points ?? 0) * (teamState.curseMultiplier ?? 1) * (teamState.boostMultiplier ?? 1),
    completedChallenges: completedChallenges,
  }

  const resultEvents: ResultEvent[] = [
    createChallengeCompletedEvent(event, state, challenge, teamState, curseApplied, boostApplied),
  ]

  if (newPlace) {
    const { newTeamState, newPlaceEvent } = createNewPlaceEvent(event, state, rules, teamState)
    teamState = newTeamState
    resultEvents.push(newPlaceEvent)
  }
  delete event.place

  if (newBingos.length > 0 && teamState) {
    const { newTeamState, bingoEvents } = createBingoEvents(
      event,
      state,
      rules,
      teamState,
      newBingos,
    )
    teamState = newTeamState
    resultEvents.push(...bingoEvents)
  }

  if (challenge.type === ChallengeType.Curse) {
    const { newTeamState, curseEvent } = createCurseEvent(
      event,
      resultEvents[resultEvents.length - 1].state,
      challenge,
      teamState,
    )
    teamState = newTeamState
    resultEvents.push(curseEvent)
  }

  if (challenge.type === ChallengeType.Boost) {
    const { newTeamState, boostEvent } = createBoostEvent(
      event,
      resultEvents[resultEvents.length - 1].state,
      challenge,
      teamState,
    )
    teamState = newTeamState
    resultEvents.push(boostEvent)
  }

  if (teamState.completedChallenges.length === challenges.flat().length) {
    const { newTeamState, fullBoardEvent } = createFullBoardEvent(
      event,
      resultEvents[resultEvents.length - 1].state,
      teamState,
    )
    teamState = newTeamState
    resultEvents.push(fullBoardEvent)
  }

  return resultEvents
}

function validateAndFetchData(
  event: Event,
  state: RunGameState,
  challenges: Challenge[][],
): { currentTeamState: TeamState; challenge: Challenge } {
  if (!event.team) throw new EngineError('"team" must be defined')
  if (!event.challenge) throw new EngineError('"challenge" must be defined')
  if (!event.place) throw new EngineError('"place" must be defined')
  if (state.status !== RunGameStatus.Started)
    throw new EngineError('invalid state for a challengeCompleted event')

  const currentTeamState = state.teams.find(t => t.team === event.team)
  const challenge = challenges.flat().find(c => c.key === event.challenge)

  if (!currentTeamState) throw new EngineError(`team "${event.team}" not found`)
  if (!challenge) throw new EngineError(`challenge "${event.challenge}" not found`)
  if (challenge.type === ChallengeType.Normal && (challenge.points ?? 0) === 0)
    throw new EngineError(`challenge "${event.challenge}" must have points defined`)
  if (challenge.type !== ChallengeType.Normal && (challenge.points ?? 0) !== 0)
    throw new EngineError(`challenge "${event.challenge}" must not have points defined`)
  if (currentTeamState.completedChallenges.find(c => c === event.challenge))
    throw new EngineError(`challenge "${event.challenge}" already completed by ${event.team}`)

  return { currentTeamState, challenge }
}

function createChallengeCompletedEvent(
  event: Event,
  state: RunGameState,
  challenge: Challenge,
  teamState: TeamState,
  curseApplied: boolean,
  boostApplied: boolean,
): ResultEvent {
  let result: ResultEvent = {
    ...event,
    type: ResultEventType.ChallengeCompleted,
    state: state,
  }

  if (curseApplied) {
    result.curseApplied = true
    result.curseMultiplier = teamState.curseMultiplier
  }
  if (boostApplied) {
    result.boostApplied = true
    result.boostMultiplier = teamState.boostMultiplier
  }

  result = {
    ...result,
    type: ResultEventType.ChallengeCompleted,
    points:
      (challenge.points ?? 0) * (teamState.curseMultiplier ?? 1) * (teamState.boostMultiplier ?? 1),
    state: {
      ...state,
      teams: state.teams
        .map(t => {
          if (t.team !== teamState.team) return t
          delete teamState.curseMultiplier
          delete teamState.boostMultiplier
          return teamState
        })
        .sort((a, b) => b.score - a.score)
        .map((t, idx) => {
          return { ...t, rank: idx + 1 }
        }),
    },
  } as ResultEvent

  return result
}

function createNewPlaceEvent(
  event: Event,
  state: RunGameState,
  rules: TravelBingoRules,
  teamState: TeamState,
): { newTeamState: TeamState; newPlaceEvent: ResultEvent } {
  const newTeamState = {
    ...teamState,
    score: teamState.score + rules.bonusPointsPerPlace,
    places: teamState.places.concat([event.place ?? '']),
  }
  const newPlaceEvent = {
    type: ResultEventType.NewPlace,
    timestamp: event.timestamp,
    team: teamState.team,
    challenge: event.challenge,
    newPlace: event.place,
    points: rules.bonusPointsPerPlace,
    state: {
      ...state,
      teams: state.teams
        .map(t => (t.team === event.team ? newTeamState : t))
        .sort((a, b) => b.score - a.score)
        .map((t, idx) => {
          return { ...t, rank: idx + 1 }
        }),
    },
  }

  return { newTeamState, newPlaceEvent }
}

function createBingoEvents(
  event: Event,
  state: RunGameState,
  rules: TravelBingoRules,
  teamState: TeamState,
  newBingos: string[],
): { newTeamState: TeamState; bingoEvents: ResultEvent[] } {
  const newsTeamState = newBingos.map((_, idx) => {
    return {
      ...teamState,
      score: teamState.score + rules.bonusPointsPerBingo * (1 + idx),
      bingos: teamState.bingos.concat(newBingos.slice(0, 1 + idx)),
    }
  })

  const bingoEvents = newBingos.map((newBingo, idx) => {
    return {
      type: ResultEventType.Bingo,
      timestamp: event.timestamp,
      team: teamState.team,
      challenge: event.challenge,
      newBingo: newBingo,
      points: rules.bonusPointsPerBingo,
      state: {
        ...state,
        teams: state.teams
          .map(t => (t.team === event.team ? newsTeamState[idx] : t))
          .sort((a, b) => b.score - a.score)
          .map((t, idx) => {
            return { ...t, rank: idx + 1 }
          }),
      },
    }
  })

  return { newTeamState: newsTeamState[newsTeamState.length - 1], bingoEvents }
}

function createCurseEvent(
  event: Event,
  state: RunGameState,
  challenge: Challenge,
  teamState: TeamState,
): { newTeamState: TeamState; curseEvent: ResultEvent } {
  if (!challenge.curseMultiplier)
    throw new EngineError(`curseMultiplier not defined for "${challenge.key}"`)
  if (!event.cursedTeam) throw new EngineError(`cursedTeam not defined on ${JSON.stringify(event)}`)

  const newTeamState = {
    ...teamState,
  }
  const curseEvent = {
    ...event,
    type: ResultEventType.Curse,
    cursedTeam: event.cursedTeam,
    curseMultiplier: challenge.curseMultiplier,
    state: {
      ...state,
      teams: state.teams.map(t =>
        t.team === event.cursedTeam ? { ...t, curseMultiplier: challenge.curseMultiplier } : t,
      ),
    },
  }
  return { newTeamState, curseEvent }
}

function createBoostEvent(
  event: Event,
  state: RunGameState,
  challenge: Challenge,
  teamState: TeamState,
): { newTeamState: TeamState; boostEvent: ResultEvent } {
  if (!challenge.boostMultiplier)
    throw new EngineError(`boostMultiplier not defined for "${challenge.key}"`)
  const newTeamState = {
    ...teamState,
    boostMultiplier: challenge.boostMultiplier,
  }
  const boostEvent = {
    ...event,
    type: ResultEventType.Boost,
    boostMultiplier: challenge.boostMultiplier,
    state: {
      ...state,
      teams: state.teams
        .map(t => (t.team === event.team ? newTeamState : t))
        .sort((a, b) => b.score - a.score)
        .map((t, idx) => {
          return { ...t, rank: idx + 1 }
        }),
    },
  }

  return { newTeamState, boostEvent }
}

function createFullBoardEvent(
  event: Event,
  state: RunGameState,
  teamState: TeamState,
): { newTeamState: TeamState; fullBoardEvent: ResultEvent } {
  const newTeamState = { ...teamState }
  const fullBoardEvent = {
    ...event,
    type: ResultEventType.FullBoard,
    state: state,
  } as ResultEvent
  return { newTeamState, fullBoardEvent }
}
