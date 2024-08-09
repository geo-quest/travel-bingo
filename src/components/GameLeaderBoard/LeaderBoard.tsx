import "antd/dist/reset.css";

import { Table, Tag } from "antd";
import React from "react";

import { LeaderBoardData } from "./calculate-leader-board";

interface Props {
  leaderBoard: LeaderBoardData;
}

const LeaderBoard = ({ leaderBoard }: Props) => {
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
        dataSource={leaderBoard.teams}
        pagination={false}
      />
    </div>
  );
};

export default LeaderBoard;
