import { TeamGameData } from 'data/interfaces'

export enum August2024Team {
  TeamA = 'Team A',
  TeamB = 'Team B',
}

export default {
  [August2024Team.TeamA]: {
    name: 'Team A',
    members: ['Matheus', 'Maria'],
  },
  [August2024Team.TeamB]: {
    name: 'Team B',
    members: ['Stan', 'QingYing'],
  },
} as Record<August2024Team, TeamGameData>
