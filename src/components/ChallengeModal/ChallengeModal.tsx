import { Modal, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";

import { Challenge } from "../../data/interfaces";
import t2 from "../../utils/t2";
import Image from "../Image/Image";

const { Paragraph } = Typography;

interface Props {
  challenge: Challenge;
  onClose: () => void;
}

const ChallengeModal: React.FC<Props> = ({ challenge, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal
      title={`${t2(challenge.challenge)} [${challenge.points} ${t("pts")}]`}
      open={!!challenge}
      onCancel={onClose}
      centered
      footer={false}
    >
      <Paragraph>
        <Markdown>{t2(challenge.description)}</Markdown>
        {challenge.image && (
          <Image
            src={challenge.image}
            alt={t2(challenge.challenge)}
            style={{ width: "100%", marginTop: "10px" }}
          />
        )}
      </Paragraph>
    </Modal>
  );
};

export default ChallengeModal;
