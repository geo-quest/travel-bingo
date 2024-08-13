import 'antd/dist/reset.css'

import { Card, Col, Row } from 'antd'
import Score from 'components/Score/Score'
import { RunGameState, TeamState } from 'data/interfaces'
import { useTranslation } from 'react-i18next'

interface Props {
  state: RunGameState
  onClick: (team: TeamState) => void
}

const Podium = ({ state, onClick }: Props) => {
  const { t } = useTranslation()
  return (
    <div className="podium">
      <Row gutter={16}>
        {state.teams.length >= 2 && (
          <Col span={state.teams.length == 2 ? 12 : 8}>
            <Card
              title={t('podium.2nd')}
              bordered={false}
              className="podium-card silver"
              onClick={() => onClick(state.teams[1])}
            >
              {/* //TODO: get the team name instead of the key */}
              <h3>{state.teams[1].team}</h3>
              <Score team={state.teams[1]} />
            </Card>
          </Col>
        )}
        <Col span={state.teams.length == 1 ? 24 : state.teams.length == 2 ? 12 : 8}>
          <Card
            title={t('podium.1st')}
            bordered={false}
            className="podium-card gold"
            onClick={() => onClick(state.teams[0])}
          >
            {/* //TODO: get the team name instead of the key */}
            <h3>{state.teams[0].team}</h3>
            <Score team={state.teams[0]} />
          </Card>
        </Col>
        {state.teams.length >= 3 && (
          <Col span={8}>
            <Card
              title={t('podium.3rd')}
              bordered={false}
              className="podium-card bronze"
              onClick={() => onClick(state.teams[2])}
            >
              {/* //TODO: get the team name instead of the key */}
              <h3>{state.teams[2].team}</h3>
              <Score team={state.teams[2]} />
            </Card>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default Podium
