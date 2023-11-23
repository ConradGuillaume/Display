import React from "react";
import "./Screen15.scss";
import { motion } from "framer-motion";



export default function Screen15() {
  return (
    <div className="all">
      <div className="screen15">
        <div className="cereal-container15">
          <motion.div
            className="cereal15"

          ></motion.div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp"
          >
            <p className="text">thé</p>
          </motion.span>
        </div>
        <div className="price-n">0.95€</div>
      </div>
    </div>
  );
}
