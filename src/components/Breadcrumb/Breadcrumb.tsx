import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

import { KeyObject, TravelBingoGameData } from "../../data/interfaces";
import { DynamicIconComponent } from "../DynamicIcon/DynamicIcon";

interface Props {
  game: TravelBingoGameData & KeyObject;
  run?: string;
}

export default ({ game, run }: Props) => {
  return (
    <Breadcrumb
      items={[
        {
          href: "/",
          title: <HomeOutlined />,
        },
        {
          href: run === undefined ? undefined : "/" + game.key,
          title: (
            <>
              <DynamicIconComponent iconName={game.icon} />
              <span>{game.title}</span>
            </>
          ),
        },
        ...(run ? [{ title: run }] : []),
      ]}
      style={{ marginBottom: "8px" }}
    />
  );
};
