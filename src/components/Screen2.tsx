import React from "react";
import "./Screen2.scss";
interface Screen2Props {
  isActive: boolean;
}

export default function Screen2({ isActive }: Screen2Props) {
  return (
    <div className="all">
      <div className="screen2">
        <div className="wrapper1">
          <p className="text1">
            POUR LES FAN
            <br /> ABSOLU D'OREO !
          </p>
        </div>
        <p className="text-descriptif1">
          " Le plaisir inégalé d'un Oreo , maintenant dans une barre protéinée.
          Le parfait équilibre entre plaisir et nutrition, conçu pour vous
          donner le boost d'énergie dont vous avez besoin. "
        </p>
        <div className="cereal-container1">
          <div className="cereal1"></div>
        </div>
        <div className="price1">3.50€</div>
      </div>
    </div>
  );
}
