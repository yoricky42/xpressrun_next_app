import { React } from "react";
import Image from "next/image";
import logo from "../../public/Assets/home/Logo H White Transparent.png";
import style from "./navbar.module.css";

export default function Navbar({ children }) {
	return (
		<div id='Header'>
			<div>
				<div className={`${style.navbar} ${style.NAVBARTYPE}`}>
					<div className={`${style.navbar_logo_type_content}`}>
						<a
							href='/'
							className={`${style.navbar_logo_type_content_inner_logo}`}>
							<Image src={logo} alt='' />
						</a>
					</div>
					<div className={`${style.burger_Navbar}`}>
						<a href={`${process.env.D_URL}`} className={`${style.get_started_btn3}`}>
							Sign In
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
