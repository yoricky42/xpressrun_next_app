import { React, useEffect } from "react";
import TopFunct from "../../component/Top/top";
import style from "./about.module.css";

import headimg from "../../Assets/about/headimg1.png";
import thirdimg from "../../Assets/about/HugeGlobal.svg";
import Image from "next/image";
import Head from "next/head";

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  }, []);
  return (
    <div className={`${style.about} ALL_COMPONENT`}>
      <Head>
        <title>Xpressrun | Company</title>
        <meta
          name="description"
          content="XpressRun is on a mission to empower local economies around the globe."
        />
      </Head>
      <TopFunct />
      <div className={`${style.firstAbout}`}>
        <div className={`${style.firstAbouttext}`}>
          <div className={`${style.firstAboutBig}`}>We empower</div>
          <div className={`${style.firstAboutBig}`}>small retail to</div>
          <div className={`${style.firstAboutBig}`}>
            do <span style={{ color: "#FFDD29" }}>BIG things</span>
          </div>
          <div className={`${style.firstAboutLigneBottom}`}></div>
          <div className={`${style.firstAboutSmall}`}>
            XpressRun is on a mission to empower local economies around the
            globe.
          </div>
        </div>
        <div className={`${style.firstAboutImg}`}>
          <Image src={headimg} alt="" />
        </div>
      </div>
      <div className={`${style.secondAbout}`}>
        <div className={`${style.secondAbouTitle}`}>
          <div className={`${style.AboutTitle}`}>Who we are</div>
          <div className={`${style.secondAboutUnderline}`}></div>
        </div>
        <div className={`${style.secondAboutText}`}>
          We believe it is possible to offer same day delivery to your customers
          at an affordable price. Same day delivery should not be complicated
          and Xpressrun aims to make your customer shopping experience more
          efficient than ever for small e-commerce businesses.{" "}
        </div>
        <div className={`${style.secondAboutText}`}>
          At Xpressrun our mission is to impact local businesses and provide
          better services to customers. We believe that the future in the
          e-commerce industry will require us to empower our communities now. We
          believe that businesses should make it a priority to pour back into
          the community that helped them thrive. Our model allows us to grow and
          develop at a rapid pace giving us the power to reach more people.
        </div>
        <div className={`${style.secondAboutText}`}>
          Xpressrun employs powerful digital tools that allow us to offer the
          best shopping experience possible. By making it easier for customers
          to get what they want when they want, we provide better customer
          satisfaction rates and therefore improve customer loyalty.{" "}
        </div>
        <a className={`${style.secondAboutJoinButton}`} href="#">
          Join our community
        </a>
      </div>
      <div className={`${style.thirdAbout}`}>
        <div className={`${style.AboutTitle}`}>
          Building a global logistics network
        </div>
        <div className={`${style.thirdAboutSubTitle}`}>
          XpressRun connects Last-Mile delivery companies and local e-commerce
        </div>
        <div className={`${style.thirdAboutSubTitle}`}>
          businesses around the globe.
        </div>
        <div>
          <Image src={thirdimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
