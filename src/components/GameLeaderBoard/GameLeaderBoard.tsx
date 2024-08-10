/* eslint-disable arrow-parens */
import "./GameLeaderBoard.css";

import { Card, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

import {
  KeyObject,
  RunGameData,
  TeamLeaderBoardData,
  TravelBingoGameData,
} from "../../data/interfaces";
import { calculateLeaderBoard } from "../../utils/calculate-leader-board";
import { DynamicIconComponent } from "../DynamicIcon/DynamicIcon";
import LeaderBoard from "./LeaderBoard";
import Podium from "./Podium";

const { Paragraph } = Typography;

interface Props {
  run: RunGameData & KeyObject;
  game: TravelBingoGameData & KeyObject;
}

const GameLeaderBoard = ({ run, game }: Props) => {
  const { t } = useTranslation();
  const leaderBoardData = calculateLeaderBoard(run, game.challenges.flat());

  const navigate = function (team: TeamLeaderBoardData & KeyObject) {
    window.location.href = `/${game.key}/${run.key}/${team.key}`;
  };

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
            <Paragraph style={{ margin: 0 }}>
              <strong>{t("run.run-date")}:</strong> {run.date}
            </Paragraph>
            <Paragraph italic style={{ margin: 0 }}>
              <strong>{t("run.updated-at")}</strong>: {run.lastUpdate}
            </Paragraph>
          </div>
          <Podium leaderBoard={leaderBoardData} onClick={navigate} />
          <LeaderBoard leaderBoard={leaderBoardData} onClick={navigate} />
        </Card>
      </Space>
    </>
  );
};

export default GameLeaderBoard;
