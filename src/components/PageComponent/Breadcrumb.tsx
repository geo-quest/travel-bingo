import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

import {
  KeyObject,
  RunGameData,
  TeamGameData,
  TravelBingoGameData,
} from "../../data/interfaces";
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
              <span>{game.title}</span>
            </>
          ),
        },
        ...(run
          ? [
              {
                href:
                  team === undefined ? undefined : `/${game.key}/${run.key}`,
                title: run.name,
              },
            ]
          : []),
        ...(team ? [{ title: team.name }] : []),
      ]}
      style={{ marginBottom: "8px" }}
    />
  );
};
