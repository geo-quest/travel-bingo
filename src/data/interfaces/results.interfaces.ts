import { BaseEvent } from './'

export enum RunGameStatus {
  Planned,
  Started,
  Finished,
}

export enum ResultEventType {
  Start,
  Finish,
  ChallengeCompleted,
  Empty,
  Bingo,
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

export interface ResultEvent extends BaseEvent {
  type: ResultEventType
  state: RunGameState
  points?: number
  newBingos?: string[]
}
