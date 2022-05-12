import { React, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Assets/home/Logo H White Transparent.png";
import style from "./navbar.module.css";

export default function Navbar({ children }) {
	const [isAuth, setAuth] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setAuth(localStorage.getItem("token") ?? false);
	}, []);

	return (
		!loading && (
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
							{isAuth ? (
								<Link href={process.env.D_URL}>
									<a className={`logged nav_item`}>
										<span>
											&nbsp;
											<a>Dashboard</a>
										</span>
										<span>
											<i className='fa fa-chevron-right'></i>
										</span>
									</a>
								</Link>
							) : (
								<Link href={process.env.D_URL}>
									<a>
										<span className={`${style.get_started_btn3}`}>Sign In</span>
									</a>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	);
}
