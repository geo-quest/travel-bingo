import "./GameLeaderBoard.css";

import { Card, Space } from "antd";

import LeaderBoard from "./LeaderBoard";
import Podium from "./Podium";

const GameLeaderBoard = ({}) => {
  return (
    <>
      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <Card>
          <Podium />
          <LeaderBoard />
        </Card>
      </Space>
    </>
  );
};

export default GameLeaderBoard;
