import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { InView } from "react-intersection-observer";
import Dashboard from "../../public/Assets/retailers/Integrations.png";
import eCom from "../../public/Assets/retailers/eCom.png";
import provider from "../../public/Assets/retailers/provider.png";
import xpressRun from "../../public/Assets/retailers/xpressRun.svg";
import tracking from "../../public/Assets/retailers/tracking.jpg";
import parterLogo from "../../public/Assets/retailers/partenerLogos.png";
import TopFunct from "../../component/Top/top";
import style from "./retailers.module.css";

function Business() {
	const [part2Show, setPart2Show] = useState(false);

	const [threshold, setThreshold] = useState(0.5);
	let refi = useRef(null);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "auto",
			/* you can also use 'auto' behaviour
			 in place of 'smooth' */
		});
	}, []);

	const [I, setI] = useState(0);
	const [J, setJ] = useState(0);
	const [K, setK] = useState(0);
	let i__ = 6900;
	let j__ = 0.5;
	let k__ = 40;
	const Increment = () => {
		if (part2Show !== true) {
			const II = setInterval(() => {
				setI(i__);
				if (i__ === 7000) {
					clearInterval(II);
				}
				i__++;
			}, 2);

			const JJ = setInterval(() => {
				setJ(j__);
				if (j__ === 2.5) {
					clearInterval(JJ);
				}
				j__++;
			}, 200);

			const KK = setInterval(() => {
				setK(k__);
				if (k__ === 97) {
					clearInterval(KK);
				}
				k__++;
			}, 2);
		}
		if (!part2Show) {
			setPart2Show(true);
		}
	};

	let refPARTtoINC = useRef(null);

	return (
		<div className={`${style.business}`}>
			<Head>
				<title>Ship Faster & Smarter</title>
				<meta
					name='description'
					content='Offer an ultra-fast delivery experience to your customers while maintaining your brand from start to finish. Same-Day delivery directly from your website.'
				/>
			</Head>
			<TopFunct />
			<div className={`${style.businessPart1_partenerLogos} paddingHomeCenter`}>
				<div className={`${style.businessPart1}`}>
					<div className={`${style.businessPart1ContenuDeTexte}`}>
						<div className={`${style.businessPart1BussinessTitleBig}`}>
							<p>Design your own </p>
							<p>delivery experience</p>
						</div>
						<div className={`${style.businessPart1BusinnesSubtitle}`}>
							<p>
								Offer an utra-fast delivery experience to your customers while
								maintaining your brand
							</p>
							<p>
								from start to finish. Same-Day delivery directly from your
								website.
							</p>
						</div>
						<div className={`${style.businessPart1Buttons}`}>
							<a
								href={`${process.env.D_URL}`}
								className={`${style.Getbutton} ${style.businessPart1ButtonsButton}`}>
								Get started
							</a>

							<Link
								href='/demo'
								className={`${style.schedule} ${style.businessPart1ButtonsButton}`}>
								Schedule a demo
							</Link>
						</div>
					</div>
					<div className={`${style.businessPart1ImageDashboard}`}>
						<Image src={Dashboard} alt='' />
					</div>
				</div>
				<div className={`${style.businessPart1PartenerLogos}`}>
					<Image src={parterLogo} alt='' />
				</div>
			</div>

			<div className={`${style.itemitemitem}`}>
				<div className={`${style.retailersASection} paddingHomeCenter`}>
					<div className={`${style.retailersASectionSection}`}>
						<div className={`${style.businessPart1BussinessTitleBig}`}>
							<p>Instant plug and </p>
							<p>play integration</p>
						</div>
						<p className={`${style.retailersSectionSectionSubtitle}`}>
							XpressRun integrates directly to your online store. Regardless of
							whether you’re using an e-commerce platform (ex. Shopify) or
							custom built - get started in just a few clicks without having to
							write a single line of code.
						</p>
					</div>
					<div
						className={`${style.retailersASectionImgEcomContainer} ${style.retailersASectionImg}`}>
						<div className={`${style.retailersASectionImgEcom}`}>
							<Image src={eCom} alt='' />
						</div>
						<div className={`${style.retailersASectionImgXpress}`}>
							<Image src={xpressRun} alt='' />
						</div>
					</div>
				</div>

				<div className={`${style.retailersASection} paddingHomeCenter`}>
					<div className={`${style.retailersASectionSection}`}>
						<div className={`${style.businessPart1BussinessTitleBig}`}>
							<p>Instant plug and </p>
							<p>play integration</p>
						</div>
						<p className={`${style.retailersSectionSectionSubtitle}`}>
							XpressRun integrates directly to your online store. Regardless of
							whether you’re using an e-commerce platform (ex. Shopify) or
							custom built - get started in just a few clicks without having to
							write a single line of code.
						</p>
					</div>
					<div
						className={`${style.retailersASectionImgEcomContainer} ${style.retailersASectionImg}`}>
						<div className={`${style.retailersASectionImgEcom}`}>
							<Image src={eCom} alt='' />
						</div>
						<div className={`${style.retailersASectionImgXpress}`}>
							<Image src={xpressRun} alt='' />
						</div>
					</div>
				</div>

				<div className={`${style.retailersASection} paddingHomeCenter`}>
					<div className={`${style.retailersASectionSection}`}>
						<div className={`${style.businessPart1BussinessTitleBig}`}>
							<p>Your brand from</p>
							<p>start to finish</p>
						</div>
						<p className={`${style.retailersSectionSectionSubtitle}`}>
							XpressRun allows you to own the entire last-mile delivery
							experience- from checkout to your customers’ doorstep. Create
							beautiful branded tracking pages, shipping labels, and text
							communications that resonates with your customers.
						</p>
					</div>
					<div className={`${style.retailersASectionImg}`}>
						<div className={`${style.retailersASectionImgTracking}`}>
							<Image src={tracking} alt='' />
						</div>
					</div>
				</div>
			</div>

			<div className={`${style.retailersASection} paddingHomeCenter`}>
				<div className={`${style.retailersASectionSection}`}>
					<div className={`${style.businessPart1BussinessTitleBig}`}>
						<p>Your brand from</p>
						<p>start to finish</p>
					</div>
					<p className={`${style.retailersSectionSectionSubtitle}`}>
						XpressRun allows you to own the entire last-mile delivery
						experience- from checkout to your customers’ doorstep. Create
						beautiful branded tracking pages, shipping labels, and text
						communications that resonates with your customers.
					</p>
				</div>
				<div className={`${style.retailersASectionImg}`}>
					<div className={`${style.retailersASectionImgTracking}`}>
						<Image src={tracking} alt='' />
					</div>
				</div>
			</div>

			<div className={`${style.retailersASectionLast} paddingHomeCenter`}>
				<div
					className={`${style.retailersASectionSection} ${style.lastSection}`}>
					<div className={`${style.businessPart1BussinessTitleBig}`}>
						<div>Are you ready to grow your</div>
						<div>business with us?</div>
					</div>
					<div className={`${style.alignToutColum}`}>
						<p>We’d love to learn more about your brand.</p>
						<Link href='/demo'>
							<div
								className={`${style.schedule2} ${style.businessPart1ButtonsButton}`}>
								Schedule a demo
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Business;
