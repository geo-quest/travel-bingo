import { Challenge, RunGameData } from "../../data/interfaces";
import { calculateLeaderBoard } from "./calculate-leader-board";

describe("calculateLeaderBoard", () => {
  it("should correctly calculate the leader board with ranks", () => {
    const run: RunGameData = {
      teams: [
        {
          team: "Team A",
          challenges: [
            { name: "Challenge 1", date: "Aug 9" },
            { name: "Challenge 2", date: "Aug 9" },
          ],
        },
        {
          team: "Team B",
          challenges: [{ name: "Challenge 1", date: "Aug 9" }],
        },
        {
          team: "Team C",
          challenges: [{ name: "Challenge 2", date: "Aug 9" }],
        },
      ],
      name: "",
      date: "",
    };

    const challenges: Challenge[] = [
      { challenge: "Challenge 1", points: 100, description: "", type: "" },
      { challenge: "Challenge 2", points: 200, description: "", type: "" },
    ];

    const result = calculateLeaderBoard(run, challenges);

    expect(result).toEqual({
      teams: [
        { name: "Team A", score: 300, rank: 1 },
        { name: "Team C", score: 200, rank: 2 },
        { name: "Team B", score: 100, rank: 3 },
      ],
    });
  });

  it("should return an empty leader board when no teams participate", () => {
    const run: RunGameData = {
      teams: [],
      name: "",
      date: "",
    };

    const challenges: Challenge[] = [
      { challenge: "Challenge 1", points: 100, description: "", type: "" },
    ];

    const result = calculateLeaderBoard(run, challenges);

    expect(result).toEqual({
      teams: [],
    });
  });
});
