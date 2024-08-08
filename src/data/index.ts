import { TravelBingoGamesData } from "./interfaces";
import testGame from "./test-game";

export default {
  "test-game": testGame,
  "test-game2": {
    ...testGame,
    title: "Utrecht Canals",
    icon: "BankTwoTone",
    color: "#ffa500",
  },
} as TravelBingoGamesData;
