import React from "react";
import "./Screen.scss";

export default function Screen1() {
  return (
    <div className="screen">
      <div className="cereal-container">
        <div className="cereal"></div>
      </div>
      <div className="wrapper">
        <p className="text">
          UN RÊVE POUR LES <br /> AMOUREUX DES COOKIES !
        </p>
        <p className="text-descriptif">
          " Le goût irrésistible d'un cookie croquant, désormais dans une barre
          protéinée. Entre délice et nutrition pour vous offrir le
          boost d'énergie idéal. Savourez chaque bouchée tout en nourrissant
          votre corps avec ce qu'il y a de meilleur !  "
        </p>
      </div>
    </div>
  );
}
