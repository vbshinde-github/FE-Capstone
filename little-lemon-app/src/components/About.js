import React from "react";

import Food from "../images/food-img.jpg";

function About() {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="about-content">
              <h2>About Little Lemon</h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
                eros sem. Pellentesque congue varius enim, a maximus sapien
                congue vitae. Proin aliquam, massa ac scelerisque sollicitudin,
                ligula est tristique arcu, ac luctus turpis leo et orci.
              </p>
              <p className="mt-3">
                Pellentesque venenatis ac urna et sollicitudin. Aliquam quis
                sapien hendrerit, interdum neque id, sagittis dolor. Etiam
                facilisis risus ac lorem mollis, at ullamcorper mauris
                consequat. Nunc quam lorem, consectetur aliquam convallis nec,
                fermentum a dui. Aliquam auctor et lorem in dictum.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 mt-4 mt-lg-0">
            <img src={Food} alt="Restaurant Food" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
