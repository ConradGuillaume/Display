import React from "react";
import "./Screen1.scss";
import { motion } from "framer-motion";

export default function Screen1() {
  return (
    <div className="all">
      <div className="screen">
        <div className="wrapper">
          <motion.span className="text-wrapp">
            <p className="text">Cookies</p>
          </motion.span>
        </div>
        <div className="cereal-container">
          <div className="cereal"></div>
        </div>
        <div className="price-n">3.50€</div>
      </div>
    </div>
  );
}
