import { Challenge } from 'data/interfaces'

import { calculateBingos } from './calculate-bingos'

describe('calculateBingos', () => {
  const createChallengeSet = (setNumber: number): Challenge[] => {
    return Array.from({ length: 5 }, (_, index) => ({
      key: `c${setNumber}-${index + 1}`,
      challenge: { en: `challenge${setNumber}-${index + 1}` },
      points: 100,
    }))
  }

  const challenges = [
    createChallengeSet(1),
    createChallengeSet(2),
    createChallengeSet(3),
    createChallengeSet(4),
    createChallengeSet(5),
  ] as Challenge[][]

  it('should return 0 bingos when no challenges are solved', () => {
    expect(calculateBingos([], challenges)).toBe(0)
  })

  it('should return 1 bingo for a solved row', () => {
    expect(calculateBingos(['c1-1', 'c1-2', 'c1-3', 'c1-4', 'c1-5'], challenges)).toBe(1)
  })

  it('should return 1 bingo for a solved column', () => {
    expect(calculateBingos(['c1-1', 'c2-1', 'c3-1', 'c4-1', 'c5-1'], challenges)).toBe(1)
  })

  it('should return 1 bingo for the solved main diagonal', () => {
    expect(calculateBingos(['c1-1', 'c2-2', 'c3-3', 'c4-4', 'c5-5'], challenges)).toBe(1)
  })

  it('should return 1 bingo for the solved secondary diagonal', () => {
    expect(calculateBingos(['c1-5', 'c2-4', 'c3-3', 'c4-2', 'c5-1'], challenges)).toBe(1)
  })

  it('should return 2 bingos for a solved row and a solved column', () => {
    expect(
      calculateBingos(
        ['c1-1', 'c1-2', 'c1-3', 'c1-4', 'c1-5', 'c2-1', 'c3-1', 'c4-1', 'c5-1'],
        challenges,
      ),
    ).toBe(2)
  })

  it('should return 2 bingos for the solved main diagonal and the solved secondary diagonal', () => {
    expect(
      calculateBingos(
        ['c1-1', 'c2-2', 'c3-3', 'c4-4', 'c5-5', 'c1-5', 'c2-4', 'c3-3', 'c4-2', 'c5-1'],
        challenges,
      ),
    ).toBe(2)
  })

  it('should return 12 bingos for a completely solved 5x5 grid', () => {
    expect(
      calculateBingos(
        [
          'c1-1',
          'c1-2',
          'c1-3',
          'c1-4',
          'c1-5',
          'c2-1',
          'c2-2',
          'c2-3',
          'c2-4',
          'c2-5',
          'c3-1',
          'c3-2',
          'c3-3',
          'c3-4',
          'c3-5',
          'c4-1',
          'c4-2',
          'c4-3',
          'c4-4',
          'c4-5',
          'c5-1',
          'c5-2',
          'c5-3',
          'c5-4',
          'c5-5',
        ],
        challenges,
      ),
    ).toBe(12)
  })
})
