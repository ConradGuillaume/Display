import React from "react";
import { motion } from "framer-motion";
import "./Screen4.scss";
const titleAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

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
export default function Screen4() {
  return (
    <motion.div className="all">
      <div className="screen4">
        <div className="cereal-container4">
          <motion.div className="cereal4"></motion.div>
        </div>

        <div className="wrapper">
          <motion.span className="text-wrapp">
            <p className="text">Coco</p>
          </motion.span>
        </div>
        <div className="price-container">
          <span>EAU</span> <div className="price">2.50€</div>
        </div>
        <div className="price-container1">
          <span>LAIT</span> <div className="price1">3€</div>
        </div>
      </div>
    </motion.div>
  );
}
