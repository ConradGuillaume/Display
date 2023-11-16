import React from "react";
import "./Screen5.scss";
import { motion } from "framer-motion";
interface Screen5Props {
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
export default function Screen5({ isActive }: Screen5Props) {
  return (
    <div className="all">
      <div className="screen5">
        <div className="cereal-container5">
          <motion.div
            className="cereal5"
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
            <p className="text">Cappucino</p>
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
