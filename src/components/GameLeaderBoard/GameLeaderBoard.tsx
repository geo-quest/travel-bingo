import "./GameLeaderBoard.css";

import { Card, Space } from "antd";

import { RunGameData, TravelBingoGameData } from "../../data/interfaces";
import { calculateLeaderBoard } from "./calculate-leader-board";
import LeaderBoard from "./LeaderBoard";
import Podium from "./Podium";

interface Props {
  run: RunGameData;
  game: TravelBingoGameData;
}

const GameLeaderBoard = ({ run, game }: Props) => {
  const leaderBoardData = calculateLeaderBoard(run, game.challenges.flat());
  return (
    <>
      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <Card>
          <Podium leaderBoard={leaderBoardData} />
          <LeaderBoard leaderBoard={leaderBoardData} />
        </Card>
      </Space>
    </>
  );
};

export default GameLeaderBoard;
