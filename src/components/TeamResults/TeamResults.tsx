import { Col, Row, Space, Statistic, Tag, Typography } from 'antd'
import BingoBoard from 'components/BingoBoard/BingoBoard'
import ChallengeModal from 'components/ChallengeModal/ChallengeModal'
import Events from 'components/Events/Events'
import NoPage from 'components/NoPage/NoPage'
import Rank from 'components/Rank/Rank'
import Score from 'components/Score/Score'
import {
  Challenge,
  KeyObject,
  ResultEventType,
  RunGameData,
  TeamGameData,
  TravelBingoGameData,
} from 'data/interfaces'
import { calculateScore } from 'engine'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

interface Props {
  team: TeamGameData & KeyObject
  run: RunGameData & KeyObject
  game: TravelBingoGameData & KeyObject
}

const TeamResults = ({ team, run, game }: Props) => {
  const { t } = useTranslation()
  const events = calculateScore(run, game.challenges, game.rules)
  const state = events[events.length - 1].state
  const teamState = state.teams.find(t => t.team === team.key)

  if (!teamState) return <NoPage />

  const getChallengeClass = (challenge: Challenge, row: number, col: number): string[] => {
    const clazz = []
    if (teamState.completedChallenges.find(c => c === challenge.key))
      clazz.push('completed-challenge')
    if (teamState.bingos.find(b => b === `row-${row}`)) clazz.push('bingo')
    if (teamState.bingos.find(b => b === `col-${col}`)) clazz.push('bingo')
    if (row === col && teamState.bingos.find(b => b === 'main-diagonal')) clazz.push('bingo')
    if (
      game.challenges.length === game.challenges[0].length &&
      row + col === game.challenges.length - 1 &&
      teamState.bingos.find(b => b === 'secondary-diagonal')
    )
      clazz.push('bingo')
    return clazz
  }

  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
          {team.members &&
            team.members.length > 0 &&
            team.members.map(member => (
              <Tag color={game.color} key={member} style={{ margin: '0 8px' }}>
                {member}
              </Tag>
            ))}
        </Col>
      </Row>
      <Row
        style={{
          border: 'solid 1px #f0f0f0',
          backgroundColor: '#f0f0f0',
          borderRadius: '16px',
          paddingBottom: '8px',
          paddingTop: '8px',
        }}
      >
        <Col span={2} />
        <Col span={10} style={{ textAlign: 'center' }}>
          <Statistic title={t('rank')} valueRender={() => <Rank rank={teamState.rank} />} />
        </Col>
        <Col span={10} style={{ textAlign: 'center' }}>
          <Statistic title={t('score')} valueRender={() => <Score team={teamState} />} />
        </Col>
        <Col span={2} />
      </Row>
      {teamState.cursedMultiplier !== undefined && (
        <Row
          style={{
            border: 'solid 1px red',
            backgroundColor: 'purple',
            borderRadius: '16px',
            paddingBottom: '8px',
            paddingTop: '8px',
            color: 'white',
            textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000;',
            boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 0, 0, 0.7);',
          }}
        >
          <Col span={24} style={{ textAlign: 'center' }}>
            <strong>{team.name}</strong> {t('is-cursed')}
          </Col>
        </Row>
      )}
      <Row>
        <Col span={24}>
          <Title level={2}>{t('challenges')}</Title>
          <BingoBoard
            challenges={game.challenges}
            onClick={(challenge: Challenge) => {
              setSelectedChallenge(challenge)
            }}
            defineCardClass={getChallengeClass}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title level={2}>{t('run.timeline')}</Title>
          <Events
            events={events}
            teamsData={run.teams}
            challenges={game.challenges}
            filterFunction={event =>
              event.type === ResultEventType.Start ||
              event.type === ResultEventType.Finish ||
              (event.type === ResultEventType.ChallengeCompleted && event.team === team.key) ||
              (event.type === ResultEventType.Bingo && event.team === team.key) ||
              (event.type === ResultEventType.Curse &&
                (event.team === team.key || event.cursedTeam === team.key))
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
