import "./Run.css";

import { setTwoToneColor } from "@ant-design/icons";
import { useEffect } from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import GameLeaderBoard from "../../components/GameLeaderBoard/GameLeaderBoard";
import NoPage from "../../components/NoPage/NoPage";
import { TravelBingoGamesData } from "../../data/interfaces";
import { getDataBasedOnParams } from "../../utils/get-data-based-on-params";
import { updateBodyStyle } from "../../utils/update-body-style";

interface Props {
  data: TravelBingoGamesData;
}

function Run({ data }: Props) {
  const { game, run } = getDataBasedOnParams(data);

  if (!game || !run) return <NoPage />;

  useEffect(() => {
    updateBodyStyle(game);
  });

  setTwoToneColor(game.color);

  return (
    <div className="app-container">
      <Breadcrumb game={game} run={run} />
      <GameLeaderBoard game={game} run={run} />
    </div>
  );
}

export default Run;
