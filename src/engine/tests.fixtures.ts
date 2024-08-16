import {
  Challenge,
  ChallengeType,
  Event,
  EventType,
  RunGameData,
  RunGameState,
  RunGameStatus,
  TravelBingoRules,
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

export const challenges = ({
  curseChallenge1 = false,
  curseChallenge2 = false,
  boostChallenge3 = false,
  boostChallenge4 = false,
}: {
  curseChallenge1?: boolean
  curseChallenge2?: boolean
  boostChallenge3?: boolean
  boostChallenge4?: boolean
} = {}): Challenge[][] => {
  return [
    [
      curseChallenge1
        ? {
            key: 'challenge-1',
            type: ChallengeType.Curse,
            curseMultiplier: 0.5,
            challenge: { en: 'Challenge 1' },
          }
        : {
            key: 'challenge-1',
            type: ChallengeType.Normal,
            challenge: { en: 'Challenge 1' },
            points: 100,
          },
      curseChallenge2
        ? {
            key: 'challenge-2',
            type: ChallengeType.Curse,
            curseMultiplier: 0.9,
            challenge: { en: 'Challenge 2' },
          }
        : {
            key: 'challenge-2',
            type: ChallengeType.Normal,
            challenge: { en: 'Challenge 2' },
            points: 100,
          },
    ],
    [
      boostChallenge3
        ? {
            key: 'challenge-3',
            type: ChallengeType.Boost,
            boostMultiplier: 2,
            challenge: { en: 'Challenge 3' },
          }
        : {
            key: 'challenge-3',
            type: ChallengeType.Normal,
            challenge: { en: 'Challenge 3' },
            points: 100,
          },
      boostChallenge4
        ? {
            key: 'challenge-4',
            type: ChallengeType.Boost,
            boostMultiplier: 3,
            challenge: { en: 'Challenge 4' },
          }
        : {
            key: 'challenge-4',
            type: ChallengeType.Normal,
            challenge: { en: 'Challenge 4' },
            points: 100,
          },
    ],
  ] as Challenge[][]
}

export const state = (overrides?: Partial<RunGameState>): RunGameState => {
  return {
    status: RunGameStatus.Started,
    firstChallengeCompleted: false,
    teams: [
      { team: 'team-a', rank: 0, score: 0, bingos: [], places: [], completedChallenges: [] },
      { team: 'team-b', rank: 0, score: 0, bingos: [], places: [], completedChallenges: [] },
    ],
    ...overrides,
  } as RunGameState
}

export const rules = (overrides?: Partial<TravelBingoRules>): TravelBingoRules => {
  return {
    bonusPointsPerBingo: 20,
    bonusPointsPerPlace: 10,
    bonusForFirstChallenge: 30,
    ...overrides,
  } as TravelBingoRules
}
