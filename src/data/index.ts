import { TravelBingoGamesData } from "./interfaces";
import testGame from "./test-game";
import testGamePtBr from "./test-game.pt-br";

export default (language: string) => {
  if (language.startsWith("pt")) {
    return {
      "test-game": testGamePtBr,
      "test-game2": {
        ...testGamePtBr,
        title: "Canais de Utrecht",
        icon: "BankTwoTone",
        color: "#ffa500",
        backgroundColor: "#ffffe0",
      },
    } as TravelBingoGamesData;
  }

  return {
    "test-game": testGame,
    "test-game2": {
      ...testGame,
      title: "Utrecht Canals",
      icon: "BankTwoTone",
      color: "#ffa500",
      backgroundColor: "#ffffe0",
    },
  } as TravelBingoGamesData;
};
