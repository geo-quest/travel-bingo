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
import LanguageSelector from "../LanguageSelector/LanguageSelector";
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
    document.body.style.backgroundColor = game.backgroundColor;
  });

  setTwoToneColor(game.color);

  return (
    <div className="app-container">
      <Breadcrumb game={game} run={run} team={team} />
      <Card title={<PageTitle game={game} run={run} team={team} />}>
        {children}
      </Card>
      <div style={{ textAlign: "center", paddingBottom: "24px" }}>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default PageComponent;
