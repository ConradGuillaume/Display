import React from "react";
import "./Screen10.scss";
import { motion } from "framer-motion";

interface Screen10Props {
  isActive: boolean;
}
const slideVariants = {
  hidden: { y: "-100vh", opacity: 0, transition: { duration: 2 } },
  visible: { y: "0%", opacity: 1, transition: { duration: 1, bounce: 2 } },
};
export default function Screen10({ isActive }: Screen10Props) {
  return (
    <div className="all">
      <div className="screen10">
        <div className="cereal-container10">
          <div className="cereal10"></div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp1"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
          >
            <p className="text1">Chaussure d'intérieur</p>
          </motion.span>
          <p className="text-descriptif">
            Veuillez notre qu'une paire de chaussure d'intérieur est obligatoire
            afin de réaliser votre séance d'entrainement au sein de notre centre
            de remise en forme
          </p>
          <p className="thank">
            <i>merci de votre compréhension</i>
          </p>
        </div>
      </div>
    </div>
  );
}
