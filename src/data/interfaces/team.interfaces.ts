import { Date, LocalizedMarkdown, LocalizedString, Url } from './'

export interface TeamChallenge {
  key: string
  date: Date
  comment?: LocalizedMarkdown
  image?: Url
}

export interface TeamGameData {
  name: LocalizedString
  challenges?: TeamChallenge[]
}

export interface Teams {
  [name: string]: TeamGameData
}
