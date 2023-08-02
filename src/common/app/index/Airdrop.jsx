import React from "react";
import { InView } from "react-intersection-observer";

export const Airdrop = ({ airdropContent }) => {
  return (
    <>
      {airdropContent?.map((details) => {
        return (
          <InView>
            {({ inView, ref }) => (
              <div key={details?.id} className="col-md-6 col-lg-3 col-xl-3">
                <div
                  ref={ref}
                  className={`airdrop_card ${
                    inView
                      ? "animate__animated animate__fadeInDown"
                      : "animate__animated opacity-0"
                  }`}
                >
                  <span className="airdrop_discount">
                    {details?.percentage}
                  </span>
                  <h5 className="airdrop_card_title">{details?.heading}</h5>
                  <p className="airdrop_card_content">{details?.content}</p>
                </div>
              </div>
            )}
          </InView>
        );
      })}
    </>
  );
};
