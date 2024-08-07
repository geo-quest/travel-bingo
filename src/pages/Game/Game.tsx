import "./Game.css";

import { setTwoToneColor } from "@ant-design/icons";

import challenge from "../../challenge.json";
import NLAug24 from "../../games/NLAug24/NLAug24";

function Game() {
  setTwoToneColor("#89cdbe");

  return (
    <div className="app-container">
      <NLAug24 travelBingo={challenge} />
    </div>
  );
}

export default Game;
