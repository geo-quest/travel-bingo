/* eslint-disable arrow-parens */
import "./App.css";

import { Card, List, Table, Typography } from "antd";

import challenge from "./challenge.json";

const { Title, Paragraph } = Typography;

function App() {
  const board = challenge.challenges.map(([col1, col2, col3, col4, col5]) => ({
    col1,
    col2,
    col3,
    col4,
    col5,
  }));

  const renderColumn = (challenge: any) => (
    <a
      className="challenge-link"
      onClick={() =>
        alert(
          `Challenge: ${challenge.challenge}\nDescription: ${challenge.description}\nPoints: ${challenge.points}`,
        )
      }
    >
      {challenge.challenge}
    </a>
  );

  const columns = ["col1", "col2", "col3", "col4", "col5"].map((title) => ({
    title,
    dataIndex: title,
    key: title,
    render: renderColumn,
    ellipsis: true,
  }));

  return (
    <div style={{ padding: "20px" }}>
      <Card title={challenge.title}>
        <Paragraph>{challenge.description}</Paragraph>
        <Title level={4}>Rules</Title>
        <List
          bordered
          dataSource={challenge.rules}
          renderItem={(rule) => <List.Item>{rule}</List.Item>}
        />
        <Title level={4} style={{ marginTop: "20px" }}>
          Challenges
        </Title>
        <Table
          dataSource={board}
          columns={columns}
          showHeader={false}
          pagination={false}
          bordered={true}
        ></Table>
      </Card>
    </div>
  );
}

export default App;
