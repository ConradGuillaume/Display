import React from "react";
import "./Screen5.scss";
import { motion } from "framer-motion";

export default function Screen5() {
  return (
    <div className="all">
      <div className="screen5">
        <div className="cereal-container5">
          <motion.div className="cereal5"></motion.div>
        </div>
        <div className="wrapper">
          <motion.span className="text-wrapp">
            <p className="text">Cappucino</p>
          </motion.span>
        </div>
        <div className="price-container">
          <span>A L'EAU</span> <div className="price">2.50€</div>
        </div>
        <div className="price-container1">
          <span>AU LAIT</span> <div className="price1">3€</div>
        </div>
      </div>
    </div>
  );
}
