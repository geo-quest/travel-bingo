// import { Challenge, LeaderBoardData, RunGameData } from '../data/interfaces'

import {
  Challenge,
  Event,
  EventType,
  ResultEvent,
  RunGameData,
  RunGameStatus,
  State,
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

export function defineInitialState(run: RunGameData): State {
  return {
    status: RunGameStatus.Planned,
    teams: Object.keys(run.teams).map(key => {
      return { team: key, score: 0 }
    }),
  } as State
}

export function validateStartAndFinishEvents(events: Event[]) {
  if (events.length === 0) return

  const startEvents = events.filter(e => e.type === EventType.Start)
  const finishEvents = events.filter(e => e.type === EventType.Finish)

  if (events[0].type !== EventType.Start) throw new EngineError('the first event must be "start".')
  if (startEvents.length !== 1) throw new EngineError('there must be exactly one "start" event.')
  if (finishEvents.length > 1) throw new EngineError('there must be maximum one "finish" event.')
  if (finishEvents[0]?.timestamp <= startEvents[0]?.timestamp)
    throw new EngineError('"finish" must be later than "start".')
}

export function handleStart(event: Event, state: State): ResultEvent[] {
  if (state.status !== RunGameStatus.Planned) throw new EngineError('invalid state for start event')
  return [{ ...event, state: { ...state, status: RunGameStatus.Started } }]
}

export function handleFinish(event: Event, state: State): ResultEvent[] {
  if (state.status !== RunGameStatus.Started)
    throw new EngineError('invalid state for finish event')
  return [{ ...event, state: { ...state, status: RunGameStatus.Finished } }]
}

export function handleChallengeCompleted(
  event: Event,
  state: State,
  challenges: Challenge[][],
): ResultEvent[] {
  if (!event.team) throw new EngineError('"team" must be defined')
  if (!event.challenge) throw new EngineError('"challenge" must be defined')
  if (state.status !== RunGameStatus.Started)
    throw new EngineError('invalid state for a challengeCompleted event')

  const team = state.teams.find(t => t.team === event.team)
  const challenge = challenges.flat().find(c => c.key === event.challenge)

  if (!team) throw new EngineError(`team "${event.team}" not found`)
  if (!challenge) throw new EngineError(`challenge "${event.challenge}" not found`)

  return [
    {
      ...event,
      state: {
        ...state,
        teams: state.teams.map(t =>
          t.team === event.team ? { ...t, score: t.score + challenge.points } : t,
        ),
      },
    },
  ]
}

export function handleEvent(event: Event, state: State, challenges: Challenge[][]): ResultEvent[] {
  const eventHandlers: { [key in EventType]: (event: Event, state: State) => ResultEvent[] } = {
    [EventType.Start]: (event, state) => handleStart(event, state),
    [EventType.Finish]: (event, state) => handleFinish(event, state),
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
  events.sort((e1, e2) => new Date(e1.timestamp).getTime() - new Date(e2.timestamp).getTime())

  validateStartAndFinishEvents(events)

  const result: ResultEvent[] = []

  let state = defineInitialState(run)

  for (const event of events) {
    const resultEvents = handleEvent(event, state, challenges)
    result.push(...resultEvents)
    state = resultEvents[resultEvents.length - 1].state
  }

  return result
}
