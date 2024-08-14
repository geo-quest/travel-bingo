import { Event, ResultEvent, ResultEventType, RunGameState, RunGameStatus } from 'data/interfaces'

import { EngineError } from './types'

export function handleFinish(event: Event, state: RunGameState): ResultEvent[] {
  if (state.status !== RunGameStatus.Started)
    throw new EngineError('invalid state for finish event')
  return [
    { ...event, type: ResultEventType.Finish, state: { ...state, status: RunGameStatus.Finished } },
  ]
}
