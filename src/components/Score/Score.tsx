import './Score.css'

import { TeamState } from 'data/interfaces'

interface Props {
  team: TeamState
}

const Score = ({ team }: Props) => {
  return (
    <>
      <span>{team.score}</span>
      {team.bingos.length > 0 && <span className="score-bingos">{team.bingos.length}</span>}
    </>
  )
}

export default Score
