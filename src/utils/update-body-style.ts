import { TravelBingoGameData } from "../data/interfaces";

export function updateBodyStyle(game: TravelBingoGameData) {
  document.body.style.backgroundColor = game.color;
}
