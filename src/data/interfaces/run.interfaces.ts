import { Date, LocalizedString, Teams } from './'

export enum EventType {
  Start,
  Finish,
  ChallengeCompleted,
}

export enum RunGameState {
  Planned,
  Running,
  Finished,
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
}

export interface Runs {
  [name: string]: RunGameData
}
