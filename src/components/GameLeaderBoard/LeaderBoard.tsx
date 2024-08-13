import 'antd/dist/reset.css'

import { Table } from 'antd'
import Rank from 'components/Rank/Rank'
import Score from 'components/Score/Score'
import { TeamsGameData, TeamState } from 'data/interfaces'
import { useTranslation } from 'react-i18next'
import { getTeamName } from 'utils/get-team-name'

interface Props {
  teams: TeamState[]
  teamsData: TeamsGameData
  onClick: (team: TeamState) => void
}

interface TeamCellProps {
  team: TeamState
}

const LeaderBoard = ({ teams, teamsData, onClick }: Props) => {
  const { t } = useTranslation()
  const columns = [
    {
      title: t('rank'),
      dataIndex: 'rank',
      key: 'rank',
      render: (_text: string, team: TeamState) => <Rank rank={team.rank} />,
    },
    {
      title: t('team'),
      dataIndex: 'team',
      key: 'team',
      render: (_text: string, team: TeamState) => <TeamCell team={team} />,
    },
    {
      title: t('score'),
      dataIndex: 'score',
      key: 'score',
      render: (_text: string, team: TeamState) => <Score team={team} />,
    },
  ]

  const TeamCell = ({ team }: TeamCellProps) => {
    return <span>{getTeamName(team.team, teamsData)}</span>
  }

  return (
    <Table
      columns={columns}
      dataSource={teams}
      pagination={false}
      rowKey={team => team.team}
      onRow={team => {
        return {
          onClick: () => {
            onClick(team)
          },
        }
      }}
    />
  )
}

export default LeaderBoard
