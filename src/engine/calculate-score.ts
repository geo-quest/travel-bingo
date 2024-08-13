import {
  Challenge,
  Event,
  EventType,
  ResultEvent,
  RunGameData,
  RunGameState,
  RunGameStatus,
} from '../data/interfaces'
import { calculateBingos } from './calculate-bingos'

class EngineError extends Error {
  constructor(message: string) {
    super(`[engine] ${message}`)
    this.name = 'EngineError'
  }
}

export function defineInitialState(run: RunGameData): RunGameState {
  return {
    status: RunGameStatus.Planned,
    teams: Object.keys(run.teams).map(key => {
      return { team: key, rank: 0, score: 0, bingos: 0, solvedChallenges: [] }
    }),
  } as RunGameState
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

export function handleStart(event: Event, state: RunGameState): ResultEvent[] {
  if (state.status !== RunGameStatus.Planned) throw new EngineError('invalid state for start event')
  return [{ ...event, state: { ...state, status: RunGameStatus.Started } }]
}

export function handleFinish(event: Event, state: RunGameState): ResultEvent[] {
  if (state.status !== RunGameStatus.Started)
    throw new EngineError('invalid state for finish event')
  return [{ ...event, state: { ...state, status: RunGameStatus.Finished } }]
}

export function handleChallengeCompleted(
  event: Event,
  state: RunGameState,
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
        teams: state.teams
          .map(t => {
            if (t.team !== event.team) return t
            const solvedChallenges = t.solvedChallenges.concat([challenge.key])
            return {
              ...t,
              score: t.score + challenge.points,
              bingos: calculateBingos(solvedChallenges, challenges),
              solvedChallenges,
            }
          })
          .sort((a, b) => b.score - a.score)
          .map((t, idx) => {
            return { ...t, rank: idx + 1 }
          }),
      },
    },
  ] as ResultEvent[]
}

export function handleEvent(
  event: Event,
  state: RunGameState,
  challenges: Challenge[][],
): ResultEvent[] {
  const eventHandlers: {
    [key in EventType]: (event: Event, state: RunGameState) => ResultEvent[]
  } = {
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
