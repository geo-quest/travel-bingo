import "./PageComponent.css";

import { setTwoToneColor } from "@ant-design/icons";
import { Card } from "antd";
import { useEffect } from "react";

import {
  KeyObject,
  RunGameData,
  TeamGameData,
  TravelBingoGameData,
} from "../../data/interfaces";
import { updateBodyStyle } from "../../utils/update-body-style";
import Breadcrumb from "./Breadcrumb";
import PageTitle from "./PageTitle";

interface Props {
  game: TravelBingoGameData & KeyObject;
  run?: RunGameData & KeyObject;
  team?: TeamGameData & KeyObject;
  children: React.ReactNode;
}

const PageComponent = ({ game, run, team, children }: Props) => {
  useEffect(() => {
    updateBodyStyle(game);
  });

  setTwoToneColor(game.color);

  return (
    <div className="app-container">
      <Breadcrumb game={game} run={run} team={team} />
      <Card title={<PageTitle game={game} run={run} team={team} />}>
        {children}
      </Card>
    </div>
  );
};

export default PageComponent;
