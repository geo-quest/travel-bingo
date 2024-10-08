import { ResultEvent, ResultEventType, RunGameStatus } from 'data/interfaces'

import { handleChallengeCompleted } from './handle-challenge-completed'
import { challenges, event, rules, state } from './tests.fixtures'

describe('handleChallengeCompleted', () => {
  it('should throw an error if "team" is not defined', () => {
    expect(() =>
      handleChallengeCompleted(event({ challenge: 'challenge-1' }), state(), challenges(), rules()),
    ).toThrow('"team" must be defined')
  })

  it('should throw an error if "challenge" is not defined', () => {
    expect(() =>
      handleChallengeCompleted(event({ team: 'team-a' }), state(), challenges(), rules()),
    ).toThrow('"challenge" must be defined')
  })

  it('should throw an error if "team" is invalid', () => {
    expect(() =>
      handleChallengeCompleted(
        event({ challenge: 'challenge-1', team: 'team-c', place: 'place-a' }),
        state(),
        challenges(),
        rules(),
      ),
    ).toThrow('team "team-c" not found')
  })

  it('should throw an error if "challenge" is invalid', () => {
    expect(() =>
      handleChallengeCompleted(
        event({ challenge: 'challenge-5', team: 'team-a', place: 'place-a' }),
        state(),
        challenges(),
        rules(),
      ),
    ).toThrow('challenge "challenge-5" not found')
  })

  it('should throw an error if state is not started', () => {
    expect(() =>
      handleChallengeCompleted(
        event({ challenge: 'challenge-1', team: 'team-a', place: 'place-a' }),
        state({ status: RunGameStatus.Planned }),
        challenges(),
        rules(),
      ),
    ).toThrow('invalid state for a challengeCompleted event')
  })

  it('should return ResultEvent.ChallengeCompleted', () => {
    const result = handleChallengeCompleted(
      event({ challenge: 'challenge-1', team: 'team-a', place: 'place-a' }),
      state(),
      challenges(),
      rules(),
    )
    expect(result[0]).toStrictEqual({
      type: ResultEventType.ChallengeCompleted,
      timestamp: '2024-08-12T10:00:00',
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
    } as ResultEvent)
  })
})
