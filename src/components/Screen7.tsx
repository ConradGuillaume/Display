import React from "react";
import "./Screen7.scss";
import { motion } from "framer-motion";
interface Screen7Props {
  isActive: boolean;
}
const slideVariants = {
  hidden: { x: "100vw", opacity: 0, transition: { duration: 2 } },
  visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
};
export default function Screen7({ isActive }: Screen7Props) {
  return (
    <div className="all">
      <div className="screen7">
        <div className="cereal-container7">
          <div className="cereal7"></div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
          >
            <p className="text">fraise</p>
          </motion.span>
          <p className="text-descriptif">
            "Redécouvrez le plaisir de l'effort avec notre shake protéiné à la
            fraise. Une harmonie de saveurs fraîches qui se mêle à une nutrition
            optimale, pour une expérience revitalisante."
          </p>
        </div>
        <div className="price">2.50€</div>
      </div>
    </div>
  );
}
