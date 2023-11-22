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
import Screen12 from "./Screen12";
import Screen13 from "./Screen13";
import Screen14 from "./Screen14";
import Screen15 from "./Screen15";
import Screen16 from "./Screen16";
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
      setCurrentScreen((prevScreen) => (prevScreen % 16) + 1);
    }, 24000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 1:
        return <Screen1 />;
      case 2:
        return <Screen2 />;
      case 3:
        return <Screen3 />;
      case 4:
        return <Screen4 />;
      case 5:
        return <Screen5 />;
      case 6:
        return <Screen6 />;
      case 7:
        return <Screen7 />;
      case 8:
        return <Screen8 />;
      case 9:
        return <Screen9 />;
      case 10:
        return <Screen10 />;
      case 11:
        return <Screen11 />;
      case 12:
        return <Screen12 />;
      case 13:
        return <Screen13 />;
      case 14:
        return <Screen14 />;
      case 15:
        return <Screen15 />;
      case 16:
        return <Screen16 />;
      default:
        return null;
    }
  };

  return (
    <motion.div className="main-page">
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
      <div className="logo"></div>
      <div className="screens-container" style={{ position: "relative" }}>
        {renderCurrentScreen()}
      </div>
      <div className="screen-bg"></div>
    </motion.div>
  );
}
