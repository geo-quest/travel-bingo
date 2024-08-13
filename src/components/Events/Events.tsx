import './Events.css'

import { Tag, Timeline, Typography } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import { EventType, ResultEvent, TeamsGameData } from 'data/interfaces'
import { useTranslation } from 'react-i18next'
import { getTeamName } from 'utils/get-team-name'

export interface Props {
  events: ResultEvent[]
  teamsData: TeamsGameData
}

const Events: React.FC<Props> = ({ events, teamsData }: Props) => {
  const { t } = useTranslation()
  const renderTag = (event: ResultEvent) => {
    switch (event.type) {
      case EventType.Start:
        return <Tag color="blue">Start</Tag>
      case EventType.Finish:
        return <Tag color="red">Finish</Tag>
      case EventType.ChallengeCompleted:
        return <Tag color="green">Challenge solved!</Tag>
      default:
        return <Tag color="gray">Other</Tag>
    }
  }
  const renderTime = (event: ResultEvent) => {
    return (
      <Typography.Text strong>
        <FormattedDate date={event.timestamp} onlyTime />
      </Typography.Text>
    )
  }

  const timelineItems = events.map((event, index) => ({
    key: index,
    dot: renderTime(event),
    children: (
      <div className="event-timeline-item">
        <p>{renderTag(event)}</p>
        {event.team && (
          <>
            <Typography.Text>
              {t('team')}: {getTeamName(event.team, teamsData)}
            </Typography.Text>
          </>
        )}
        {event.challenge && (
          <>
            <span className="separator">|</span>
            <Typography.Text>
              {t('challenge')}: {event.challenge}
            </Typography.Text>
          </>
        )}
      </div>
    ),
  }))

  return <Timeline mode="left" items={timelineItems} />
}

export default Events
