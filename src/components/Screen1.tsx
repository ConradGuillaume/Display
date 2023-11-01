import React from "react";
import "./Screen1.scss";

interface Screen1Props {
  isActive: boolean;
}

export default function Screen1({ isActive }: Screen1Props) {
  return (
    <div className="all">
      <div className="screen">
        <div className="wrapper">
          <p className="text">
            UN RÊVE POUR LES <br /> FAN DE COOKIES !
          </p>
        </div>
        <p className="text-descriptif">
          " Le goût irrésistible d'un cookie croquant, désormais dans une barre
          protéinée. Entre délice et nutrition pour vous offrir le boost
          d'énergie idéal. "
        </p>
        <div className="cereal-container">
          <div className="cereal"></div>
        </div>
        <div className="price">3.50€</div>
      </div>
    </div>
  );
}
