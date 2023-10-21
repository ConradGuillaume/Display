import React, { useState, useEffect } from "react";
import "./App.scss";
import MainPage from "./components/MainPage";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");


  return (
    <div className="App">
      <header className="App-header">
        <h2>{`${hours}:${minutes}`}</h2>
        <MainPage />
      </header>
    </div>
  );
}

export default App;
