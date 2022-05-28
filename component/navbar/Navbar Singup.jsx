import { React } from "react";
import Image from "next/image";
import logo from "../../public/Assets/home/Logo H White Transparent.png";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar({ children }) {
	return (
		<div id='Header'>
			<div>
				<div className={`${style.navbar} ${style.NAVBARTYPE} paddingHomeCenter`}>
					<div className={`${style.navbar_logo_type_content}`}>
						<Link href='/'>
							<a className={`${style.navbar_logo_type_content_inner_logo}`}>
								<Image src={logo} alt='' />
							</a>
						</Link>
					</div>
					<div className={`${style.burger_Navbar}`}>
						<a 	href={`${process.env.NEXT_PUBLIC_D_URL}`} className={`${style.get_started_btn3}`}>
							Sign In
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
