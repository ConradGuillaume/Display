import React from "react";
import { motion } from "framer-motion";
import "./Screen2.scss";
interface Screen2Props {
  isActive: boolean;
} // Variants pour l'animation de glissement
const slideVariants = {
  hidden: { x: "100vw", opacity: 0, transition: { duration: 2 } },
  visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
};
const slideVariants2 = {
  hidden: { y: "100vh", opacity: 0, transition: { duration: 2 } },
  visible: { y: "0%", opacity: 1, transition: { duration: 1 } },
};

export default function Screen2({ isActive }: Screen2Props) {
  return (
    <div className="all">
      <div className="screen2">
        <motion.p
          className="text-descriptif"
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={slideVariants2}
        >
          "découvrez nos shakes protéinés aux saveurs{" "}
          <motion.span
            animate={{ scale: [1, 1.5, 1] }} // Définit les valeurs de scale
            transition={{
              duration: 2, // Durée de l'animation en secondes
              ease: "easeInOut", // Type d'animation
              loop: Infinity, // Répète l'animation indéfiniment
            }}
            className="blink"
          >
            sublimes
          </motion.span>
          . "
        </motion.p>
        <div className="cereal-container2">
          <div className="cereal2"></div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
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
