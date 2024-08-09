export type Markdown = string;

export interface TeamChallenge {
  name: string;
  date: string;
}

export interface Team {
  team: string;
  challenges: TeamChallenge[];
}

export interface Run {
  name: string;
  date: string;
  teams: Team[];
}

export interface Runs {
  [name: string]: Run;
}

export interface Challenge {
  challenge: string;
  description: Markdown;
  image?: string;
  points: number;
  type: string;
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
