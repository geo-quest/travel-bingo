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
  Curse,
  Boost,
  FullBoard,
}

export interface TeamState {
  team: string
  rank: number
  score: number
  bingos: string[]
  completedChallenges: string[]
  curseMultiplier?: number
  boostMultiplier?: number
}

export interface RunGameState {
  status: RunGameStatus
  teams: TeamState[]
}

export interface ResultEvent extends BaseEvent {
  type: ResultEventType
  state: RunGameState
  points?: number
  newBingo?: string
  curseMultiplier?: number
  curseApplied?: boolean
  boostMultiplier?: number
  boostApplied?: boolean
}
