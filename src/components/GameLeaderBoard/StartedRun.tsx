import { Col, Row, Space, Statistic } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import RelativeDate from 'components/Date/RelativeDate'
import {
  KeyObject,
  ResultEvent,
  RunGameData,
  TeamState,
  TravelBingoGameData,
} from 'data/interfaces'
import { useTranslation } from 'react-i18next'

import LeaderBoard from './LeaderBoard'
import Podium from './Podium'

interface Props {
  game: TravelBingoGameData & KeyObject
  run: RunGameData & KeyObject
  event: ResultEvent
}

const StartedRun = ({ run, event, game }: Props) => {
  const { t } = useTranslation()
  const navigate = function (team: TeamState) {
    window.location.href = `/${game.key}/${run.key}/${team.team}`
  }
  return (
    <Space direction="vertical">
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
            valueRender={() => <RelativeDate date={event.timestamp} />}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Podium teams={event.state.teams} teamsData={run.teams} onClick={navigate} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <LeaderBoard teams={event.state.teams} teamsData={run.teams} onClick={navigate} />
        </Col>
      </Row>
    </Space>
  )
}

export default StartedRun
