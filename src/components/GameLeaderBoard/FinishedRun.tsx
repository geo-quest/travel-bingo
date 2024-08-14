import { Col, Row, Space, Statistic, Tabs } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import Events from 'components/Events/Events'
import FallingEmojis from 'components/FallingEmojis/FallingEmojis'
import {
  KeyObject,
  ResultEvent,
  ResultEventType,
  RunGameData,
  RunGameState,
  TeamState,
  TravelBingoGameData,
} from 'data/interfaces'
import { useTranslation } from 'react-i18next'

import LeaderBoard from './LeaderBoard'
import Podium from './Podium'

interface Props {
  game: TravelBingoGameData & KeyObject
  run: RunGameData & KeyObject
  state: RunGameState
  events: ResultEvent[]
}

const FinishedRun = ({ game, run, state, events }: Props) => {
  const { t } = useTranslation()
  const navigate = (team: TeamState) => {
    window.location.href = `/${game.key}/${run.key}/${team.team}`
  }

  const items = [
    {
      key: '1',
      label: t('run.leaderboard'),
      children: <LeaderBoard teams={state.teams} teamsData={run.teams} onClick={navigate} />,
    },
    {
      key: '2',
      label: t('run.timeline'),
      children: (
        <Events
          events={events}
          teamsData={run.teams}
          challenges={game.challenges}
          filterFunction={event => event.type !== ResultEventType.Empty}
        />
      ),
    },
  ]

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <FallingEmojis emojiList={['🎉', '🥳', '👏', '🎊', '🥂', '🍻', '🙌']} milliseconds={7_000} />
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Statistic
            valueStyle={{ fontSize: '16px' }}
            title={t('run.run-date')}
            valueRender={() => <FormattedDate date={run.date} />}
          />
        </Col>
        <Row style={{ width: '100%' }}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Podium teams={state.teams} teamsData={run.teams} onClick={navigate} />
          </Col>
        </Row>
      </Row>
      <Row>
        <Col span={24}>
          <Tabs size="small" defaultActiveKey="1" items={items} style={{ paddingTop: '0' }} />
        </Col>
      </Row>
    </Space>
  )
}

export default FinishedRun
