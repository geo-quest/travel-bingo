import "./Game.css";

import { setTwoToneColor } from "@ant-design/icons";
import { useEffect } from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import NoPage from "../../components/NoPage/NoPage";
import TravelBingoGame from "../../components/TravelBingoGame/TravelBingoGame";
import { TravelBingoGamesData } from "../../data/interfaces";
import { getDataBasedOnParams } from "../../utils/get-data-based-on-params";
import { updateBodyStyle } from "../../utils/update-body-style";

interface Props {
  data: TravelBingoGamesData;
}

function Game({ data }: Props) {
  const { game } = getDataBasedOnParams(data);

  if (!game) return <NoPage />;

  useEffect(() => {
    updateBodyStyle(game);
  });

  setTwoToneColor(game.color);

  return (
    <div className="app-container">
      <Breadcrumb game={game} />
      <TravelBingoGame game={game} />
    </div>
  );
}

export default Game;
