import 'antd/dist/reset.css'

import { Table } from 'antd'
import Rank from 'components/Rank/Rank'
import Score from 'components/Score/Score'
import { RunGameState, TeamState } from 'data/interfaces'
import { useTranslation } from 'react-i18next'

interface Props {
  state: RunGameState
  onClick: (team: TeamState) => void
}

interface TeamCellProps {
  team: TeamState
}

const TeamCell = ({ team }: TeamCellProps) => {
  {
    /* //TODO: get the team name instead of the key */
  }
  return <span>{team.team}</span>
}

const LeaderBoard = ({ state, onClick }: Props) => {
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
      dataIndex: 'key',
      key: 'key',
      render: (_text: string, team: TeamState) => <TeamCell team={team} />,
    },
    {
      title: t('score'),
      dataIndex: 'score',
      key: 'score',
      render: (_text: string, team: TeamState) => <Score team={team} />,
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={state.teams}
      pagination={false}
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
