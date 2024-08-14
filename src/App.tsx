import './App.css'

import Game from 'pages/Game/Game'
import Home from 'pages/Home/Home'
import Run from 'pages/Run/Run'
import Team from 'pages/Team/Team'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import getGameData from './data/index'

function App() {
  const gameData = getGameData()

  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Home data={gameData} />} />
        <Route path="/:gameKey" element={<Game data={gameData} />} />
        <Route path="/:gameKey/:runKey" element={<Run data={gameData} />} />
        <Route path="/:gameKey/:runKey/:teamKey" element={<Team data={gameData} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
