import { Col, Row, Space, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";

import {
  Challenge,
  KeyObject,
  TravelBingoGameData,
} from "../../data/interfaces";
import t2 from "../../utils/t2";
import BingoBoard from "../BingoBoard/BingoBoard";
import ChallengeModal from "../ChallengeModal/ChallengeModal";
import Runs from "./Runs";

const { Paragraph, Title } = Typography;

interface Props {
  game: TravelBingoGameData & KeyObject;
}

const TravelBingoGame = ({ game }: Props) => {
  const { t } = useTranslation();
  const { shortDescription, challenges, gamePlay } = game;

  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null,
  );

  return (
    <Space direction="vertical">
      <Row>
        <Col span={24}>
          <Runs game={game} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Paragraph strong>{t2(shortDescription)}</Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title level={2}>{t("challenges")}</Title>
          <BingoBoard challenges={challenges} onClick={setSelectedChallenge} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title level={2}>{t("how-to-play")}</Title>
          <Markdown>{t2(gamePlay)}</Markdown>
        </Col>
      </Row>
      {selectedChallenge && (
        <ChallengeModal
          challenge={selectedChallenge}
          onClose={() => setSelectedChallenge(null)}
        />
      )}
    </Space>
  );
};

export default TravelBingoGame;
