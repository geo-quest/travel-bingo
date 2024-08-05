/* eslint-disable arrow-parens */
import "./App.css";

import {
  FlagTwoTone,
  PlayCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Card, List, Space, Typography } from "antd";

import challenge from "./challenge.json";

const { Title, Paragraph } = Typography;

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Space direction="vertical" size={16}>
        <Card
          title={
            <div style={{ display: "flex", alignItems: "center" }}>
              <FlagTwoTone style={{ marginRight: 8, fontSize: "32px" }} />
              <h1 style={{ margin: 0 }}>{challenge.title}</h1>
            </div>
          }
        >
          <Paragraph strong>{challenge.description}</Paragraph>
          <Title level={4}>
            <UnorderedListOutlined style={{ marginRight: 8 }} />
            Rules
          </Title>
          <List
            dataSource={challenge.rules}
            renderItem={(rule) => <List.Item>{rule}</List.Item>}
          />
          <Title level={4} style={{ marginTop: "20px" }}>
            <PlayCircleOutlined style={{ marginRight: 8 }} />
            Challenges
          </Title>

          {challenge.challenges.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: "flex" }}>
              {row.map((item, colIndex) => (
                <Card.Grid key={colIndex} style={{ width: "20%" }}>
                  {item.challenge}
                </Card.Grid>
              ))}
            </div>
          ))}
        </Card>
      </Space>
    </div>
  );
}

export default App;
