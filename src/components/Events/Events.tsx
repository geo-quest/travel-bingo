import { Tag, Timeline } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import { Challenge, ResultEvent, ResultEventType, TeamsGameData } from 'data/interfaces'
import { useTranslation } from 'react-i18next'
import { getChallengeTitle } from 'utils/get-challenge-title'
import { getTeamName } from 'utils/get-team-name'

export interface Props {
  events: ResultEvent[]
  teamsData: TeamsGameData
  challenges: Challenge[][]
  filterFunction: (events: ResultEvent) => boolean
}

const Events = ({ events, teamsData, challenges, filterFunction }: Props) => {
  const { t } = useTranslation()

  const getColorByEventType = (type: ResultEventType) => {
    const colorMap = new Map<ResultEventType, string>([
      [ResultEventType.Start, 'blue'],
      [ResultEventType.Finish, 'red'],
      [ResultEventType.ChallengeCompleted, 'green'],
      [ResultEventType.Bingo, '#ffd700'],
      [ResultEventType.Curse, 'purple'],
      [ResultEventType.Boost, '#00bfff'],
      [ResultEventType.FullBoard, '#008000'],
      [ResultEventType.NewPlace, '#ff4500'],
      [ResultEventType.FirstChallenge, '#ffa500'],
    ])
    return colorMap.get(type) ?? 'gray'
  }

  const renderTag = (event: ResultEvent) => {
    return (
      <Tag style={{ float: 'right' }} color={getColorByEventType(event.type)}>
        {t(`resultEventType.${ResultEventType[event.type]}`)}
      </Tag>
    )
  }

  const renderGameStart = () => {
    return <>{t('timeline.game-started')}</>
  }

  const renderGameFinish = () => {
    return <>{t('timeline.game-finished')}</>
  }

  const renderChallengeCompleted = (event: ResultEvent) => {
    return (
      <>
        <strong>{getTeamName(event.team, teamsData)}</strong> {t('timeline.solved')}{' '}
        <strong>{getChallengeTitle(event.challenge, challenges)}</strong>{' '}
        {event.points !== undefined && event.points > 0 && (
          <>
            {t('timeline.and-scored')} <strong>{event.points}</strong> {t('timeline.points')}
          </>
        )}
        {event.curseApplied === true && (
          <>
            <p style={{ marginBottom: 0 }}>
              <i>{t('timeline.a-curse-was-applied')}</i>
            </p>
            <p>
              <i>
                {t('timeline.curse-multiplier')}: <strong>{event.curseMultiplier}</strong>
              </i>
            </p>
          </>
        )}
        {event.boostApplied === true && (
          <>
            <p style={{ marginBottom: 0 }}>
              <i>{t('timeline.a-boost-was-applied')}</i>
            </p>
            <p>
              <i>
                {t('timeline.boost-multiplier')}: <strong>{event.boostMultiplier}</strong>
              </i>
            </p>
          </>
        )}
      </>
    )
  }

  const renderBingoScored = (event: ResultEvent) => {
    return (
      <>
        <strong>{getTeamName(event.team, teamsData)}</strong> {t('timeline.scored-bingo')} (
        <span>{t(`bingo.${event.newBingo}`)}</span>) {t('timeline.and-made')}{' '}
        <strong>{event.points}</strong> {t('timeline.extra-points')}
      </>
    )
  }

  const renderCurseApplied = (event: ResultEvent) => {
    return (
      <>
        <strong>{getTeamName(event.team, teamsData)}</strong> {t('timeline.cursed')}{' '}
        <strong>{getTeamName(event.cursedTeam, teamsData)}</strong> {t('timeline.solving')}{' '}
        <strong>{getChallengeTitle(event.challenge, challenges)}</strong>{' '}
        <p>
          <i>
            {t('timeline.curse-multiplier')}: <strong>{event.curseMultiplier}</strong>
          </i>
        </p>
      </>
    )
  }

  const renderBoostApplied = (event: ResultEvent) => {
    return (
      <>
        <strong>{getTeamName(event.team, teamsData)}</strong> {t('timeline.is-boosted')}{' '}
        {t('timeline.solving')} <strong>{getChallengeTitle(event.challenge, challenges)}</strong>{' '}
        <p>
          <i>
            {t('timeline.boost-multiplier')}: <strong>{event.boostMultiplier}</strong>
          </i>
        </p>
      </>
    )
  }

  const renderFullBoard = (event: ResultEvent) => {
    return (
      <>
        <strong>{getTeamName(event.team, teamsData)}</strong> {t('timeline.full-board')}
      </>
    )
  }

  const renderNewPlaceVisited = (event: ResultEvent) => {
    return (
      <>
        <strong>{getTeamName(event.team, teamsData)}</strong> {t('timeline.visited-a-new-place')}{' '}
        <strong>{event.newPlace}</strong> {t('timeline.and-scored')} <strong>{event.points}</strong>{' '}
        {t('timeline.points')}
      </>
    )
  }

  const renderFirstChallengeCompleted = (event: ResultEvent) => {
    return (
      <>
        <strong>{getTeamName(event.team, teamsData)}</strong>{' '}
        {t('timeline.completed-first-challenge')} {t('timeline.and-scored')}{' '}
        <strong>{event.points}</strong> {t('timeline.points')}
      </>
    )
  }

  const renderDetails = (event: ResultEvent) => {
    if (event.type === ResultEventType.Start) return renderGameStart()
    if (event.type === ResultEventType.Finish) return renderGameFinish()
    if (event.type === ResultEventType.ChallengeCompleted) return renderChallengeCompleted(event)
    if (event.type === ResultEventType.Bingo) return renderBingoScored(event)
    if (event.type === ResultEventType.Curse) return renderCurseApplied(event)
    if (event.type === ResultEventType.Boost) return renderBoostApplied(event)
    if (event.type === ResultEventType.FullBoard) return renderFullBoard(event)
    if (event.type === ResultEventType.NewPlace) return renderNewPlaceVisited(event)
    if (event.type === ResultEventType.FirstChallenge) return renderFirstChallengeCompleted(event)

    return null
  }

  const timelineItems = events.filter(filterFunction).map((event, index) => ({
    key: index,
    color: getColorByEventType(event.type),
    children: (
      <div className="event-timeline-item">
        <p>
          <strong>
            <FormattedDate date={event.timestamp} format="time" />
            {renderTag(event)}
          </strong>
          {event.place && <i style={{ paddingLeft: 8 }}>{event.place}</i>}
        </p>
        {renderDetails(event)}
      </div>
    ),
  }))

  return <Timeline items={timelineItems} />
}

export default Events
