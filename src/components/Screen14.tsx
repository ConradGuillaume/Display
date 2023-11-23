import React from "react";
import "./Screen14.scss";
import { motion } from "framer-motion";

export default function Screen14() {
  return (
    <div className="all">
      <div className="screen14">
        <div className="cereal-container14">
          <motion.div className="cereal14"></motion.div>
        </div>
        <div className="wrapper">
          <motion.span className="text-wrapp">
            <p className="text">cappucino</p>
          </motion.span>
        </div>
        <div className="price-n">1.95€</div>
      </div>
    </div>
  );
}
