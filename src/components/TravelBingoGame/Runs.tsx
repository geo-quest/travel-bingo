/* eslint-disable arrow-parens */
import { Flex, Tag } from "antd";

import { KeyObject, TravelBingoGameData } from "../../data/interfaces";

interface Props {
  game: TravelBingoGameData & KeyObject;
}

function Runs({ game }: Props) {
  const gameTags = Object.keys(game.runs).map((key) => {
    const run = game.runs[key];

    return (
      <Tag
        key={key}
        color={game.color}
        onClick={() => {
          window.location.href = `/${game.key}/${key}`;
        }}
        style={{
          cursor: "pointer",
          marginBottom: "4px",
        }}
      >
        {run.name}
      </Tag>
    );
  });
  return (
    <Flex gap="4px 0" wrap>
      {gameTags}
    </Flex>
  );
}

export default Runs;