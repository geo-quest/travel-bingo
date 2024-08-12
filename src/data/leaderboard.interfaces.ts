import { TeamChallenge } from './team.interfaces'
import { LocalizedString } from './types'

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
