import { setTwoToneColor } from "@ant-design/icons";

import { TravelBingoGameData } from "../data/interfaces";

export function updateBodyStyle(game: TravelBingoGameData) {
  document.body.style.backgroundColor = game.backgroundColor;
  setTwoToneColor(game.color);
}
