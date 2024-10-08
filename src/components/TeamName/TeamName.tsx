import './TeamName.css'

import classNames from 'classnames'
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
  const isCursed = team.curseMultiplier !== undefined && team.boostMultiplier === undefined
  const isBoosted = team.boostMultiplier !== undefined && team.curseMultiplier === undefined

  let title = undefined

  if (isCursed) title = `${name} ${t('team-results.is-cursed')}`
  if (isBoosted) title = `${name} ${t('team-results.is-boosted')}`

  return (
    <span className={classNames({ cursed: isCursed, boosted: isBoosted })} title={title}>
      {name}
    </span>
  )
}

export default TeamName
