/* eslint-disable arrow-parens */
import { PlayCircleOutlined } from "@ant-design/icons";
import { Card, Modal, Typography } from "antd";
import React, { useState } from "react";

const { Title, Paragraph } = Typography;

interface Challenge {
  challenge: string;
  description: string;
  points: number;
}

interface ChallengesProps {
  challenges: Challenge[][];
}

const Challenges: React.FC<ChallengesProps> = ({ challenges }) => {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null,
  );

  const handleCardClick = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleModalClose = () => {
    setSelectedChallenge(null);
  };

  return (
    <>
      <Title level={4} style={{ marginTop: "20px" }}>
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
                onClick={() => handleCardClick(item)}
              >
                {item.challenge}
              </Card.Grid>
            ))}
          </div>
        ))}
      </div>
      {selectedChallenge && (
        <Modal
          title={selectedChallenge.challenge}
          open={!!selectedChallenge}
          onCancel={handleModalClose}
          centered
          footer={false}
        >
          <Paragraph>
            <strong>Description:</strong> {selectedChallenge.description}
          </Paragraph>
          <Paragraph>
            <strong>Points:</strong> {selectedChallenge.points}
          </Paragraph>
        </Modal>
      )}
    </>
  );
};

export default Challenges;
