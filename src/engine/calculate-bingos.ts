import { Challenge } from '../data/interfaces'

export function calculateBingos(
  completedChallenges: string[],
  challenges: Challenge[][],
): string[] {
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

  const bingos = []

  for (let i = 0; i < numRows; i++) if (isRowSolved(i, completedChallenges)) bingos.push(`row-${i}`)

  for (let i = 0; i < numCols; i++) if (isColSolved(i, completedChallenges)) bingos.push(`col-${i}`)

  if (numCols === numRows && isMainDiagonalSolved(completedChallenges)) bingos.push('main-diagonal')
  if (numCols === numRows && isSecondaryDiagonalSolved(completedChallenges))
    bingos.push('secondary-diagonal')

  return bingos
}
