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
  const { challenge, currentTeamState } = validateAndFetchData(event, state, challenges)
  let teamState = currentTeamState

  const completedChallenges = teamState.completedChallenges.concat([challenge.key])
  const bingos = calculateBingos(completedChallenges, challenges)
  const newBingos = bingos.filter(b => !teamState?.bingos.includes(b))
  const newPlace = event.place && !teamState.places.includes(event.place)

  const curseApplied =
    teamState.curseMultiplier !== undefined && challenge.type === ChallengeType.Normal
  const boostApplied =
    teamState.boostMultiplier !== undefined && challenge.type === ChallengeType.Normal

  teamState = {
    ...teamState,
    score: getScore(teamState, challenge, curseApplied, boostApplied),
    completedChallenges: completedChallenges,
  }

  const { newTeamState, completedEvent } = createChallengeCompletedEvent(
    event,
    state,
    challenge,
    teamState,
    curseApplied,
    boostApplied,
  )
  teamState = newTeamState
  const resultEvents: ResultEvent[] = [completedEvent]

  if (!state.firstChallengeCompleted) {
    state = { ...state, firstChallengeCompleted: true }
    const { newTeamState, firstChallengeEvent } = createFirstChallengeEvent(
      event,
      state,
      rules,
      teamState,
    )
    teamState = newTeamState
    resultEvents.push(firstChallengeEvent)
  }

  if (newPlace) {
    const { newTeamState, newPlaceEvent } = createNewPlaceEvent(event, state, rules, teamState)
    teamState = newTeamState
    resultEvents.push(newPlaceEvent)
  }

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
  if (!event.team)
    throw new EngineError(`"team" must be defined for event ${JSON.stringify(event)}`)
  if (!event.challenge)
    throw new EngineError(`"challenge" must be defined for event ${JSON.stringify(event)}`)
  if (!event.place) {
    throw new EngineError(`"place" must be defined for event ${JSON.stringify(event)}`)
  }

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
): { newTeamState: TeamState; completedEvent: ResultEvent } {
  let completedEvent: ResultEvent = {
    ...event,
    type: ResultEventType.ChallengeCompleted,
    state: state,
  }

  if (curseApplied) {
    completedEvent.curseApplied = true
    completedEvent.curseMultiplier = teamState.curseMultiplier
  }
  if (boostApplied) {
    completedEvent.boostApplied = true
    completedEvent.boostMultiplier = teamState.boostMultiplier
  }

  const newTeamState = { ...teamState }
  if (curseApplied) delete newTeamState.curseMultiplier
  if (boostApplied) delete newTeamState.boostMultiplier

  completedEvent = {
    ...completedEvent,
    type: ResultEventType.ChallengeCompleted,
    points: getPoints(teamState, challenge, curseApplied, boostApplied),
    state: {
      ...state,
      teams: updateTeamsState(state.teams, newTeamState, event.team),
    },
  } as ResultEvent

  return { newTeamState, completedEvent }
}

function createFirstChallengeEvent(
  event: Event,
  state: RunGameState,
  rules: TravelBingoRules,
  teamState: TeamState,
): {
  newTeamState: TeamState
  firstChallengeEvent: ResultEvent
} {
  const newTeamState: TeamState = {
    ...teamState,
    score: teamState.score + rules.bonusForFirstChallenge,
  }
  const firstChallengeEvent: ResultEvent = {
    type: ResultEventType.FirstChallenge,
    timestamp: event.timestamp,
    team: event.team,
    challenge: event.challenge,
    points: rules.bonusForFirstChallenge,
    state: {
      ...state,
      teams: updateTeamsState(state.teams, newTeamState, event.team),
    },
  }

  return { newTeamState, firstChallengeEvent }
}

function createNewPlaceEvent(
  event: Event,
  state: RunGameState,
  rules: TravelBingoRules,
  teamState: TeamState,
): { newTeamState: TeamState; newPlaceEvent: ResultEvent } {
  const newTeamState: TeamState = {
    ...teamState,
    score: teamState.score + rules.bonusPointsPerPlace,
    places: teamState.places.concat([event.place ?? '']),
  }
  const newPlaceEvent: ResultEvent = {
    type: ResultEventType.NewPlace,
    timestamp: event.timestamp,
    team: event.team,
    challenge: event.challenge,
    newPlace: event.place,
    points: rules.bonusPointsPerPlace,
    state: {
      ...state,
      teams: updateTeamsState(state.teams, newTeamState, event.team),
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
  const newsTeamState: TeamState[] = newBingos.map((_, idx) => {
    return {
      ...teamState,
      score: teamState.score + rules.bonusPointsPerBingo * (1 + idx),
      bingos: teamState.bingos.concat(newBingos.slice(0, 1 + idx)),
    }
  })

  const bingoEvents: ResultEvent[] = newBingos.map((newBingo, idx) => {
    return {
      type: ResultEventType.Bingo,
      timestamp: event.timestamp,
      team: teamState.team,
      challenge: event.challenge,
      newBingo: newBingo,
      points: rules.bonusPointsPerBingo,
      state: {
        ...state,
        teams: updateTeamsState(state.teams, newsTeamState[idx], event.team),
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

  const newTeamState: TeamState = {
    ...teamState,
  }

  const cursedTeamNewState: TeamState = {
    ...state.teams.find(t => t.team === event.cursedTeam),
    curseMultiplier: challenge.curseMultiplier,
  } as TeamState

  const curseEvent: ResultEvent = {
    timestamp: event.timestamp,
    team: event.team,
    challenge: event.challenge,
    type: ResultEventType.Curse,
    cursedTeam: event.cursedTeam,
    curseMultiplier: challenge.curseMultiplier,
    state: {
      ...state,
      teams: updateTeamsState(state.teams, cursedTeamNewState, event.cursedTeam),
    },
  } as ResultEvent
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
  const newTeamState: TeamState = {
    ...teamState,
    boostMultiplier: (teamState.boostMultiplier ?? 1) * challenge.boostMultiplier,
  }
  const boostEvent: ResultEvent = {
    timestamp: event.timestamp,
    team: event.team,
    challenge: event.challenge,
    type: ResultEventType.Boost,
    boostMultiplier: challenge.boostMultiplier,
    state: {
      ...state,
      teams: updateTeamsState(state.teams, newTeamState, event.team),
    },
  }

  return { newTeamState, boostEvent }
}

function createFullBoardEvent(
  event: Event,
  state: RunGameState,
  teamState: TeamState,
): { newTeamState: TeamState; fullBoardEvent: ResultEvent } {
  const newTeamState: TeamState = { ...teamState }
  const fullBoardEvent: ResultEvent = {
    timestamp: event.timestamp,
    team: event.team,
    challenge: event.challenge,
    type: ResultEventType.FullBoard,
    state: state,
  } as ResultEvent
  return { newTeamState, fullBoardEvent }
}

function getScore(
  teamState: TeamState,
  challenge: Challenge,
  curseApplied: boolean,
  boostApplied: boolean,
): number {
  return teamState.score + getPoints(teamState, challenge, curseApplied, boostApplied)
}

function getPoints(
  teamState: TeamState,
  challenge: Challenge,
  curseApplied: boolean,
  boostApplied: boolean,
): number {
  const curseMultiplier = curseApplied ? (teamState.curseMultiplier ?? 1) : 1
  const boostMultiplier = boostApplied ? (teamState.boostMultiplier ?? 1) : 1
  return (challenge.points ?? 0) * curseMultiplier * boostMultiplier
}

function updateTeamsState(
  teams: TeamState[],
  newTeamState: TeamState,
  targetTeam: string | undefined,
): TeamState[] {
  return teams
    .map(t => (t.team === targetTeam ? newTeamState : t))
    .sort((a, b) => b.score - a.score)
    .map((t, idx) => {
      return { ...t, rank: idx + 1 }
    })
}
