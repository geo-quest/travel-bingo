import { Event, LocalizedString, TeamChallenge } from './'

export enum RunGameStatus {
  Planned,
  Started,
  Finished,
}

export interface TeamLeaderBoardData {
  key: string
  name: LocalizedString
  score: number
  rank: number
  bingos: number
  challenges: TeamChallenge[]
}

export interface LeaderBoardData {
  teams: TeamLeaderBoardData[]
}

export interface TeamState {
  team: string
  score: number
  bingos: number
  solvedChallenges: string[]
}

export interface State {
  status: RunGameStatus
  teams: TeamState[]
}

export interface ResultEvent extends Event {
  state: State
}
