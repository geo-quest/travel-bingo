import { TravelBingoGamesData } from "./interfaces";
import testGame from "./test-game";

export default {
  "test-game": testGame,
  "test-game2": {
    ...testGame,
    key: "test-game2",
    title: "Utrecht Canals",
    icon: "BankTwoTone",
    color: "#ffa500",
    backgroundColor: "#ffffe0",
  },
} as TravelBingoGamesData;
