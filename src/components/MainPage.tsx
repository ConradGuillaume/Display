import React, { useState, useEffect } from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";
import Screen6 from "./Screen6";
import Screen7 from "./Screen7";
import Screen8 from "./Screen8";
import "./MainPage.scss";

export default function MainPage() {
  const [currentScreen, setCurrentScreen] = useState(1); // Initialise à 1 pour Screen1

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prevScreen) => (prevScreen % 8) + 1);
    }, 5000); // Change tous les 5000 ms (5 secondes)

    return () => {
      clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
    };
  }, []);

  return (
    <div className="main-page">
      {currentScreen === 1 && <Screen1 />}
      {currentScreen === 2 && <Screen2 />}
      {currentScreen === 3 && <Screen3 />}
      {currentScreen === 4 && <Screen4 />}
      {currentScreen === 5 && <Screen5 />}
      {currentScreen === 6 && <Screen6 />}
      {currentScreen === 7 && <Screen7 />}
      {currentScreen === 8 && <Screen8 />}
    </div>
  );
}
