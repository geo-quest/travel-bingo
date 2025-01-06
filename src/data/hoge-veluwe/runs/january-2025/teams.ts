import { TeamGameData } from 'data/interfaces'

export enum January2025Team {
  TeamA = 'Team A',
  TeamB = 'Team B',
}

export default {
  [January2025Team.TeamA]: {
    name: 'Team A',
    members: ['Amandine', 'Stan'],
  },
  [January2025Team.TeamB]: {
    name: 'Team B',
    members: ['Elsa', 'Abhi'],
  },
} as Record<January2025Team, TeamGameData>
