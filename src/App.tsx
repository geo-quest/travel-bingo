import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import gameData from "./data/index";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import Run from "./pages/Run/Run";

function App() {
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Home data={gameData} />} />
        <Route path="/:gameId" element={<Game data={gameData} />} />
        <Route path="/:gameId/:runId" element={<Run data={gameData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
