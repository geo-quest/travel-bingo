/* eslint-disable arrow-parens */
import "./GameLeaderBoard.css";

import { Card, Space, Typography } from "antd";
import { useState } from "react";

import { RunGameData, TravelBingoGameData } from "../../data/interfaces";
import { DynamicIconComponent } from "../DynamicIcon/DynamicIcon";
import {
  calculateLeaderBoard,
  TeamLeaderBoardData,
} from "./calculate-leader-board";
import LeaderBoard from "./LeaderBoard";
import Podium from "./Podium";
import TeamModal from "./TeamModal";

const { Paragraph } = Typography;

interface Props {
  run: RunGameData;
  game: TravelBingoGameData;
}

const GameLeaderBoard = ({ run, game }: Props) => {
  const leaderBoardData = calculateLeaderBoard(run, game.challenges.flat());

  const [selectedTeam, setSelectedTeam] = useState<TeamLeaderBoardData | null>(
    null,
  );

  return (
    <>
      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <Card
          title={
            <div style={{ display: "flex", alignItems: "center" }}>
              <DynamicIconComponent
                iconName={game.icon}
                style={{ marginRight: 8, fontSize: "24px" }}
              />
              <h3 style={{ margin: 0 }}>{run.name}</h3>
            </div>
          }
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Paragraph strong style={{ margin: 0 }}>
              Date: {run.date}
            </Paragraph>
            <Paragraph italic style={{ margin: 0 }}>
              Last leader board update: {run.lastUpdate}
            </Paragraph>
          </div>
          <Podium
            leaderBoard={leaderBoardData}
            onClick={(team) => setSelectedTeam(team)}
          />
          <LeaderBoard
            leaderBoard={leaderBoardData}
            onClick={(team) => setSelectedTeam(team)}
          />
        </Card>
        {selectedTeam && (
          <TeamModal
            team={selectedTeam}
            challenges={game.challenges}
            onClose={() => setSelectedTeam(null)}
          />
        )}
      </Space>
    </>
  );
};

export default GameLeaderBoard;
