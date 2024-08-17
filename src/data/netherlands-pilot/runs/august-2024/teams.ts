import { TeamGameData } from 'data/interfaces'

export enum August2024Team {
  TeamA = 'Team A',
  TeamB = 'Team B',
}

export default {
  [August2024Team.TeamA]: {
    name: 'NL questers',
    members: ['Matheus', 'Stan'],
  },
  [August2024Team.TeamB]: {
    name: 'Team B',
    members: ['Maria', 'QingYing'],
  },
} as Record<August2024Team, TeamGameData>
