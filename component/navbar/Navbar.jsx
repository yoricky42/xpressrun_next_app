// import { useKeycloak } from "@react-keycloak/web";
import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Assets/home/Logo H White Transparent.png";
import style from "./navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars, faStream
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ children }) {
  const [active, setActive] = useState("");
  const { keycloak, setkeycloak } = useState(true);
  const [ToglleNav, SetToglleNav] = useState(false);

  const ChangeActiveLink = (activeLink) => {
    setActive(activeLink),
    SetToglleNav(false)
    console.log(active);
  };

  return (
    <div id="Header">
      <div>
        <div className={`${style.navbar} ${style.NAVBARTYPE}`}>
          <div className={`${style.navbar_logo_type_content}`}>
            <a
              href="/"
              className={`${style.navbar_logo_type_content_inner_logo}`}
            >
              <Image src={logo} alt="" />
            </a>
          </div>
          <div
            className={`${style.toggle_navbar_type} ${
              ToglleNav && `${style.activeToggle}`
            }`}
          >
            <div className={`${style.nav_bar_link_type_content}`}>
              <ul className={`${style.nav_bar_link_type}`}>
                <li className="nav_item">
                  <Link href="/retailers">
                    <a
                      onClick={() => ChangeActiveLink("retailers")}
                      className={`${
                        active === "retailers"
                          ? `${style.nav_link} ${style.active}`
                          : `${style.nav_link}`
                      }`}
                    >
                      Retailers
                    </a>
                  </Link>
                </li>
                <li className="nav_item">
                  <Link href="/partners">
                    <a
                      onClick={() => ChangeActiveLink("partners")}
                      className={`${
                        active === "partners"
                          ? `${style.nav_link} ${style.active}`
                          : `${style.nav_link}`
                      }`}
                    >
                      Partners
                    </a>
                  </Link>
                </li>
                <li className="nav_item">
                    <a
                      href={`${process.env.D_URL}/tracking`}
                      target="_blank"
                      onClick={() => ChangeActiveLink("tracking")}
                      className={`${
                        active === "tracking"
                          ? `${style.nav_link} ${style.active}`
                          : `${style.nav_link}`
                      }`}
                    >
                      Tracking
                    </a>
                </li>
                <li className={`${style.drop_down_company}`}>
                    <a
                      className={`${
                        active === "about" || active === "contact"
                          ? `${style.nav_link} ${style.active}`
                          : `${style.nav_link}`
                      }`}
                    >
                      Company
                      <span className={`${style.Drop_icon}`}>
                        <svg
                          width="10"
                          height="9"
                          viewBox="0 0 16 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7071 1.70711C16.0976 1.31658 16.0976 0.683417 15.7071 0.292893C15.3166 -0.0976311 14.6834 -0.0976311 14.2929 0.292893L15.7071 1.70711ZM8 8L7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711L8 8ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM14.2929 0.292893L7.29289 7.29289L8.70711 8.70711L15.7071 1.70711L14.2929 0.292893ZM8.70711 7.29289L1.70711 0.292893L0.292893 1.70711L7.29289 8.70711L8.70711 7.29289Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                  <div className={`${style.drop_down_company_dropdown}`}>
                    <div>
                      <Link href="/about_us">
                        <a
                          onClick={() => ChangeActiveLink("about")}
                          className={`${style.nav_link} ${style.navlink2}`}
                        >
                          About us
                        </a>
                      </Link>
                      <Link href="/contact_us">
                        <a
                          onClick={() => ChangeActiveLink("contact")}
                          className={`${style.nav_link} ${style.navlink2}`}
                        >
                          Contact us
                        </a>
                      </Link>
                    </div>
                  </div>
                </li>
                <li className={`${style.drop_down_company}`}>
                <Link href="/signup" ><a className={`${style.get_started_btn2}`}>Get Started</a></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${style.burger_Navbar}`}>
            {keycloak ? (
              <div className="">
                <a href={`${process.env.D_URL}/tracking`} className={`logged nav_item`}>
                  <span>
                    &nbsp;
                    <a>Dashboard</a>
                  </span>
                  <span>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                </a>
              </div>
            ) : (
                <Link href="/signup" ><a className={`${style.get_started_btn}`}>Get Started</a></Link>
            )}
            <label htmlFor="BURGER" onClick={() => SetToglleNav(!ToglleNav)}>
              {!ToglleNav ? (
                <span className={`${style.fa_icon_type_navbar}`}>
                  <FontAwesomeIcon
                icon={faBars}
              />
                </span>
                
              ) : (
                <span className={`${style.fa_icon_type_navbar}`}>
                  <FontAwesomeIcon
                icon={faStream}
              />
                </span>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
