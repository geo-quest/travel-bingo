import { EventType } from 'data/interfaces'

import { event } from './tests.fixtures'
import { validateStartAndFinishEvents } from './validate-start-and-finish-events'

describe('validateStartAndFinishEvents', () => {
  it('should not throw error for empty array', () => {
    expect(() => validateStartAndFinishEvents([])).not.toThrowError()
  })
  it('should throw error for first event other than start', () => {
    expect(() => validateStartAndFinishEvents([event()])).toThrowError(
      'first event must be "start".',
    )
  })
  it('should throw error for multiple "start" events', () => {
    expect(() =>
      validateStartAndFinishEvents([
        event({ type: EventType.Start }),
        event({ type: EventType.Start }),
        event({ type: EventType.Finish }),
      ]),
    ).toThrowError('there must be exactly one "start" event.')
  })
  it('should throw error for multiple "finish events', () => {
    expect(() =>
      validateStartAndFinishEvents([
        event({ type: EventType.Start }),
        event({ type: EventType.Finish }),
        event({ type: EventType.Finish }),
      ]),
    ).toThrowError('there must be maximum one "finish" event.')
  })
  it('should throw error for "finish" not later than "start', () => {
    expect(() =>
      validateStartAndFinishEvents([
        event({ type: EventType.Start, timestamp: '20240812T10:00:00' }),
        event(),
        event({ type: EventType.Finish, timestamp: '20240812T10:00:00' }),
      ]),
    ).toThrowError('"finish" must be later than "start".')
  })
})
