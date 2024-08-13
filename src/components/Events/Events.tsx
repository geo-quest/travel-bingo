import './Events.css'

import { Tag, Timeline } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import { EventType, ResultEvent, TeamsGameData } from 'data/interfaces'
import { useTranslation } from 'react-i18next'
import { getTeamName } from 'utils/get-team-name'

export interface Props {
  events: ResultEvent[]
  teamsData: TeamsGameData
  filterFunction: (events: ResultEvent) => boolean
}

const Events: React.FC<Props> = ({ events, teamsData, filterFunction }: Props) => {
  const { t } = useTranslation()

  const getColorByEventType = (type: EventType) => {
    const colorMap = new Map<EventType, string>([
      [EventType.Start, 'blue'],
      [EventType.Finish, 'red'],
      [EventType.ChallengeCompleted, 'green'],
    ])
    return colorMap.get(type) || 'gray'
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
          <strong>{event.challenge}</strong>
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
