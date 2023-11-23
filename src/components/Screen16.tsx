import React from "react";
import "./Screen16.scss";
import { motion } from "framer-motion";

export default function Screen16() {
  return (
    <div className="all">
      <div className="screen16">
        <div className="cereal-container16">
          <motion.div className="cereal16"></motion.div>
        </div>
        <div className="wrapper">
          <motion.span className="text-wrapp">
            <p className="text">PRE-WORKOUT</p>
          </motion.span>
        </div>
        <div className="price-n">1.45€</div>
      </div>
    </div>
  );
}
