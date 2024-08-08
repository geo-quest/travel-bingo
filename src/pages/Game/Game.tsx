import "./Game.css";

import { useParams } from "react-router-dom";

import NoPage from "../../components/NoPage/NoPage";
import TravelBingoGame from "../../components/TravelBingoGame/TravelBingoGame";
import { TravelBingoGamesData } from "../../data/interfaces";

interface Props {
  data: TravelBingoGamesData;
}

function Game({ data }: Props) {
  const { gameId } = useParams();

  if (!gameId || !data[gameId]) return <NoPage />;

  return (
    <div className="app-container">
      <TravelBingoGame data={data[gameId]} />
    </div>
  );
}

export default Game;
