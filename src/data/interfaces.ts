export type Markdown = string;

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
  shortDescription: string;
  gamePlay: Markdown;
  challenges: Challenge[][];
}

export interface TravelBingoGamesData {
  [name: string]: TravelBingoGameData;
}
