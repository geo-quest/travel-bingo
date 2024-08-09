import "./TravelBingoGame.css";

import { Card, Space, Typography } from "antd";
import Markdown from "react-markdown";

import { TravelBingoGameData } from "../../data/interfaces";
import { DynamicIconComponent } from "../DynamicIcon/DynamicIcon";
import Challenges from "./Challenges";

const { Paragraph } = Typography;

interface Props {
  data: TravelBingoGameData;
}

const TravelBingoGame = ({
  data: { title, icon, shortDescription, gamePlay, challenges },
}: Props) => {
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
        </Card>
      </Space>
    </>
  );
};

export default TravelBingoGame;
