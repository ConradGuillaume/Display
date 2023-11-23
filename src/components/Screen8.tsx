import React from "react";
import "./Screen8.scss";
import { motion } from "framer-motion";

export default function Screen8() {
  return (
    <div className="all">
      <div className="screen8">
        <div className="cereal-container8">
          <motion.div className="cereal8"></motion.div>
        </div>
        <div className="wrapper">
          <motion.span className="text-wrapp" initial="hidden">
            <p className="text">banane</p>
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
