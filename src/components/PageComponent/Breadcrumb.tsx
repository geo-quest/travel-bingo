import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

import {
  KeyObject,
  RunGameData,
  TeamGameData,
  TravelBingoGameData,
} from "../../data/interfaces";
import t2 from "../../utils/t2";
import { DynamicIconComponent } from "../DynamicIcon/DynamicIcon";

interface Props {
  game: TravelBingoGameData & KeyObject;
  run?: RunGameData & KeyObject;
  team?: TeamGameData & KeyObject;
}

export default ({ game, run, team }: Props) => {
  return (
    <Breadcrumb
      items={[
        {
          href: "/",
          title: <HomeOutlined />,
        },
        {
          href: run === undefined ? undefined : `/${game.key}`,
          title: (
            <>
              <DynamicIconComponent iconName={game.icon} />
              <span>{t2(game.title)}</span>
            </>
          ),
        },
        ...(run
          ? [
              {
                href:
                  team === undefined ? undefined : `/${game.key}/${run.key}`,
                title: t2(run.name),
              },
            ]
          : []),
        ...(team ? [{ title: t2(team.name) }] : []),
      ]}
      style={{ marginBottom: "8px" }}
    />
  );
};
