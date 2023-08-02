import React from "react";
import { InView } from "react-intersection-observer";
import "animate.css/animate.min.css";

import { TokenomicsBox } from "common/app/index/TokenomicsBox";
import { Banner } from "common/app/index/Banner";
import { Digital } from "common/app/index/Digital";
import { Mission } from "common/app/index/Mission";
import { Airdrop } from "common/app/index/Airdrop";

import { tokenCardItems } from "mock/index";
import { airdropContent } from "mock/index";

import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import "styles/home.css";

export const Home = () => {
  return (
    <>
      <div className="main-banner" id=""></div>
      <div className="home_page" id="">
        <div className="banner_section">
          <Banner />
        </div>
        <InView>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`section_digital ${
                inView ? "animate__animated animate__pulse" : ""
              } `}
              id="digital-world"
            >
              <Digital />
            </div>
          )}
        </InView>
        <div className="tokenomics_section" id="tokenomics">
          <h2 className="tokenomics_heading">Tokenomics</h2>
          <p className="tokenomics_content">
            The project's native token is $PEPELAND, an ERC-20 standard token on
            the Ethereum blockchain. The total token supply is set at a playful
            and memorable 888,888,888 tokens. The distribution is designed to
            incentivize participation and ensure long-term sustainability:
          </p>

          <div className="container mt-3">
            <div className="row">
              <TokenomicsBox tokenItems={tokenCardItems} />
            </div>
          </div>
        </div>
        <div className="section_airdrop" id="plot-airdrop">
          <div className="container">
            <div className=" airdrop_body">
              <h2 className="airdrop_head">Plot Airdrop</h2>
              <p className="airdrop_content">
                Upon completion of the presale, contributors will receive plots
                in Pepe Land based on their participation. The distribution will
                be as follows:
              </p>
            </div>
            <InView>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`row ${
                    inView
                      ? "animate__animated animate__fadeInLeft"
                      : "animate__animated "
                  }`}
                >
                  <Airdrop airdropContent={airdropContent} />
                </div>
              )}
            </InView>
          </div>
        </div>
        <div className="section_digital v_qaascv" id="vision-and-mission">
          <Mission />
        </div>
        <div className="section_roadmap" id="roadmap">
          <InView>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`container ${
                  inView
                    ? "animate__animated animate__fadeInUp"
                    : "animate__animated opacity-0"
                }`}
              >
                <h2 className={`roadmap_head`}>Roadmap</h2>
                <p className="roadmap_content">
                  Pepe Land's development roadmap outlines the steps to create a
                  user-friendly platform and expand the digital world's features
                  over time. The team is committed to regular updates,
                  incorporating user feedback, and continuously enhancing the
                  overall experience.
                </p>
              </div>
            )}
          </InView>
        </div>
        <div className="section_conclusion Throughsaa" id="conclusion">
          <div className="conclusion_head">Conclusion</div>
          <InView>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`conclusion_content Throughsaa ${
                  inView
                    ? "animate__animated animate__fadeInUp"
                    : "animate__animated opacity-0"
                }`}
              >
                Pepe Land is set to revolutionize the way users interact with
                memes and blockchain technology. Through its unique plot-based
                digital world and $PEPENLAND token, users will have the
                opportunity to explore, stake, and earn rewards while immersing
                themselves in an exciting and meme-inspired universe. Join Pepe
                Land on its journey to combine creativity, community, and
                innovation in an unparalleled blockchain adventure.
              </div>
            )}
          </InView>
          <div className="social_icons">
            <div className="icon text-white">
              <BiLogoFacebook />
            </div>
            <div className="icon text-white">
              <BiLogoTwitter />
            </div>
            <div className="icon text-white">
              <BiLogoLinkedin />
            </div>
            <div className="icon text-white">
              <BiLogoInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
