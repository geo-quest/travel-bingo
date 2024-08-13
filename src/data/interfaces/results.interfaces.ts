import { Event } from './'

export enum RunGameStatus {
  Planned,
  Started,
  Finished,
}

export interface TeamLeaderBoardData {
  key: string
  name: string
  score: number
  rank: number
  bingos: number
}

export interface LeaderBoardData {
  teams: TeamLeaderBoardData[]
}

export interface TeamState {
  team: string
  rank: number
  score: number
  bingos: number
  solvedChallenges: string[]
}

export interface RunGameState {
  status: RunGameStatus
  teams: TeamState[]
}

export interface ResultEvent extends Event {
  state: RunGameState
}
