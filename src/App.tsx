import "./App.css";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import gameData from "./data/index";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import Run from "./pages/Run/Run";
import Team from "./pages/Team/Team";

function App() {
  TimeAgo.addDefaultLocale(en);
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Home data={gameData} />} />
        <Route path="/:gameKey" element={<Game data={gameData} />} />
        <Route path="/:gameKey/:runKey" element={<Run data={gameData} />} />
        <Route
          path="/:gameKey/:runKey/:teamKey"
          element={<Team data={gameData} />}
        />
        <Route path="locales/en/translation.json"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
