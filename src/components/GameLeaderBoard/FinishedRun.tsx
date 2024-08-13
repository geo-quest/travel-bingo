import { Col, Row, Space, Statistic } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import Events from 'components/Events/Events'
import FallingEmojis from 'components/FallingEmojis/FallingEmojis'
import {
  KeyObject,
  ResultEvent,
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
  const navigate = function (team: TeamState) {
    window.location.href = `/${game.key}/${run.key}/${team.team}`
  }
  return (
    <Space direction="vertical">
      <FallingEmojis emojiList={['🎉', '🥳', '👏', '🎊', '🥂', '🍻', '🙌']} milliseconds={7_000} />
      <Row>
        <Col span={24}>
          <Statistic
            valueStyle={{ fontSize: '16px' }}
            title={t('run.run-date')}
            valueRender={() => <FormattedDate date={run.date} />}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Podium teams={state.teams} teamsData={run.teams} onClick={navigate} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <LeaderBoard teams={state.teams} teamsData={run.teams} onClick={navigate} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Events events={events} teamsData={run.teams} />
        </Col>
      </Row>
    </Space>
  )
}

export default FinishedRun
