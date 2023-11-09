import React from "react";
import "./Screen6.scss";
import { motion } from "framer-motion";
interface Screen6Props {
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
export default function Screen6({ isActive }: Screen6Props) {
  return (
    <div className="all">
      <div className="screen6">
        <div className="cereal-container6">
          <div className="cereal6"></div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
          >
            <p className="text">vanille</p>
          </motion.span>
          <motion.p
            className="text-descriptif"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants2}
          >
            "Plongez dans la douceur veloutée de notre shake protéiné à la
            vanille. Un mélange raffiné de saveurs délicates et de nutrition
            puissante, conçu pour dynamiser votre organisme."
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
