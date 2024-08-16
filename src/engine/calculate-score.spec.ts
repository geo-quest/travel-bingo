import { EventType, ResultEventType, RunGameStatus } from 'data/interfaces'

import { calculateScore } from './calculate-score'
import { challenges, event, rules, runGameData } from './tests.fixtures'

describe('calculateScore', () => {
  describe('simple cases', () => {
    it('should handle a basic case', () => {
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

      expect(result.length).toBe(8)

      // empty >> start >> completed >> first-challenge >> new-place >> completed >> bingo >> finish
      expect(result[0].type).toBe(ResultEventType.Empty)
      expect(result[1].type).toBe(ResultEventType.Start)
      expect(result[2].type).toBe(ResultEventType.ChallengeCompleted)
      expect(result[3].type).toBe(ResultEventType.FirstChallenge)
      expect(result[4].type).toBe(ResultEventType.NewPlace)
      expect(result[5].type).toBe(ResultEventType.ChallengeCompleted)
      expect(result[6].type).toBe(ResultEventType.Bingo)
      expect(result[7].type).toBe(ResultEventType.Finish)

      expect(result[0]).toStrictEqual({
        type: ResultEventType.Empty,
        timestamp: '2024-08-12T00:00:00',
        state: {
          status: RunGameStatus.Planned,
          firstChallengeCompleted: false,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[1]).toStrictEqual({
        type: ResultEventType.Start,
        timestamp: '2024-08-12T10:00:00',
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: false,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
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
          firstChallengeCompleted: false,
          teams: [
            {
              team: 'team-a',
              score: 100,
              rank: 1,
              bingos: [],
              places: [],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[3]).toStrictEqual({
        type: ResultEventType.FirstChallenge,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        points: 30,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 130,
              rank: 1,
              bingos: [],
              places: [],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[4]).toStrictEqual({
        type: ResultEventType.NewPlace,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        newPlace: 'place-a',
        points: 10,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 140,
              rank: 1,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[5]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-12T12:00:00',
        team: 'team-a',
        challenge: 'challenge-2',
        place: 'place-a',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 240,
              rank: 1,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[6]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-2',
        timestamp: '2024-08-12T12:00:00',
        newBingo: 'row-0',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 260,
              rank: 1,
              bingos: ['row-0'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[7]).toStrictEqual({
        type: ResultEventType.Finish,
        timestamp: '2024-08-12T13:00:00',
        state: {
          status: RunGameStatus.Finished,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 260,
              rank: 1,
              bingos: ['row-0'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
    })

    it('should handle unsorted events array', () => {
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

      expect(result.length).toBe(8)
      expect(result[0].type).toBe(ResultEventType.Empty)
      expect(result[1].type).toBe(ResultEventType.Start)
      expect(result[7].type).toBe(ResultEventType.Finish)
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

      expect(result.length).toBe(16)

      expect(result[0]).toStrictEqual({
        type: ResultEventType.Empty,
        timestamp: '2024-08-12T00:00:00',
        state: {
          status: RunGameStatus.Planned,
          firstChallengeCompleted: false,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[1]).toStrictEqual({
        type: ResultEventType.Start,
        timestamp: '2024-08-12T10:00:00',
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: false,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
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
          firstChallengeCompleted: false,
          teams: [
            {
              team: 'team-a',
              score: 100,
              rank: 1,
              bingos: [],
              places: [],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[3]).toStrictEqual({
        type: ResultEventType.FirstChallenge,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        points: 30,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 130,
              rank: 1,
              bingos: [],
              places: [],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[4]).toStrictEqual({
        type: ResultEventType.NewPlace,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        newPlace: 'place-a',
        points: 10,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 140,
              rank: 1,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[5]).toStrictEqual({
        type: EventType.ChallengeCompleted,
        timestamp: '2024-08-12T12:00:00',
        team: 'team-a',
        challenge: 'challenge-2',
        place: 'place-a',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 240,
              rank: 1,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            {
              team: 'team-b',
              score: 0,
              rank: 2,
              bingos: [],
              places: [],
              completedChallenges: [],
            },
          ],
        },
      })
      expect(result[6]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-2',
        timestamp: '2024-08-12T12:00:00',
        newBingo: 'row-0',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 260,
              rank: 1,
              bingos: ['row-0'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[7]).toStrictEqual({
        type: EventType.ChallengeCompleted,
        timestamp: '2024-08-12T13:00:00',
        team: 'team-a',
        challenge: 'challenge-3',
        place: 'place-a',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 360,
              rank: 1,
              bingos: ['row-0'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[8]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-3',
        timestamp: '2024-08-12T13:00:00',
        newBingo: 'col-0',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 380,
              rank: 1,
              bingos: ['row-0', 'col-0'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[9]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-3',
        timestamp: '2024-08-12T13:00:00',
        newBingo: 'secondary-diagonal',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 400,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[10]).toStrictEqual({
        type: EventType.ChallengeCompleted,
        timestamp: '2024-08-12T14:00:00',
        team: 'team-a',
        challenge: 'challenge-4',
        place: 'place-a',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 500,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[11]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-4',
        timestamp: '2024-08-12T14:00:00',
        newBingo: 'row-1',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 520,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal', 'row-1'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[12]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-4',
        timestamp: '2024-08-12T14:00:00',
        newBingo: 'col-1',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 540,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal', 'row-1', 'col-1'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[13]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-a',
        challenge: 'challenge-4',
        timestamp: '2024-08-12T14:00:00',
        newBingo: 'main-diagonal',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 560,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal', 'row-1', 'col-1', 'main-diagonal'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[14]).toStrictEqual({
        type: ResultEventType.FullBoard,
        team: 'team-a',
        challenge: 'challenge-4',
        timestamp: '2024-08-12T14:00:00',
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 560,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal', 'row-1', 'col-1', 'main-diagonal'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(result[15]).toStrictEqual({
        type: EventType.Finish,
        timestamp: '2024-08-12T15:00:00',
        state: {
          status: RunGameStatus.Finished,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 560,
              rank: 1,
              bingos: ['row-0', 'col-0', 'secondary-diagonal', 'row-1', 'col-1', 'main-diagonal'],
              places: ['place-a'],
              completedChallenges: ['challenge-1', 'challenge-2', 'challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
    })

    it('should handle multiple places', () => {
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
              place: 'place-b',
            }),
            event({ type: EventType.Finish, timestamp: '2024-08-12T13:00:00' }),
          ],
        }),
        challenges(),
        rules(),
      )

      expect(result.length).toBe(9)

      expect(result[4].type).toBe(ResultEventType.NewPlace)
      expect(result[4].newPlace).toBe('place-a')

      expect(result[6].type).toBe(ResultEventType.NewPlace)
      expect(result[6].newPlace).toBe('place-b')

      expect(result[8]).toStrictEqual({
        type: ResultEventType.Finish,
        timestamp: '2024-08-12T13:00:00',
        state: {
          status: RunGameStatus.Finished,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 270,
              rank: 1,
              bingos: ['row-0'],
              places: ['place-a', 'place-b'],
              completedChallenges: ['challenge-1', 'challenge-2'],
            },
            {
              team: 'team-b',
              score: 0,
              rank: 2,
              bingos: [],
              places: [],
              completedChallenges: [],
            },
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
        challenges({ curseChallenge1: true }),
        rules(),
      )

      expect(results.length).toBe(11)
      expect(results[0]).toStrictEqual({
        type: ResultEventType.Empty,
        timestamp: '2024-08-12T00:00:00',
        state: {
          status: RunGameStatus.Planned,
          firstChallengeCompleted: false,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[1]).toStrictEqual({
        type: ResultEventType.Start,
        timestamp: '2024-08-12T10:00:00',
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: false,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
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
          firstChallengeCompleted: false,
          teams: [
            {
              team: 'team-a',
              score: 0,
              rank: 1,
              bingos: [],
              places: [],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[3]).toStrictEqual({
        type: ResultEventType.FirstChallenge,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        points: 30,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 30,
              rank: 1,
              bingos: [],
              places: [],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[4]).toStrictEqual({
        type: ResultEventType.NewPlace,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        newPlace: 'place-a',
        points: 10,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 40,
              rank: 1,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-1'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[5]).toStrictEqual({
        type: ResultEventType.Curse,
        timestamp: '2024-08-12T11:00:00',
        team: 'team-a',
        challenge: 'challenge-1',
        cursedTeam: 'team-b',
        curseMultiplier: 0.5,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 40,
              rank: 1,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-1'],
            },
            {
              team: 'team-b',
              curseMultiplier: 0.5,
              score: 0,
              rank: 2,
              bingos: [],
              places: [],
              completedChallenges: [],
            },
          ],
        },
      })
      expect(results[6]).toStrictEqual({
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
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-b',
              score: 50,
              rank: 1,
              bingos: [],
              places: [],
              completedChallenges: ['challenge-2'],
            },
            {
              team: 'team-a',
              score: 40,
              rank: 2,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-1'],
            },
          ],
        },
      })
      expect(results[7]).toStrictEqual({
        type: ResultEventType.NewPlace,
        timestamp: '2024-08-12T12:00:00',
        team: 'team-b',
        challenge: 'challenge-2',
        newPlace: 'place-a',
        points: 10,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-b',
              score: 60,
              rank: 1,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-2'],
            },
            {
              team: 'team-a',
              score: 40,
              rank: 2,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-1'],
            },
          ],
        },
      })
      expect(results[8]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-12T13:00:00',
        team: 'team-b',
        challenge: 'challenge-3',
        place: 'place-a',
        points: 100,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-b',
              score: 160,
              rank: 1,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-2', 'challenge-3'],
            },
            {
              team: 'team-a',
              score: 40,
              rank: 2,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-1'],
            },
          ],
        },
      })
      expect(results[9]).toStrictEqual({
        type: ResultEventType.Bingo,
        team: 'team-b',
        challenge: 'challenge-3',
        timestamp: '2024-08-12T13:00:00',
        newBingo: 'secondary-diagonal',
        points: 20,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-b',
              score: 180,
              rank: 1,
              bingos: ['secondary-diagonal'],
              places: ['place-a'],
              completedChallenges: ['challenge-2', 'challenge-3'],
            },
            {
              team: 'team-a',
              score: 40,
              rank: 2,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-1'],
            },
          ],
        },
      })
      expect(results[10]).toStrictEqual({
        type: ResultEventType.Finish,
        timestamp: '2024-08-12T13:00:00',
        state: {
          status: RunGameStatus.Finished,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-b',
              score: 180,
              rank: 1,
              bingos: ['secondary-diagonal'],
              places: ['place-a'],
              completedChallenges: ['challenge-2', 'challenge-3'],
            },
            {
              team: 'team-a',
              score: 40,
              rank: 2,
              bingos: [],
              places: ['place-a'],
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
        challenges({ boostChallenge3: true }),
        rules(),
      )

      expect(results.length).toBe(8)
      expect(results[0]).toStrictEqual({
        type: ResultEventType.Empty,
        timestamp: '2024-08-12T00:00:00',
        state: {
          status: RunGameStatus.Planned,
          firstChallengeCompleted: false,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[1]).toStrictEqual({
        type: ResultEventType.Start,
        timestamp: '2024-08-15T10:00',
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: false,
          teams: [
            { team: 'team-a', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
            { team: 'team-b', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
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
          firstChallengeCompleted: false,
          teams: [
            {
              team: 'team-a',
              score: 0,
              rank: 1,
              bingos: [],
              places: [],
              completedChallenges: ['challenge-3'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[3]).toStrictEqual({
        type: ResultEventType.FirstChallenge,
        timestamp: '2024-08-15T11:00',
        team: 'team-a',
        challenge: 'challenge-3',
        points: 30,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 30,
              rank: 1,
              bingos: [],
              places: [],
              completedChallenges: ['challenge-3'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[4]).toStrictEqual({
        type: ResultEventType.NewPlace,
        timestamp: '2024-08-15T11:00',
        team: 'team-a',
        challenge: 'challenge-3',
        newPlace: 'place-a',
        points: 10,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 40,
              rank: 1,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-3'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[5]).toStrictEqual({
        type: ResultEventType.Boost,
        timestamp: '2024-08-15T11:00',
        team: 'team-a',
        challenge: 'challenge-3',
        boostMultiplier: 2,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 40,
              rank: 1,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-3'],
              boostMultiplier: 2,
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[6]).toStrictEqual({
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
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 240,
              rank: 1,
              bingos: [],
              places: ['place-a'],
              completedChallenges: ['challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
      expect(results[7]).toStrictEqual({
        type: ResultEventType.Bingo,
        timestamp: '2024-08-15T12:00',
        team: 'team-a',
        challenge: 'challenge-4',
        points: 20,
        newBingo: 'row-1',
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              team: 'team-a',
              score: 260,
              rank: 1,
              bingos: ['row-1'],
              places: ['place-a'],
              completedChallenges: ['challenge-3', 'challenge-4'],
            },
            { team: 'team-b', score: 0, rank: 2, bingos: [], places: [], completedChallenges: [] },
          ],
        },
      })
    })
  })

  describe('edge cases', () => {
    it('two boosts in a row', () => {
      const r = calculateScore(
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
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-15T13:00',
              team: 'team-a',
              challenge: 'challenge-1',
              place: 'place-a',
            }),
          ],
        }),
        challenges({ boostChallenge3: true, boostChallenge4: true }),
        rules(),
      )

      expect(r.length).toBe(12)

      // validate sequence of events
      expect(r.map(r => r.type)).toStrictEqual([
        ResultEventType.Empty,
        ResultEventType.Start,
        ResultEventType.ChallengeCompleted, // challenge-3
        ResultEventType.FirstChallenge,
        ResultEventType.NewPlace,
        ResultEventType.Boost,
        ResultEventType.ChallengeCompleted, // challenge-4
        ResultEventType.Bingo, // bingo, row-1
        ResultEventType.Boost,
        ResultEventType.ChallengeCompleted, // challenge-1
        ResultEventType.Bingo, // bingo, col-0
        ResultEventType.Bingo, // bingo, main-diagonal
      ])

      // challenge-4 must not be boosted
      expect(r[6]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-15T12:00',
        team: 'team-a',
        challenge: 'challenge-4',
        place: 'place-a',
        points: 0,
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              bingos: [],
              boostMultiplier: 2, // from previous boost
              completedChallenges: ['challenge-3', 'challenge-4'],
              places: ['place-a'],
              rank: 1,
              score: 40, // 10 from new-place, 30 from first-challenge
              team: 'team-a',
            },
            {
              bingos: [],
              completedChallenges: [],
              places: [],
              rank: 2,
              score: 0,
              team: 'team-b',
            },
          ],
        },
      })

      // challenge-1 must be twice boosted
      expect(r[9]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-15T13:00',
        team: 'team-a',
        challenge: 'challenge-1',
        place: 'place-a',
        boostApplied: true,
        boostMultiplier: 6, // 100 * 2 * 3
        points: 600, // 100 * 6
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              bingos: ['row-1'],
              completedChallenges: ['challenge-3', 'challenge-4', 'challenge-1'],
              places: ['place-a'],
              rank: 1,
              score: 660,
              team: 'team-a',
            },
            {
              bingos: [],
              completedChallenges: [],
              places: [],
              rank: 2,
              score: 0,
              team: 'team-b',
            },
          ],
        },
      })
    })

    it('two curses in a row', () => {
      const r = calculateScore(
        runGameData({
          events: [
            event({ type: EventType.Start, timestamp: '2024-08-15T10:00' }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-15T11:00',
              team: 'team-a',
              challenge: 'challenge-1',
              place: 'place-a',
              cursedTeam: 'team-b',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-15T12:00',
              team: 'team-a',
              challenge: 'challenge-2',
              place: 'place-a',
              cursedTeam: 'team-b',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-15T13:00',
              team: 'team-b',
              challenge: 'challenge-3',
              place: 'place-a',
            }),
          ],
        }),
        challenges({ curseChallenge1: true, curseChallenge2: true }),
        rules(),
      )

      expect(r.length).toBe(11)

      // validate sequence of events
      expect(r.map(r => r.type)).toStrictEqual([
        ResultEventType.Empty,
        ResultEventType.Start,
        ResultEventType.ChallengeCompleted, // challenge-1 by team-a
        ResultEventType.FirstChallenge,
        ResultEventType.NewPlace, // new place by team-a
        ResultEventType.Curse,
        ResultEventType.ChallengeCompleted, // challenge-2 by team-a
        ResultEventType.Bingo, // bingo, row-1
        ResultEventType.Curse,
        ResultEventType.ChallengeCompleted, // challenge-3 by team-b
        ResultEventType.NewPlace, // new place by team-b
      ])

      // challenge-3 by team-b must be cursed twice
      expect(r[9]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-15T13:00',
        team: 'team-b',
        challenge: 'challenge-3',
        place: 'place-a',
        curseApplied: true,
        curseMultiplier: 0.45,
        points: 45, // 100 * 0.5 * 0.9
        state: {
          status: RunGameStatus.Started,
          firstChallengeCompleted: true,
          teams: [
            {
              bingos: ['row-0'],
              completedChallenges: ['challenge-1', 'challenge-2'],
              places: ['place-a'],
              rank: 1,
              score: 60, // 30 from firstChallenge + 10 from new-place + 20 from bingo
              team: 'team-a',
            },
            {
              bingos: [],
              completedChallenges: ['challenge-3'],
              places: [],
              rank: 2,
              score: 45,
              team: 'team-b',
            },
          ],
        },
      })
    })

    it('boost and then curse', () => {
      const r = calculateScore(
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
              team: 'team-b',
              challenge: 'challenge-2',
              place: 'place-a',
              cursedTeam: 'team-a',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-15T13:00',
              team: 'team-a',
              challenge: 'challenge-1',
              place: 'place-a',
            }),
          ],
        }),
        challenges({ curseChallenge2: true, boostChallenge3: true }),
        rules(),
      )

      expect(r.length).toBe(11)

      // validate sequence of events
      expect(r.map(r => r.type)).toStrictEqual([
        ResultEventType.Empty,
        ResultEventType.Start,
        ResultEventType.ChallengeCompleted, // challenge-3 by team-a
        ResultEventType.FirstChallenge,
        ResultEventType.NewPlace, // new place by team-a
        ResultEventType.Boost,
        ResultEventType.ChallengeCompleted, // challenge-2 by team-b
        ResultEventType.NewPlace, // new place by team-b
        ResultEventType.Curse,
        ResultEventType.ChallengeCompleted, // challenge-1 by team-a
        ResultEventType.Bingo, // bingo on main-diagonal by team-a
      ])

      // challenge-2 by team-a must be boosted and cursed
      expect(r[9]).toStrictEqual({
        type: ResultEventType.ChallengeCompleted,
        timestamp: '2024-08-15T13:00',
        team: 'team-a',
        challenge: 'challenge-1',
        place: 'place-a',
        boostApplied: true,
        boostMultiplier: 2,
        curseApplied: true,
        curseMultiplier: 0.9,
        points: 180, // 100 * 2 * 0.9,
        state: {
          firstChallengeCompleted: true,
          status: RunGameStatus.Started,
          teams: [
            {
              bingos: [],
              completedChallenges: ['challenge-3', 'challenge-1'],
              places: ['place-a'],
              rank: 1,
              score: 220, // 180 from this challenge + 30 from first-challenge + 10 from new-place
              team: 'team-a',
            },
            {
              bingos: [],
              completedChallenges: ['challenge-2'],
              places: ['place-a'],
              rank: 2,
              score: 10, // 10 from new-place
              team: 'team-b',
            },
          ],
        },
      })
    })

    it('curse and then boost', () => {
      const r = calculateScore(
        runGameData({
          events: [
            event({ type: EventType.Start, timestamp: '2024-08-15T10:00' }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-15T11:00',
              team: 'team-a',
              challenge: 'challenge-2',
              cursedTeam: 'team-b',
              place: 'place-a',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-15T12:00',
              team: 'team-b',
              challenge: 'challenge-3',
              place: 'place-a',
            }),
            event({
              type: EventType.ChallengeCompleted,
              timestamp: '2024-08-15T13:00',
              team: 'team-b',
              challenge: 'challenge-4',
              place: 'place-a',
            }),
          ],
        }),
        challenges({ curseChallenge2: true, boostChallenge3: true }),
        rules(),
      )

      expect(r.length).toBe(11)

      // validate sequence of events
      expect(r.map(r => r.type)).toStrictEqual([
        ResultEventType.Empty,
        ResultEventType.Start,
        ResultEventType.ChallengeCompleted, // challenge-2 by team-a
        ResultEventType.FirstChallenge,
        ResultEventType.NewPlace, // new place by team-a
        ResultEventType.Curse,
        ResultEventType.ChallengeCompleted, // challenge-3 by team-b
        ResultEventType.NewPlace, // new place by team-b
        ResultEventType.Boost,
        ResultEventType.ChallengeCompleted, // challenge-4 by team-b
        ResultEventType.Bingo, // bingo on row-1 by team-b
      ])

      // challenge-3 by team-b must no be cursed
      expect(r[6]).toStrictEqual({
        challenge: 'challenge-3',
        place: 'place-a',
        points: 0,
        state: {
          firstChallengeCompleted: true,
          status: RunGameStatus.Started,
          teams: [
            {
              bingos: [],
              completedChallenges: ['challenge-2'],
              places: ['place-a'],
              rank: 1,
              score: 40,
              team: 'team-a',
            },
            {
              bingos: [],
              completedChallenges: ['challenge-3'],
              curseMultiplier: 0.9,
              places: [],
              rank: 2,
              score: 0,
              team: 'team-b',
            },
          ],
        },
        team: 'team-b',
        timestamp: '2024-08-15T12:00',
        type: ResultEventType.ChallengeCompleted,
      })

      // challenge-4 by team-b must be cursed and boosted
      expect(r[9]).toStrictEqual({
        team: 'team-b',
        timestamp: '2024-08-15T13:00',
        type: ResultEventType.ChallengeCompleted,
        challenge: 'challenge-4',
        place: 'place-a',
        boostApplied: true,
        boostMultiplier: 2,
        curseApplied: true,
        curseMultiplier: 0.9,
        points: 180, // 100 * 2 * 0.9
        state: {
          firstChallengeCompleted: true,
          status: RunGameStatus.Started,
          teams: [
            {
              bingos: [],
              completedChallenges: ['challenge-3', 'challenge-4'],
              places: ['place-a'],
              rank: 1,
              score: 190,
              team: 'team-b',
            },
            {
              bingos: [],
              completedChallenges: ['challenge-2'],
              places: ['place-a'],
              rank: 2,
              score: 40,
              team: 'team-a',
            },
          ],
        },
      })
    })
  })
})
