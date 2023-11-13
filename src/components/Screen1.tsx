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
const slideVariants2 = {
  hidden: { y: "100vh", opacity: 0, transition: { duration: 2 } },
  visible: { y: "0%", opacity: 1, transition: { duration: 1 } },
};
const zoomVariants = {
  inactive: { scale: 1.1 },
  active: {
    scale: [1, 1.1], // Keyframes pour l'effet avant-arrière
    transition: {
      scale: {
        duration: 24, // Durée de l'effet avant-arrière
        ease: "linear",
        repeat: Infinity, // Répète l'effet indéfiniment
        repeatType: "loop", // Continue l'animation en boucle
      },
    },
  },
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
          <motion.p
            className="text-descriptif"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants2}
          >
            "Découvrez nos irrésistibles saveurs dans des barres protéinés. Un
            délice nutritif pour un boost d'énergie optimal."
          </motion.p>
        </div>
        <div className="cereal-container">
          <motion.div
            className="cereal"
            variants={zoomVariants}
            animate={isActive ? "active" : "inactive"}
          ></motion.div>
        </div>
        <div className="price-n">3.50€</div>
      </div>
    </div>
  );
}
