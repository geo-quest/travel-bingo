import { Color, Icon, LocalizedMarkdown, LocalizedString, Runs, Url } from './'

export interface Challenge {
  key: string
  challenge: LocalizedString
  points: number
  description?: LocalizedMarkdown
  image?: Url
  type?: string
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
