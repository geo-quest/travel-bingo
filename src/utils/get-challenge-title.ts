import { Challenge } from 'data/interfaces'

import t2 from './t2'

export function getChallengeTitle(key: string, challenges: Challenge[][]): string {
  for (const c of challenges.flat()) {
    if (c.key === key) return t2(c.challenge)
  }
  return ''
}
