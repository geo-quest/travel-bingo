import { TeamsGameData, TeamState } from 'data/interfaces'

export function getTeamName(team: TeamState, teamsData: TeamsGameData) {
  for (const key of Object.keys(teamsData)) {
    if (key === team.team) return teamsData[key].name
  }
  return ''
}
