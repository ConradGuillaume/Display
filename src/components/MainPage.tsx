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
      setCurrentScreen((prevScreen) => (prevScreen % 9) + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  const renderScreens = () => {
    const screens = [
      <Screen1 key="1" />,
      <Screen2 key="2" />,
      <Screen3 key="3" />,
      <Screen4 key="4" />,
      <Screen5 key="5" />,
      <Screen6 key="6" />,
      <Screen7 key="7" />,
      <Screen8 key="8" />,
      <Screen9 key="9" />,
    ];
    return screens.map((ScreenComponent, index) => (
      <motion.div
        key={index + 1}
        initial="initial"
        animate={currentScreen === index + 1 ? "enter" : "exit"}
        variants={{
          enter: { opacity: 1 },
          exit: { opacity: 0 },
        }}
        transition={{ duration: 1 }}
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
      <div className="screens-container" style={{ position: "relative" }}>
        {renderScreens()}
      </div>
    </motion.div>
  );
}
