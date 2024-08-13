import './TeamResults.css'

import { Col, Row, Space, Statistic, Typography } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Challenge,
  KeyObject,
  RunGameData,
  TeamChallenge,
  TeamGameData,
  TravelBingoGameData,
} from '../../data/interfaces'
import { calculateScore } from '../../engine/calculate-score'
import BingoBoard from '../BingoBoard/BingoBoard'
import ChallengeModal from '../ChallengeModal/ChallengeModal'
import NoPage from '../NoPage/NoPage'
import Rank from '../Rank/Rank'
import Score from '../Score/Score'
import SolvedChallenge from './SolvedChallenge'

const { Title } = Typography

interface Props {
  team: TeamGameData & KeyObject
  run: RunGameData & KeyObject
  game: TravelBingoGameData & KeyObject
}

const TeamResults = function ({ team, run, game }: Props) {
  const { t } = useTranslation()
  const leaderBoardData = calculateScore(run, game.challenges)
  const teamData = leaderBoardData.teams.find(t => t.key === team.key)

  if (!teamData) return <NoPage />

  const getSolved = (challengeKey: string) => {
    return teamData.challenges.find(c => c.key === challengeKey)
  }

  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)

  const [selectedSolvedChallenge, setSelectedSolvedChallenge] = useState<TeamChallenge | null>(null)

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
        <Col span={24}>
          <Title level={2}>{t('challenges')}</Title>
          <BingoBoard
            challenges={game.challenges}
            onClick={(challenge: Challenge) => {
              const solved = getSolved(challenge.key)
              if (!solved) {
                setSelectedChallenge(challenge)
                setSelectedSolvedChallenge(null)
              } else {
                setSelectedSolvedChallenge(
                  challenge.key === selectedSolvedChallenge?.key ? null : solved,
                )
              }
            }}
            defineCardClass={(challenge: Challenge) =>
              getSolved(challenge.key) === undefined
                ? ''
                : challenge.key === selectedSolvedChallenge?.key
                  ? 'selected-card-done'
                  : 'card-done'
            }
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {selectedSolvedChallenge && (
            <SolvedChallenge
              run={run}
              teamChallenge={selectedSolvedChallenge}
              challenge={game.challenges.flat().find(c => c.key === selectedSolvedChallenge.key)}
            />
          )}
        </Col>
      </Row>
      {selectedChallenge && (
        <ChallengeModal challenge={selectedChallenge} onClose={() => setSelectedChallenge(null)} />
      )}
    </Space>
  )
}

export default TeamResults
