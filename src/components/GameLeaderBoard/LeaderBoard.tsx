/* eslint-disable arrow-parens */
import "antd/dist/reset.css";

import { Table } from "antd";
import { useTranslation } from "react-i18next";

import { LeaderBoardData, TeamLeaderBoardData } from "../../data/interfaces";
import t2 from "../../utils/t2";
import Rank from "../Rank/Rank";
import Score from "../Score/Score";

interface Props {
  leaderBoard: LeaderBoardData;
  onClick: (team: TeamLeaderBoardData) => void;
}

interface TeamCellProps {
  team: TeamLeaderBoardData;
}

const TeamCell = ({ team }: TeamCellProps) => {
  return <span>{t2(team.name)}</span>;
};

const LeaderBoard = ({ leaderBoard, onClick }: Props) => {
  const { t } = useTranslation();
  const columns = [
    {
      title: t("rank"),
      dataIndex: "rank",
      key: "rank",
      render: (_text: string, team: TeamLeaderBoardData) => (
        <Rank rank={team.rank} />
      ),
    },
    {
      title: t("team"),
      dataIndex: "key",
      key: "key",
      render: (_text: string, team: TeamLeaderBoardData) => (
        <TeamCell team={team} />
      ),
    },
    {
      title: t("score"),
      dataIndex: "score",
      key: "score",
      render: (_text: string, team: TeamLeaderBoardData) => (
        <Score team={team} />
      ),
    },
  ];

  return (
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
  );
};

export default LeaderBoard;
