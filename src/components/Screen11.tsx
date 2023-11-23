import React from "react";
import "./Screen11.scss";
import { motion } from "framer-motion";

export default function Screen11() {
  return (
    <div className="all">
      <div className="screen10">
        <div className="cereal-container11">
          <motion.div className="cereal11"></motion.div>
        </div>
        <div className="wrapper">
          <motion.span className="text-wrapp2">
            <p className="text2">Serviettes en location</p>
          </motion.span>
          <p className="text-descriptif">
            En cas d'oublis nous pouvons vous fournir une serviette en location
            a restituer à la fin de votre séance d'entrainement
          </p>
          <p className="price-n">1€</p>
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
