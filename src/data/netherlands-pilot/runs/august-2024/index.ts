import { EventType, RunGameData } from 'data/interfaces'
import { NetherlandsPilotChallenge } from 'data/netherlands-pilot/challenges'

import august2024Teams, { August2024Team } from './teams'

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
    {
      type: EventType.ChallengeCompleted,
      timestamp: new Date('2024-08-17T08:01:00.000Z').toISOString(),
      team: August2024Team.TeamB,
      challenge: NetherlandsPilotChallenge.ComplimentALocal,
      place: 'Utrecht',
    },
    {
      type: EventType.ChallengeCompleted,
      timestamp: new Date('2024-08-17T08:07:00.000Z').toISOString(),
      team: August2024Team.TeamA,
      challenge: NetherlandsPilotChallenge.PetsAreTheBest,
      place: 'Utrecht',
    },
    {
      type: EventType.ChallengeCompleted,
      timestamp: new Date('2024-08-17T08:09:00.000Z').toISOString(),
      team: August2024Team.TeamA,
      challenge: NetherlandsPilotChallenge.StreetArtHunt,
      place: 'Utrecht',
    },
  ],
} as RunGameData
