import { Challenge, RunGameData } from '../data/interfaces'
import { calculateScore } from './calculate-score'

const challenges: Challenge[][] = [
  [
    { key: 'Challenge 1', challenge: { en: 'Challenge 1' }, points: 100 },
    { key: 'Challenge 2', challenge: { en: 'Challenge 2' }, points: 100 },
  ],
  [
    { key: 'Challenge 3', challenge: { en: 'Challenge 3' }, points: 100 },
    { key: 'Challenge 4', challenge: { en: 'Challenge 4' }, points: 100 },
  ],
]

describe('calculateLeaderBoard', () => {
  it('should return an empty leader board when no teams participate', () => {
    const run: RunGameData = {
      teams: {},
      name: { en: 'game-1' },
      finished: true,
    }

    const result = calculateScore(run, challenges)

    expect(result).toEqual({
      teams: [],
    })
  })

  it('should correctly calculate the leader board with ranks', () => {
    const run: RunGameData = {
      name: { en: 'Summer edition' },
      finished: false,
      teams: {
        'team-a': {
          name: { en: 'Team A' },
          challenges: [
            { key: 'Challenge 1', date: 'Aug 9' },
            { key: 'Challenge 2', date: 'Aug 9' },
          ],
        },
        'team-b': {
          name: { en: 'Team B' },
          challenges: [{ key: 'Challenge 4', date: 'Aug 9' }],
        },
        'team-c': {
          name: { en: 'Team C' },
          challenges: [{ key: 'Challenge 2', date: 'Aug 9' }],
        },
        'team-d': {
          name: { en: 'Team D' },
          challenges: [
            { key: 'Challenge 1', date: 'Aug 9' },
            { key: 'Challenge 2', date: 'Aug 9' },
            { key: 'Challenge 3', date: 'Aug 9' },
            { key: 'Challenge 4', date: 'Aug 9' },
          ],
        },
      },
    }

    const challenges: Challenge[][] = [
      [
        { key: 'Challenge 1', challenge: { en: 'Challenge 1' }, points: 100 },
        { key: 'Challenge 2', challenge: { en: 'Challenge 2' }, points: 100 },
      ],
      [
        { key: 'Challenge 3', challenge: { en: 'Challenge 3' }, points: 100 },
        { key: 'Challenge 4', challenge: { en: 'Challenge 4' }, points: 100 },
      ],
    ]

    const result = calculateScore(run, challenges)

    expect(result).toEqual({
      teams: [
        {
          key: 'team-d',
          name: { en: 'Team D' },
          score: 400,
          rank: 1,
          challenges: [
            { key: 'Challenge 1', date: 'Aug 9' },
            { key: 'Challenge 2', date: 'Aug 9' },
            { key: 'Challenge 3', date: 'Aug 9' },
            { key: 'Challenge 4', date: 'Aug 9' },
          ],
          bingos: 6,
        },
        {
          key: 'team-a',
          name: { en: 'Team A' },
          score: 200,
          rank: 2,
          bingos: 1,
          challenges: [
            { key: 'Challenge 1', date: 'Aug 9' },
            { key: 'Challenge 2', date: 'Aug 9' },
          ],
        },
        {
          key: 'team-b',
          name: { en: 'Team B' },
          score: 100,
          rank: 3,
          bingos: 0,
          challenges: [{ key: 'Challenge 4', date: 'Aug 9' }],
        },
        {
          key: 'team-c',
          name: { en: 'Team C' },
          score: 100,
          rank: 4,
          bingos: 0,
          challenges: [{ key: 'Challenge 2', date: 'Aug 9' }],
        },
      ],
    })
  })
})
