import 'antd/dist/reset.css'

import { Card, Col, Row } from 'antd'
import Score from 'components/Score/Score'
import { TeamsGameData, TeamState } from 'data/interfaces'
import { useTranslation } from 'react-i18next'
import { getTeamName } from 'utils/get-team-name'

interface Props {
  teams: TeamState[]
  teamsData: TeamsGameData
  onClick: (team: TeamState) => void
}

const Podium = ({ teams, teamsData, onClick }: Props) => {
  const { t } = useTranslation()
  return (
    <div className="podium">
      <Row gutter={16}>
        {teams.length >= 2 && (
          <Col span={teams.length == 2 ? 12 : 8}>
            <Card
              title={t('podium.2nd')}
              bordered={false}
              className="podium-card silver"
              onClick={() => onClick(teams[1])}
            >
              <h3>{getTeamName(teams[1].team, teamsData)}</h3>
              <Score team={teams[1]} />
            </Card>
          </Col>
        )}
        <Col span={teams.length == 1 ? 24 : teams.length == 2 ? 12 : 8}>
          <Card
            title={t('podium.1st')}
            bordered={false}
            className="podium-card gold"
            onClick={() => onClick(teams[0])}
          >
            <h3>{getTeamName(teams[0].team, teamsData)}</h3>
            <Score team={teams[0]} />
          </Card>
        </Col>
        {teams.length >= 3 && (
          <Col span={8}>
            <Card
              title={t('podium.3rd')}
              bordered={false}
              className="podium-card bronze"
              onClick={() => onClick(teams[2])}
            >
              <h3>{getTeamName(teams[2].team, teamsData)}</h3>
              <Score team={teams[2]} />
            </Card>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default Podium
