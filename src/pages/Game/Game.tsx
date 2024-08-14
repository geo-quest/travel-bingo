import NoPage from 'components/NoPage/NoPage'
import PageComponent from 'components/PageComponent/PageComponent'
import TravelBingoGame from 'components/TravelBingoGame/TravelBingoGame'
import { TravelBingoGamesData } from 'data/interfaces'
import { getDataBasedOnParams } from 'utils/get-data-based-on-params'

interface Props {
  data: TravelBingoGamesData
}

const Game = ({ data }: Props) => {
  const { game } = getDataBasedOnParams(data)
  if (!game) return <NoPage />

  return (
    <PageComponent game={game}>
      <TravelBingoGame game={game} />
    </PageComponent>
  )
}

export default Game
