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
          <div className={`${style.burger_Navbar}`}>
            {keycloak ? (
              <div className="">
                <a href={`${process.env.D_URL}`} className={`logged nav_item`}>
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
                <a href={`${process.env.D_URL}`} ><span className={`${style.get_started_btn3}`}>Sign In</span></a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
