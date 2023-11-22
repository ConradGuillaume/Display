import React from "react";
import { motion } from "framer-motion";
import "./Screen2.scss";

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

export default function Screen2() {
  return (
    <div className="all">
      <div className="screen2">
        <motion.p
          className="text-descriptif"
          initial="hidden"
          animate="active"
          variants={slideVariants2}
        >
          "découvrez nos shakes protéinés aux saveurs{" "}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }} // Définit les valeurs de scale
            transition={{
              duration: 2, // Durée de l'animation en secondes
              ease: "easeInOut", // Type d'animation
              repeat: Infinity, // Répète l'animation indéfiniment
            }}
            className="blink"
          >
            sublimes
          </motion.div>
          . "
        </motion.p>
        <div className="cereal-container2">
          <motion.div
            className="cereal2"
            variants={zoomVariants}
            animate="visible"
            exit="hidden"
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
            <p className="text">Nos Shakers !</p>
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
