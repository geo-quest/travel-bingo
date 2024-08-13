import { CheckCircleOutlined } from '@ant-design/icons'
import { TeamLeaderBoardData } from 'data/interfaces'

interface Props {
  team: TeamLeaderBoardData
}

function Score({ team }: Props) {
  return (
    <>
      <span>{team.score}</span>
      {team.bingos > 0 && <span>{<CheckCircleOutlined style={{ marginLeft: '3px' }} />}</span>}
    </>
  )
}

export default Score
