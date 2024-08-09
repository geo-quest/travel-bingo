import "./Run.css";

import { setTwoToneColor } from "@ant-design/icons";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import NoPage from "../../components/NoPage/NoPage";
import { TravelBingoGamesData } from "../../data/interfaces";
import { updateBodyStyle } from "../../utils/update-body-style";
import LeaderBoard from "./LeaderBoard";
import Podium from "./Podium";

interface Props {
  data: TravelBingoGamesData;
}

function Run({ data }: Props) {
  const { gameId, runId } = useParams();

  if (!gameId || !data[gameId]) return <NoPage />;

  const game = data[gameId];

  useEffect(() => {
    updateBodyStyle(game);
  });

  setTwoToneColor(game.color);

  return (
    <div className="app-container">
      <Breadcrumb game={{ ...game, id: gameId }} run={runId} />
      <Podium />
      <LeaderBoard />
    </div>
  );
}

export default Run;
