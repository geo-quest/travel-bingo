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
  const { gameKey, runKey } = useParams();

  if (!gameKey || !runKey || !data[gameKey] || !data[gameKey].runs[runKey])
    return <NoPage />;

  const game = data[gameKey];
  const run = data[gameKey].runs[runKey];

  useEffect(() => {
    updateBodyStyle(game);
  });

  setTwoToneColor(game.color);

  return (
    <div className="app-container">
      <Breadcrumb game={{ ...game, id: gameKey }} run={run.name} />
      <GameLeaderBoard
        game={{ ...game, key: gameKey }}
        run={{ ...run, key: runKey }}
      />
    </div>
  );
}

export default Run;
