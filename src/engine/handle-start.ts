import { Event, ResultEvent, ResultEventType, RunGameState, RunGameStatus } from 'data/interfaces'

import { EngineError } from './types'

export function handleStart(event: Event, state: RunGameState): ResultEvent[] {
  if (state.status !== RunGameStatus.Planned) throw new EngineError('invalid state for start event')
  return [
    { ...event, type: ResultEventType.Start, state: { ...state, status: RunGameStatus.Started } },
  ]
}
