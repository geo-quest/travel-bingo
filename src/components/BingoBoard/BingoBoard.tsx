/* eslint-disable arrow-parens */
import "./BingoBoard.css";

import { Card } from "antd";
import React from "react";

import { Challenge } from "../../data/interfaces";
import Header from "./Header";

interface Props {
  challenges: Challenge[][];
  onClick: (challenge: Challenge) => void;
  defineCardClass?: (challenge: Challenge) => string | undefined;
}

const BingoBoard: React.FC<Props> = ({
  challenges,
  onClick,
  defineCardClass,
}) => {
  return (
    <div className="board">
      <Header />
      {challenges.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((item, colIndex) => (
            <Card.Grid
              key={colIndex}
              className={
                defineCardClass ? defineCardClass(item) + " card" : "card"
              }
              onClick={() => onClick(item)}
              style={{ width: `${100 / row.length}%` }}
            >
              {item.challenge}
            </Card.Grid>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BingoBoard;
