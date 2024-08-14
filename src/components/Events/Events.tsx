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
      [ResultEventType.Bingo, '#32cd32'],
      [ResultEventType.Curse, 'purple'],
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
          {t('timeline.and-scored')} <strong>{event.points}</strong> {t('timeline.points')}
        </>
      )
    } else if (event.type === ResultEventType.Bingo && event.team && event.newBingos) {
      return (
        <>
          <strong>{getTeamName(event.team, teamsData)}</strong> {t('timeline.scored-bingo')} (
          {event.newBingos.map(b => {
            return <span key={b}>{t(`bingo.${b}`)}</span>
          })}
          ) {t('timeline.and-made')} <strong>{event.points}</strong> {t('timeline.extra-points')}
        </>
      )
    } else if (event.type === ResultEventType.Curse && event.team && event.cursedTeam) {
      return (
        <>
          <strong>{getTeamName(event.team, teamsData)}</strong> {t('timeline.cursed')}{' '}
          <strong>{getTeamName(event.cursedTeam, teamsData)}</strong>
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
