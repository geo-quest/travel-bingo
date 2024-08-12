// import { Challenge, LeaderBoardData, RunGameData } from '../data/interfaces'

import { stat } from 'fs'

import {
  Challenge,
  Event,
  EventType,
  ResultEvent,
  RunGameData,
  RunGameState,
  State,
  Teams,
} from '../data/interfaces'

// export function calculateScore(run: RunGameData, challenges: Challenge[][]): LeaderBoardData {
//   const numRows = challenges.length
//   const numCols = challenges[0].length

//   const isRowSolved = (row: number, teamChallenges: string[]): boolean =>
//     challenges[row].every(challenge => teamChallenges.includes(challenge.key))

//   const isColSolved = (col: number, teamChallenges: string[]): boolean =>
//     challenges.every(row => teamChallenges.includes(row[col].key))

//   const isMainDiagonalSolved = (teamChallenges: string[]): boolean =>
//     challenges.every((_row, i) => teamChallenges.includes(challenges[i][i].key))

//   const isSecondaryDiagonalSolved = (teamChallenges: string[]): boolean =>
//     challenges.every((_row, i) => teamChallenges.includes(challenges[i][numCols - 1 - i].key))

//   return {
//     teams: Object.keys(run.teams)
//       .map(key => {
//         const team = run.teams[key]
//         const teamChallenges = team.challenges.map(challenge => challenge.key)

//         let bingos = 0

//         for (let i = 0; i < numRows; i++) if (isRowSolved(i, teamChallenges)) bingos++

//         for (let i = 0; i < numCols; i++) if (isColSolved(i, teamChallenges)) bingos++

//         if (isMainDiagonalSolved(teamChallenges)) bingos++
//         if (isSecondaryDiagonalSolved(teamChallenges)) bingos++

//         return {
//           key: key,
//           name: team.name,
//           score: team.challenges.reduce((result, teamChallenge) => {
//             const challengeData = challenges.flat().find(c => c.key === teamChallenge.key)
//             return result + (challengeData?.points || 0)
//           }, 0),
//           challenges: team.challenges,
//           bingos: bingos,
//           rank: 0,
//         }
//       })
//       .sort((a, b) => {
//         if (b.bingos !== a.bingos) return b.bingos - a.bingos
//         return b.score - a.score
//       })
//       .map((team, index) => ({
//         ...team,
//         rank: index + 1,
//       })),
//   }
// }

class EngineError extends Error {
  constructor(message: string) {
    super(`[engine] ${message}`)
    this.name = 'EngineError'
  }
}

export function defineInitialState(run: RunGameData) {
  return {
    teams: Object.keys(run.teams).map(key => {
      return { team: key, score: 0 }
    }),
  } as State
}

export function validateListOfEvents(run: RunGameData, events: Event[]) {
  const isPlanned = run.state === RunGameState.Planned
  const isRunning = run.state === RunGameState.Running
  const startEvents = events.filter(e => e.type === EventType.Start)
  const finishEvents = events.filter(e => e.type === EventType.Finish)

  if (isPlanned) {
    if (events.length > 0) throw new EngineError('the run is planned; events array must be empty.')
    return
  }

  if (!events || events.length === 0) throw new EngineError('events array must not be empty.')

  if (events[0].type !== EventType.Start) throw new EngineError('the first event must be "start".')

  if (startEvents.length !== 1) throw new EngineError('there must be exactly one "start" event.')

  if (isRunning) {
    if (finishEvents.length > 0) throw new EngineError('no "finish" events allowed while running.')
  } else {
    if (events[events.length - 1].type !== EventType.Finish)
      throw new EngineError('the last event must be "finish".')
    if (finishEvents.length !== 1)
      throw new EngineError('there must be exactly one "finish" event.')
    if (finishEvents[0].timestamp < startEvents[0].timestamp)
      throw new EngineError('"finish" must be later than "start".')
  }
}

export function handleStart(state: State): State {
  // FIXME implement it
  return { ...state }
}

export function handleFinish(state: State): State {
  // FIXME implement it
  return { ...state }
}

export function handleChallengeCompleted(
  event: Event,
  state: State,
  challenges: Challenge[][],
): State {
  if (!event.team) throw new EngineError('"team" must be defined')
  if (!event.challenge) throw new EngineError('"challenge" must be defined')

  const team = state.teams.find(t => t.team === event.team)
  const challenge = challenges.flat().find(c => c.key === event.challenge)

  if (!team) throw new EngineError('"team" not found')
  if (!challenge) throw new EngineError('"challenge" not found')

  return {
    ...state,
    teams: state.teams.map(t =>
      t.team === event.team ? { ...t, score: t.score + challenge.points } : t,
    ),
  }
}

export function handleEvent(event: Event, state: State, challenges: Challenge[][]) {
  const eventHandlers: { [key in EventType]: (event: Event, state: State) => State } = {
    [EventType.Start]: (_, state) => handleStart(state),
    [EventType.Finish]: (_, state) => handleFinish(state),
    [EventType.ChallengeCompleted]: (event, state) =>
      handleChallengeCompleted(event, state, challenges),
  }
  const handler = eventHandlers[event.type]
  if (!handler) throw new Error(`invalid event type: ${event.type}.`)

  return handler(event, state)
}

export function calculateScore(
  run: RunGameData,
  events: Event[],
  challenges: Challenge[][],
): ResultEvent[] {
  validateListOfEvents(run, events)

  const result: ResultEvent[] = []

  let state = defineInitialState(run)

  for (const event of events) {
    state = handleEvent(event, state, challenges)
    result.push({ ...event, state })
  }

  return result
}
