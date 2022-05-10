import Layout from "../component/Layout";
// import { ReactKeycloakProvider } from "@react-keycloak/web";
// import keycloak, { keycloakInitConfig, onKeycloakTokens } from "./keycloak";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    // <ReactKeycloakProvider
    //     initConfig={keycloakInitConfig}
    //     onTokens={onKeycloakTokens}
    //     onEvent={(event, error) => handleOnEvent(event, error)}
    //     LoadingComponent={<span>Loading...</span>}
    //     authClient={keycloak}
    //   >
    //   <Layout>
    //     <Component {...pageProps} />
    //   </Layout>
    // </ReactKeycloakProvider>

<Layout>
<Component {...pageProps} />
</Layout>
  );
}

export default MyApp;

