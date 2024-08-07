import "./GameEdition.css";

import { setTwoToneColor } from "@ant-design/icons";

import BoardPage from "../../board-page/BoardPage";
import challenge from "../../challenge.json";

function GameEdition() {
  setTwoToneColor("#89cdbe");

  return (
    <div className="app-container">
      <BoardPage travelBingo={challenge} />
    </div>
  );
}

export default GameEdition;
