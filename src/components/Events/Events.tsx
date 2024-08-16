import { Tag, Timeline } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import { Challenge, ResultEvent, ResultEventType, TeamsGameData } from 'data/interfaces'
import { Trans, useTranslation } from 'react-i18next'
import { getChallengeTitle } from 'utils/get-challenge-title'
import { getTeamName } from 'utils/get-team-name'

export interface Props {
  events: ResultEvent[]
  teamsData: TeamsGameData
  challenges: Challenge[][]
  filterFunction: (events: ResultEvent) => boolean
}

interface TimelineEvent extends ResultEvent {
  firstChallengeEvent?: ResultEvent
  newPlaceEvent?: ResultEvent
  boostEvent?: ResultEvent
  curseEvent?: ResultEvent
  bingoEvents?: ResultEvent[]
}

const Events = ({ events, teamsData, challenges, filterFunction }: Props) => {
  const { t } = useTranslation()

  const getColorByEventType = (type: ResultEventType) => {
    const colorMap = new Map<ResultEventType, string>([
      [ResultEventType.Start, 'blue'],
      [ResultEventType.Finish, 'red'],
      [ResultEventType.ChallengeCompleted, 'green'],
      [ResultEventType.Bingo, '#ffd700'],
      [ResultEventType.Curse, '#C060C0'],
      [ResultEventType.Boost, '#00bfff'],
      [ResultEventType.FullBoard, '#008000'],
      [ResultEventType.NewPlace, '#ff4500'],
      [ResultEventType.FirstChallenge, '#ffa500'],
    ])
    return colorMap.get(type) ?? 'gray'
  }

  const renderMainTag = (event: TimelineEvent) => {
    return (
      <Tag key="main" color={getColorByEventType(event.type)} style={{ float: 'right' }}>
        {t(`resultEventType.${ResultEventType[event.type]}`)}
      </Tag>
    )
  }

  const renderExtraTags = (event: TimelineEvent) => {
    const tags = []
    if (event.firstChallengeEvent) {
      tags.push(
        <Tag key="firstChallenge" color={getColorByEventType(event.firstChallengeEvent.type)}>
          {t(`resultEventType.${ResultEventType[event.firstChallengeEvent.type]}`)}
        </Tag>,
      )
    }
    if (event.newPlaceEvent) {
      tags.push(
        <Tag key="newPlace" color={getColorByEventType(event.newPlaceEvent.type)}>
          {t(`resultEventType.${ResultEventType[event.newPlaceEvent.type]}`)}
        </Tag>,
      )
    }
    if (event.boostEvent) {
      tags.push(
        <Tag key="boostEvent" color={getColorByEventType(event.boostEvent.type)}>
          {t(`resultEventType.${ResultEventType[event.boostEvent.type]}`)}
        </Tag>,
      )
    }
    if (event.curseEvent) {
      tags.push(
        <Tag key="curseEvent" color={getColorByEventType(event.curseEvent.type)}>
          {t(`resultEventType.${ResultEventType[event.curseEvent.type]}`)}
        </Tag>,
      )
    }
    if (event.bingoEvents && event.bingoEvents?.length > 0) {
      tags.push(
        <Tag key="bingoEvent" color={getColorByEventType(event.bingoEvents[0]?.type)}>
          {t(`resultEventType.${ResultEventType[event.bingoEvents[0]?.type]}`)}
        </Tag>,
      )
    }
    if (event.curseApplied === true) {
      tags.push(
        <Tag key="cursed" color="purple" style={{ textTransform: 'capitalize' }}>
          {t(`timeline.cursed`)}
        </Tag>,
      )
    }
    if (event.boostApplied === true) {
      tags.push(
        <Tag key="boosted" color="blue" style={{ textTransform: 'capitalize' }}>
          {t(`timeline.boosted`)}
        </Tag>,
      )
    }
    return tags.length === 0 ? <></> : <div style={{ paddingBottom: 8 }}>{tags}</div>
  }

  const renderGameStart = () => {
    return <>{t('timeline.game-started')}</>
  }

  const renderGameFinish = () => {
    return <>{t('timeline.game-finished')}</>
  }

  const renderChallengeCompleted = (event: TimelineEvent) => {
    return (
      <ul style={{ paddingLeft: 8 }}>
        {event.points !== undefined && event.points > 0 && event.team && event.challenge && (
          <li>
            <Trans i18nKey={'timeline.solved-and-made-points'}>
              {{
                team: getTeamName(event.team, teamsData),
                challenge: getChallengeTitle(event.challenge, challenges),
                points: event.points,
              }}
            </Trans>
          </li>
        )}

        {event.boostEvent && (
          <li>
            <Trans i18nKey={'timeline.solved-and-team-boosted'}>
              {{
                team: getTeamName(event.team, teamsData),
                challenge: getChallengeTitle(event.challenge, challenges),
                boostMultiplier: event.boostEvent.boostMultiplier,
              }}
            </Trans>
          </li>
        )}
        {event.curseEvent && (
          <li>
            <Trans i18nKey={'timeline.solved-and-cursed-another-team'}>
              {{
                team: getTeamName(event.team, teamsData),
                challenge: getChallengeTitle(event.challenge, challenges),
                cursedTeam: getTeamName(event.cursedTeam, teamsData),
                curseMultiplier: event.curseEvent.curseMultiplier,
              }}
            </Trans>
          </li>
        )}
        {event.firstChallengeEvent && (
          <li>
            <Trans i18nKey={'timeline.solved-first-challenge'}>
              {{
                points: event.firstChallengeEvent.points,
              }}
            </Trans>
          </li>
        )}
        {event.newPlaceEvent && (
          <li>
            <Trans i18nKey={'timeline.visited-a-new-place'}>
              {{
                points: event.newPlaceEvent.points,
                newPlace: event.newPlaceEvent.newPlace,
              }}
            </Trans>
          </li>
        )}
        {event.curseApplied === true && (
          <li>
            <Trans i18nKey={'timeline.curse-applied'}>
              {{
                curseMultiplier: event.curseMultiplier,
              }}
            </Trans>
          </li>
        )}
        {event.boostApplied === true && (
          <li>
            <Trans i18nKey={'timeline.boost-applied'}>
              {{
                boostMultiplier: event.boostMultiplier,
              }}
            </Trans>
          </li>
        )}
        {event.bingoEvents &&
          event.bingoEvents.length > 0 &&
          event.bingoEvents.map(bingo => (
            <li key={bingo.newBingo}>
              <Trans i18nKey={'timeline.made-a-bingo'}>
                {{
                  bingo: t(`bingo.${bingo.newBingo}`),
                  points: bingo.points,
                }}
              </Trans>
            </li>
          ))}
      </ul>
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

  const renderDetails = (event: TimelineEvent) => {
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

  const mergeCompletedChallenge = (
    event: ResultEvent,
    events: ResultEvent[],
    i: number,
  ): TimelineEvent => {
    let j = i + 1
    const timelineEvent: TimelineEvent = { ...event, bingoEvents: [] }

    while (
      j < events.length &&
      events[i].team === events[j].team &&
      events[i].challenge === events[j].challenge
    ) {
      if (events[j].type === ResultEventType.FirstChallenge)
        timelineEvent.firstChallengeEvent = events[j]
      else if (events[j].type === ResultEventType.NewPlace) timelineEvent.newPlaceEvent = events[j]
      else if (events[j].type === ResultEventType.Boost) timelineEvent.boostEvent = events[j]
      else if (events[j].type === ResultEventType.Curse) timelineEvent.curseEvent = events[j]
      else if (events[j].type === ResultEventType.Bingo) timelineEvent.bingoEvents?.push(events[j])

      j++
    }
    return timelineEvent
  }

  const mergeItems = (events: ResultEvent[]): TimelineEvent[] => {
    const timelineEvents: TimelineEvent[] = []

    for (let i = 0; i < events.length; i++) {
      const event = events[i]
      if (
        [ResultEventType.Start, ResultEventType.Finish, ResultEventType.FullBoard].includes(
          event.type,
        )
      )
        timelineEvents.push(event)
      else if (event.type === ResultEventType.ChallengeCompleted) {
        timelineEvents.push(mergeCompletedChallenge(event, events, i))
      }
    }
    return timelineEvents
  }

  const timelineItems = mergeItems(events.filter(filterFunction)).map(
    (event: TimelineEvent, index: number) => ({
      key: index,
      color: getColorByEventType(event.type),
      children: (
        <div className="event-timeline-item">
          <div style={{ paddingBottom: 8 }}>
            <strong>
              <FormattedDate date={event.timestamp} format="time" />
            </strong>
            {event.place && <i style={{ paddingLeft: 8 }}>{event.place}</i>}
            {renderMainTag(event)}
          </div>
          <div style={{ display: 'block' }}>{renderExtraTags(event)}</div>
          <div>{renderDetails(event)}</div>
        </div>
      ),
    }),
  )

  return <Timeline items={timelineItems} />
}

export default Events
