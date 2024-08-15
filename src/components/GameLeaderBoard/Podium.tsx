import 'antd/dist/reset.css'

import { Card, Col, Row } from 'antd'
import Score from 'components/Score/Score'
import TeamName from 'components/TeamName/TeamName'
import { TeamsGameData, TeamState } from 'data/interfaces'
import { useTranslation } from 'react-i18next'

interface Props {
  teams: TeamState[]
  teamsData: TeamsGameData
  onClick: (team: TeamState) => void
}

const Podium = ({ teams, teamsData, onClick }: Props) => {
  const { t } = useTranslation()
  const get2ndSpan = () => (teams.length === 2 ? 12 : 8)
  const get1stSpan = () => {
    if (teams.length === 1) return 24
    if (teams.length === 2) return 12
    return 8
  }

  return (
    <div className="podium">
      <Row gutter={16}>
        {teams.length >= 2 && (
          <Col span={get2ndSpan()}>
            <Card
              title={t('podium.2nd')}
              bordered={false}
              className="podium-card silver"
              onClick={() => onClick(teams[1])}
            >
              <p>
                <TeamName team={teams[1]} teamsData={teamsData} />
              </p>
              <p>
                <Score team={teams[1]} />
              </p>
            </Card>
          </Col>
        )}
        <Col span={get1stSpan()}>
          <Card
            title={t('podium.1st')}
            bordered={false}
            className="podium-card gold"
            onClick={() => onClick(teams[0])}
          >
            <p>
              <TeamName team={teams[0]} teamsData={teamsData} />
            </p>
            <p>
              <Score team={teams[0]} />
            </p>
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
              <p>
                <TeamName team={teams[2]} teamsData={teamsData} />
              </p>
              <p>
                <Score team={teams[2]} />
              </p>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default Podium
