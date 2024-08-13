import GameLeaderBoard from 'components/GameLeaderBoard/GameLeaderBoard'
import NoPage from 'components/NoPage/NoPage'
import PageComponent from 'components/PageComponent/PageComponent'
import { TravelBingoGamesData } from 'data/interfaces'
import { getDataBasedOnParams } from 'utils/get-data-based-on-params'

interface Props {
  data: TravelBingoGamesData
}

function Run({ data }: Props) {
  const { game, run } = getDataBasedOnParams(data)
  if (!game || !run) return <NoPage />

  return (
    <PageComponent game={game} run={run}>
      <GameLeaderBoard game={game} run={run} />
    </PageComponent>
  )
}

export default Run
