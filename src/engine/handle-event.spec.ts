import { handleEvent } from './handle-event'
import { challenges, event, state } from './tests.fixtures'

describe('handleEvent', () => {
  it('should throw error for invalid type', () => {
    expect(() => handleEvent(event({ type: undefined }), state(), challenges())).toThrowError(
      'invalid event type: undefined.',
    )
  })
})
