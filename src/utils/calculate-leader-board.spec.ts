import { Challenge, RunGameData } from "../data/interfaces";
import { calculateLeaderBoard } from "./calculate-leader-board";

describe("calculateLeaderBoard", () => {
  it("should return an empty leader board when no teams participate", () => {
    const run: RunGameData = {
      teams: {},
      name: "",
    };

    const challenges: Challenge[][] = [
      [
        { challenge: "Challenge 1", points: 100, description: "", type: "" },
        { challenge: "Challenge 2", points: 100, description: "", type: "" },
      ],
      [
        { challenge: "Challenge 3", points: 100, description: "", type: "" },
        { challenge: "Challenge 4", points: 100, description: "", type: "" },
      ],
    ];

    const result = calculateLeaderBoard(run, challenges);

    expect(result).toEqual({
      teams: [],
    });
  });

  it("should correctly calculate the leader board with ranks", () => {
    const run: RunGameData = {
      name: "Summer edition",
      teams: {
        "team-a": {
          name: "Team A",
          challenges: [
            { name: "Challenge 1", date: "Aug 9" },
            { name: "Challenge 2", date: "Aug 9" },
          ],
        },
        "team-b": {
          name: "Team B",
          challenges: [{ name: "Challenge 4", date: "Aug 9" }],
        },
        "team-c": {
          name: "Team C",
          challenges: [{ name: "Challenge 2", date: "Aug 9" }],
        },
        "team-d": {
          name: "Team D",
          challenges: [
            { name: "Challenge 1", date: "Aug 9" },
            { name: "Challenge 2", date: "Aug 9" },
            { name: "Challenge 3", date: "Aug 9" },
            { name: "Challenge 4", date: "Aug 9" },
          ],
        },
      },
    };

    const challenges: Challenge[][] = [
      [
        { challenge: "Challenge 1", points: 100, description: "", type: "" },
        { challenge: "Challenge 2", points: 100, description: "", type: "" },
      ],
      [
        { challenge: "Challenge 3", points: 100, description: "", type: "" },
        { challenge: "Challenge 4", points: 100, description: "", type: "" },
      ],
    ];

    const result = calculateLeaderBoard(run, challenges);

    expect(result).toEqual({
      teams: [
        {
          key: "team-d",
          name: "Team D",
          score: 400,
          rank: 1,
          challenges: [
            { name: "Challenge 1", date: "Aug 9" },
            { name: "Challenge 2", date: "Aug 9" },
            { name: "Challenge 3", date: "Aug 9" },
            { name: "Challenge 4", date: "Aug 9" },
          ],
          bingos: 6,
        },
        {
          key: "team-a",
          name: "Team A",
          score: 200,
          rank: 2,
          bingos: 1,
          challenges: [
            { name: "Challenge 1", date: "Aug 9" },
            { name: "Challenge 2", date: "Aug 9" },
          ],
        },
        {
          key: "team-b",
          name: "Team B",
          score: 100,
          rank: 3,
          bingos: 0,
          challenges: [{ name: "Challenge 4", date: "Aug 9" }],
        },
        {
          key: "team-c",
          name: "Team C",
          score: 100,
          rank: 4,
          bingos: 0,
          challenges: [{ name: "Challenge 2", date: "Aug 9" }],
        },
      ],
    });
  });
});
