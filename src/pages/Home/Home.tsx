/* eslint-disable arrow-parens */
import "./Home.css";

import { Button, Col, Row } from "antd";

import { DynamicIconComponent } from "../../components/DynamicIcon/DynamicIcon";
import { TravelBingoGamesData } from "../../data/interfaces";
import t2 from "../../utils/t2";

interface Props {
  data: TravelBingoGamesData;
}

function Home({ data }: Props) {
  const gameLinks = Object.keys(data).map((key) => {
    const game = data[key];

    return (
      <Row style={{ paddingTop: "16px" }} key={key}>
        <Col span={24}>
          <Button
            icon={
              <DynamicIconComponent iconName={game.icon} color={game.color} />
            }
            onClick={() => {
              window.location.href = `/${key}`;
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
            {t2(game.title)}
          </Button>
        </Col>
      </Row>
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
        {gameLinks}
      </header>
    </div>
  );
}

export default Home;
