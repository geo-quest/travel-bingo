import "./TravelBingoGame.css";

import { Card, Space, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";

import {
  Challenge,
  KeyObject,
  TravelBingoGameData,
} from "../../data/interfaces";
import BingoBoard from "../BingoBoard/BingoBoard";
import { DynamicIconComponent } from "../DynamicIcon/DynamicIcon";
import ChallengeModal from "./ChallengeModal";
import Runs from "./Runs";

const { Paragraph, Title } = Typography;

interface Props {
  game: TravelBingoGameData & KeyObject;
}

const TravelBingoGame = ({ game }: Props) => {
  const { t } = useTranslation();
  const { icon, title, shortDescription, challenges, gamePlay } = game;

  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null,
  );

  return (
    <>
      <Space direction="vertical" size={16}>
        <Card
          title={
            <div style={{ display: "flex", alignItems: "center" }}>
              <DynamicIconComponent
                iconName={icon}
                style={{ marginRight: 8, fontSize: "32px" }}
              />
              <h2 style={{ margin: 0 }}>{title}</h2>
            </div>
          }
        >
          <Runs game={game} />
          <Paragraph strong>{shortDescription}</Paragraph>
          <Title level={2} style={{ marginTop: 20 }}>
            {t("challenges")}
          </Title>
          <BingoBoard challenges={challenges} onClick={setSelectedChallenge} />
          <div style={{ marginTop: "8px" }}>
            <Markdown>{gamePlay}</Markdown>
          </div>
          {selectedChallenge && (
            <ChallengeModal
              challenge={selectedChallenge}
              onClose={() => setSelectedChallenge(null)}
            />
          )}
        </Card>
      </Space>
    </>
  );
};

export default TravelBingoGame;
