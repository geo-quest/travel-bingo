/* eslint-disable arrow-parens */
import { Challenge, RunGameData } from "../../data/interfaces";

export interface TeamLeaderBoardData {
  key: string;
  name: string;
  score: number;
  rank: number;
  challenges: string[];
}

export interface LeaderBoardData {
  teams: TeamLeaderBoardData[];
}

export function calculateLeaderBoard(
  run: RunGameData,
  challenges: Challenge[],
): LeaderBoardData {
  return {
    teams: Object.keys(run.teams)
      .map((key) => {
        const team = run.teams[key];
        return {
          key: key,
          name: team.name,
          score: team.challenges.reduce((result, teamChallenge) => {
            const challengeData = challenges.find(
              (c) => c.challenge === teamChallenge.name,
            );
            return result + (challengeData?.points || 0);
          }, 0),
          challenges: team.challenges.map((c) => c.name),
        };
      })
      .sort((a, b) => b.score - a.score)
      .map((team, index) => ({
        ...team,
        rank: index + 1,
      })),
  };
}