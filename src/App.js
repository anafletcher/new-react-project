import "./App.css";
import Hello from "./Hello";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Weather city="London" />
      </header>
    </div>
  );
}

export default App;
