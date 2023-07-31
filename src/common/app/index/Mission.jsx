import React from "react";

import digitalFrog from "common/assets/images/sitting-frog.png";

export const Mission = () => {
  return (
    <div className="container">
      <div className="row align-items-center ">
        <div className="col-md-6">
          <div className="frog_img">
            <img src={digitalFrog} alt="frog-image" />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="head_second">The Digital World</h2>
          <p className="para_second">
            Pepe Land is a virtual realm, divided into 500 individual plots,
            each representing a distinct area with its own characteristics and
            opportunities. These plots will be distributed among early
            contributors through a presale on PinkSale Finance, ensuring a fair
            and decentralized launch of the project.
          </p>
        </div>
      </div>
    </div>
  );
};
