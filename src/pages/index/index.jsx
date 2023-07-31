import React from "react";

import { TokenomicsBox } from "common/app/index/TokenomicsBox";
import { Banner } from "common/app/index/Banner";
import { Digital } from "common/app/index/Digital";

import "styles/home.css";
import { tokenCardItems } from "mock/index";

export const Home = () => {
  return (
    <div className="home_page">
      <div className="banner_section">
        <Banner />
      </div>
      <div className="section_digital">
        <Digital />
      </div>
      <div className="tokenomics_section">
        <h2 className="tokenomics_heading">Tokenomics</h2>
        <p className="tokenomics_content">
          The project's native token is $PEPELAND, an ERC-20 standard token on
          the Ethereum blockchain. The total token supply is set at a playful
          and memorable 888,888,888 tokens. The distribution is designed to
          incentivize participation and ensure long-term sustainability:
        </p>
        <div className="container mt-3">
          <div className="row ">
            <TokenomicsBox tokenItems={tokenCardItems} />
          </div>
        </div>
      </div>
    </div>
  );
};
