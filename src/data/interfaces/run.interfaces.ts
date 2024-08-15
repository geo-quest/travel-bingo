import { Date, LocalizedString, TeamsGameData } from './'

export enum EventType {
  Start,
  Finish,
  ChallengeCompleted,
}

export interface BaseEvent {
  timestamp: Date
  team?: string
  challenge?: string
  cursedTeam?: string
  place?: string
}

export interface Event extends BaseEvent {
  type: EventType
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
