import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import getGameData from './data/index'
import Game from './pages/Game/Game'
import Home from './pages/Home/Home'

function App() {
  const gameData = getGameData()

  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Home data={gameData} />} />
        <Route path="/:gameKey" element={<Game data={gameData} />} />
        {/* <Route path="/:gameKey/:runKey" element={<Run data={gameData} />} />
        <Route path="/:gameKey/:runKey/:teamKey" element={<Team data={gameData} />} />
        <Route path="locales/en/translation.json"></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
