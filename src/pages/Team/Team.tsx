import { setTwoToneColor } from "@ant-design/icons";
import { useEffect } from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import NoPage from "../../components/NoPage/NoPage";
import TeamResults from "../../components/TeamResults/TeamResults";
import { TravelBingoGamesData } from "../../data/interfaces";
import { getDataBasedOnParams } from "../../utils/get-data-based-on-params";
import { updateBodyStyle } from "../../utils/update-body-style";

interface Props {
  data: TravelBingoGamesData;
}

function Team({ data }: Props) {
  const { game, run, team } = getDataBasedOnParams(data);

  if (!game || !run || !team) return <NoPage />;

  useEffect(() => {
    updateBodyStyle(game);
  });

  setTwoToneColor(game.color);

  return (
    <div className="app-container">
      <Breadcrumb game={game} run={run} team={team} />
      <TeamResults game={game} run={run} team={team} />
    </div>
  );
}

export default Team;
