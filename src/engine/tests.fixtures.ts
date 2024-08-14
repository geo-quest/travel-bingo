import {
  Challenge,
  Event,
  EventType,
  RunGameData,
  RunGameState,
  RunGameStatus,
} from 'data/interfaces'

export const runGameData = (overrides?: Partial<RunGameData>): RunGameData => {
  return {
    name: { en: 'game-1' },
    date: '2024-08-12T00:00:00',
    teams: { 'team-a': { en: 'Team A' }, 'team-b': { en: 'Team B' } },
    events: [],
    ...overrides,
  } as RunGameData
}

export const event = (overrides?: Partial<Event>): Event => {
  return {
    type: EventType.ChallengeCompleted,
    timestamp: '2024-08-12T10:00:00',
    ...overrides,
  } as Event
}

export const challenges = (): Challenge[][] => {
  return [
    [
      { key: 'challenge-1', challenge: { en: 'Challenge 1' }, points: 100 },
      { key: 'challenge-2', challenge: { en: 'Challenge 2' }, points: 100 },
    ],
    [
      { key: 'challenge-3', challenge: { en: 'Challenge 3' }, points: 100 },
      { key: 'challenge-4', challenge: { en: 'Challenge 4' }, points: 100 },
    ],
  ] as Challenge[][]
}

export const state = (overrides?: Partial<RunGameState>): RunGameState => {
  return {
    status: RunGameStatus.Started,
    teams: [
      { team: 'team-a', rank: 0, score: 0, bingos: 0, completedChallenges: [] },
      { team: 'team-b', rank: 0, score: 0, bingos: 0, completedChallenges: [] },
    ],
    ...overrides,
  } as RunGameState
}
