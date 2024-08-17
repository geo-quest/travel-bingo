import { EventType, RunGameData } from 'data/interfaces'

import august2024Teams from './teams'

export default {
  name: {
    en: 'August 2024',
    nl: 'Augustus 2024',
    pt: 'Agosto de 2024',
    zh: '2024年8月',
  },
  date: new Date('2024-08-17T08:00:00.000Z').toISOString(), // 10AM Amsterdam time
  teams: august2024Teams,
  events: [
    { type: EventType.Start, timestamp: new Date('2024-08-17T08:00:00.000Z').toISOString() },
  ],
} as RunGameData
