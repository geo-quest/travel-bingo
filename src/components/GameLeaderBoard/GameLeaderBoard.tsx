import './GameLeaderBoard.css'

import { KeyObject, RunGameData, RunGameStatus, TravelBingoGameData } from 'data/interfaces'

import PlannedRun from './PlannedRun'

interface Props {
  run: RunGameData & KeyObject
  game: TravelBingoGameData & KeyObject
}

const GameLeaderBoard = ({ run, game }: Props) => {
  if (run.state === undefined || run.state.status === RunGameStatus.Planned)
    return <PlannedRun run={run} game={game} />
  // const { t } = useTranslation()

  console.log(run, game)

  return <div>GameLeaderBoard</div>
  // const leaderBoardData = calculateScore(run, game.challenges)

  // {run.finished && (
  //   <FallingEmojis
  //     emojiList={['🎉', '🥳', '👏', '🎊', '🥂', '🍻', '🙌']}
  //     milliseconds={7_000}
  //   />
  // )}

  // const navigate = function (team: TeamLeaderBoardData & KeyObject) {
  //   window.location.href = `/${game.key}/${run.key}/${team.key}`
  // }

  // const renderHeaderRow = (run: RunGameData) => {
  //   if (run.finished)
  //     return (
  //       <Row>
  //         <Col span={24} style={{ textAlign: 'center' }}>
  //           <Statistic
  //             valueStyle={{ fontSize: '16px' }}
  //             title={t('run.run-date')}
  //             valueRender={() => <FormattedDate date={run.date} />}
  //           />
  //         </Col>
  //       </Row>
  //     )

  //   return (
  //     <Row>
  //       <Col span={12} style={{ textAlign: 'center' }}>
  //         <Statistic
  //           valueStyle={{ fontSize: '16px' }}
  //           title={t('run.run-date')}
  //           valueRender={() => <FormattedDate date={run.date} />}
  //         />
  //       </Col>
  //       <Col span={12} style={{ textAlign: 'center' }}>
  //         <Statistic
  //           valueStyle={{ fontSize: '16px' }}
  //           title={t('run.last-update')}
  //           valueRender={() => <RelativeDate date={run.lastUpdate} />}
  //         />
  //       </Col>
  //     </Row>
  //   )
  // }

  // return (
  //   <Space direction="vertical">
  //     {renderHeaderRow(run)}
  //     <Row>
  //       <Col span={24}>
  //         <Podium teams={leaderBoardData.teams} onClick={navigate} />
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col span={24}>
  //         <LeaderBoard teams={leaderBoardData.teams} onClick={navigate} />
  //       </Col>
  //     </Row>
  //   </Space>
  // )
}

export default GameLeaderBoard
