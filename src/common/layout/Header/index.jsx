import React, { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import logo from "common/assets/images/logo.png";
import "styles/layout.css";

export const Header = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active) {
      document.body.addEventListener("mousedown", () => setActive(false));
    } else return;

    return () => {
      document.body.removeEventListener("mousedown", () => setActive(false));
    };
  }, [active]);

  console.log(active);

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="menu " style={{ right: active ? "0" : "-100%" }}>
            <div
              className="text-black navClose cursor-pointer "
              onClick={() => setActive(false)}
            >
              <RxCross2 />
            </div>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Digital World</a>
            </li>
            <li>
              <a href="#">Tokenomics</a>
            </li>
            <li>
              <a href="#">Plot Airdrop</a>
            </li>
            <li>
              <a href="#">Vision and Mission</a>
            </li>
            <li>
              <a href="#">Roadmap</a>
            </li>
            <li>
              <a href="#">Conclusion</a>
            </li>
          </ul>
          <div
            onClick={() => setActive(true)}
            className="navOpen cursor-pointer"
          >
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};
