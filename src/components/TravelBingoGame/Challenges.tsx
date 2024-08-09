/* eslint-disable arrow-parens */
import { PlayCircleOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";
import React, { useState } from "react";

import { Challenge } from "../../data/interfaces";
import ChallengeModal from "./ChallengeModal";

const { Title } = Typography;

interface Props {
  challenges: Challenge[][];
}

const Challenges: React.FC<Props> = ({ challenges }) => {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null,
  );

  return (
    <>
      <Title level={4} style={{ marginTop: 20 }}>
        <PlayCircleOutlined style={{ marginRight: 8 }} />
        Challenges
      </Title>
      <div className="board">
        <div style={{ display: "flex" }}>
          {["B", "I", "N", "G", "O"].map((letter) => (
            <Card.Grid key={letter} className="header-card" hoverable={false}>
              {letter}
            </Card.Grid>
          ))}
        </div>
        {challenges.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((item, colIndex) => (
              <Card.Grid
                key={colIndex}
                className="card"
                onClick={() => setSelectedChallenge(item)}
              >
                {item.challenge}
              </Card.Grid>
            ))}
          </div>
        ))}
      </div>
      {selectedChallenge && (
        <ChallengeModal
          challenge={selectedChallenge}
          onClose={() => setSelectedChallenge(null)}
        />
      )}
    </>
  );
};

export default Challenges;
