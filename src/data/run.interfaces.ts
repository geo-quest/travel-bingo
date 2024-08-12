import { Teams } from './team.interfaces'
import { Date, LocalizedString } from './types'

export interface RunGameData {
  name: LocalizedString
  date?: Date
  lastUpdate?: Date
  finished: boolean
  teams: Teams
}

export interface Runs {
  [name: string]: RunGameData
}
