import { TravelBingoGamesData } from "./interfaces";
import testGame from "./test-game";

export default () => {
  return {
    "test-game": testGame,
    "test-game2": {
      ...testGame,
      title: { en: "Utrecht Canals" },
      icon: "BankTwoTone",
      color: "#ffa500",
      backgroundColor: "#ffffe0",
    },
  } as TravelBingoGamesData;
};
