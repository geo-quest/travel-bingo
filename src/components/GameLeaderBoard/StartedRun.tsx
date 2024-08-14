import { Col, Row, Space, Statistic, Tabs } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import RelativeDate from 'components/Date/RelativeDate'
import Events from 'components/Events/Events'
import {
  EventType,
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
  events: ResultEvent[]
}

const StartedRun = ({ run, events, game }: Props) => {
  const { t } = useTranslation()
  const navigate = function (team: TeamState) {
    window.location.href = `/${game.key}/${run.key}/${team.team}`
  }
  const event = events[events.length - 1]

  const items = [
    {
      key: '1',
      label: t('run.leaderboard'),
      children: <LeaderBoard teams={event.state.teams} teamsData={run.teams} onClick={navigate} />,
    },
    {
      key: '2',
      label: t('run.timeline'),
      children: (
        <Events
          events={events}
          teamsData={run.teams}
          challenges={game.challenges}
          filterFunction={event => event.type !== EventType.Empty}
        />
      ),
    },
  ]

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
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
          <Tabs size="small" defaultActiveKey="1" items={items} style={{ paddingTop: '0' }} />
        </Col>
      </Row>
    </Space>
  )
}

export default StartedRun
