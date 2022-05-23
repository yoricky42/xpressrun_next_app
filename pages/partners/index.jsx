import { React } from "react";
import TopFunct from "../../component/Top/top";
import rou1 from "../../public/Assets/partners/rou1.svg";
import rou2 from "../../public/Assets/partners/rou2.svg";
import rou3 from "../../public/Assets/partners/rou3.svg";
import rou4 from "../../public/Assets/partners/rou4.svg";
import light from "../../public/Assets/partners/light.svg";
import atom from "../../public/Assets/partners/atom.svg";
import dollar from "../../public/Assets/partners/dollar.svg";
import rrr from "../../public/Assets/partners/rrr.png";
import sss from "../../public/Assets/partners/sss.png";
import fff from "../../public/Assets/partners/fff.png";
import uuu from "../../public/Assets/partners/uuu.png";
import ddd from "../../public/Assets/partners/doordash.png";
import thirdimg from "../../public/Assets/partners/HugeGlobal.svg";
import style from "./partners.module.css";
import Image from "next/image";
import Head from "next/head";

function partners() {
  return (
    <div className={`${style.driver} .ALL_COMPONENT`}>
      <Head>
        <title>Join our logistics network</title>
        <meta
          name="description"
          content="Join hundreds of delivery & fulfillment providers around the globe with a shared mission of helping local retail thrive. Partners include Doordash, Roadie, Frayt and more. "
        />
      </Head>
      <TopFunct />
      <div className={`${style.DriverSection1}`}>
        <div className={`${style.DriverSection1Element}`}>
          <div className={`${style.DriverSection1Titre}`}>
            <div>Unified last-mile to </div>
            <div>empower local brands.</div>
          </div>
          <div className={`${style.DriverSection1_subtitle}`}>
          <div>Join hundreds of delivery providers around the globe with a</div>
          <div>shared mission of helping local retail thrive.</div>
          </div>
          <div className={`${style.DriverButtonDrive}`}>
            <a href="#">Join our network</a>
          </div>
        </div>
        <div className={`${style.DriverSection1Roue}`}>
          <div className={`${style.DriverSection1RoueContainer}`}>
            <div
              className={`${style.DriverSection1Roue1} ${style.DriverSection1RoueRoue}`}
            >
              <Image src={rou1} alt="" />
            </div>
            <div
              className={`${style.DriverSection1Roue2} ${style.DriverSection1RoueRoue}`}
            >
              <Image src={rou2} alt="" />
            </div>
            <div
              className={`${style.DriverSection1Roue3} ${style.DriverSection1RoueRoue}`}
            >
              <Image src={rou3} alt="" />
            </div>
            <div
              className={`${style.DriverSection1Roue4} ${style.DriverSection1RoueRoue}`}
            >
              <Image src={rou4} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.DriverSection2}`}>
        <div className={`${style.DriverSection2Conteneur}`}>
          <div className={`${style.AboutTitle}`}>Why join our network</div>
          <div className={`${style.thirdAboutSubTitle}`}>
            Support local businesses and expand your delivery
          </div>
          <div className={`${style.thirdAboutSubTitle}`}>service.</div>
        </div>
        <div className={`${style.DriverSection2Cards}`}>
          <div className={`${style.DriverSection2Card}`}>
            <div className={`${style.DriverSection2CardImg}`}>
            <Image src={light} alt="" />
            </div>
            <div className={`${style.DriverSection2CardTitleContainer}`}>
              <div className={`${style.DriverSection2CardTitle}`}>
                Expand your
              </div>
              <div className={`${style.DriverSection2CardTitle}`}>business</div>
            </div>
            <div className={`${style.DriverSection2CardSubtitle}`}>
              With XpressRun, expanding your delivery service will be easier
              than ever.
            </div>
          </div>
          <div className={`${style.DriverSection2Card}`}>
          <div className={`${style.DriverSection2CardImg}`}>
            <Image src={atom} alt="" />
            </div>
            <div className={`${style.DriverSection2CardTitleContainer}`}>
              <div className={`${style.DriverSection2CardTitle}`}>
                Support local
              </div>
              <div className={`${style.DriverSection2CardTitle}`}>retail</div>
            </div>
            <div className={`${style.DriverSection2CardSubtitle}`}>
              Our platform makes it easier for your business to serve local
              (e)retailers.
            </div>
          </div>
          <div className={`${style.DriverSection2Card}`}>
          <div className={`${style.DriverSection2CardImg}`}>
          <Image src={dollar} alt="" />
            </div>
            <div className={`${style.DriverSection2CardTitleContainer}`}>
              <div className={`${style.DriverSection2CardTitle}`}>Zero</div>
              <div className={`${style.DriverSection2CardTitle}`}>
                Commission
              </div>
            </div>
            <div className={`${style.DriverSection2CardSubtitle}`}>
              A partnership with us provides you with an expansive network of
              new customers.
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.carteDriver}`}>
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
          <div className={`${style.thirdAboutImg}`}>
            <Image src={thirdimg} alt="" />
          </div>
        </div>
      </div>
      <div className={`${style.lastAboutAbout}`}>
        <h1 className={`${style.lastAboutAboutTitle}`}>
          Last-mile partners include
        </h1>
        <div className={`${style.lastAboutCards}`}>
          <div className={`${style.lastAboutCard}`}>
            <p className={`${style.lastAboutCardTitle}`}>Roadie</p>
            <Image src={rrr} alt="" />
          </div>
          <div className={`${style.lastAboutCard}`}>
            <p className={`${style.lastAboutCardTitle}`}>SkipCart</p>
            <Image src={sss} alt="" />
          </div>
          <div className={`${style.lastAboutCard}`}>
            <p className={`${style.lastAboutCardTitle}`}>FedEX SameDay</p>
            <Image src={fff} alt="" />
          </div>
          <div className={`${style.lastAboutCard}`}>
            <p className={`${style.lastAboutCardTitle}`}>Frayt</p>
            <Image src={uuu} alt="" />
          </div>
          <div className={`${style.lastAboutCard}`}>
            <p className={`${style.lastAboutCardTitle}`}>Doordash</p>
            <Image src={ddd} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default partners;
