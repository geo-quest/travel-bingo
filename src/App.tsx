import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editions/:editionId" element={<Game />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
