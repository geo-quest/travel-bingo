import {
  Challenge,
  ResultEvent,
  ResultEventType,
  RunGameData,
  TravelBingoRules,
} from 'data/interfaces'

import { defineInitialState } from './define-initial-state'
import { handleEvent } from './handle-event'
import { validateStartAndFinishEvents } from './validate-start-and-finish-events'

export function calculateScore(
  run: RunGameData,
  challenges: Challenge[][],
  rules: TravelBingoRules,
): ResultEvent[] {
  run.events.sort((e1, e2) => new Date(e1.timestamp).getTime() - new Date(e2.timestamp).getTime())

  validateStartAndFinishEvents(run.events)

  let state = defineInitialState(run)

  const result: ResultEvent[] = [{ type: ResultEventType.Empty, state, timestamp: run.date }]

  for (const event of run.events) {
    const resultEvents = handleEvent(event, state, challenges, rules)
    result.push(...resultEvents)
    state = resultEvents[resultEvents.length - 1].state
  }

  return result
}
