import { RunGameData } from 'data/interfaces'
import august2024 from 'data/netherlands-pilot/runs/august-2024'

export enum NetherlandsPilotRun {
  August2024 = 'August 2024',
}

export default {
  [NetherlandsPilotRun.August2024]: august2024,
} as Record<NetherlandsPilotRun, RunGameData>
