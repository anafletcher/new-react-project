import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>City Weather Display</h1>
        <Weather />
        <footer className="App-footer">
          <p>
            This project was coded by{" "}
            <a
              href="https://my-project-portfolio-afletcher.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Alicia Fletcher
            </a>
          </p>
        </footer>
      </header>
    </div>
  );
}
