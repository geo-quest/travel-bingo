import { TeamsGameData } from 'data/interfaces'

export function getTeamName(team: string | undefined, teamsData: TeamsGameData): string {
  for (const key of Object.keys(teamsData)) {
    if (key === team) return teamsData[key].name
  }
  return ''
}
