import { Challenge, Event, ResultEvent, RunGameState, RunGameStatus } from 'data/interfaces'

import { calculateBingos } from './calculate-bingos'
import { EngineError } from './types'

export function handleChallengeCompleted(
  event: Event,
  state: RunGameState,
  challenges: Challenge[][],
): ResultEvent[] {
  if (!event.team) throw new EngineError('"team" must be defined')
  if (!event.challenge) throw new EngineError('"challenge" must be defined')
  if (state.status !== RunGameStatus.Started)
    throw new EngineError('invalid state for a challengeCompleted event')

  const team = state.teams.find(t => t.team === event.team)
  const challenge = challenges.flat().find(c => c.key === event.challenge)

  if (!team) throw new EngineError(`team "${event.team}" not found`)
  if (!challenge) throw new EngineError(`challenge "${event.challenge}" not found`)
  if (team.completedChallenges.find(c => c === event.challenge))
    throw new EngineError(`challenge "${event.challenge}" already completed by ${event.team}`)

  return [
    {
      ...event,
      state: {
        ...state,
        teams: state.teams
          .map(t => {
            if (t.team !== event.team) return t
            const completedChallenges = t.completedChallenges.concat([challenge.key])
            return {
              ...t,
              score: t.score + challenge.points,
              bingos: calculateBingos(completedChallenges, challenges),
              completedChallenges: completedChallenges,
            }
          })
          .sort((a, b) => b.score - a.score)
          .map((t, idx) => {
            return { ...t, rank: idx + 1 }
          }),
      },
      points: challenge.points,
    },
  ] as ResultEvent[]
}
