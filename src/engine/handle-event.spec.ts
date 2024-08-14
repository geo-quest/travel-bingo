import { handleEvent } from './handle-event'
import { challenges, event, rules, state } from './tests.fixtures'

describe('handleEvent', () => {
  it('should throw error for invalid type', () => {
    expect(() =>
      handleEvent(event({ type: undefined }), state(), challenges(), rules()),
    ).toThrowError('invalid event type: undefined.')
  })
})
