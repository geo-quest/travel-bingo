import "./TravelBingoGame.css";

import { setTwoToneColor } from "@ant-design/icons";
import { Button, Card, Space, Typography } from "antd";
import Markdown from "react-markdown";

import { TravelBingoGameData } from "../../data/interfaces";
import { DynamicIconComponent } from "../DynamicIcon/DynamicIcon";
import Challenges from "./Challenges";

const { Paragraph } = Typography;

interface Props {
  data: TravelBingoGameData;
}

const TravelBingoGame = ({
  data: { title, icon, color, shortDescription, gamePlay, challenges },
}: Props) => {
  setTwoToneColor(color);

  return (
    <Space direction="vertical" size={16}>
      <Button
        type="default"
        onClick={() => {
          window.location.href = "/";
        }}
        color="secondary"
      >
        Home
      </Button>
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
        <Markdown>{gamePlay}</Markdown>
      </Card>
    </Space>
  );
};

export default TravelBingoGame;
