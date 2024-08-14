import { Col, Row, Space, Statistic, Tag, Typography } from 'antd'
import BingoBoard from 'components/BingoBoard/BingoBoard'
import ChallengeModal from 'components/ChallengeModal/ChallengeModal'
import Events from 'components/Events/Events'
import NoPage from 'components/NoPage/NoPage'
import Rank from 'components/Rank/Rank'
import Score from 'components/Score/Score'
import {
  Challenge,
  EventType,
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

const TeamResults = function ({ team, run, game }: Props) {
  const { t } = useTranslation()
  const events = calculateScore(run, game.challenges, game.rules)
  const state = events[events.length - 1].state
  const teamData = state.teams.find(t => t.team === team.key)

  if (!teamData) return <NoPage />

  const getChallengeClass = (challenge: Challenge, row: number, col: number): string[] => {
    const clazz = []
    console.log(teamData.bingos)
    if (teamData.completedChallenges.find(c => c === challenge.key))
      clazz.push('completed-challenge')
    if (teamData.bingos.find(b => b === `row-${row}`)) clazz.push('bingo')
    if (teamData.bingos.find(b => b === `col-${col}`)) clazz.push('bingo')
    if (row === col && teamData.bingos.find(b => b === 'main-diagonal')) clazz.push('bingo')
    if (
      game.challenges.length === game.challenges[0].length &&
      row + col === game.challenges.length - 1 &&
      teamData.bingos.find(b => b === 'secondary-diagonal')
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
              event.type === EventType.Start ||
              event.type === EventType.Finish ||
              (event.type === EventType.ChallengeCompleted && event.team === team.key) ||
              (event.type === ResultEventType.Bingo && event.team === team.key)
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
