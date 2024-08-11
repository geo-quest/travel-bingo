type Markdown = string;
type Date = string;
type Url = string;
type Icon = string;
type Color = string;

export interface LocalizedString {
  [lang: string]: string;
}

export interface LocalizedMarkdown {
  [lang: string]: Markdown;
}

export interface KeyObject {
  key: string;
}

export interface TeamChallenge {
  key: string;
  date: Date;
  comment?: LocalizedMarkdown;
  image?: Url;
}

export interface TeamGameData {
  name: LocalizedString;
  challenges: TeamChallenge[];
}

export interface Teams {
  [name: string]: TeamGameData;
}

export interface RunGameData {
  name: LocalizedString;
  date?: Date;
  lastUpdate?: Date;
  teams: Teams;
}

export interface Runs {
  [name: string]: RunGameData;
}

export interface Challenge {
  key: string;
  challenge: LocalizedString;
  points: number;
  description?: LocalizedMarkdown;
  image?: Url;
  type?: string;
}

export interface TravelBingoGameData {
  title: LocalizedString;
  icon: Icon;
  color: Color;
  backgroundColor: Color;
  shortDescription: LocalizedString;
  gamePlay: LocalizedMarkdown;
  challenges: Challenge[][];
  runs: Runs;
}

export interface TravelBingoGamesData {
  [name: string]: TravelBingoGameData;
}

export interface TeamLeaderBoardData {
  key: string;
  name: LocalizedString;
  score: number;
  rank: number;
  bingos: number;
  challenges: TeamChallenge[];
}

export interface LeaderBoardData {
  teams: TeamLeaderBoardData[];
}
