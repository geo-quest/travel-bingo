import './BingoBoard.css'

import { Badge, Card } from 'antd'
import { Challenge, ChallengeType } from 'data/interfaces'
import t2 from 'utils/t2'

import Header from './Header'

interface Props {
  challenges: Challenge[][]
  onClick: (challenge: Challenge) => void
  defineCardClass?: (challenge: Challenge, row: number, col: number) => string[] | undefined
}

const BingoBoard = ({ challenges, onClick, defineCardClass }: Props) => {
  const getClass = (challenge: Challenge, row: number, col: number): string => {
    const clazz = ['cell']
    if (challenge.type === ChallengeType.Curse) clazz.push('curse-not-used')
    if (challenge.type === ChallengeType.Boost) clazz.push('boost-not-used')
    if (defineCardClass !== undefined && challenge) {
      const newClazzes = defineCardClass(challenge, row, col)
      if (newClazzes) clazz.push(...newClazzes)
    }

    return clazz.join(' ')
  }

  const getBadgeCount = (item: Challenge): number | undefined | string => {
    if (item.points && item.points > 0) return item.points
    if (item.curseMultiplier && item.curseMultiplier > 0) return `${item.curseMultiplier}x`
    if (item.boostMultiplier && item.boostMultiplier > 0) return `${item.boostMultiplier}x`
    return undefined
  }

  const getBadgeColor = (item: Challenge): string | undefined => {
    if (item.points && item.points > 0) return '#999999'
    if (item.curseMultiplier && item.curseMultiplier > 0) return '#9C27B0'
    if (item.boostMultiplier && item.boostMultiplier > 0) return '#2196F3'
    return undefined
  }

  return (
    <div className="board">
      <Header />
      {challenges.map((row, rowIndex) => (
        <div key={row.map(i => i.key).join()} style={{ display: 'flex' }}>
          {row.map((item, colIndex) => (
            <Card.Grid
              key={item.key}
              className={getClass(item, rowIndex, colIndex)}
              onClick={() => onClick(item)}
              style={{ width: `${100 / row.length}%` }}
            >
              <div style={{ position: 'relative', overflow: 'visible' }}>
                <Badge
                  count={getBadgeCount(item)}
                  color={getBadgeColor(item)}
                  size="small"
                  style={{
                    opacity: '0.9',
                    zIndex: '10',
                    minWidth: '30px',
                    fontSize: '0.8em',
                  }}
                />
                <div className="cell-container">{t2(item.challenge)}</div>
              </div>
            </Card.Grid>
          ))}
        </div>
      ))}
    </div>
  )
}

export default BingoBoard
