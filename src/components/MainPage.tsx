import React, { useState, useEffect } from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import "./MainPage.scss";

export default function MainPage() {
  const [currentScreen, setCurrentScreen] = useState(1); // Initialise à 1 pour Screen1

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prevScreen) => {
        if (prevScreen === 1) {
          return 2; // Change pour Screen2
        } else if (prevScreen === 2) {
          return 3; // Change pour Screen3
        } else if (prevScreen === 3) {
          return 4; // Change pour Screen4
        } else {
          return 1; // Change pour Screen1
        }
      });
    }, 5000); // Change tous les 10000 ms (10 secondes)

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
    </div>
  );
}
