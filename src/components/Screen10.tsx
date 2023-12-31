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
export default function Screen10({ isActive }: Screen10Props) {
  return (
    <div className="all">
      <div className="screen10">
        <div className="cereal-container10">
          <motion.div
            className="cereal10"
            variants={zoomVariants}
            animate={isActive ? "active" : "inactive"}
          ></motion.div>
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
          <motion.p
            className="text-descriptif"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants2}
          >
            Veuillez noter qu'une paire de chaussure d'intérieur est obligatoire
            afin de réaliser votre séance d'entrainement au sein de notre centre
            de remise en forme
          </motion.p>
          <motion.p
            className="thank"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
          >
            <i>merci de votre compréhension</i>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
