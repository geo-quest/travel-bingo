import { Color, Icon, LocalizedMarkdown, LocalizedString, Runs, Url } from './'

export enum ChallengeType {
  Normal,
  Curse1,
}

export interface Challenge {
  key: string
  challenge: LocalizedString
  points: number
  description?: LocalizedMarkdown
  image?: Url
  type?: ChallengeType
}

export interface TravelBingoRules {
  bonusPointsPerBingo: number
}

export interface TravelBingoGameData {
  title: LocalizedString
  icon: Icon
  color: Color
  backgroundColor: Color
  shortDescription: LocalizedString
  gamePlay: LocalizedMarkdown
  challenges: Challenge[][]
  rules: TravelBingoRules
  runs: Runs
}

export interface TravelBingoGamesData {
  [name: string]: TravelBingoGameData
}
