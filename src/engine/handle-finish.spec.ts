import { EventType, ResultEvent, ResultEventType, RunGameStatus } from 'data/interfaces'

import { handleFinish } from './handle-finish'
import { event, state } from './tests.fixtures'

describe('handleFinish', () => {
  it('should throw an error if state is not started', () => {
    expect(() =>
      handleFinish(event({ type: EventType.Finish }), state({ status: RunGameStatus.Planned })),
    ).toThrow('invalid state for finish event')
  })

  it('should return a final state', () => {
    expect(
      handleFinish(event({ type: EventType.Finish }), state({ firstChallengeCompleted: true })),
    ).toStrictEqual([
      {
        type: ResultEventType.Finish,
        timestamp: '2024-08-12T10:00:00',
        state: {
          status: RunGameStatus.Finished,
          firstChallengeCompleted: true,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      },
    ] as ResultEvent[])
  })
})
