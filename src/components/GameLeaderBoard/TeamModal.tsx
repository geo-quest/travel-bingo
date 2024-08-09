/* eslint-disable arrow-parens */
import { CheckCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Card, Modal } from "antd";
import React from "react";

import { Challenge } from "../../data/interfaces";
import { TeamLeaderBoardData } from "./calculate-leader-board";

interface Props {
  team: TeamLeaderBoardData;
  challenges: Challenge[][];
  onClose: () => void;
}

const TeamModal: React.FC<Props> = ({ team, onClose, challenges }: Props) => {
  if (!team) return null;

  return (
    <Modal
      title={`${team.name} [${team.score} pts]`}
      open={!!team}
      onCancel={onClose}
      centered
      footer={false}
    >
      <div className="board" style={{ margin: "auto" }}>
        <div style={{ display: "flex" }}>
          {["B", "I", "N", "G", "O"].map((letter) => (
            <Card.Grid key={letter} className="header-card" hoverable={false}>
              {letter}
            </Card.Grid>
          ))}
        </div>
        {challenges.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            <div key={rowIndex} style={{ display: "flex" }}>
              {row.map((item, colIndex) => {
                const isCompleted = team.challenges.some(
                  (c) => c === item.challenge,
                );

                return (
                  <Card.Grid
                    key={colIndex}
                    className="card"
                    hoverable={false}
                    style={{ backgroundColor: isCompleted ? "green" : "" }}
                  >
                    {isCompleted ? (
                      <CheckCircleOutlined />
                    ) : (
                      <QuestionCircleOutlined />
                    )}
                  </Card.Grid>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default TeamModal;
