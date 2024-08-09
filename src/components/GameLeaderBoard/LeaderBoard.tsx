import "antd/dist/reset.css";

import { Table, Tag } from "antd";
import React from "react";

const leaderBoardData = [
  { key: "1", rank: 1, name: "Team 1", score: 100 },
  { key: "2", rank: 2, name: "Team 2", score: 80 },
  { key: "3", rank: 3, name: "Team 3", score: 70 },
  { key: "4", rank: 4, name: "Team 4", score: 60 },
  { key: "5", rank: 5, name: "Team 5", score: 50 },
];

const LeaderBoard = () => {
  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      render: (
        text:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | null
          | undefined,
        record: { rank: any },
      ) => {
        let color;
        switch (record.rank) {
          case 1:
            color = "#FFD700";
            break;
          case 2:
            color = "#C0C0C0";
            break;
          case 3:
            color = "#CD7F32";
            break;
          default:
            color = "black";
        }
        return (
          <Tag color={color} style={{ fontWeight: "bold" }}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Team",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
  ];

  return (
    <div style={{ maxWidth: 600, margin: "auto", marginTop: 40 }}>
      <Table
        columns={columns}
        dataSource={leaderBoardData}
        pagination={false}
        bordered
      />
    </div>
  );
};

export default LeaderBoard;
