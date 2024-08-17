import './Score.css'

import { TeamState } from 'data/interfaces'

interface Props {
  team: TeamState
  showBingos?: boolean
}

const Score = ({ team, showBingos }: Props) => {
  return (
    <>
      <span>{team.score.toFixed(0)}</span>
      {showBingos && team.bingos.length > 0 && (
        <span className="score-bingos">{team.bingos.length}</span>
      )}
    </>
  )
}

export default Score
