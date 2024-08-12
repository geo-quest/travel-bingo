import { useParams } from 'react-router-dom'

import {
  KeyObject,
  RunGameData,
  TeamGameData,
  TravelBingoGameData,
  TravelBingoGamesData,
} from '../data/interfaces'

export function getDataBasedOnParams(data: TravelBingoGamesData): {
  game?: TravelBingoGameData & KeyObject
  run?: RunGameData & KeyObject
  team?: TeamGameData & KeyObject
} {
  const { gameKey, runKey, teamKey } = useParams()

  const game = gameKey ? data[gameKey] : undefined
  const run = game && runKey ? game.runs[runKey] : undefined
  const team = run && teamKey ? run.teams[teamKey] : undefined

  return {
    game: gameKey && game ? { ...game, key: gameKey } : undefined,
    run: runKey && run ? { ...run, key: runKey } : undefined,
    team: teamKey && team ? { ...team, key: teamKey } : undefined,
  }
}
