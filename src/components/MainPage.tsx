import React, { useState, useEffect } from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";
import Screen6 from "./Screen6";
import Screen7 from "./Screen7";
import Screen8 from "./Screen8";
import Screen9 from "./Screen9";
import Screen10 from "./Screen10";
import Screen11 from "./Screen11";
import { motion } from "framer-motion";
import "./MainPage.scss";

export default function MainPage() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prevScreen) => (prevScreen % 11) + 1);
    }, 24000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  const renderScreens = () => {
    const screens = [
      <Screen1 key="1" isActive={currentScreen === 1} />,
      <Screen2 key="2" isActive={currentScreen === 2} />,
      <Screen3 key="3" isActive={currentScreen === 3} />,
      <Screen4 key="4" isActive={currentScreen === 4} />,
      <Screen5 key="5" isActive={currentScreen === 5} />,
      <Screen6 key="6" isActive={currentScreen === 6} />,
      <Screen7 key="7" isActive={currentScreen === 7} />,
      <Screen8 key="8" isActive={currentScreen === 8} />,
      <Screen9 key="9" isActive={currentScreen === 9} />,
      <Screen10 key="10" isActive={currentScreen === 10} />,
      <Screen11 key="11" isActive={currentScreen === 11} />,
    ];

    return screens.map((ScreenComponent, index) => (
      <motion.div
        key={index + 1}
        initial="initial"
        animate={currentScreen === index + 1 ? "active" : "inactive"}
        variants={{
          active: { opacity: 1 }, // Léger zoom et pleine opacité pour l'écran actif
          inactive: { opacity: 0 }, // Pas de zoom et opacité nulle pour les écrans inactifs
        }}
        transition={{
          opacity: {
            duration: 1, // Durée plus courte pour l'opacité
            ease: "easeInOut", // Transition douce pour l'opacité
          },
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        {ScreenComponent}
      </motion.div>
    ));
  };
  // {renderScreens()}         <Screen4 key="4" isActive={true} />,
  return (
    <motion.div className="main-page">
      <div id="clock">
        {/* Clock elements go here */}
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
      <div className="logo"></div>
      <div className="screens-container" style={{ position: "relative" }}>
        {" "}
        {renderScreens()}{" "}
      </div>
      <div className="screen-bg"></div>
    </motion.div>
  );
}
