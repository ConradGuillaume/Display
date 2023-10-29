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
import { AnimatePresence } from "framer-motion";
import "./MainPage.scss";

const screenVariants = {
  enter: { opacity: 1, x: 0, transition: { duration: 1 } },
  exit: { opacity: 1, x: "-100%", transition: { duration: 1 } },
  initial: { opacity: 1, x: "100%", transition: { duration: 1 } },
};

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

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prevScreen) => (prevScreen % 9) + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const renderScreen = () => {
    return (
      <motion.div
        key={currentScreen}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={screenVariants}
        style={{ zIndex: 0 }}
      >
        {(() => {
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
            default:
              return <Screen1 />;
          }
        })()}
      </motion.div>
    );
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
      <AnimatePresence>{renderScreen()}</AnimatePresence>
    </motion.div>
  );
}
