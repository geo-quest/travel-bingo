import { Color, Icon, LocalizedMarkdown, LocalizedString, Runs, Url } from './'

export enum ChallengeType {
  Normal,
  Curse,
  Boost,
}

export interface Challenge {
  key: string
  type: ChallengeType
  challenge: LocalizedString
  points?: number
  curseMultiplier?: number
  boostMultiplier?: number
  description?: LocalizedMarkdown
  image?: Url
}

export interface TravelBingoRules {
  bonusPointsPerBingo: number
  bonusPointsPerPlace: number
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
