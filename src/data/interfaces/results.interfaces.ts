import { Event } from './'

export enum RunGameStatus {
  Planned,
  Started,
  Finished,
}

export interface TeamState {
  team: string
  rank: number
  score: number
  bingos: number
  completedChallenges: string[]
}

export interface RunGameState {
  status: RunGameStatus
  teams: TeamState[]
}

export interface ResultEvent extends Event {
  state: RunGameState
}
