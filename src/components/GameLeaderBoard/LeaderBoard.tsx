/* eslint-disable arrow-parens */
import "antd/dist/reset.css";

import { Table } from "antd";
import { useTranslation } from "react-i18next";

import { LeaderBoardData, TeamLeaderBoardData } from "../../data/interfaces";
import Rank from "../Rank/Rank";

interface Props {
  leaderBoard: LeaderBoardData;
  onClick: (team: TeamLeaderBoardData) => void;
}

const LeaderBoard = ({ leaderBoard, onClick }: Props) => {
  const { t } = useTranslation();
  const columns = [
    {
      title: t("rank"),
      dataIndex: "rank",
      key: "rank",
      render: (text: string) => <Rank rank={text} />,
    },
    {
      title: t("team"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("score"),
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
