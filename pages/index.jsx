import { React, useState, useEffect } from "react";
// import Footer from "../footer2/footer2";
// import Navbar from "../NavbarCOMP/Navbar";
import style from "../styles/Home.module.css";

import gifCard from "../public/Assets/home/Delivery Scooter-2.gif";
import vector1 from "../public/Assets/home/Vector.svg";
import vector2 from "../public/Assets/home/Vector 2.svg";
import businessOrder from "../public/Assets/home/BusineessOrder.png";
import sendingCard from "../public/Assets/home/DrawKit-onlineshopping-Illustration-09 1.svg";
import seamlessCard from "../public/Assets/home/DrawKit-Vector-Illustration-ecommerce-02 1.svg";
import deliveryCard from "../public/Assets/home/delivery.svg";
import VectorArrow from "../public/Assets/home/VectorArrow.svg";
import shoopifyCard from "../public/Assets/home/shoopify.svg";
import shoopifyCardBlack from "../public/Assets/home/shoopifyCardBlack.svg";
import vectrBool1 from "../public/Assets/home/vectorBool1.svg";
import vectrBool2 from "../public/Assets/home/vectorBool2.svg";
import api1 from "../public/Assets/home/api 1.svg";
import api2 from "../public/Assets/home/api 2.svg";
import api3 from "../public/Assets/home/api 3.svg";
import ShoppingCart from "../public/Assets/home/Illustrator2.svg";
import deliveryMan from "../public/Assets/home/Illustrator1.svg";
import arrowAffordablelink from "../public/Assets/home/akar-icons_arrow-right.svg";
import arrowBlack from "../public/Assets/home/arrowBlack.svg";
import { InView } from "react-intersection-observer";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import TopFunct from "../component/Top/top";

function Home() {
	const [shoopify, setShoopify] = useState(false);
	const [affordable, setAffordable] = useState(false);
	const [Seamless, SetSeamless] = useState(false);
	const [delivery, setDelivery] = useState(false);
	const [Fully, SetFully] = useState(false);
	const [card, Setcard] = useState(false);
	const [currently, SetCurrently] = useState(false);
	const [threshold, setThreshold] = useState(0.5);

	useEffect(() => {
		if (window.innerWidth > 652) {
			setThreshold(0.5);
		} else {
			setThreshold(0.4);
		}
		window.scrollTo({
			top: 0,
			behavior: "auto",
			/* you can also use 'auto' behaviour
       in place of 'smooth' */
		});
	}, []);

	return (
		<div className={style.home}>
			<Head>
				<title>XpressRun: Same-Day Delivery for eCommerce businesses</title>
				<meta
					name='description'
					content='XpressRun is a multi-carrier platform that enables an ultra-fast delivery experience while giving brands end to end ownership of the delivery process. Own your data & brand identity from start to finish.'
				/>
			</Head>
			<TopFunct />
			{/* <Navbar active="home" /> */}
			<div className={`${style.homeHeaderContent} ${style.paddingHomeCenter}`}>
				<div className={`${style.widthCent}`}>
					<div className={style.homeHeaderContentFirstPart}>
						<div>
							<div className={style.homeHeaderText}>
								<p className='home-text-head'>Same-Day</p>
								<p className='home-text-head'>Delivery for</p>
								<div className={style.slideText}>
									<p className={style.slideText1}>Online brands.</p>
									<p className={style.slideText2}>Local brands.</p>
								</div>
							</div>
							<p className={style.lastmileText}>
								Last-mile delivery made Easy, Affordable & Scalable
							</p>
						</div>
						<div className={style.homeHeaderContentGifPartGif}>
							<Image src={gifCard} alt=''></Image>
						</div>
					</div>
					<div className={style.homeHeaderContentSelectAndOthers}>
						<a href={`${process.env.D_URL}`}>
							<div className={style.homeHeaderContentSelect}>
								<select className={style.selectBox}>
									<option value='0'>Get started - it&apos;s free</option>
								</select>
							</div>
						</a>
						&nbsp;
						<p className={style.demo}>
							<Link href='/demo'>Schedule a demo</Link>
						</p>
					</div>
				</div>
			</div>
			<div className={`${style.appImagePart} ${style.paddingHomeCenter}`}>
				<div className={`${style.vectorApp} ${style.vector1}`}>
					<Image src={vector1} alt='' />
				</div>
				<div className={`${style.vectorApp} ${style.vector2}`}>
					<Image src={vector2} alt='' />
				</div>
				<div className={style.businessOrder}>
					<Image src={businessOrder} alt='' />
				</div>
			</div>
			<InView
				threshold={threshold}
				as='div'
				onChange={(inView, entry) => {
					if (inView) {
						setShoopify(true);
					}
				}}>
				<div className={style.paddingHomeCenter}>
					<div className={style.shoopifyPubPart}>
						<p
							className={`${
								shoopify
									? `${style.shpoopifyText}`
									: `${style.shpoopifyTextOFF}`
							}`}>
							Integrate our solution on your shopify store
						</p>
						<a
							href='https://apps.shopify.com/xpressrun'
							target='_blank'
							rel='noreferrer'>
							<div
								className={`${
									shoopify
										? `${style.shpoopifyCard}`
										: `${style.shpoopifyCardOFF}`
								}`}>
								<Image src={shoopifyCard} alt='' />
							</div>
						</a>
					</div>
				</div>
			</InView>
			<InView
				threshold={threshold}
				as='div'
				onChange={(inView, entry) => {
					if (inView) {
						setAffordable(true);
					}
				}}>
				<div className={`${style.affordablePart} ${style.paddingHomeCenter}`}>
					<div
						className={`${
							affordable
								? `${style.affordablePartText}`
								: `${style.affordablePartTextOFF}`
						}`}>
						<p
							style={{ margin: "15px 0" }}
							className={`${style.smallTypeTextAffordable}`}>
							LOCAL RETAILERS
						</p>
						<div
							style={{ margin: "15px 0" }}
							className={`${style.bigTypeTextAffordable}`}>
							<p className={`${style.bigTypeTextAffordable}`}>Affordable</p>
							<p className={`${style.bigTypeTextAffordable}`}>& Scalable</p>
							<p className={`${style.bigTypeTextAffordable}`}>Last-Mile</p>
						</div>
						<p
							style={{ margin: "15px 0" }}
							className={`${style.smallTypeTextAffordable} ${style.smallTypeTextAffordableLong}`}>
							Discover how we can partner with you to provide last-mile delivery
							solutions that work for you and your customers.
						</p>

						<Link
							href='/retailers'
							style={{ margin: "15px 0", display: "inline-block" }}
							className={`${style.smallTypeTextAffordableLinkPart}`}>
							<a>
								<span
									className={`${style.smallTypeTextAffordable} ${style.smallTypeTextAffordableLink}`}>
									Learn more
								</span>
								<span className={`${style.arrowLink}`}>
									<Image src={arrowAffordablelink} alt='' />
								</span>
							</a>
						</Link>
					</div>
					<div
						className={`${
							affordable
								? `${style.affordableCardPart}`
								: `${style.affordableCardPartOFF}`
						}`}>
						<div className={`${style.affordableCard}`}>
							<Image src={sendingCard} alt='' />
						</div>
					</div>
				</div>
			</InView>
			<InView
				threshold={threshold}
				as='div'
				onChange={(inView, entry) => {
					if (inView) {
						SetSeamless(true);
					}
				}}>
				<div
					className={`${style.affordablePart} ${style.paddingHomeCenter} ${style.reverse}`}>
					<div
						className={`${
							Seamless
								? `${style.affordableCardPart}`
								: `${style.affordableCardPartOFF}`
						}`}>
						<div className={`${style.affordableCard}`}>
							<Image src={seamlessCard} alt='' />
						</div>
					</div>
					<div
						className={`${
							Seamless
								? `${style.affordablePartText}`
								: `${style.affordablePartTextOFF}`
						}`}>
						<p
							style={{ margin: "15px 0" }}
							className={`${style.smallTypeTextAffordable}`}>
							ONLINE RETAILERS
						</p>
						<div
							style={{ margin: "15px 0" }}
							className={`${style.bigTypeTextAffordable}`}>
							<p className={`${style.bigTypeTextAffordable}`}>Effortless</p>
							<p className={`${style.bigTypeTextAffordable}`}>e-commerce</p>
							<p className={`${style.bigTypeTextAffordable}`}>Integrations</p>
						</div>
						<p
							style={{ margin: "15px 0" }}
							className={`${style.smallTypeTextAffordable} ${style.smallTypeTextAffordableLong}`}>
							Install & Set up our free shopify app in less than 5 minutes. Once
							the app is set up, your customers will start seeing a ’Same-Day’
							option at checkout.
						</p>

						<a
							href={`${process.env.D_URL}`}
							style={{ margin: "15px 0", display: "inline-block" }}
							className={`${style.smallTypeTextAffordableLinkPart}`}>
							<span
								className={`${style.smallTypeTextAffordable} ${style.smallTypeTextAffordableLink}`}>
								Get started
							</span>
							<span className={`${style.arrowLink}`}>
								<Image src={arrowAffordablelink} alt='' />
							</span>
						</a>
					</div>
				</div>
			</InView>
			<InView
				threshold={threshold}
				as='div'
				onChange={(inView, entry) => {
					if (inView) {
						setDelivery(true);
					}
				}}>
				<div className={`${style.affordablePart} ${style.paddingHomeCenter}`}>
					<div
						className={`${
							delivery
								? `${style.affordablePartText}`
								: `${style.affordablePartTextOFF}`
						}`}>
						<p
							style={{ margin: "15px 0" }}
							className={`${style.smallTypeTextAffordable}`}>
							DELIVERY PARTNERS
						</p>
						<div style={{ margin: "15px 0" }} className='bigTypeTextAffordable'>
							<p className={`${style.bigTypeTextAffordable}`}>Join our</p>
							<p className={`${style.bigTypeTextAffordable}`}>logistics</p>
							<p className={`${style.bigTypeTextAffordable}`}>network</p>
						</div>
						<p
							style={{ margin: "15px 0" }}
							className={`${style.smallTypeTextAffordable} ${style.smallTypeTextAffordableLong}`}>
							We built a platform focused on your needs, unlocking greater
							opportunities for last-mile delivery companies than any other
							platforms available.
						</p>
						<Link
							href='#'
							style={{ margin: "15px 0", display: "inline-block" }}>
							<a className={`${style.smallTypeTextAffordableLinkPart}`}>
								<span
									className={`${style.smallTypeTextAffordable} ${style.smallTypeTextAffordableLink}`}>
									Join our network
								</span>
								<span className={`${style.arrowLink}`}>
									<Image src={arrowAffordablelink} alt='' />
								</span>
							</a>
						</Link>
					</div>
					<div
						className={`${
							delivery
								? `${style.affordableCardPart}`
								: `${style.affordableCardPartOFF}`
						}`}>
						<div className={`${style.affordableCard}`}>
							<Image src={deliveryCard} alt='' />
						</div>
					</div>
				</div>
			</InView>
			<InView
				threshold={threshold}
				as='div'
				onChange={(inView, entry) => {
					if (inView) {
						SetFully(true);
					}
				}}>
				<div className={`${style.fullyPart} ${style.paddingHomeCenter}`}>
					<div
						className={`${
							Fully
								? `${style.fullyPartTextContent}`
								: `${style.fullyPartTextContentOFF}`
						}`}>
						<div
							className={`${
								Fully ? `${style.blancFake}` : `${style.blancFakeOFF}`
							}`}></div>
						<div className={`${style.fullyPartBIG}`}>
							<p
								className={`${style.bigTypeTextAffordable} ${style.bigTypeTextAffordableFully}`}>
								Fully Automated
							</p>
							<p
								className={`${style.bigTypeTextAffordable} ${style.bigTypeTextAffordableFully}`}>
								Last-mile
							</p>
						</div>
						<p
							className={`${style.smallTypeTextAffordable} ${style.smallTypeTextAffordableLong} ${style.smallTypeTextFullyLong}`}>
							We automatically fulfill your orders for you in Shopify, and
							notify you & your customer each step of the way via SMS & email.
						</p>
					</div>
				</div>
			</InView>
			<InView
				threshold={threshold}
				as='div'
				onChange={(inView, entry) => {
					if (inView) {
						Setcard(true);
					}
				}}>
				<div className={`${style.cardPartof} ${style.paddingHomeCenter}`}>
					<Link href='#'>
						<a className={`${card ? `${style.Oncard}` : `${style.Oncard1}`}`}>
							<div className={`${style.api} ${style.api1}`}>
								<Image
									src={api1}
									alt=''
									className={`${style.iconCardImageApi}`}
								/>
							</div>
							<div className={`${style.OncardSmallTitle}`}>Shopify App</div>
							<p className={`${style.Oncardsmalltext}`}>
								Integrate Same-Day delivery into your Shopify store.
							</p>
							<div className={`${style.arrowBlackCard}`}>
								<Image src={arrowBlack} alt='' />
							</div>
						</a>
					</Link>

					<Link href='#'>
						<a className={`${card ? `${style.Oncard}` : `${style.Oncard2}`}`}>
							<div className={`${style.api} ${style.api2}`}>
								<Image
									src={api2}
									alt=''
									className={`${style.iconCardImageApi}`}
								/>
							</div>
							<div className={`${style.OncardSmallTitle}`}>Web portail</div>
							<p className={`${style.Oncardsmalltext}`}>
								Easily manage deliveries directly from our platform.
							</p>
							<div className={`${style.arrowBlackCard}`}>
								<Image src={arrowBlack} alt='' />
							</div>
						</a>
					</Link>

					<Link href='#'>
						<a className={`${card ? `${style.Oncard}` : `${style.Oncard3}`}`}>
							<div className={`${style.api} ${style.api3}`}>
								<Image
									src={api3}
									alt=''
									className={`${style.iconCardImageApi}`}
								/>
							</div>
							<div className={`${style.OncardSmallTitle}`}>Partner App</div>
							<p className={`${style.Oncardsmalltext}`}>Coming soon</p>
							<div className={`${style.arrowBlackCard}`}>
								<Image src={arrowBlack} alt='' />
							</div>
						</a>
					</Link>
				</div>
			</InView>
			<InView
				threshold={threshold}
				as='div'
				onChange={(inView, entry) => {
					if (inView) {
						SetCurrently(true);
					}
				}}>
				<div className={`${style.currentlyPart}`}>
					<div className={`${style.vectorBool} ${style.vecterBool1} }`}>
						<Image src={vectrBool1} alt='' />
					</div>
					<div className={`${style.vectorBool} ${style.vecterBool2} }`}>
						<Image src={vectrBool2} alt='' />
					</div>
					<div className={`${style.currentlyElementContainer}`}>
						<div className={`${style.currentlyElementText}`}>
							<p className={`${style.currentlyElementTextBig}`}>
								Available in all 50 states!
							</p>
						</div>
						<div className={`${style.currentlyElementCard2}`}>
							<p className={`${style.currentlyElementTextSmall}`}>
								Now on Shopify
							</p>
							<div className={`${style.VectorArrow}`}>
								<Image src={VectorArrow} alt='' />
							</div>
							<a
								href='https://apps.shopify.com/xpressrun'
								target='_blank'
								rel='noreferrer'>
								<div
									className={`${style.currentlyElementCard2_1} ${style.shoopifyCardBlack}`}>
									<Image src={shoopifyCardBlack} alt='' />
								</div>
							</a>
						</div>
						<div className={`${style.currentlyElementCard}`}>
							<div className={`${style.currentlyElementCard1}`}>
								<div
									className={`${
										currently
											? `${style.currentlyElementCardcontainerCard}`
											: `${style.currentlyElementCardcontainerCardOFF}`
									}`}>
									<div className={`${style.curentlyCardType}`}>
										<Image src={deliveryMan} alt='' />
									</div>
								</div>
							</div>
							<div className={`${style.currentlyElementCard3}`}>
								<div
									className={`${
										currently
											? `${style.currentlyElementCardcontainerCard}`
											: `${style.currentlyElementCardcontainerCardOFF}`
									}`}>
									<div className={`${style.curentlyCardType}`}>
										<Image src={ShoppingCart} alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</InView>
			<div className='footerHome'>{/* <Footer /> */}</div>
		</div>
	);
}

export default Home;
