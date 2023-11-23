import { motion } from "framer-motion";
import "./Screen3.scss";

export default function Screen3() {
  // Variants pour l'animation de glissement

  return (
    <div className="all">
      <div className="screen3">
        <div className="cereal-container3">
          <motion.div className="cereal3"></motion.div>
        </div>
        <div className="wrapper">
          <motion.span className="text-wrapp">
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
