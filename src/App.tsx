import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import GameEdition from "./pages/GameEdition/GameEdition";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  const basename = process.env.PUBLIC_URL || "/travel-bingo";
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editions/:editionId" element={<GameEdition />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
