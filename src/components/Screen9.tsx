import React from "react";
import "./Screen9.scss";
import { motion } from "framer-motion";

export default function Screen9() {
  return (
    <div className="all">
      <div className="screen9">
        <div className="cereal-container9">
          <motion.div className="cereal9"></motion.div>
        </div>
        <div className="wrapper">
          <motion.span className="text-wrapp" initial="hidden">
            <p className="text">café</p>
          </motion.span>
        </div>
        <div className="price-n">0.95€</div>
      </div>
    </div>
  );
}
