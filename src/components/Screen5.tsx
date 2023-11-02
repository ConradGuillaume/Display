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
export default function Screen5({ isActive }: Screen5Props) {
  return (
    <div className="all">
      <div className="screen5">
        <div className="cereal-container5">
          <div className="cereal5"></div>
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
          <p className="text-descriptif">
            "Éveillez vos sens avec l'arôme envoûtant de notre shake protéiné
            saveur cappuccino. Une pause délicieuse alliant la richesse du café
            à la puissance des protéines, pour une recharge énergétique
            sophistiquée."
          </p>
        </div>
        <div className="price">2.50€</div>
      </div>
    </div>
  );
}
