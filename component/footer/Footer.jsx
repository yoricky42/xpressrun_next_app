import { React } from "react";
import Link  from 'next/link';
import Image from 'next/image'
import logoHome from "./Logo H Transparent 1.svg";
import icon1 from "./facebook-square.svg";
import icon2 from "./twitter.svg";
import icon3 from "./linkedin.svg";

import style from "./footer.module.css";



function footer() {
return (
<div className={`${style.footer_Container_home}`}>
  <div className={`${style.footer_Container_home_element}`}>
    <div className={`${style.logoHome}`}>
      <Image src={logoHome} alt="" />
    </div>
    <div className={`${style.linkfooter_home}`}>
      <div className={`${style.Title_footer_home}`}>LINKS</div>
      <div className={`${style.linksTitle_footer_home}`}>
        <Link href="/">Home</Link>
        <Link href="/about_us">About us</Link>
        <Link href="/retailers">Retailers</Link>
        <Link href="/partners">Partners</Link>
        <a href={`${process.env.D_URL}/tracking`}>Tracking</a>
        <Link href="/demo">Demo</Link>
      </div>
    </div>
    <div className={`${style.legalfooter_home}`}>
      <div className={`${style.Title_footer_home}`}>LEGAL</div>
      <div className={`${style.legalsTitle_footer_home}`}>
        <a href="#">Terms of Use</a>
        <a href="#">Terms of Conditions</a>
        <Link href="/privacy">Privacy policy</Link>
        <a href="#">Cookie policy</a>
      </div>
    </div>
    <div className={`${style.newsletterfooter_home}`}>
      <div className={`${style.Title_footer_home}`}>NEWSLETTER</div>
      <div className={`${style.legalsTitle_footer_home}`}>
        <p className={`${style.legal_footer_home_text_small1}`}>
          Over 10000 people have subscribed
        </p>
        <form action="https://xpressrun.us20.list-manage.com/subscribe/post?u=bfbe67edf0900438589e6bcb0&amp;id=cc0a727bf0"
    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank"
    noValidate>
      <div className={`${style.inputForm_footer}`}>
          <div>
          <input type="email" placeholder="John.doe@gmail.com" name="EMAIL" required className="required email" id="mce-EMAIL" />
          </div>
          <button className={`${style.subscribe_button_footer}`} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">Subscribe</button>
        </div>
  </form>
        
        <p className={`${style.legal_footer_home_text_small2}`}>
          We don’t sell your email and spam
        </p>
      </div>
    </div>
  </div>
  <div className={`${style.footerLast}`}>
    <div className={`${style.footerLast_text_1}`}>
      <p className="mr-3">
        <a href="#">Privacy & terms</a>
      </p>
      <p>
        <Link href="/contact">Contact us</Link>
      </p>
    </div>
    <div>
      <p>Copyright @ 2021 XpressRun</p>
    </div>
    <div className={`${style.footerLast_social}`}>
      <a target="_blank" href="https://www.facebook.com/xpressrunapp">
        <div className={`${style.footerLast_social_icon}`}>
          <Image src={icon1} alt="" className="" />
        </div>
      </a>
      <a target="_blank" href="https://twitter.com/xpressrun_hq" className={`${style.footerLast_social_icon}`}>
          <Image src={icon2} alt="" className="" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/company/xpressrun">
      <div className={`${style.footerLast_social_icon}`}>
          <Image src={icon3} alt="" className="" />
        </div>
      </a>
    </div>
  </div>
</div>
);
}

export default footer;
