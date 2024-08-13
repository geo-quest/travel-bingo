import {
  Challenge,
  Event,
  EventType,
  ResultEvent,
  RunGameData,
  RunGameStatus,
  State,
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
    teams: { 'team-a': { en: 'Team A' }, 'team-b': { en: 'Team B' } },
    name: { en: 'game-1' },
    state: RunGameStatus.Started,
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

const state = (overrides?: Partial<State>): State => {
  return {
    status: RunGameStatus.Started,
    teams: [
      { team: 'team-a', score: 0, solvedChallenges: [] },
      { team: 'team-b', score: 0, solvedChallenges: [] },
    ],
    ...overrides,
  } as State
}

describe('calculate-score.ts', () => {
  // it('should return an empty leader board when no teams participate', () => {
  //   const run: RunGameData = {
  //     teams: {},
  //     name: { en: 'game-1' },
  //     finished: true,
  //   }
  //   const result = initialValidation(run, challenges)
  //   expect(result).toEqual({
  //     teams: [],
  //   })
  // })
  // it('should correctly calculate the leader board with ranks', () => {
  //   const run: RunGameData = {
  //     name: { en: 'Summer edition' },
  //     finished: false,
  //     teams: {
  //       'team-a': {
  //         name: { en: 'Team A' },
  //         challenges: [
  //           { key: 'Challenge 1', date: 'Aug 9' },
  //           { key: 'Challenge 2', date: 'Aug 9' },
  //         ],
  //       },
  //       'team-b': {
  //         name: { en: 'Team B' },
  //         challenges: [{ key: 'Challenge 4', date: 'Aug 9' }],
  //       },
  //       'team-c': {
  //         name: { en: 'Team C' },
  //         challenges: [{ key: 'Challenge 2', date: 'Aug 9' }],
  //       },
  //       'team-d': {
  //         name: { en: 'Team D' },
  //         challenges: [
  //           { key: 'Challenge 1', date: 'Aug 9' },
  //           { key: 'Challenge 2', date: 'Aug 9' },
  //           { key: 'Challenge 3', date: 'Aug 9' },
  //           { key: 'Challenge 4', date: 'Aug 9' },
  //         ],
  //       },
  //     },
  //   }
  //   const challenges: Challenge[][] = [
  //     [
  //       { key: 'Challenge 1', challenge: { en: 'Challenge 1' }, points: 100 },
  //       { key: 'Challenge 2', challenge: { en: 'Challenge 2' }, points: 100 },
  //     ],
  //     [
  //       { key: 'Challenge 3', challenge: { en: 'Challenge 3' }, points: 100 },
  //       { key: 'Challenge 4', challenge: { en: 'Challenge 4' }, points: 100 },
  //     ],
  //   ]
  //   const result = initialValidation(run, challenges)
  //   expect(result).toEqual({
  //     teams: [
  //       {
  //         key: 'team-d',
  //         name: { en: 'Team D' },
  //         score: 400,
  //         rank: 1,
  //         challenges: [
  //           { key: 'Challenge 1', date: 'Aug 9' },
  //           { key: 'Challenge 2', date: 'Aug 9' },
  //           { key: 'Challenge 3', date: 'Aug 9' },
  //           { key: 'Challenge 4', date: 'Aug 9' },
  //         ],
  //         bingos: 6,
  //       },
  //       {
  //         key: 'team-a',
  //         name: { en: 'Team A' },
  //         score: 200,
  //         rank: 2,
  //         bingos: 1,
  //         challenges: [
  //           { key: 'Challenge 1', date: 'Aug 9' },
  //           { key: 'Challenge 2', date: 'Aug 9' },
  //         ],
  //       },
  //       {
  //         key: 'team-b',
  //         name: { en: 'Team B' },
  //         score: 100,
  //         rank: 3,
  //         bingos: 0,
  //         challenges: [{ key: 'Challenge 4', date: 'Aug 9' }],
  //       },
  //       {
  //         key: 'team-c',
  //         name: { en: 'Team C' },
  //         score: 100,
  //         rank: 4,
  //         bingos: 0,
  //         challenges: [{ key: 'Challenge 2', date: 'Aug 9' }],
  //       },
  //     ],
  //   })
  // })

  describe('defineInitialState', () => {
    it('should return a planned state', () => {
      expect(defineInitialState(runGameData())).toStrictEqual({
        status: RunGameStatus.Planned,
        teams: [
          { team: 'team-a', score: 0, solvedChallenges: [] },
          { team: 'team-b', score: 0, solvedChallenges: [] },
        ],
      } as State)
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
              { team: 'team-a', score: 0, solvedChallenges: [] },
              { team: 'team-b', score: 0, solvedChallenges: [] },
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
              { team: 'team-a', score: 0, solvedChallenges: [] },
              { team: 'team-b', score: 0, solvedChallenges: [] },
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
          team: 'team-a',
          challenge: 'challenge-1',
          timestamp: '2024-08-12T10:00:00',
          state: {
            status: RunGameStatus.Started,
            teams: [
              { team: 'team-a', score: 100, solvedChallenges: ['challenge-1'] },
              { team: 'team-b', score: 0, solvedChallenges: [] },
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

  // describe('run.state: running', () => {
  //   it('should throw error for "finish" event', () => {
  //     expect(() =>
  //       initialValidation(runGameData(), [
  //         event({ type: EventType.Start }),
  //         event({ type: EventType.Finish }),
  //       ]),
  //     ).toThrowError('no "finish" events allowed while running.')
  //   })
  //   it('should return calculated simple case', () => {
  //     expect(
  //       initialValidation(runGameData(), [
  //         event({ type: EventType.Start, timestamp: '2024-08-12T10:00:00' }),
  //         event({ type: EventType.ChallengeCompleted, timestamp: '2024-08-12T10:00:00' }),
  //       ]),
  //     ).toStrictEqual([
  //       {
  //         type: EventType.Start,
  //         timestamp: '2024-08-12T10:00:00',
  //         state: { teams: [{ team: 'team-a', score: 0 }] },
  //       },
  //       {
  //         type: EventType.ChallengeCompleted,
  //         timestamp: '2024-08-12T10:00:00',
  //         state: { teams: [{ team: 'team-a', score: 0 }] },
  //       },
  //     ])
  //   })
  // })

  describe('calculateScore', () => {
    describe('very simple case', () => {
      const expectedResult = [
        {
          type: EventType.Start,
          timestamp: '2024-08-12T10:00:00',
          state: {
            status: RunGameStatus.Started,
            teams: [
              { team: 'team-a', score: 0, solvedChallenges: [] },
              { team: 'team-b', score: 0, solvedChallenges: [] },
            ],
          },
        },
        {
          type: EventType.ChallengeCompleted,
          timestamp: '2024-08-12T11:00:00',
          team: 'team-a',
          challenge: 'challenge-1',
          state: {
            status: RunGameStatus.Started,
            teams: [
              { team: 'team-a', score: 100, solvedChallenges: ['challenge-1'] },
              { team: 'team-b', score: 0, solvedChallenges: [] },
            ],
          },
        },
        {
          type: EventType.Finish,
          timestamp: '2024-08-12T12:00:00',
          state: {
            status: RunGameStatus.Finished,
            teams: [
              { team: 'team-a', score: 100, solvedChallenges: ['challenge-1'] },
              { team: 'team-b', score: 0, solvedChallenges: [] },
            ],
          },
        },
      ] as ResultEvent[]

      it('should return ResultEventArray', () => {
        expect(
          calculateScore(
            runGameData(),
            [
              event({ type: EventType.Start, timestamp: '2024-08-12T10:00:00' }),
              event({
                type: EventType.ChallengeCompleted,
                timestamp: '2024-08-12T11:00:00',
                team: 'team-a',
                challenge: 'challenge-1',
              }),
              event({ type: EventType.Finish, timestamp: '2024-08-12T12:00:00' }),
            ],
            challenges(),
          ),
        ).toStrictEqual(expectedResult)
      })

      it('should work for unsorted events array', () => {
        expect(
          calculateScore(
            runGameData(),
            [
              event({
                type: EventType.ChallengeCompleted,
                timestamp: '2024-08-12T11:00:00',
                team: 'team-a',
                challenge: 'challenge-1',
              }),
              event({ type: EventType.Finish, timestamp: '2024-08-12T12:00:00' }),
              event({ type: EventType.Start, timestamp: '2024-08-12T10:00:00' }),
            ],
            challenges(),
          ),
        ).toStrictEqual(expectedResult)
      })
    })
  })
})
