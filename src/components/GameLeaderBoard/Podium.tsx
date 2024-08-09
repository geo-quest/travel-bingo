import "antd/dist/reset.css";

import { Card, Col, Row } from "antd";
import React from "react";

const podiumData = [
  { name: "Team 2", score: 80, place: 2 },
  { name: "Team 1", score: 100, place: 1 },
  { name: "Team 3", score: 70, place: 3 },
];

const Podium = () => {
  return (
    <div className="podium">
      <Row gutter={16}>
        <Col span={8}>
          <Card title={`2nd`} bordered={false} className="podium-card silver">
            <h3>{podiumData[0].name}</h3>
            <p>[{podiumData[0].score} pts]</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title={`1st`} bordered={false} className="podium-card gold">
            <h3>{podiumData[1].name}</h3>
            <p>[{podiumData[1].score} pts]</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title={`3rd`} bordered={false} className="podium-card bronze">
            <h3>{podiumData[2].name}</h3>
            <p>[{podiumData[2].score} pts]</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Podium;
