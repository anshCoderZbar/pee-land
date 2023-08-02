import React, { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import logo from "common/assets/images/logo.png";
import "styles/layout.css";
import { header } from "mock/header";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active) {
      document.body.addEventListener("mousedown", () => setActive(false));
    } else return;

    return () => {
      document.body.removeEventListener("mousedown", () => setActive(false));
    };
  }, [active]);
  return (
    <nav className="fadein fadein--one">
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
            {header?.map((links) => {
              return (
                <li key={links?.id}>
                  <a
                    className={
                      links?.slug === location?.hash ||
                      (links?.slug === "#" && !location?.hash)
                        ? "nav-active"
                        : null
                    }
                    href={links?.slug}
                  >
                    {links?.name}
                  </a>
                </li>
              );
            })}
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
