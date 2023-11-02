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

export default function Screen2({ isActive }: Screen2Props) {
  return (
    <div className="all">
      <div className="screen2">
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
          <p className="text-descriptif">
            "Découvrez nos irrésistibles saveurs dans des shakers protéinés. Un
            délice nutritif pour un boost d'énergie optimal. Nourrissez votre
            corps en savourant chaque gorgée !"
          </p>
        </div>
        <div className="price">2.50€</div>
      </div>
    </div>
  );
}
