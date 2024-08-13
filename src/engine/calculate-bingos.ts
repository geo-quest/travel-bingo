import { Challenge } from '../data/interfaces'

export function calculateBingos(solvedChallenges: string[], challenges: Challenge[][]): number {
  const numRows = challenges.length
  const numCols = challenges[0].length

  const isRowSolved = (row: number, c: string[]): boolean =>
    challenges[row].every(challenge => c.includes(challenge.key))

  const isColSolved = (col: number, c: string[]): boolean =>
    challenges.every(row => c.includes(row[col].key))

  const isMainDiagonalSolved = (c: string[]): boolean =>
    challenges.every((_row, i) => c.includes(challenges[i][i].key))

  const isSecondaryDiagonalSolved = (c: string[]): boolean =>
    challenges.every((_row, i) => c.includes(challenges[i][numCols - 1 - i].key))

  let bingos = 0

  for (let i = 0; i < numRows; i++) if (isRowSolved(i, solvedChallenges)) bingos++

  for (let i = 0; i < numCols; i++) if (isColSolved(i, solvedChallenges)) bingos++

  if (isMainDiagonalSolved(solvedChallenges)) bingos++
  if (isSecondaryDiagonalSolved(solvedChallenges)) bingos++

  return bingos
}
