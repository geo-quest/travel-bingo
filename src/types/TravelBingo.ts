export interface Challenge {
  challenge: string;
  description: string;
  points: number;
}

export interface TravelBingo {
  title: string;
  description: string;
  rules: string[];
  challenges: Challenge[][];
}
