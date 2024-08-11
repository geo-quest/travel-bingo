import {
  KeyObject,
  RunGameData,
  TeamGameData,
  TravelBingoGameData,
} from "../../data/interfaces";
import t2 from "../../utils/t2";
import { DynamicIconComponent } from "../DynamicIcon/DynamicIcon";

interface Props {
  game: TravelBingoGameData & KeyObject;
  run?: RunGameData & KeyObject;
  team?: TeamGameData & KeyObject;
}

function PageTitle({ game, run, team }: Props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <DynamicIconComponent
        iconName={game.icon}
        style={{ marginRight: 8, fontSize: "32px" }}
      />
      <h2 style={{ margin: 0 }}>
        {team ? t2(team.name) : run ? t2(run.name) : t2(game.title)}
      </h2>
    </div>
  );
}

export default PageTitle;
