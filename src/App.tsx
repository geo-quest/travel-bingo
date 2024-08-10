import "./App.css";

import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import getGameData from "./data/index";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import Run from "./pages/Run/Run";
import Team from "./pages/Team/Team";

function App() {
  const { i18n } = useTranslation();
  const gameData = getGameData(i18n.language);

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
