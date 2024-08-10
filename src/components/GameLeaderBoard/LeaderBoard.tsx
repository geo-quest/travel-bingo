/* eslint-disable arrow-parens */
import "antd/dist/reset.css";

import { Table, Tag } from "antd";
import { useTranslation } from "react-i18next";

import { LeaderBoardData, TeamLeaderBoardData } from "./calculate-leader-board";

interface Props {
  leaderBoard: LeaderBoardData;
  onClick: (team: TeamLeaderBoardData) => void;
}

const LeaderBoard = ({ leaderBoard, onClick }: Props) => {
  const { t } = useTranslation();
  const columns = [
    {
      title: t("leaderboard.rank"),
      dataIndex: "rank",
      key: "rank",
      render: (text: string, record: { rank: number }) => {
        const rankColors = new Map([
          [1, "#FFD700"], // Gold
          [2, "#C0C0C0"], // Silver
          [3, "#CD7F32"], // Bronze
        ]);
        const color = rankColors.get(record.rank) || "black";
        return (
          <Tag color={color} style={{ fontWeight: "bold" }}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: t("leaderboard.team"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("leaderboard.score"),
      dataIndex: "score",
      key: "score",
    },
  ];

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <Table
        columns={columns}
        dataSource={leaderBoard.teams}
        pagination={false}
        onRow={(team) => {
          return {
            onClick: () => {
              onClick(team);
            },
          };
        }}
      />
    </div>
  );
};

export default LeaderBoard;
