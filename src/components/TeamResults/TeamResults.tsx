/* eslint-disable arrow-parens */
import "./TeamResults.css";

import { Col, Row, Space, Statistic } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Challenge,
  KeyObject,
  RunGameData,
  TeamChallenge,
  TeamGameData,
  TravelBingoGameData,
} from "../../data/interfaces";
import { calculateLeaderBoard } from "../../utils/calculate-leader-board";
import BingoBoard from "../BingoBoard/BingoBoard";
import ChallengeModal from "../ChallengeModal.tsx/ChallengeModal";
import NoPage from "../NoPage/NoPage";
import Rank from "../Rank/Rank";
import Score from "../Score/Score";
import SolvedChallenge from "./SolvedChallenge";

interface Props {
  team: TeamGameData & KeyObject;
  run: RunGameData & KeyObject;
  game: TravelBingoGameData & KeyObject;
}

const TeamResults = function ({ team, run, game }: Props) {
  const { t } = useTranslation();
  const leaderBoardData = calculateLeaderBoard(run, game.challenges);
  const teamData = leaderBoardData.teams.find((t) => t.key === team.key);

  if (!teamData) return <NoPage />;

  const getSolved = (challenge: string) => {
    return teamData.challenges.find((c) => c.name === challenge);
  };

  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null,
  );

  const [selectedSolvedChallenge, setSelectedSolvedChallenge] =
    useState<TeamChallenge | null>(null);

  return (
    <>
      <Space direction="vertical">
        <Row>
          <Col span={2} />
          <Col span={10} style={{ textAlign: "center" }}>
            <Statistic
              title={t("rank")}
              valueRender={() => <Rank rank={teamData.rank} />}
            />
          </Col>
          <Col span={10} style={{ textAlign: "center" }}>
            <Statistic
              title="Score"
              valueRender={() => <Score team={teamData} />}
            />
          </Col>
          <Col span={2} />
        </Row>
        <Row>
          <Col span={24}>
            <BingoBoard
              challenges={game.challenges}
              onClick={(challenge: Challenge) => {
                const solved = getSolved(challenge.challenge);
                if (!solved) {
                  setSelectedChallenge(challenge);
                  setSelectedSolvedChallenge(null);
                } else {
                  setSelectedSolvedChallenge(
                    challenge.challenge === selectedSolvedChallenge?.name
                      ? null
                      : solved,
                  );
                }
              }}
              defineCardClass={(challenge: Challenge) =>
                getSolved(challenge.challenge)
                  ? challenge.challenge === selectedSolvedChallenge?.name
                    ? "selected-card-done"
                    : "card-done"
                  : ""
              }
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {selectedSolvedChallenge && (
              <SolvedChallenge challenge={selectedSolvedChallenge} />
            )}
          </Col>
        </Row>
      </Space>
      {selectedChallenge && (
        <ChallengeModal
          challenge={selectedChallenge}
          onClose={() => setSelectedChallenge(null)}
        />
      )}
    </>
  );
};

export default TeamResults;
