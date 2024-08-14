import { Event, ResultEvent, RunGameState, RunGameStatus } from 'data/interfaces'

import { EngineError } from './types'

export function handleFinish(event: Event, state: RunGameState): ResultEvent[] {
  if (state.status !== RunGameStatus.Started)
    throw new EngineError('invalid state for finish event')
  return [{ ...event, state: { ...state, status: RunGameStatus.Finished } }]
}
