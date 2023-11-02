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

  return (
    <div className="all">
      <div className="screen3">
        <div className="cereal-container3">
          <div className="cereal3"></div>
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
          <p className="text-descriptif">
            "Succombez à l’onctuosité de notre shake protéiné au chocolat, une
            fusion parfaite entre gourmandise et nutrition. Un boost d’énergie
            chocolaté pour régénérer votre corps après un entraînement intensif.
            "
          </p>
        </div>
        <div className="price">2.50€</div>
      </div>
    </div>
  );
}
