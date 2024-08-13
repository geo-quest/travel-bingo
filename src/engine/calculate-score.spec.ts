import { Challenge, Event, EventType, RunGameData, RunGameState, State } from '../data/interfaces'
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
    state: RunGameState.Running,
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

const state = (): State => {
  return { teams: [{ team: 'team-a', score: 0 }] }
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
    it('should return all teams with score 0', () => {
      expect(defineInitialState(runGameData())).toStrictEqual({
        teams: [
          { team: 'team-a', score: 0 },
          { team: 'team-b', score: 0 },
        ],
      })
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
    it('should throw error for "finish" later than "start', () => {
      expect(() =>
        validateStartAndFinishEvents([
          event({ type: EventType.Start, timestamp: '20240812T18:00:00' }),
          event(),
          event({ type: EventType.Finish, timestamp: '20240812T10:00:00' }),
        ]),
      ).toThrowError('"finish" must be later than "start".')
    })
  })

  describe('handleStart', () => {
    it('should return the initial state', () => {
      expect(handleStart(state())).toStrictEqual(state())
    })
  })

  describe('handleFinish', () => {
    it('should return the final state', () => {
      expect(handleFinish(state())).toStrictEqual(state())
    })
  })

  describe('handleChallengeCompleted', () => {
    test('should throw an error if "team" is not defined', () => {
      expect(() =>
        handleChallengeCompleted(event({ challenge: 'challenge-1' }), state(), challenges()),
      ).toThrow('"team" must be defined')
    })

    test('should throw an error if "challenge" is not defined', () => {
      expect(() =>
        handleChallengeCompleted(event({ team: 'team-a' }), state(), challenges()),
      ).toThrow('"challenge" must be defined')
    })

    test('should throw an error if "team" is invalid', () => {
      expect(() =>
        handleChallengeCompleted(
          event({ challenge: 'challenge-1', team: 'team-b' }),
          state(),
          challenges(),
        ),
      ).toThrow('team "team-b" not found')
    })

    test('should throw an error if "challenge" is invalid', () => {
      expect(() =>
        handleChallengeCompleted(
          event({ challenge: 'challenge-5', team: 'team-a' }),
          state(),
          challenges(),
        ),
      ).toThrow('challenge "challenge-5" not found')
    })

    test('should return state updated', () => {
      expect(
        handleChallengeCompleted(
          event({ challenge: 'challenge-1', team: 'team-a' }),
          state(),
          challenges(),
        ),
      ).toStrictEqual({ teams: [{ team: 'team-a', score: 100 }] })
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
    it('should return calculated simple case', () => {
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
      ).toStrictEqual([
        {
          type: EventType.Start,
          timestamp: '2024-08-12T10:00:00',
          state: {
            teams: [
              { team: 'team-a', score: 0 },
              { team: 'team-b', score: 0 },
            ],
          },
        },
        {
          type: EventType.ChallengeCompleted,
          timestamp: '2024-08-12T11:00:00',
          team: 'team-a',
          challenge: 'challenge-1',
          state: {
            teams: [
              { team: 'team-a', score: 100 },
              { team: 'team-b', score: 0 },
            ],
          },
        },
        {
          type: EventType.Finish,
          timestamp: '2024-08-12T12:00:00',
          state: {
            teams: [
              { team: 'team-a', score: 100 },
              { team: 'team-b', score: 0 },
            ],
          },
        },
      ])
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
      ).toStrictEqual([
        {
          type: EventType.Start,
          timestamp: '2024-08-12T10:00:00',
          state: {
            teams: [
              { team: 'team-a', score: 0 },
              { team: 'team-b', score: 0 },
            ],
          },
        },
        {
          type: EventType.ChallengeCompleted,
          timestamp: '2024-08-12T11:00:00',
          team: 'team-a',
          challenge: 'challenge-1',
          state: {
            teams: [
              { team: 'team-a', score: 100 },
              { team: 'team-b', score: 0 },
            ],
          },
        },
        {
          type: EventType.Finish,
          timestamp: '2024-08-12T12:00:00',
          state: {
            teams: [
              { team: 'team-a', score: 100 },
              { team: 'team-b', score: 0 },
            ],
          },
        },
      ])
    })
  })
})
