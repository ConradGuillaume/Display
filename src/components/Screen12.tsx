import React from "react";
import "./Screen12.scss";
import { motion } from "framer-motion";

export default function Screen12() {
  return (
    <div className="all">
      <div className="screen12">
        <div className="cereal-container12">
          <motion.div className="cereal12"></motion.div>
        </div>
        <div className="wrapper">
          <motion.span className="text-wrapp" initial="hidden">
            <p className="text">Latte-Machiatto</p>
          </motion.span>
        </div>
        <div className="price-n">1.95€</div>
      </div>
    </div>
  );
}
