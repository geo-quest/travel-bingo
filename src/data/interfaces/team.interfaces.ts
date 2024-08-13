export interface TeamGameData {
  name: string
  members?: string[]
}

export interface Teams {
  [name: string]: TeamGameData
}
