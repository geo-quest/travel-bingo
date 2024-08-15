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

const Events: React.FC<Props> = ({ events, teamsData, challenges, filterFunction }: Props) => {
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
    ])
    return colorMap.get(type) ?? 'gray'
  }

  const renderTag = (event: ResultEvent) => {
    return (
      <Tag style={{ float: 'right' }} color={getColorByEventType(event.type)}>
        {t(ResultEventType[event.type])}
      </Tag>
    )
  }

  const renderDetails = (event: ResultEvent) => {
    if (event.type === ResultEventType.Start) {
      return <>{t('timeline.game-started')}</>
    } else if (event.type === ResultEventType.Finish) {
      return <>{t('timeline.game-finished')}</>
    } else if (event.type === ResultEventType.ChallengeCompleted && event.team && event.challenge) {
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
                  {t('timeline.curse-penalty')}: <strong>{event.curseMultiplier}</strong>
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
    } else if (event.type === ResultEventType.Bingo && event.team && event.newBingo) {
      return (
        <>
          <strong>{getTeamName(event.team, teamsData)}</strong> {t('timeline.scored-bingo')} (
          <span>{t(`bingo.${event.newBingo}`)}</span>) {t('timeline.and-made')}{' '}
          <strong>{event.points}</strong> {t('timeline.extra-points')}
        </>
      )
    } else if (
      event.type === ResultEventType.Curse &&
      event.team &&
      event.cursedTeam &&
      event.challenge &&
      event.curseMultiplier
    ) {
      return (
        <>
          <strong>{getTeamName(event.team, teamsData)}</strong> {t('timeline.cursed')}{' '}
          <strong>{getTeamName(event.cursedTeam, teamsData)}</strong> {t('timeline.solving')}{' '}
          <strong>{getChallengeTitle(event.challenge, challenges)}</strong>{' '}
          <p>
            <i>
              {t('timeline.curse-penalty')}: <strong>{event.curseMultiplier}</strong>
            </i>
          </p>
        </>
      )
    } else if (
      event.type === ResultEventType.Boost &&
      event.team &&
      event.challenge &&
      event.boostMultiplier
    ) {
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
    } else if (event.type === ResultEventType.FullBoard && event.team) {
      return (
        <>
          <strong>{getTeamName(event.team, teamsData)}</strong> {t('timeline.full-board')}
        </>
      )
    }
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
        </p>
        {renderDetails(event)}
      </div>
    ),
  }))

  return <Timeline items={timelineItems} />
}

export default Events
