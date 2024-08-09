/* eslint-disable arrow-parens */
import { Challenge, RunGameData } from "../../data/interfaces";

export interface TeamLeaderBoardData {
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
    teams: run.teams
      .map((team) => {
        return {
          name: team.team,
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
