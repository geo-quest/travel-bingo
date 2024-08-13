import {
  Challenge,
  Event,
  EventType,
  ResultEvent,
  RunGameData,
  RunGameState,
  RunGameStatus,
} from '../data/interfaces'
import {
  calculateScore,
  defineInitialState,
  handleChallengeCompleted,
  handleEvent,
  handleFinish,
  handleStart,
  validateStartAndFinishEvents,
} from './calculate-score'

const runGameData = (overrides?: Partial<RunGameData>): RunGameData => {
  return {
    name: { en: 'game-1' },
    date: '2024-08-12T00:00:00',
    teams: { 'team-a': { en: 'Team A' }, 'team-b': { en: 'Team B' } },
    events: [],
    ...overrides,
  } as RunGameData
}

const event = (overrides?: Partial<Event>): Event => {
  return {
    type: EventType.ChallengeCompleted,
    timestamp: '2024-08-12T10:00:00',
    ...overrides,
  } as Event
}

const challenges = (): Challenge[][] => {
  return [
    [
      { key: 'challenge-1', challenge: { en: 'Challenge 1' }, points: 100 },
      { key: 'challenge-2', challenge: { en: 'Challenge 2' }, points: 100 },
    ],
    [
      { key: 'challenge-3', challenge: { en: 'Challenge 3' }, points: 100 },
      { key: 'challenge-4', challenge: { en: 'Challenge 4' }, points: 100 },
    ],
  ] as Challenge[][]
}

const state = (overrides?: Partial<RunGameState>): RunGameState => {
  return {
    status: RunGameStatus.Started,
    teams: [
      { team: 'team-a', rank: 0, score: 0, bingos: 0, completedChallenges: [] },
      { team: 'team-b', rank: 0, score: 0, bingos: 0, completedChallenges: [] },
    ],
    ...overrides,
  } as RunGameState
}

describe('calculate-score.ts', () => {
  describe('defineInitialState', () => {
    it('should return a planned state', () => {
      expect(defineInitialState(runGameData())).toStrictEqual({
        status: RunGameStatus.Planned,
        teams: [
          { team: 'team-a', score: 0, rank: 0, bingos: 0, completedChallenges: [] },
          { team: 'team-b', score: 0, rank: 0, bingos: 0, completedChallenges: [] },
        ],
      } as RunGameState)
    })
  })

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
              { team: 'team-a', score: 0, rank: 0, bingos: 0, completedChallenges: [] },
              { team: 'team-b', score: 0, rank: 0, bingos: 0, completedChallenges: [] },
            ],
          },
        },
      ] as ResultEvent[])
    })
  })

  describe('handleFinish', () => {
    it('should throw an error if state is not started', () => {
      expect(() =>
        handleFinish(event({ type: EventType.Finish }), state({ status: RunGameStatus.Planned })),
      ).toThrow('invalid state for finish event')
    })

    it('should return a final state', () => {
      expect(handleFinish(event({ type: EventType.Finish }), state())).toStrictEqual([
        {
          type: EventType.Finish,
          timestamp: '2024-08-12T10:00:00',
          state: {
            status: RunGameStatus.Finished,
            teams: [
              { team: 'team-a', score: 0, rank: 0, bingos: 0, completedChallenges: [] },
              { team: 'team-b', score: 0, rank: 0, bingos: 0, completedChallenges: [] },
            ],
          },
        },
      ] as ResultEvent[])
    })
  })

  describe('handleChallengeCompleted', () => {
    it('should throw an error if "team" is not defined', () => {
      expect(() =>
        handleChallengeCompleted(event({ challenge: 'challenge-1' }), state(), challenges()),
      ).toThrow('"team" must be defined')
    })

    it('should throw an error if "challenge" is not defined', () => {
      expect(() =>
        handleChallengeCompleted(event({ team: 'team-a' }), state(), challenges()),
      ).toThrow('"challenge" must be defined')
    })

    it('should throw an error if "team" is invalid', () => {
      expect(() =>
        handleChallengeCompleted(
          event({ challenge: 'challenge-1', team: 'team-c' }),
          state(),
          challenges(),
        ),
      ).toThrow('team "team-c" not found')
    })

    it('should throw an error if "challenge" is invalid', () => {
      expect(() =>
        handleChallengeCompleted(
          event({ challenge: 'challenge-5', team: 'team-a' }),
          state(),
          challenges(),
        ),
      ).toThrow('challenge "challenge-5" not found')
    })

    it('should throw an error if state is not started', () => {
      expect(() =>
        handleChallengeCompleted(
          event({ challenge: 'challenge-1', team: 'team-a' }),
          state({ status: RunGameStatus.Planned }),
          challenges(),
        ),
      ).toThrow('invalid state for a challengeCompleted event')
    })

    it('should return calculated ResultEvent', () => {
      expect(
        handleChallengeCompleted(
          event({ challenge: 'challenge-1', team: 'team-a' }),
          state(),
          challenges(),
        ),
      ).toStrictEqual([
        {
          type: EventType.ChallengeCompleted,
          timestamp: '2024-08-12T10:00:00',
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
      ] as ResultEvent[])
    })
  })

  describe('handleEvent', () => {
    it('should throw error for invalid type', () => {
      expect(() => handleEvent(event({ type: undefined }), state(), challenges())).toThrowError(
        'invalid event type: undefined.',
      )
    })
  })

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
})
