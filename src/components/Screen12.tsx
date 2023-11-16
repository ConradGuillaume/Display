import React from "react";
import "./Screen12.scss";
import { motion } from "framer-motion";

interface Screen12Props {
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
        duration: 26, // Durée de l'effet avant-arrière
        ease: "linear",
        repeat: Infinity, // Répète l'effet indéfiniment
        repeatType: "loop", // Continue l'animation en boucle
      },
    },
  },
};
export default function Screen12({ isActive }: Screen12Props) {
  return (
    <div className="all">
      <div className="screen12">
        <div className="cereal-container12">
          <motion.div
            className="cereal12"
            variants={zoomVariants}
            animate={isActive ? "active" : undefined}
          ></motion.div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
          >
            <p className="text">Latte-Machiatto</p>
          </motion.span>
        </div>
        <div className="price-n">1.95€</div>
      </div>
    </div>
  );
}
