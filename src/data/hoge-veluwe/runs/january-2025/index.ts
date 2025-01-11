import { EventType, RunGameData } from 'data/interfaces'

import january2025Teams from './teams'

export default {
  name: {
    en: 'January 2025',
  },
  date: new Date('2025-01-11T08:00:00.000Z').toISOString(), // 10AM Amsterdam time
  teams: january2025Teams,
  events: [
    { type: EventType.Start, timestamp: new Date('2025-01-11T08:00:00.000Z').toISOString() },
  ],
} as RunGameData
