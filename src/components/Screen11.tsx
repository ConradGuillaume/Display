import React from "react";
import "./Screen11.scss";
import { motion } from "framer-motion";

interface Screen11Props {
  isActive: boolean;
}
const slideVariants = {
  hidden: { y: "-100vh", opacity: 0, transition: { duration: 2 } },
  visible: { y: "0%", opacity: 1, transition: { duration: 1, bounce: 2 } },
};
export default function Screen11({ isActive }: Screen11Props) {
  return (
    <div className="all">
      <div className="screen10">
        <div className="cereal-container11">
          <div className="cereal11"></div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp2"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
          >
            <p className="text2">Serviettes en location</p>
          </motion.span>
          <p className="text-descriptif">
            En cas d'oublis nous pouvons vous fournir une serviette en location
            a restituer à la fin de votre séance d'entrainement
          </p>
          <p className="price">1€</p>
        </div>
        <p className="message">
          <span className="scrolling-text">
            Oublis de serviette = interdiction de s'entrainer
          </span>
        </p>
      </div>
    </div>
  );
}
