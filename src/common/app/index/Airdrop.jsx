import React from "react";
import { InView } from "react-intersection-observer";

export const Airdrop = ({ airdropContent }) => {
  return (
    <>
      {airdropContent?.map((details) => {
        return (
          <div key={details?.id} className="col-md-6 col-lg-3 col-xl-3">
            <div className="airdrop_card">
              <span className="airdrop_discount">{details?.percentage}</span>
              <h5 className="airdrop_card_title">{details?.heading}</h5>
              <p className="airdrop_card_content">{details?.content}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
