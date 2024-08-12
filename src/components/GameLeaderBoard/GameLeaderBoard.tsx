import './GameLeaderBoard.css'

import { Col, Row, Space, Statistic } from 'antd'
import { useTranslation } from 'react-i18next'

import {
  KeyObject,
  RunGameData,
  TeamLeaderBoardData,
  TravelBingoGameData,
} from '../../data/interfaces'
import { calculateLeaderBoard } from '../../utils/calculate-leader-board'
import FormattedDate from '../Date/FormattedDate'
import RelativeDate from '../Date/RelativeDate'
import LeaderBoard from './LeaderBoard'
import Podium from './Podium'

interface Props {
  run: RunGameData & KeyObject
  game: TravelBingoGameData & KeyObject
}

const GameLeaderBoard = ({ run, game }: Props) => {
  const { t } = useTranslation()
  const leaderBoardData = calculateLeaderBoard(run, game.challenges)

  const navigate = function (team: TeamLeaderBoardData & KeyObject) {
    window.location.href = `/${game.key}/${run.key}/${team.key}`
  }

  const renderHeaderRow = (run: RunGameData) => {
    if (run.finished)
      return (
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Statistic
              valueStyle={{ fontSize: '16px' }}
              title={t('run.run-date')}
              valueRender={() => <FormattedDate date={run.date} />}
            />
          </Col>
        </Row>
      )

    return (
      <Row>
        <Col span={12} style={{ textAlign: 'center' }}>
          <Statistic
            valueStyle={{ fontSize: '16px' }}
            title={t('run.run-date')}
            valueRender={() => <FormattedDate date={run.date} />}
          />
        </Col>
        <Col span={12} style={{ textAlign: 'center' }}>
          <Statistic
            valueStyle={{ fontSize: '16px' }}
            title={t('run.last-update')}
            valueRender={() => <RelativeDate date={run.lastUpdate} />}
          />
        </Col>
      </Row>
    )
  }

  return (
    <Space direction="vertical">
      {renderHeaderRow(run)}
      <Row>
        <Col span={24}>
          <Podium teams={leaderBoardData.teams} onClick={navigate} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <LeaderBoard teams={leaderBoardData.teams} onClick={navigate} />
        </Col>
      </Row>
    </Space>
  )
}

export default GameLeaderBoard
