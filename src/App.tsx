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
        <div id="clock">
          <div id="h10" className="num">
            <div className="upper">{hours[0]}</div>
          </div>
          <div id="h0" className="num">
            <div className="upper">{hours[1]}</div>
          </div>
          <div className="colon">:</div>
          <div id="m10" className="num">
            <div className="upper">{minutes[0]}</div>

          </div>
          <div id="m0" className="num">
            <div className="upper">{minutes[1]}</div>
          </div>
        </div>
        <MainPage />
      </header>
    </div>
  );
}

export default App;
