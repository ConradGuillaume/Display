import React from "react";
import "./Screen9.scss";
import { motion } from "framer-motion";

interface Screen9Props {
  isActive: boolean;
}
const slideVariants = {
  hidden: { x: "100vw", opacity: 0, transition: { duration: 2 } },
  visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
};
export default function Screen9({ isActive }: Screen9Props) {
  return (
    <div className="all">
      <div className="screen9">
        <div className="cereal-container9">
          <div className="cereal9"></div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
          >
            <p className="text">café</p>
          </motion.span>
          <p className="text-descriptif">
            "Découvrez son irrésistible saveur dans un shaker protéiné. Un
            délice nutritif pour un boost d'énergie optimal. Nourrissez votre
            corps en savourant chaque gorgée !"
          </p>
        </div>
        <div className="price">2.50€</div>
      </div>
    </div>
  );
}
