import React from "react";
import { motion } from "framer-motion";
import "./Screen4.scss";
const titleAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

interface Screen4Props {
  isActive: boolean;
}
const slideVariants = {
  hidden: { x: "100vw", opacity: 0, transition: { duration: 2 } },
  visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
};
export default function Screen4({ isActive }: Screen4Props) {
  return (
    <div className="all">
      <div className="screen4">
        <div className="cereal-container4">
          <div className="cereal4"></div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
          >
            <p className="text">Coco</p>
          </motion.span>
          <p className="text-descriptif">
            "Laissez-vous transporter par la douceur tropicale de notre shake
            protéiné à la noix de coco. Un élixir de bien-être qui combine
            plaisir et bienfaits nutritifs, idéal pour revitaliser votre corps.
            "
          </p>
        </div>
        <div className="price">2.50€</div>
      </div>
    </div>
  );
}
