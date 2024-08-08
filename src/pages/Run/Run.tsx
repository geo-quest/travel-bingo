import "./Run.css";

import LeaderBoard from "./LeaderBoard";
import Podium from "./Podium";

function Run() {
  return (
    <div className="app-container">
      <Podium />
      <LeaderBoard />
    </div>
  );
}

export default Run;
