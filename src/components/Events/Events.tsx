import { Tag, Timeline } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import { Challenge, EventType, ResultEvent, ResultEventType, TeamsGameData } from 'data/interfaces'
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

  const getColorByEventType = (type: EventType | ResultEventType) => {
    const colorMap = new Map<EventType | ResultEventType, string>([
      [EventType.Start, 'blue'],
      [EventType.Finish, 'red'],
      [EventType.ChallengeCompleted, 'green'],
      [ResultEventType.Bingo, '#32cd32'],
    ])
    return colorMap.get(type) ?? 'gray'
  }

  const renderTag = (event: ResultEvent) => {
    return (
      <Tag style={{ float: 'right' }} color={getColorByEventType(event.type)}>
        {t(EventType[event.type])}
      </Tag>
    )
  }

  const renderDetails = (event: ResultEvent) => {
    if (event.type === EventType.Start) {
      return <>{t('timeline.game-started')}</>
    } else if (event.type === EventType.Finish) {
      return <>{t('timeline.game-finished')}</>
    } else if (event.type === EventType.ChallengeCompleted && event.team && event.challenge) {
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
