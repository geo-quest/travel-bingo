import { BaseEvent, EventType } from './'

export enum RunGameStatus {
  Planned,
  Started,
  Finished,
}

export enum ResultEventType {
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
  type: EventType | ResultEventType
  state: RunGameState
  points?: number
  newBingos?: string[]
}
