import "antd/dist/reset.css";

import { Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";

import {
  KeyObject,
  LeaderBoardData,
  TeamLeaderBoardData,
} from "../../data/interfaces";
import Score from "../Score/Score";

interface Props {
  leaderBoard: LeaderBoardData;
  onClick: (team: TeamLeaderBoardData & KeyObject) => void;
}

const Podium = ({ leaderBoard, onClick }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="podium">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title={t("podium.2nd")}
            bordered={false}
            className="podium-card silver"
            onClick={() => onClick(leaderBoard.teams[1])}
          >
            <h3>{leaderBoard.teams[1].name}</h3>
            <Score team={leaderBoard.teams[1]} />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={t("podium.1st")}
            bordered={false}
            className="podium-card gold"
            onClick={() => onClick(leaderBoard.teams[0])}
          >
            <h3>{leaderBoard.teams[0].name}</h3>
            <Score team={leaderBoard.teams[0]} />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={t("podium.3rd")}
            bordered={false}
            className="podium-card bronze"
            onClick={() => onClick(leaderBoard.teams[2])}
          >
            <h3>{leaderBoard.teams[2].name}</h3>
            <Score team={leaderBoard.teams[2]} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Podium;
