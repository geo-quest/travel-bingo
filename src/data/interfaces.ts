export type Markdown = string;

export interface KeyObject {
  key: string;
}

export interface TeamChallenge {
  name: string;
  date: string;
}

export interface TeamGameData {
  name: string;
  challenges: TeamChallenge[];
}

export interface Teams {
  [name: string]: TeamGameData;
}

export interface RunGameData {
  name: string;
  date?: string;
  lastUpdate?: string;
  teams: Teams;
}

export interface Runs {
  [name: string]: RunGameData;
}

export interface Challenge {
  challenge: string;
  points: number;
  description?: Markdown;
  image?: string;
  type?: string;
}

export interface TravelBingoGameData {
  title: string;
  icon: string;
  color: string;
  backgroundColor: string;
  shortDescription: string;
  gamePlay: Markdown;
  challenges: Challenge[][];
  runs: Runs;
}

export interface TravelBingoGamesData {
  [name: string]: TravelBingoGameData;
}
