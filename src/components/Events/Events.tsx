import { List, Tag, Typography } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import { EventType, ResultEvent, TeamsGameData } from 'data/interfaces'
import { getTeamName } from 'utils/get-team-name'

export interface Props {
  events: ResultEvent[]
  teamsData: TeamsGameData
}

const Events: React.FC<Props> = ({ events, teamsData }: Props) => {
  const renderTag = (type: EventType) => {
    switch (type) {
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

  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={events.filter(e => e.type !== EventType.Empty)}
      renderItem={(event: ResultEvent) => (
        <List.Item style={{ padding: '8px 0', minWidth: 'fit-content' }}>
          <List.Item.Meta
            title={renderTag(event.type)}
            style={{}}
            description={
              <div>
                <Typography.Text strong>
                  <FormattedDate date={event.timestamp} showTime />
                </Typography.Text>
                {event.team && (
                  <>
                    <span style={{ margin: '0 8px' }}>|</span>
                    <Typography.Text>Team: {getTeamName(event.team, teamsData)}</Typography.Text>
                  </>
                )}
                {event.challenge && (
                  <>
                    <span style={{ margin: '0 8px' }}>|</span>
                    <Typography.Text>Challenge: {event.challenge}</Typography.Text>
                  </>
                )}
              </div>
            }
          />
        </List.Item>
      )}
    />
  )
}

export default Events
