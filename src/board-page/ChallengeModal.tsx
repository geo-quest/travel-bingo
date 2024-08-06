import { Modal, Typography } from "antd";
import React from "react";

import { Challenge } from "../types/TravelBingo";

const { Paragraph } = Typography;

interface ChallengeModalProps {
  challenge: Challenge | null;
  onClose: () => void;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({
  challenge,
  onClose,
}) => {
  if (!challenge) return null;

  return (
    <Modal
      title={challenge.challenge}
      open={!!challenge}
      onCancel={onClose}
      centered
      footer={false}
    >
      <Paragraph>
        <strong>Description:</strong> {challenge.description}
      </Paragraph>
      <Paragraph>
        <strong>Points:</strong> {challenge.points}
      </Paragraph>
    </Modal>
  );
};

export default ChallengeModal;
