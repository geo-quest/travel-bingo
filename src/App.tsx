import "./App.css";

import BoardPage from "./board-page/BoardPage";
import challenge from "./challenge.json";

function App() {
  return <BoardPage travelBingo={challenge} />;
}

export default App;
