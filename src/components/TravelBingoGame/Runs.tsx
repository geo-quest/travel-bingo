/* eslint-disable arrow-parens */
import { Button, Col, Flex, Row } from "antd";

import { KeyObject, TravelBingoGameData } from "../../data/interfaces";
import t2 from "../../utils/t2";
import { DynamicIconComponent } from "../DynamicIcon/DynamicIcon";

interface Props {
  game: TravelBingoGameData & KeyObject;
}

function Runs({ game }: Props) {
  const gameTags = Object.keys(game.runs).map((key) => {
    const run = game.runs[key];

    return (
      <Row style={{ paddingBottom: "16px" }} key={key}>
        <Col span={24}>
          <Button
            icon={
              <DynamicIconComponent iconName={game.icon} color={game.color} />
            }
            onClick={() => {
              window.location.href = `/${game.key}/${key}`;
            }}
            style={{
              backgroundColor: game.backgroundColor,
              color: game.color,
              fontSize: "16px",
              fontWeight: "bold",
              fontVariant: "all-petite-caps",
              width: 300,
            }}
          >
            {t2(run.name)}
          </Button>
        </Col>
      </Row>
    );
  });
  return (
    <Flex gap="4px 0" wrap>
      {gameTags}
    </Flex>
  );
}

export default Runs;
