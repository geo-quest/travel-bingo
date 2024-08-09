import "antd/dist/reset.css";

import { Card, Col, Row } from "antd";

import { LeaderBoardData, TeamLeaderBoardData } from "./calculate-leader-board";

interface Props {
  leaderBoard: LeaderBoardData;
  onClick: (team: TeamLeaderBoardData) => void;
}

const Podium = ({ leaderBoard, onClick }: Props) => {
  return (
    <div className="podium">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title={`2nd`}
            bordered={false}
            className="podium-card silver"
            onClick={() => onClick(leaderBoard.teams[1])}
          >
            <h3>{leaderBoard.teams[1].name}</h3>
            <p>[{leaderBoard.teams[1].score} pts]</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={`1st`}
            bordered={false}
            className="podium-card gold"
            onClick={() => onClick(leaderBoard.teams[0])}
          >
            <h3>{leaderBoard.teams[0].name}</h3>
            <p>[{leaderBoard.teams[0].score} pts]</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={`3rd`}
            bordered={false}
            className="podium-card bronze"
            onClick={() => onClick(leaderBoard.teams[2])}
          >
            <h3>{leaderBoard.teams[2].name}</h3>
            <p>[{leaderBoard.teams[2].score} pts]</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Podium;
