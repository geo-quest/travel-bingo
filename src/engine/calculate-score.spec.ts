import { EventType, ResultEvent, ResultEventType, RunGameStatus } from 'data/interfaces'

import { calculateScore } from './calculate-score'
import { challenges, challengesWithCurse, event, rules, runGameData } from './tests.fixtures'

describe('calculateScore', () => {
  describe('very simple case', () => {
    const expectedResult = [
      {
        type: ResultEventType.Empty,
        timestamp: '2024-08-12T00:00:00',
        state: {
          status: RunGameStatus.Planned,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      },
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
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
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
              bingos: ['row-0'],
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      },
      {
        type: ResultEventType.Bingo,
        team: 'team-a',
        timestamp: '2024-08-12T12:00:00',
        newBingos: ['row-0'],
        points: 20,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 220,
              rank: 1,
              bingos: ['row-0'],
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
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
              score: 220,
              rank: 1,
              bingos: ['row-0'],
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
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
          rules(),
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
          rules(),
        ),
      ).toStrictEqual(expectedResult)
    })
  })

  describe('curse', () => {
    const expectedResult = [
      {
        type: ResultEventType.Empty,
        timestamp: '2024-08-12T00:00:00',
        state: {
          status: RunGameStatus.Planned,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      },
      {
        type: ResultEventType.Start,
        timestamp: '2024-08-12T10:00:00',
        state: {
          status: RunGameStatus.Started,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      },
      {
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        cursedTeam: 'team-b',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 100,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      },
      {
        type: ResultEventType.Curse,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        cursedTeam: 'team-b',
        curseMultiplier: 0.5,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 100,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
            {
              team: 'team-b',
              cursedMultiplier: 0.5,
              score: 0,
              rank: 2,
              bingos: [],
              completedChallenges: [],
            },
          ],
        },
      },
      {
        type: EventType.ChallengeCompleted,
        timestamp: '2024-08-12T12:00:00',
        team: 'team-b',
        challenge: 'challenge-2',
        points: 100,
        cursedApplied: true,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 100,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
            {
              team: 'team-b',
              score: 50,
              rank: 2,
              bingos: [],
              completedChallenges: ['challenge-2'],
            },
          ],
        },
      },
      {
        type: EventType.ChallengeCompleted,
        timestamp: '2024-08-12T13:00:00',
        team: 'team-b',
        challenge: 'challenge-3',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-b',
              score: 150,
              rank: 1,
              bingos: ['secondary-diagonal'],
              completedChallenges: ['challenge-2', 'challenge-3'],
            },
            {
              team: 'team-a',
              score: 100,
              rank: 2,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
          ],
        },
      },
      {
        type: ResultEventType.Bingo,
        team: 'team-b',
        timestamp: '2024-08-12T13:00:00',
        newBingos: ['secondary-diagonal'],
        points: 20,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-b',
              score: 170,
              rank: 1,
              bingos: ['secondary-diagonal'],
              completedChallenges: ['challenge-2', 'challenge-3'],
            },
            {
              team: 'team-a',
              score: 100,
              rank: 2,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
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
              team: 'team-b',
              score: 170,
              rank: 1,
              bingos: ['secondary-diagonal'],
              completedChallenges: ['challenge-2', 'challenge-3'],
            },
            {
              team: 'team-a',
              score: 100,
              rank: 2,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
          ],
        },
      },
    ] as ResultEvent[]
    it('should calculate a curse challenge properly', () => {
      const results = calculateScore(
        runGameData({
          events: [
            event({ type: EventType.Start, timestamp: '2024-08-12T10:00:00' }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T11:00:00',
              team: 'team-a',
              cursedTeam: 'team-b',
              challenge: 'challenge-1',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T12:00:00',
              team: 'team-b',
              challenge: 'challenge-2',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T13:00:00',
              team: 'team-b',
              challenge: 'challenge-3',
            }),
            event({ type: EventType.Finish, timestamp: '2024-08-12T13:00:00' }),
          ],
        }),
        challengesWithCurse(),
        rules(),
      )

      expect(results.length).toBe(8)
      expect(results[0]).toStrictEqual(expectedResult[0])
      expect(results[1]).toStrictEqual(expectedResult[1])
      expect(results[2]).toStrictEqual(expectedResult[2])
      expect(results[3]).toStrictEqual(expectedResult[3])
      expect(results[4]).toStrictEqual(expectedResult[4])
      expect(results[5]).toStrictEqual(expectedResult[5])
      expect(results[6]).toStrictEqual(expectedResult[6])
    })
  })
})
