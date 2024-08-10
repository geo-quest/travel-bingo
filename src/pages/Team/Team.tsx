import NoPage from "../../components/NoPage/NoPage";
import { TravelBingoGamesData } from "../../data/interfaces";
import { getDataBasedOnParams } from "../../utils/get-data-based-on-params";

interface Props {
  data: TravelBingoGamesData;
}

function Team({ data }: Props) {
  const { game, run, team } = getDataBasedOnParams(data);

  if (!game || !run || !team) return <NoPage />;

  return (
    <>
      <h1>{game.title}</h1>
      <h2>{run.name}</h2>
      <h3>{team.name}</h3>
    </>
  );
}

export default Team;
