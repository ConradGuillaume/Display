import { motion } from "framer-motion";
import "./Screen3.scss";

interface Screen3Props {
  isActive: boolean;
}

export default function Screen3({ isActive }: Screen3Props) {
  console.log("is", isActive);

  // Variants pour l'animation de glissement
  const slideVariants = {
    hidden: { x: "100vw", opacity: 0, transition: { duration: 2 } },
    visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
  };
  const slideVariants2 = {
    hidden: { y: "100vh", opacity: 0, transition: { duration: 2 } },
    visible: { y: "0%", opacity: 1, transition: { duration: 1 } },
  };
const zoomVariants = {
  inactive: { scale: 1.1 },
  active: {
    scale: [1, 1.1], // Keyframes pour l'effet avant-arrière
    transition: {
      scale: {
        duration: 24, // Durée de l'effet avant-arrière
        ease: "linear",
        repeat: Infinity, // Répète l'effet indéfiniment
        repeatType: "loop", // Continue l'animation en boucle
      },
    },
  },
};

  return (
    <div className="all">
      <div className="screen3">
        <div className="cereal-container3">
          <motion.div
            className="cereal3"
            variants={zoomVariants}
            animate={isActive ? "active" : "inactive"}
          ></motion.div>
        </div>
        <div className="wrapper">
          <motion.span
            className="text-wrapp"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
          >
            <p className="text">chocolat</p>
          </motion.span>
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
