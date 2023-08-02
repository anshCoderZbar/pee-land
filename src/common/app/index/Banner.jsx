import React from "react";

import frogImg from "common/assets/images/frog.png";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
export const Banner = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center content flex-wrap-reverse">
        <div className="col-md-6">
          <h1 className="banner_heading fadein fadein--one">
            A Digital World of Adventures
          </h1>
          <p className="banner_content fadein fadein--two">
            Pepe Land is an ambitious and innovative cryptocurrency project that
            aims to create an immersive and interactive digital world where
            users can embark on exciting adventures, claim plots of land, and
            earn rewards in $PEPENLAND tokens. Inspired by the popular internet
            meme "Pepe the Frog," Pepe Land aims to combine the fun and
            creativity of the meme culture with the power of blockchain
            technology to offer a unique and rewarding experience to its users.
          </p>
          <div className="social_icons top-s fadein fadein--three">
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
        <div className="col-md-6">
          <div className="frog_img xccc fadein fadein--four">
            <img src={frogImg} alt="frog-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
