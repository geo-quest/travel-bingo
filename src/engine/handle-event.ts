import { Challenge, Event, EventType, ResultEvent, RunGameState } from 'data/interfaces'

import { handleChallengeCompleted } from './handle-challenge-completed'
import { handleFinish } from './handle-finish'
import { handleStart } from './handle-start'

export function handleEvent(
  event: Event,
  state: RunGameState,
  challenges: Challenge[][],
): ResultEvent[] {
  const eventHandlers: {
    [key in EventType]: (event: Event, state: RunGameState) => ResultEvent[]
  } = {
    [EventType.Empty]: () => [],
    [EventType.Start]: (event, state) => handleStart(event, state),
    [EventType.Finish]: (event, state) => handleFinish(event, state),
    [EventType.ChallengeCompleted]: (event, state) =>
      handleChallengeCompleted(event, state, challenges),
  }
  const handler = eventHandlers[event.type]
  if (!handler) throw new Error(`invalid event type: ${event.type}.`)

  return handler(event, state)
}
