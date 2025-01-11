import january2024 from 'data/hoge-veluwe/runs/january-2025'
import { RunGameData } from 'data/interfaces'

export enum HogeVeluweRun {
  January2025 = 'January 2025',
}

export default {
  [HogeVeluweRun.January2025]: january2024,
} as Record<HogeVeluweRun, RunGameData>
