import { EventType, ResultEvent, ResultEventType, RunGameStatus } from 'data/interfaces'

import { calculateScore } from './calculate-score'
import { challenges, event, rules, runGameData } from './tests.fixtures'

describe('calculateScore', () => {
  describe('simple cases', () => {
    it('should return ResultEventArray', () => {
      const result = calculateScore(
        runGameData({
          events: [
            event({ type: EventType.Start, timestamp: '2024-08-12T10:00:00' }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T11:00:00',
              team: 'team-a',
              challenge: 'challenge-1',
              place: 'place-a',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T12:00:00',
              team: 'team-a',
              challenge: 'challenge-2',
              place: 'place-a',
            }),
            event({ type: EventType.Finish, timestamp: '2024-08-12T13:00:00' }),
          ],
        }),
        challenges(),
        rules(),
      )
      expect(result.length).toBe(6)
      expect(result[0]).toStrictEqual({
        type: ResultEventType.Empty,
        timestamp: '2024-08-12T00:00:00',
        state: {
          status: RunGameStatus.Planned,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[1]).toStrictEqual({
        type: ResultEventType.Start,
        timestamp: '2024-08-12T10:00:00',
        state: {
          status: RunGameStatus.Started,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[2]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        place: 'place-a',
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
      })
      expect(result[3]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-12T12:00:00',
        team: 'team-a',
        challenge: 'challenge-2',
        place: 'place-a',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 200,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[4]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-2',
        timestamp: '2024-08-12T12:00:00',
        newBingo: 'row-0',
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
      })
      expect(result[5]).toStrictEqual({
        type: ResultEventType.Finish,
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
      })
    })

    it('should work for unsorted events array', () => {
      const result = calculateScore(
        runGameData({
          events: [
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T11:00:00',
              team: 'team-a',
              challenge: 'challenge-1',
              place: 'place-a',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T12:00:00',
              team: 'team-a',
              challenge: 'challenge-2',
              place: 'place-a',
            }),
            event({ type: EventType.Finish, timestamp: '2024-08-12T13:00:00' }),
            event({ type: EventType.Start, timestamp: '2024-08-12T10:00:00' }),
          ],
        }),
        challenges(),
        rules(),
      )

      expect(result.length).toBe(6)
      expect(result[0].type).toBe(ResultEventType.Empty)
      expect(result[1].type).toBe(ResultEventType.Start)
      expect(result[5].type).toBe(ResultEventType.Finish)
    })

    it('should handle full board solved', () => {
      const result = calculateScore(
        runGameData({
          events: [
            event({ type: EventType.Start, timestamp: '2024-08-12T10:00:00' }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T11:00:00',
              team: 'team-a',
              challenge: 'challenge-1',
              place: 'place-a',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T12:00:00',
              team: 'team-a',
              challenge: 'challenge-2',
              place: 'place-a',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T13:00:00',
              team: 'team-a',
              challenge: 'challenge-3',
              place: 'place-a',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T14:00:00',
              team: 'team-a',
              challenge: 'challenge-4',
              place: 'place-a',
            }),
            event({ type: EventType.Finish, timestamp: '2024-08-12T15:00:00' }),
          ],
        }),
        challenges(),
        rules(),
      )

      expect(result.length).toBe(14)

      expect(result[0]).toStrictEqual({
        type: ResultEventType.Empty,
        timestamp: '2024-08-12T00:00:00',
        state: {
          status: RunGameStatus.Planned,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[1]).toStrictEqual({
        type: EventType.Start,
        timestamp: '2024-08-12T10:00:00',
        state: {
          status: RunGameStatus.Started,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[2]).toStrictEqual({
        type: EventType.ChallengeCompleted,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        place: 'place-a',
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
      })
      expect(result[3]).toStrictEqual({
        type: EventType.ChallengeCompleted,
        timestamp: '2024-08-12T12:00:00',
        team: 'team-a',
        challenge: 'challenge-2',
        place: 'place-a',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 200,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[4]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-2',
        timestamp: '2024-08-12T12:00:00',
        newBingo: 'row-0',
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
      })
      expect(result[5]).toStrictEqual({
        type: EventType.ChallengeCompleted,
        timestamp: '2024-08-12T13:00:00',
        team: 'team-a',
        challenge: 'challenge-3',
        place: 'place-a',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 320,
              rank: 1,
              bingos: ['row-0'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[6]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-3',
        timestamp: '2024-08-12T13:00:00',
        newBingo: 'col-0',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 340,
              rank: 1,
              bingos: ['row-0', 'col-0'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[7]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-3',
        timestamp: '2024-08-12T13:00:00',
        newBingo: 'secondary-diagonal',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 360,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[8]).toStrictEqual({
        type: EventType.ChallengeCompleted,
        timestamp: '2024-08-12T14:00:00',
        team: 'team-a',
        challenge: 'challenge-4',
        place: 'place-a',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 460,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[9]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-4',
        timestamp: '2024-08-12T14:00:00',
        newBingo: 'row-1',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 480,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal', 'row-1'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[10]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-4',
        timestamp: '2024-08-12T14:00:00',
        newBingo: 'col-1',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 500,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal', 'row-1', 'col-1'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[11]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-4',
        timestamp: '2024-08-12T14:00:00',
        newBingo: 'main-diagonal',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 520,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal', 'row-1', 'col-1', 'main-diagonal'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[12]).toStrictEqual({
        type: ResultEventType.FullBoard,
        team: 'team-a',
        challenge: 'challenge-4',
        timestamp: '2024-08-12T14:00:00',
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 520,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal', 'row-1', 'col-1', 'main-diagonal'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[13]).toStrictEqual({
        type: EventType.Finish,
        timestamp: '2024-08-12T15:00:00',
        state: {
          status: RunGameStatus.Finished,
          teams: [
            {
              team: 'team-a',
              score: 520,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal', 'row-1', 'col-1', 'main-diagonal'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
    })
  })

  describe('curse', () => {
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
              place: 'place-a',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T12:00:00',
              team: 'team-b',
              challenge: 'challenge-2',
              place: 'place-a',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-12T13:00:00',
              team: 'team-b',
              challenge: 'challenge-3',
              place: 'place-a',
            }),
            event({ type: EventType.Finish, timestamp: '2024-08-12T13:00:00' }),
          ],
        }),
        challenges({ useCurse: true }),
        rules(),
      )

      expect(results.length).toBe(8)
      expect(results[0]).toStrictEqual({
        type: ResultEventType.Empty,
        timestamp: '2024-08-12T00:00:00',
        state: {
          status: RunGameStatus.Planned,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[1]).toStrictEqual({
        type: ResultEventType.Start,
        timestamp: '2024-08-12T10:00:00',
        state: {
          status: RunGameStatus.Started,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[2]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        cursedTeam: 'team-b',
        place: 'place-a',
        points: 0,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 0,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[3]).toStrictEqual({
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
              score: 0,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
            {
              team: 'team-b',
              curseMultiplier: 0.5,
              score: 0,
              rank: 2,
              bingos: [],
              completedChallenges: [],
            },
          ],
        },
      })
      expect(results[4]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-12T12:00:00',
        team: 'team-b',
        challenge: 'challenge-2',
        place: 'place-a',
        points: 50,
        curseApplied: true,
        curseMultiplier: 0.5,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-b',
              score: 50,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-2'],
            },
            {
              team: 'team-a',
              score: 0,
              rank: 2,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
          ],
        },
      })
      expect(results[5]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-12T13:00:00',
        team: 'team-b',
        challenge: 'challenge-3',
        place: 'place-a',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-b',
              score: 150,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-2', 'challenge-3'],
            },
            {
              team: 'team-a',
              score: 0,
              rank: 2,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
          ],
        },
      })
      expect(results[6]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-b',
        challenge: 'challenge-3',
        timestamp: '2024-08-12T13:00:00',
        newBingo: 'secondary-diagonal',
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
              score: 0,
              rank: 2,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
          ],
        },
      })
      expect(results[7]).toStrictEqual({
        type: ResultEventType.Finish,
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
              score: 0,
              rank: 2,
              bingos: [],
              completedChallenges: ['challenge-1'],
            },
          ],
        },
      })
    })
  })

  describe('boost', () => {
    it('should calculate a boost properly', () => {
      const results = calculateScore(
        runGameData({
          events: [
            event({ type: EventType.Start, timestamp: '2024-08-15T10:00' }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-15T11:00',
              team: 'team-a',
              challenge: 'challenge-3',
              place: 'place-a',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-15T12:00',
              team: 'team-a',
              challenge: 'challenge-4',
              place: 'place-a',
            }),
          ],
        }),
        challenges({ useBoost: true }),
        rules(),
      )

      expect(results.length).toBe(6)
      expect(results[0]).toStrictEqual({
        type: ResultEventType.Empty,
        timestamp: '2024-08-12T00:00:00',
        state: {
          status: RunGameStatus.Planned,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[1]).toStrictEqual({
        type: ResultEventType.Start,
        timestamp: '2024-08-15T10:00',
        state: {
          status: RunGameStatus.Started,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[2]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-15T11:00',
        team: 'team-a',
        challenge: 'challenge-3',
        place: 'place-a',
        points: 0,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 0,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-3'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[3]).toStrictEqual({
        type: ResultEventType.Boost,
        timestamp: '2024-08-15T11:00',
        team: 'team-a',
        challenge: 'challenge-3',
        boostMultiplier: 2,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 0,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-3'],
              boostMultiplier: 2,
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[4]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-15T12:00',
        team: 'team-a',
        challenge: 'challenge-4',
        place: 'place-a',
        points: 200,
        boostApplied: true,
        boostMultiplier: 2,
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 200,
              rank: 1,
              bingos: [],
              completedChallenges: ['challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[5]).toStrictEqual({
        type: ResultEventType.Bingo,
        timestamp: '2024-08-15T12:00',
        team: 'team-a',
        challenge: 'challenge-4',
        points: 20,
        newBingo: 'row-1',
        state: {
          status: RunGameStatus.Started,
          teams: [
            {
              team: 'team-a',
              score: 220,
              rank: 1,
              bingos: ['row-1'],
              completedChallenges: ['challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], completedChallenges: [] },
          ],
        },
      })
    })
  })

  describe('edge cases', () => {
    it.todo('curse followed by boost')
    it.todo('boost followed by curse')
    it.todo('curse followed by curse')
    it.todo('boost followed by boost')
  })
})
