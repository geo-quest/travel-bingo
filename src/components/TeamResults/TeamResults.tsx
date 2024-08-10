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
        <Space
          direction="vertical"
          size="middle"
          style={{ width: "100%", display: "flex" }}
        >
          <Row>
            <Col span={2} />
            <Col span={10} style={{ textAlign: "center" }}>
              <Statistic
                title={t("rank")}
                valueRender={() => <Rank rank={teamData.rank} />}
              />
            </Col>
            <Col span={10} style={{ textAlign: "center" }}>
              <Statistic title="Score" value={teamData.score} />
            </Col>
            <Col span={2} />
          </Row>
          <Row>
            <Col span={24}>
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
        </Space>
      </Card>
    </>
  );
};

export default TeamResults;
