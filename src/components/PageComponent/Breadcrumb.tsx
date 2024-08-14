import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import DynamicIcon from 'components/DynamicIcon/DynamicIcon'
import { KeyObject, RunGameData, TeamGameData, TravelBingoGameData } from 'data/interfaces'
import t2 from 'utils/t2'

interface Props {
  game: TravelBingoGameData & KeyObject
  run?: RunGameData & KeyObject
  team?: TeamGameData & KeyObject
}

export default ({ game, run, team }: Props) => {
  return (
    <Breadcrumb
      items={[
        {
          href: '/',
          title: <HomeOutlined />,
        },
        {
          href: run === undefined ? undefined : `/${game.key}`,
          title: (
            <>
              <DynamicIcon iconName={game.icon} />
              <span>{t2(game.title)}</span>
            </>
          ),
        },
        ...(run
          ? [
              {
                href: team === undefined ? undefined : `/${game.key}/${run.key}`,
                title: t2(run.name),
              },
            ]
          : []),
        ...(team ? [{ title: team.name }] : []),
      ]}
      style={{ marginBottom: '8px' }}
    />
  )
}
