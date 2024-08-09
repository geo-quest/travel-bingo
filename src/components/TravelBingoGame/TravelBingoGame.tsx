import "./TravelBingoGame.css";

import { Card, Space, Typography } from "antd";
import Markdown from "react-markdown";

import { TravelBingoGameData } from "../../data/interfaces";
import { DynamicIconComponent } from "../DynamicIcon/DynamicIcon";
import Challenges from "./Challenges";
import Runs from "./Runs";

const { Paragraph } = Typography;

interface Props {
  game: TravelBingoGameData & { id: string };
}

const TravelBingoGame = ({ game }: Props) => {
  const { icon, title, shortDescription, challenges, gamePlay } = game;
  return (
    <>
      <Space direction="vertical" size={16}>
        <Card
          title={
            <div style={{ display: "flex", alignItems: "center" }}>
              <DynamicIconComponent
                iconName={icon}
                style={{ marginRight: 8, fontSize: "32px" }}
              />
              <h2 style={{ margin: 0 }}>{title}</h2>
            </div>
          }
        >
          <Paragraph strong>{shortDescription}</Paragraph>
          <Challenges challenges={challenges} />
          <div style={{ marginTop: "8px" }}>
            <Markdown>{gamePlay}</Markdown>
          </div>
          <Runs game={game} />
        </Card>
      </Space>
    </>
  );
};

export default TravelBingoGame;
