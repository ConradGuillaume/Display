import React from "react";
import "./Screen8.scss";
import { motion } from "framer-motion";
interface Screen8Props {
  isActive: boolean;
}
const slideVariants = {
  hidden: { x: "100vw", opacity: 0, transition: { duration: 2 } },
  visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
};
export default function Screen8({ isActive }: Screen8Props) {
  return (
    <div className="all">
      <div className="screen8">
        <div className="cereal-container8">
          <div className="cereal8"></div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
          >
            <p className="text">banane</p>
          </motion.span>
          <p className="text-descriptif">
            "Expérimentez le punch tropical de notre shake protéiné à la banane.
            Une combinaison exubérante de douceur fruitée et d'énergie
            protéinée, parfait pour un regain d'énergie post-entraînement. "
          </p>
        </div>
        <div className="price">2.50€</div>
      </div>
    </div>
  );
}
