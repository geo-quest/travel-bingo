/* eslint-disable arrow-parens */
import "./Home.css";

import { Flex, Tag } from "antd";

import { DynamicIconComponent } from "../../components/DynamicIcon/DynamicIcon";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import { TravelBingoGamesData } from "../../data/interfaces";
import t2 from "../../utils/t2";

interface Props {
  data: TravelBingoGamesData;
}

function Home({ data }: Props) {
  const gameTags = Object.keys(data).map((key) => {
    const game = data[key];

    return (
      <Tag
        key={key}
        icon={<DynamicIconComponent iconName={game.icon} />}
        color={game.color}
        onClick={() => {
          window.location.href = `/${key}`;
        }}
        style={{
          cursor: "pointer",
          marginBottom: "4px",
        }}
      >
        {t2(game.title)}
      </Tag>
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/travel-bingo-logo.png"}
          className="Travel Bingo"
          alt="Travel Bingo"
        />
        <Flex gap="4px 0" wrap style={{ marginBottom: "20px" }}>
          {gameTags}
        </Flex>
        <LanguageSelector />
      </header>
    </div>
  );
}

export default Home;
