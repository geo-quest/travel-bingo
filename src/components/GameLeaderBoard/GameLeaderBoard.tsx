/* eslint-disable arrow-parens */
import "./GameLeaderBoard.css";

import { Card, Col, Row, Space, Statistic } from "antd";
import { useTranslation } from "react-i18next";

import {
  KeyObject,
  RunGameData,
  TeamLeaderBoardData,
  TravelBingoGameData,
} from "../../data/interfaces";
import { calculateLeaderBoard } from "../../utils/calculate-leader-board";
import PageTitle from "../PageTitle/PageTitle";
import LeaderBoard from "./LeaderBoard";
import Podium from "./Podium";

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
    <Card title={<PageTitle game={game} run={run} />}>
      <Space direction="vertical">
        <Row>
          <Col span={2}></Col>
          <Col span={10} style={{ textAlign: "center" }}>
            <Statistic title={t("run.run-date")} value={run.date} />
          </Col>
          <Col span={10} style={{ textAlign: "center" }}>
            <Statistic title={t("run.updated-at")} value={run.lastUpdate} />
          </Col>
          <Col span={2}></Col>
        </Row>
        <Row>
          <Col span={24}>
            <Podium leaderBoard={leaderBoardData} onClick={navigate} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <LeaderBoard leaderBoard={leaderBoardData} onClick={navigate} />
          </Col>
        </Row>
      </Space>
    </Card>
  );
};

export default GameLeaderBoard;
