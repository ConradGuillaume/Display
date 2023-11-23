import React from "react";
import "./Screen13.scss";
import { motion } from "framer-motion";

export default function Screen13() {
  return (
    <div className="all">
      <div className="screen13">
        <div className="cereal-container13">
          <motion.div className="cereal13"></motion.div>
        </div>
        <div className="wrapper">
          <motion.span className="text-wrapp">
            <p className="text">Chocolat Chaud</p>
          </motion.span>
        </div>
        <div className="price-n">1.95€</div>
      </div>
    </div>
  );
}
