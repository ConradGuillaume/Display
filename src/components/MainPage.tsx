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
import { AnimatePresence, motion } from "framer-motion";
import "./MainPage.scss";

export default function MainPage() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [time, setTime] = useState(new Date());
  const fadeVariants = {
    initial: {
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" }, // Ajoutez la durée et d'autres paramètres ici si nécessaire
    },
    in: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }, // Durée pour l'animation d'entrée
    },
    out: {
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" }, // Durée pour l'animation de sortie
    },
  };

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
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  const renderCurrentScreen = () => {
    let ScreenComponent;
    switch (currentScreen) {
      case 1:
        ScreenComponent = <Screen1 />;
        break;
      case 2:
        ScreenComponent = <Screen2 />;
        break;
      case 3:
        ScreenComponent = <Screen3 />;
        break;
      case 4:
        ScreenComponent = <Screen4 />;
        break;
      case 5:
        ScreenComponent = <Screen5 />;
        break;
      case 6:
        ScreenComponent = <Screen6 />;
        break;
      case 7:
        ScreenComponent = <Screen7 />;
        break;
      case 8:
        ScreenComponent = <Screen8 />;
        break;
      case 9:
        ScreenComponent = <Screen9 />;
        break;
      case 10:
        ScreenComponent = <Screen10 />;
        break;
      case 11:
        ScreenComponent = <Screen11 />;
        break;
      case 12:
        ScreenComponent = <Screen12 />;
        break;
      case 13:
        ScreenComponent = <Screen13 />;
        break;
      case 14:
        ScreenComponent = <Screen14 />;
        break;
      case 15:
        ScreenComponent = <Screen15 />;
        break;
      case 16:
        ScreenComponent = <Screen16 />;
        break;
      default:
        ScreenComponent = null;
    }

    return (
      <motion.div
        key={currentScreen}
        initial="initial"
        animate="in"
        exit="out"
        variants={fadeVariants}
        transition={{ duration: 1.5 }}
      >
        {ScreenComponent}
      </motion.div>
    );
  };
  // {renderCurrentScreen()}
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
      <div className="screens-container">
        <AnimatePresence>{renderCurrentScreen()}</AnimatePresence>
      </div>
    </motion.div>
  );
}
