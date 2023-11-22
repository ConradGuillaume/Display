import React from "react";
import "./Screen16.scss";
import { motion } from "framer-motion";


const slideVariants = {
  hidden: { x: "100vw", opacity: 0, transition: { duration: 2 } },
  visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
};
const slideVariants2 = {
  hidden: { y: "100vh", opacity: 0, transition: { duration: 2 } },
  visible: { y: "0%", opacity: 1, transition: { duration: 1 } },
};
const zoomVariants = {
  inactive: {
    scale: [1.1, 1.2],
    transition: {
      duration: 24, // Durée de l'animation jusqu'à 1.1
      ease: "linear",
    },
  },
  active: {
    scale: [1, 1.1], // Échelle fixée à 1.1
    transition: {
      duration: 24, // Durée de l'animation jusqu'à 1.1
      ease: "linear",
    },
  },
};
export default function Screen16() {
  return (
    <div className="all">
      <div className="screen16">
        <div className="cereal-container16">
          <motion.div
            className="cereal16"
            variants={zoomVariants}
            animate="active"
          ></motion.div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideVariants}
          >
            <p className="text">PRE-WORKOUT</p>
          </motion.span>
        </div>
        <div className="price-n">1.45€</div>
      </div>
    </div>
  );
}
