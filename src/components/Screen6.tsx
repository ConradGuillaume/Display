import React from "react";
import "./Screen6.scss";
import { motion } from "framer-motion";

export default function Screen6() {
  return (
    <div className="all">
      <div className="screen6">
        <div className="cereal-container6">
          <motion.div className="cereal6"></motion.div>
        </div>
        <div className="wrapper">
          <motion.span className="text-wrapp">
            <p className="text">vanille</p>
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
