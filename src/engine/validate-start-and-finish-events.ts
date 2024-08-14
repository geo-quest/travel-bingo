import { Event, EventType } from 'data/interfaces'

import { EngineError } from './types'

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
