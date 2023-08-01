import React from "react";

export const Airdrop = ({ airdropContent }) => {
  return (
    <>
      {airdropContent?.map((details) => {
        return (
          <div
            className="col-lg-3 mx-2 airdrop_card"
            style={{ backgroundColor: details?.isDiff ? "#161B1E" : "#84a98c" }}
          >
            <div
              className=""
              style={{ color: details?.isDiff ? "#CAD2C5" : "#161B1E" }}
            >
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
