import { TravelBingoGamesData } from "./interfaces";
import testGame from "./test-game";
import testGameNl from "./test-game.nl";
import testGamePt from "./test-game.pt";
import testGameZh from "./test-game.zh";

export default (language: string) => {
  if (language.startsWith("pt")) {
    return {
      "test-game": testGamePt,
      "test-game2": {
        ...testGamePt,
        title: "Canais de Utrecht",
        icon: "BankTwoTone",
        color: "#ffa500",
        backgroundColor: "#ffffe0",
      },
    } as TravelBingoGamesData;
  }

  if (language.startsWith("nl")) {
    return {
      "test-game": testGameNl,
      "test-game2": {
        ...testGameNl,
        title: "Utrechtse grachten",
        icon: "BankTwoTone",
        color: "#ffa500",
        backgroundColor: "#ffffe0",
      },
    } as TravelBingoGamesData;
  }

  if (language.startsWith("zh")) {
    return {
      "test-game": testGameZh,
      "test-game2": {
        ...testGameZh,
        title: "乌得勒支运河",
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
