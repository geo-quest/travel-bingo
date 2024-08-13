export interface TeamGameData {
  name: string
  members?: string[]
}

export interface TeamsGameData {
  [name: string]: TeamGameData
}
