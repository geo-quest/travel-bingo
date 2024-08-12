import "./PageComponent.css";

import { setTwoToneColor } from "@ant-design/icons";
import { Card, Col, Row, Space } from "antd";
import { useEffect } from "react";

import {
  KeyObject,
  RunGameData,
  TeamGameData,
  TravelBingoGameData,
} from "../../data/interfaces";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Breadcrumb from "./Breadcrumb";
import PageTitle from "./PageTitle";

interface Props {
  game: TravelBingoGameData & KeyObject;
  run?: RunGameData & KeyObject;
  team?: TeamGameData & KeyObject;
  children: React.ReactNode;
}

const PageComponent = ({ game, run, team, children }: Props) => {
  useEffect(() => {
    document.body.style.backgroundColor = game.backgroundColor;
  });

  setTwoToneColor(game.color);

  return (
    <div className="app-container">
      <Space direction="vertical">
        <Row>
          <Col span={1}></Col>
          <Col span={14}>
            <Breadcrumb game={game} run={run} team={team} />
          </Col>
          <Col span={8} style={{ textAlign: "right" }}>
            <LanguageSelector />
          </Col>
          <Col span={1}></Col>
        </Row>
        <Row>
          <Col span={1}></Col>
          <Col span={22}>
            <Card title={<PageTitle game={game} run={run} team={team} />}>
              {children}
            </Card>
          </Col>
          <Col span={1}></Col>
        </Row>
        <Row>
          <Col span={1}></Col>
          <Col span={22} style={{ textAlign: "center", paddingBottom: "16px" }}>
            Travel Bingo <i>Turn travel into a game</i>
          </Col>
          <Col span={1}></Col>
        </Row>
      </Space>
    </div>
  );
};

export default PageComponent;
