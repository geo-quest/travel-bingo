/* eslint-disable arrow-parens */
import { Card } from "antd";

function Header() {
  return (
    <div style={{ display: "flex" }}>
      {["B", "I", "N", "G", "O"].map((letter) => (
        <Card.Grid key={letter} className="header-card" hoverable={false}>
          {letter}
        </Card.Grid>
      ))}
    </div>
  );
}

export default Header;
