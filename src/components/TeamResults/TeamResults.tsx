/* eslint-disable arrow-parens */
import "./TeamResults.css";

import { Card, Col, Row, Space, Statistic } from "antd";
import { useTranslation } from "react-i18next";

import {
  Challenge,
  KeyObject,
  RunGameData,
  TeamGameData,
  TravelBingoGameData,
} from "../../data/interfaces";
import { calculateLeaderBoard } from "../../utils/calculate-leader-board";
import BingoBoard from "../BingoBoard/BingoBoard";
import { DynamicIconComponent } from "../DynamicIcon/DynamicIcon";
import NoPage from "../NoPage/NoPage";
import Rank from "../Rank/Rank";

interface Props {
  team: TeamGameData & KeyObject;
  run: RunGameData & KeyObject;
  game: TravelBingoGameData & KeyObject;
}

const TeamResults = function ({ team, run, game }: Props) {
  const { t } = useTranslation();
  const leaderBoardData = calculateLeaderBoard(run, game.challenges.flat());
  const teamData = leaderBoardData.teams.find((t) => t.key === team.key);
  if (!teamData) return <NoPage />;
  return (
    <>
      <Space direction="vertical" size={16} style={{ width: "100%" }} />
      <Card
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <DynamicIconComponent
              iconName={game.icon}
              style={{ marginRight: 8, fontSize: "24px" }}
            />
            <h3 style={{ margin: 0 }}>{team.name}</h3>
          </div>
        }
      >
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title={t("rank")}
              valueRender={() => <Rank rank={teamData.rank} />}
            />
          </Col>
          <Col span={12}>
            <Statistic title="Score" value={teamData.score} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={16}>
            <BingoBoard
              challenges={game.challenges}
              onClick={(challenge: Challenge) => alert(challenge.challenge)}
              defineCardClass={(challenge: Challenge) =>
                teamData.challenges.find((c) => c === challenge.challenge)
                  ? "card-done"
                  : ""
              }
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default TeamResults;
