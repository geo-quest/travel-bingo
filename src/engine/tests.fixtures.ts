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
  useCurse = false,
  useBoost = false,
  useSecondBoost = false,
}: { useCurse?: boolean; useBoost?: boolean; useSecondBoost?: boolean } = {}): Challenge[][] => {
  return [
    [
      {
        key: 'challenge-1',
        type: useCurse === true ? ChallengeType.Curse : ChallengeType.Normal,
        curseMultiplier: useCurse === true ? 0.5 : undefined,
        challenge: { en: 'Challenge 1' },
        points: useCurse === true ? 0 : 100,
      },
      {
        key: 'challenge-2',
        type: ChallengeType.Normal,
        challenge: { en: 'Challenge 2' },
        points: 100,
      },
    ],
    [
      {
        key: 'challenge-3',
        type: useBoost === true ? ChallengeType.Boost : ChallengeType.Normal,
        boostMultiplier: useBoost === true ? 2 : undefined,
        challenge: { en: 'Challenge 3' },
        points: useBoost === true ? 0 : 100,
      },
      {
        key: 'challenge-4',
        type: useSecondBoost === true ? ChallengeType.Boost : ChallengeType.Normal,
        boostMultiplier: useSecondBoost === true ? 3 : undefined,
        challenge: { en: 'Challenge 4' },
        points: useSecondBoost === true ? 0 : 100,
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
