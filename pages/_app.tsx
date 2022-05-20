import type { AppProps } from "next/app";
import Page404 from './404'
import Layout from "../component/Layout";
import LayoutSingup from "../component/LayoutSignup";
import LayoutNavbarRel from "../component/LayoutNavBarRel";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const getContent = () => {
    let pageLost = false;
    const allLinksOnPage = [
      "",
      "signup",
      "retailers",
      "partners",
      "about_us",
      "contact_us",
      "demo",
      "privacy",
    ];

    allLinksOnPage.forEach(el=>{
      if ([`/${el}`].includes(appProps.router.pathname)) {
        pageLost=true;
      }
    })

      if (pageLost) {
        if ([`/signup`].includes(appProps.router.pathname)){
          return (
            <LayoutSingup>
              <Component {...pageProps} />
            </LayoutSingup>
          );
        } else if ([`/privacy`].includes(appProps.router.pathname)){
          return (
            <LayoutNavbarRel>
              <Component {...pageProps} />
            </LayoutNavbarRel>
          );
        }

        return (
          <Layout>
            <Component {...pageProps} />{" "}
          </Layout>
        );
      }

      return (
        <Page404/>
      );

  };

  return getContent();
}

export default MyApp;
