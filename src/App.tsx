import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/travel-bingo-logo.png"}
          className="Travel Bingo"
        />
      </header>
    </div>
  );
}

export default App;
