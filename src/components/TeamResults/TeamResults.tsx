import './TeamResults.css'

import { Col, Row, Space, Statistic, Typography } from 'antd'
import BingoBoard from 'components/BingoBoard/BingoBoard'
import ChallengeModal from 'components/ChallengeModal/ChallengeModal'
import NoPage from 'components/NoPage/NoPage'
import Rank from 'components/Rank/Rank'
import Score from 'components/Score/Score'
import {
  Challenge,
  KeyObject,
  RunGameData,
  TeamGameData,
  TravelBingoGameData,
} from 'data/interfaces'
import { calculateScore } from 'engine/calculate-score'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

interface Props {
  team: TeamGameData & KeyObject
  run: RunGameData & KeyObject
  game: TravelBingoGameData & KeyObject
}

const TeamResults = function ({ team, run, game }: Props) {
  const { t } = useTranslation()
  const events = calculateScore(run, game.challenges)
  const state = events[events.length - 1].state
  const teamData = state.teams.find(t => t.team === team.key)

  if (!teamData) return <NoPage />

  const getSolved = (challengeKey: string) => {
    return teamData.completedChallenges.find(c => c === challengeKey)
  }

  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)

  return (
    <Space direction="vertical">
      <Row>
        <Col span={2} />
        <Col span={10} style={{ textAlign: 'center' }}>
          <Statistic title={t('rank')} valueRender={() => <Rank rank={teamData.rank} />} />
        </Col>
        <Col span={10} style={{ textAlign: 'center' }}>
          <Statistic title={t('score')} valueRender={() => <Score team={teamData} />} />
        </Col>
        <Col span={2} />
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
          {team.members &&
            team.members?.length > 0 &&
            team.members?.map((member, index) => <span key={index}>{member} </span>)}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title level={2}>{t('challenges')}</Title>
          <BingoBoard
            challenges={game.challenges}
            onClick={(challenge: Challenge) => {
              setSelectedChallenge(challenge)
            }}
            defineCardClass={(challenge: Challenge) =>
              getSolved(challenge.key) === undefined ? '' : 'card-done'
            }
          />
        </Col>
      </Row>
      {selectedChallenge && (
        <ChallengeModal challenge={selectedChallenge} onClose={() => setSelectedChallenge(null)} />
      )}
    </Space>
  )
}

export default TeamResults
