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
  bingos: string[]
  completedChallenges: string[]
}

export interface RunGameState {
  status: RunGameStatus
  teams: TeamState[]
}

export interface ResultEvent extends Event {
  state: RunGameState
  points?: number
  newBingos?: string[]
}
