import React, { useState, useEffect } from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import "./MainPage.scss";

export default function MainPage() {
  const [currentScreen, setCurrentScreen] = useState(1); // Initialise à 1 pour Screen1

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prevScreen) => {
        if (prevScreen === 1) {
          return 2; // Change pour Screen2
        } else {
          return 1; // Change pour Screen1
        }
      });
    }, 10000); // Change tous les 5000 ms (5 secondes)

    return () => {
      clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
    };
  }, []);

  /*
        {currentScreen === 1 && <Screen1 />}
      {currentScreen === 2 && <Screen2 />}
  */
  return (
    <div className="main-page">
      {" "}
      <Screen1 />
    </div>
  );
}
