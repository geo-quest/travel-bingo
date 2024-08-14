import './BingoBoard.css'

import { Card } from 'antd'
import { Challenge, ChallengeType } from 'data/interfaces'
import React from 'react'
import t2 from 'utils/t2'

import Header from './Header'

interface Props {
  challenges: Challenge[][]
  onClick: (challenge: Challenge) => void
  defineCardClass?: (challenge: Challenge) => string | undefined
}

const BingoBoard: React.FC<Props> = ({ challenges, onClick, defineCardClass }) => {
  const getClass = (challenge: Challenge): string => {
    const clazz = ['card']
    if (challenge.type === ChallengeType.Curse1) clazz.push('curse')
    if (defineCardClass !== undefined && challenge) clazz.push(defineCardClass(challenge) ?? '')
    return clazz.join(' ')
  }

  return (
    <div className="board">
      <Header />
      {challenges.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((item, colIndex) => (
            <Card.Grid
              key={colIndex}
              className={getClass(item)}
              onClick={() => onClick(item)}
              style={{ width: `${100 / row.length}%` }}
            >
              {t2(item.challenge)}
            </Card.Grid>
          ))}
        </div>
      ))}
    </div>
  )
}

export default BingoBoard
