import "./BoardPage.css";

import { FlagTwoTone } from "@ant-design/icons";
import { Card, Space, Typography } from "antd";

import { TravelBingo } from "../types/TravelBingo";
import Challenges from "./Challenges";
import Rules from "./Rules";

const { Paragraph } = Typography;

interface Props {
  travelBingo: TravelBingo;
}

const BoardPage = ({ travelBingo }: Props) => {
  return (
    <Space direction="vertical" size={16}>
      <Card
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <FlagTwoTone style={{ marginRight: 8, fontSize: "32px" }} />
            <h1 style={{ margin: 0 }}>{travelBingo.title}</h1>
          </div>
        }
      >
        <Paragraph strong>{travelBingo.description}</Paragraph>

        <Challenges challenges={travelBingo.challenges} />
        <Rules rules={travelBingo.rules} />
      </Card>
    </Space>
  );
};

export default BoardPage;
