import { Date, LocalizedString, TeamsGameData } from './'

export enum EventType {
  Empty,
  Start,
  Finish,
  ChallengeCompleted,
}

export interface Event {
  type: EventType
  timestamp: Date
  team?: string
  challenge?: string
  points?: number
}

export interface RunGameData {
  name: LocalizedString
  date: Date
  teams: TeamsGameData
  events: Event[]
}

export interface Runs {
  [name: string]: RunGameData
}
