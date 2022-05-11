import type { AppProps } from 'next/app'
import Layout from "../component/Layout";
import LayoutSingup from "../component/LayoutSignup";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const getContent = () => {
    if ([`/signup`].includes(appProps.router.pathname))
      return(
        <LayoutSingup>
          <Component {...pageProps} />
        </LayoutSingup>
      );

    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
  };

  return getContent();
}

export default MyApp
