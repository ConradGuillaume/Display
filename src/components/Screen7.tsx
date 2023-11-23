import React from "react";
import "./Screen7.scss";
import { motion } from "framer-motion";

export default function Screen7() {
  return (
    <div className="all">
      <div className="screen7">
        <div className="cereal-container7">
          <motion.div className="cereal7"></motion.div>
        </div>
        <div className="wrapper">
          <motion.span className="text-wrapp" initial="hidden">
            <p className="text">fraise</p>
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
