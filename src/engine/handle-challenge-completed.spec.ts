import { EventType, ResultEvent, RunGameStatus } from 'data/interfaces'

import { handleChallengeCompleted } from './handle-challenge-completed'
import { challenges, event, state } from './tests.fixtures'

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