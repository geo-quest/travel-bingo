import { EventType, ResultEvent, RunGameStatus } from 'data/interfaces'

import { handleStart } from './handle-start'
import { event, state } from './tests.fixtures'

describe('handleStart', () => {
  it('should throw an error if state is not planned', () => {
    expect(() =>
      handleStart(event({ type: EventType.Start }), state({ status: RunGameStatus.Started })),
    ).toThrow('invalid state for start event')
  })

  it('should return a started state', () => {
    expect(
      handleStart(event({ type: EventType.Start }), state({ status: RunGameStatus.Planned })),
    ).toStrictEqual([
      {
        type: EventType.Start,
        timestamp: '2024-08-12T10:00:00',
        state: {
          status: RunGameStatus.Started,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      },
    ] as ResultEvent[])
  })
})
