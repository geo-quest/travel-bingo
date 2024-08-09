import { Modal, Typography } from "antd";
import React from "react";
import Markdown from "react-markdown";

import { Challenge } from "../../data/interfaces";

const { Paragraph } = Typography;

interface Props {
  challenge: Challenge | null;
  onClose: () => void;
}

const ChallengeModal: React.FC<Props> = ({ challenge, onClose }) => {
  if (!challenge) return null;

  return (
    <Modal
      title={`${challenge.challenge} [${challenge.points} pts]`}
      open={!!challenge}
      onCancel={onClose}
      centered
      footer={false}
    >
      <Paragraph>
        <Markdown>{challenge.description}</Markdown>
        {challenge.image && (
          <img
            src={challenge.image}
            alt={challenge.challenge}
            style={{ width: "100%", marginTop: "10px" }}
          />
        )}
      </Paragraph>
    </Modal>
  );
};

export default ChallengeModal;
