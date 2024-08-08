import "./Run.css";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import NoPage from "../../components/NoPage/NoPage";
import { TravelBingoGamesData } from "../../data/interfaces";
import { updateBodyStyle } from "../../utils/update-body-style";
import LeaderBoard from "./LeaderBoard";
import Podium from "./Podium";

interface Props {
  data: TravelBingoGamesData;
}

function Run({ data }: Props) {
  const { gameId } = useParams();

  if (!gameId || !data[gameId]) return <NoPage />;

  const game = data[gameId];

  useEffect(() => {
    updateBodyStyle(game);
  });

  return (
    <div className="app-container">
      <Podium />
      <LeaderBoard />
    </div>
  );
}

export default Run;
