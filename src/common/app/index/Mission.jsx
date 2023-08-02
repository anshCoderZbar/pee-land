import React from "react";
import digitalFrog from "common/assets/images/sitting-frog.png";
import { InView } from "react-intersection-observer";

export const Mission = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <InView>
            {({ inView, ref }) => (
              <div ref={ref} className={`frog_img `}>
                <img
                  src={digitalFrog}
                  alt="frog-image"
                  className={`frog_img ${
                    inView
                      ? "animate__animated animate__fadeInUp"
                      : "animate__animated animate__fadeOut"
                  }`}
                />
              </div>
            )}
          </InView>
        </div>
        <div className="col-md-6">
          <h2 className="head_second">Vision and Mission</h2>
          <p className="para_second">
            Pepe Land's vision is to establish a vibrant and inclusive digital
            world, fostering creativity, exploration, and community engagement.
            The mission is to create an environment that rewards active
            participation and offers a fun and secure space for users to
            interact with blockchain technology.
          </p>
        </div>
      </div>
    </div>
  );
};
