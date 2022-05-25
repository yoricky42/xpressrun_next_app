import type { AppContext, AppProps } from "next/app";
import cookie from "cookie";
import Page404 from "./404";
import Layout from "../component/Layout";
import LayoutSingup from "../component/LayoutSignup";
import LayoutNavbarRel from "../component/LayoutNavBarRel";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { SSRCookies, SSRKeycloakProvider } from "@react-keycloak/ssr";
import { IncomingMessage } from "http";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const keycloakCfg = {
	realm: "xpressrun",
	url: "https://api.xpressrun.com/auth",
	clientId: "react-app-cli",
};

const links = [
	"",
	"signup",
	"retailers",
	"partners",
	"about_us",
	"contact_us",
	"demo",
	"privacy",
];

interface InitialProps {
	cookies: unknown;
}

function MyApp({
	Component,
	pageProps,
	cookies,
	...appProps
}: AppProps & InitialProps) {
	if (!links.includes(appProps.router.pathname)) {
		if ([`/signup`].includes(appProps.router.pathname)) {
			return (
				<LayoutSingup>
					<Component {...pageProps} />
				</LayoutSingup>
			);
		} else if ([`/privacy`].includes(appProps.router.pathname)) {
			return (
				<LayoutNavbarRel>
					<Component {...pageProps} />
				</LayoutNavbarRel>
			);
		}

		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		);
	}

	return <Page404 />;
}

function parseCookies(req?: IncomingMessage) {
	if (!req || !req.headers) {
		return {};
	}
	return cookie.parse(req.headers.cookie || "");
}

MyApp.getInitialProps = async (context: AppContext) => {
	// Extract cookies from AppContext
	return {
		cookies: parseCookies(context?.ctx?.req),
	};
};

export default MyApp;
