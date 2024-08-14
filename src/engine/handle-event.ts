import {
  Challenge,
  Event,
  EventType,
  ResultEvent,
  RunGameState,
  TravelBingoRules,
} from 'data/interfaces'

import { handleChallengeCompleted } from './handle-challenge-completed'
import { handleFinish } from './handle-finish'
import { handleStart } from './handle-start'

export function handleEvent(
  event: Event,
  state: RunGameState,
  challenges: Challenge[][],
  rules: TravelBingoRules,
): ResultEvent[] {
  const eventHandlers: {
    [key in EventType]: (
      event: Event,
      state: RunGameState,
      rules: TravelBingoRules,
    ) => ResultEvent[]
  } = {
    [EventType.Empty]: () => [],
    [EventType.Bingo]: () => [],
    [EventType.Start]: (event, state) => handleStart(event, state),
    [EventType.Finish]: (event, state) => handleFinish(event, state),
    [EventType.ChallengeCompleted]: (event, state, rules) =>
      handleChallengeCompleted(event, state, challenges, rules),
  }
  const handler = eventHandlers[event.type]
  if (!handler) throw new Error(`invalid event type: ${event.type}.`)

  return handler(event, state, rules)
}
