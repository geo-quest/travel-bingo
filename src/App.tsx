import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";

const getBasename = () => {
  if (window.location.hostname === "geo-quest.github.io") {
    return "/travel-bingo";
  }
  return "/";
};

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editions/:editionId" element={<Game />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
