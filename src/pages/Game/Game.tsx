import "./Game.css";

import { setTwoToneColor } from "@ant-design/icons";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import NoPage from "../../components/NoPage/NoPage";
import TravelBingoGame from "../../components/TravelBingoGame/TravelBingoGame";
import { TravelBingoGamesData } from "../../data/interfaces";
import { updateBodyStyle } from "../../utils/update-body-style";

interface Props {
  data: TravelBingoGamesData;
}

function Game({ data }: Props) {
  const { gameId } = useParams();

  if (!gameId || !data[gameId]) return <NoPage />;

  const game = data[gameId];

  useEffect(() => {
    updateBodyStyle(game);
  });

  setTwoToneColor(game.color);

  return (
    <div className="app-container">
      <Breadcrumb game={{ ...game, id: gameId }} />
      <TravelBingoGame game={{ ...game, id: gameId }} />
    </div>
  );
}

export default Game;
