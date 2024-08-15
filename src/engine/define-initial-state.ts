import { RunGameData, RunGameState, RunGameStatus } from 'data/interfaces'

export function defineInitialState(run: RunGameData): RunGameState {
  return {
    status: RunGameStatus.Planned,
    teams: Object.keys(run.teams).map(key => {
      return { team: key, rank: 0, score: 0, bingos: [], places: [], completedChallenges: [] }
    }),
  } as RunGameState
}
