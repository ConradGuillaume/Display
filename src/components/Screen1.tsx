import React from "react";
import "./Screen1.scss";
import { motion } from "framer-motion";

interface Screen1Props {
  isActive: boolean;
}
const slideVariants = {
  hidden: { x: "100vw", opacity: 0, transition: { duration: 2 } },
  visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
};

export default function Screen1({ isActive }: Screen1Props) {
  return (
    <div className="all">
      <div className="screen">
        <div className="wrapper">
          <motion.span
            className="text-wrapp"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
          >
            <p className="text">Cookies</p>
          </motion.span>
          <p className="text-descriptif">
            "Découvrez nos irrésistibles saveurs dans des shakers protéinés. Un
            délice nutritif pour un boost d'énergie optimal. Nourrissez votre
            corps en savourant chaque gorgée !"
          </p>
        </div>
        <div className="cereal-container">
          <div className="cereal"></div>
        </div>
        <div className="price">3.50€</div>
      </div>
    </div>
  );
}
