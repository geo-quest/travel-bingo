import './TeamName.css'

import { TeamsGameData, TeamState } from 'data/interfaces'
import { useTranslation } from 'react-i18next'
import { getTeamName } from 'utils/get-team-name'

interface Props {
  team: TeamState
  teamsData: TeamsGameData
}

const TeamName = ({ team, teamsData }: Props) => {
  const { t } = useTranslation()
  const name = getTeamName(team.team, teamsData)
  if (team.curseMultiplier !== undefined)
    return (
      <span className="cursed" title={`${name} ${t('team-results.is-cursed')}`}>
        {name}
      </span>
    )

  return <span>{name}</span>
}

export default TeamName
