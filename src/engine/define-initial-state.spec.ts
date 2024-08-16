import { RunGameState, RunGameStatus } from 'data/interfaces/results.interfaces'

import { defineInitialState } from './define-initial-state'
import { runGameData } from './tests.fixtures'

describe('defineInitialState', () => {
  it('should return a planned state', () => {
    expect(defineInitialState(runGameData())).toStrictEqual({
      status: RunGameStatus.Planned,
      firstChallengeCompleted: false,
      teams: [
        { team: 'team-a', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
        { team: 'team-b', score: 0, rank: 0, bingos: [], places: [], completedChallenges: [] },
      ],
    } as RunGameState)
  })
})
