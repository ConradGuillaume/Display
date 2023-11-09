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
          <motion.p
            className="text-descriptif"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants2}
          >
            "Optimisez votre récupération après l'effort avec nos shakes
            protéinés aux saveurs sublimes. Un régal pour vos papilles et un
            carburant de choix pour vos muscles. "
          </motion.p>
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
