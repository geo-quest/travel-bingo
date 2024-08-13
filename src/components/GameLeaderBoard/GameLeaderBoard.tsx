import './GameLeaderBoard.css'

import NoPage from 'components/NoPage/NoPage'
import { KeyObject, RunGameData, RunGameStatus, TravelBingoGameData } from 'data/interfaces'
import { calculateScore } from 'engine/calculate-score'

import FinishedRun from './FinishedRun'
import PlannedRun from './PlannedRun'
import StartedRun from './StartedRun'

interface Props {
  run: RunGameData & KeyObject
  game: TravelBingoGameData & KeyObject
}

const GameLeaderBoard = ({ run, game }: Props) => {
  const events = calculateScore(run, game.challenges)
  const state = events[events.length - 1].state

  if (state.status === RunGameStatus.Planned) return <PlannedRun run={run} game={game} />
  else if (state.status === RunGameStatus.Finished)
    return <FinishedRun game={game} run={run} state={state} events={events} />
  else if (state.status === RunGameStatus.Started)
    return <StartedRun game={game} run={run} event={events[events.length - 1]} />
  else return <NoPage />
}

export default GameLeaderBoard
