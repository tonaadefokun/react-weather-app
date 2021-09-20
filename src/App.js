import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Ilesa" />
        <footer>
          The project was coded by Adefokun Adetona and it's open-sourced on:{" "}
          <a
            href="https://github.com/tonaadefokun/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
