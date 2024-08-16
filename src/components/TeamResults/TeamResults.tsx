import { Col, Row, Space, Statistic, Tag, Typography } from 'antd'
import BingoBoard from 'components/BingoBoard/BingoBoard'
import ChallengeModal from 'components/ChallengeModal/ChallengeModal'
import NoPage from 'components/NoPage/NoPage'
import Rank from 'components/Rank/Rank'
import Score from 'components/Score/Score'
import Timeline from 'components/Timeline/Timeline'
import {
  Challenge,
  KeyObject,
  ResultEventType,
  RunGameData,
  RunGameStatus,
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

  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)

  if (!teamState) return <NoPage />

  const getChallengeClass = (challenge: Challenge, row: number, col: number): string[] => {
    const clazz = []
    if (teamState.completedChallenges.find(c => c === challenge.key)) clazz.push('completed')
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

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
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
        <Col span={4} style={{ textAlign: 'center' }}>
          <Statistic title={t('rank')} valueRender={() => <Rank rank={teamState.rank} />} />
        </Col>
        <Col span={4} style={{ textAlign: 'center' }}>
          <Statistic title={t('score')} valueRender={() => <Score team={teamState} />} />
        </Col>
        <Col span={12} style={{ textAlign: 'center' }}>
          <Statistic
            title={t('team-results.visited-places')}
            valueRender={() =>
              teamState.places.length === 0
                ? '-'
                : teamState.places.map(place => (
                    <Tag color="#ff4500" key={place}>
                      {place}
                    </Tag>
                  ))
            }
          />
        </Col>
        <Col span={2} />
      </Row>
      {teamState.curseMultiplier !== undefined && (
        <Row
          style={{
            backgroundColor: '#9C27B0',
            borderRadius: '16px',
            paddingBottom: '8px',
            paddingTop: '8px',
            color: 'white',
          }}
        >
          <Col span={24} style={{ textAlign: 'center' }}>
            <strong>{team.name}</strong> {t('team-results.is-cursed')}
          </Col>
        </Row>
      )}
      {teamState.boostMultiplier !== undefined && (
        <Row
          style={{
            backgroundColor: '#2196F3',
            borderRadius: '16px',
            paddingBottom: '8px',
            paddingTop: '8px',
            color: 'white',
          }}
        >
          <Col span={24} style={{ textAlign: 'center' }}>
            <strong>{team.name}</strong> {t('team-results.is-boosted')}
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
          <Timeline
            events={events}
            teamsData={run.teams}
            challenges={game.challenges}
            filterFunction={event =>
              event.type !== ResultEventType.Empty &&
              (event.team === undefined ||
                event.team === team.key ||
                (event.type === ResultEventType.Curse && event.cursedTeam === team.key))
            }
            reverse={state.status === RunGameStatus.Started}
            hidePlace={state.status === RunGameStatus.Started}
            teamInMatter={team.key}
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
