/* eslint-disable arrow-parens */
import { Challenge, LeaderBoardData, RunGameData } from "../data/interfaces";

export function calculateLeaderBoard(
  run: RunGameData,
  challenges: Challenge[][],
): LeaderBoardData {
  const numRows = challenges.length;
  const numCols = challenges[0].length;

  const isRowSolved = (row: number, teamChallenges: string[]): boolean =>
    challenges[row].every((challenge) =>
      teamChallenges.includes(challenge.challenge),
    );

  const isColSolved = (col: number, teamChallenges: string[]): boolean =>
    challenges.every((row) => teamChallenges.includes(row[col].challenge));

  const isMainDiagonalSolved = (teamChallenges: string[]): boolean =>
    challenges.every((_row, i) =>
      teamChallenges.includes(challenges[i][i].challenge),
    );

  const isSecondaryDiagonalSolved = (teamChallenges: string[]): boolean =>
    challenges.every((_row, i) =>
      teamChallenges.includes(challenges[i][numCols - 1 - i].challenge),
    );

  return {
    teams: Object.keys(run.teams)
      .map((key) => {
        const team = run.teams[key];
        const teamChallenges = team.challenges.map(
          (challenge) => challenge.name,
        );

        let bingos = 0;

        for (let i = 0; i < numRows; i++)
          if (isRowSolved(i, teamChallenges)) bingos++;

        for (let i = 0; i < numCols; i++)
          if (isColSolved(i, teamChallenges)) bingos++;

        if (isMainDiagonalSolved(teamChallenges)) bingos++;
        if (isSecondaryDiagonalSolved(teamChallenges)) bingos++;

        return {
          key: key,
          name: team.name,
          score: team.challenges.reduce((result, teamChallenge) => {
            const challengeData = challenges
              .flat()
              .find((c) => c.challenge === teamChallenge.name);
            return result + (challengeData?.points || 0);
          }, 0),
          challenges: team.challenges,
          bingos: bingos,
          rank: 0,
        };
      })
      .sort((a, b) => {
        if (b.bingos !== a.bingos) return b.bingos - a.bingos;
        return b.score - a.score;
      })
      .map((team, index) => ({
        ...team,
        rank: index + 1,
      })),
  };
}
