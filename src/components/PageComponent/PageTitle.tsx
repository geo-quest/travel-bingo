import DynamicIcon from 'components/DynamicIcon/DynamicIcon'
import { KeyObject, RunGameData, TeamGameData, TravelBingoGameData } from 'data/interfaces'
import t2 from 'utils/t2'

interface Props {
  game: TravelBingoGameData & KeyObject
  run?: RunGameData & KeyObject
  team?: TeamGameData & KeyObject
}

const PageTitle = ({ game, run, team }: Props) => {
  const getTitle = () => {
    if (team) return team.name
    if (run) return t2(run.name)
    return t2(game.title)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <DynamicIcon iconName={game.icon} style={{ marginRight: 8, fontSize: '32px' }} />
      <h2 style={{ margin: 0 }}>{getTitle()}</h2>
    </div>
  )
}

export default PageTitle
