import "./Game.css";

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

  return (
    <div className="app-container">
      <Breadcrumb game={{ ...game, id: gameId }} />
      <TravelBingoGame data={game} />
    </div>
  );
}

export default Game;
