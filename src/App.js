import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <p>
          <footer>
            The project was coded by Adefokun Adetona and it's open-sourced on:{" "}
            <a
              href="https://github.com/tonaadefokun/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <p />
            <button className="btn btn-primary">Button</button>
          </footer>
        </p>
      </div>
    </div>
  );
}
