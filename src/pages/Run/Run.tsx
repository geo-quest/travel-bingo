import "./Run.css";

import { setTwoToneColor } from "@ant-design/icons";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import GameLeaderBoard from "../../components/GameLeaderBoard/GameLeaderBoard";
import NoPage from "../../components/NoPage/NoPage";
import { TravelBingoGamesData } from "../../data/interfaces";
import { updateBodyStyle } from "../../utils/update-body-style";

interface Props {
  data: TravelBingoGamesData;
}

function Run({ data }: Props) {
  const { gameId, runId } = useParams();

  if (!gameId || !runId || !data[gameId] || !data[gameId].runs[runId])
    return <NoPage />;

  const game = data[gameId];
  const run = data[gameId].runs[runId];

  useEffect(() => {
    updateBodyStyle(game);
  });

  setTwoToneColor(game.color);

  return (
    <div className="app-container">
      <Breadcrumb game={{ ...game, id: gameId }} run={run.name} />
      <GameLeaderBoard />
    </div>
  );
}

export default Run;
