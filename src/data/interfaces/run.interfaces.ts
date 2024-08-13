import { Date, LocalizedString, RunGameState, Teams } from './'

export enum EventType {
  Start,
  Finish,
  ChallengeCompleted,
}

export interface Event {
  type: EventType
  timestamp: Date
  team?: string
  challenge?: string
}

export interface RunGameData {
  name: LocalizedString
  date?: Date
  teams: Teams
  state?: RunGameState
}

export interface Runs {
  [name: string]: RunGameData
}
