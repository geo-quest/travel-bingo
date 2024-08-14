import { EventType, ResultEvent, RunGameStatus } from 'data/interfaces'

import { calculateScore } from './calculate-score'
import { challenges, event, runGameData } from './tests.fixtures'

describe('calculateScore', () => {
  describe('very simple case', () => {
    const expectedResult = [
      {
        type: EventType.Empty,
        timestamp: '2024-08-12T00:00:00',
        state: {
          status: RunGameStatus.Planned,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: 0, completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: 0, completedChallenges: [] },
          ],
        },
      },
      {
        type: EventType.Start,
        timestamp: '2024-08-12T10:00:00',
        state: {
          status: RunGameStatus.Started,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: 0, completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: 0, completedChallenges: [] },
          ],
        },
      },
      {
        type: EventType.ChallengeCompleted,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 100,
              rank: 1,
              bingos: 0,
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: 0, completedChallenges: [] },
          ],
        },
      },
      {
        type: EventType.ChallengeCompleted,
        timestamp: '2024-08-12T12:00:00',
        team: 'team-a',
        challenge: 'challenge-2',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 200,
              rank: 1,
              bingos: 1,
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: 0, completedChallenges: [] },
          ],
        },
      },
      {
        type: EventType.Finish,
        timestamp: '2024-08-12T13:00:00',
        state: {
          status: RunGameStatus.Finished,
          teams: [
            {
              team: 'team-a',
              score: 200,
              rank: 1,
              bingos: 1,
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: 0, completedChallenges: [] },
          ],
        },
      },
    ] as ResultEvent[]

    it('should return ResultEventArray', () => {
      expect(
        calculateScore(
          runGameData({
            events: [
              event({ type: EventType.Start, timestamp: '2024-08-12T10:00:00' }),
              event({
                type: EventType.ChallengeCompleted,
                timestamp: '2024-08-12T11:00:00',
                team: 'team-a',
                challenge: 'challenge-1',
              }),
              event({
                type: EventType.ChallengeCompleted,
                timestamp: '2024-08-12T12:00:00',
                team: 'team-a',
                challenge: 'challenge-2',
              }),
              event({ type: EventType.Finish, timestamp: '2024-08-12T13:00:00' }),
            ],
          }),

          challenges(),
        ),
      ).toStrictEqual(expectedResult)
    })

    it('should work for unsorted events array', () => {
      expect(
        calculateScore(
          runGameData({
            events: [
              event({
                type: EventType.ChallengeCompleted,
                timestamp: '2024-08-12T11:00:00',
                team: 'team-a',
                challenge: 'challenge-1',
              }),
              event({
                type: EventType.ChallengeCompleted,
                timestamp: '2024-08-12T12:00:00',
                team: 'team-a',
                challenge: 'challenge-2',
              }),
              event({ type: EventType.Finish, timestamp: '2024-08-12T13:00:00' }),
              event({ type: EventType.Start, timestamp: '2024-08-12T10:00:00' }),
            ],
          }),
          challenges(),
        ),
      ).toStrictEqual(expectedResult)
    })
  })
})
