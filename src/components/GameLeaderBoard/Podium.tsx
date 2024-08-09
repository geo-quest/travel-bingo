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
          <Card
            title={`2nd`}
            bordered={false}
            style={{
              backgroundColor: "#C0C0C0",
              height: 180,
              transform: "translateY(30px)",
            }}
          >
            <h3>{podiumData[0].name}</h3>
            <p>[{podiumData[0].score} pts]</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={`1st`}
            bordered={false}
            style={{
              backgroundColor: "#FFD700",
              height: 210,
            }}
          >
            <h3>{podiumData[1].name}</h3>
            <p>[{podiumData[1].score} pts]</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={`3rd`}
            bordered={false}
            style={{
              backgroundColor: "#CD7F32",
              height: 160,
              transform: "translateY(50px)",
            }}
          >
            <h3>{podiumData[2].name}</h3>
            <p>[{podiumData[2].score} pts]</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Podium;
