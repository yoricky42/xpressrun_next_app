import React, { useState, useEffect } from "react";
import MyButton from "../../component/bouton/Button";
import tracking from "../../public/Assets/singup/tracking.png";
import { InputFill } from "../../component/input/InputFill";
import component18 from "../../public/Assets/singup/Component18.png";
import validator from "validator";
import ConfirmAccount from "./ConfirmAccount/ConfirmAccount";
import Image from "next/image";
import NumberFormat from "react-number-format";
import style from "./signup.module.css";
import axios from "axios";
import Head from "next/head";
import { useKeycloak } from '@react-keycloak/ssr'

export default function Signin({}) {
	const [loading, setLoading] = useState(false);
	const { keycloak } = useKeycloak<KeycloakInstance>();

	useEffect(() => {
		if (window.location?.search) {
			let f_arr = new URLSearchParams(window.location.search).get("full_name");
			let lastName;
			let firstName;
			let token = new URLSearchParams(window.location.search).get("token")
			if (f_arr) {
				f_arr = f_arr.split(" ");
				lastName = f_arr.pop();
				firstName = f_arr.toString();
			}

			setData({
				...data,
				name: new URLSearchParams(window.location.search).get("company_name"),
				email: new URLSearchParams(window.location.search).get("email"),
				token: token,
				firstName: firstName,
				lastName: lastName,
			});
		}

		if(token && keycloak?.authenticated){
			window.location = `${process.env.NEXT_PUBLIC_D_URL}/integration/redirect?token=${data.token}`;
		}

		if(keycloak?.authenticated){
			window.location = `${process.env.NEXT_PUBLIC_D_URL}`;
		}

	}, []);

	let [errors, setErrors] = useState({
		name: "",
		email: "",
		firstName: "",
		lastName: "",
		phoneNumber: "",
		address: "",
		category: "",
		password: "",
		rPassword: "",
		monthlyVolume: "",
		error: "",
	});

	const [step, setStep] = useState("SIGN");
	const [data, setData] = useState({
		name: "",
		email: "",
		firstName: "",
		lastName: "",
		phoneNumber: "",
		address: "",
		category: "",
		password: "",
		monthlyVolume: "",
		token: "",
	});

	const [categories] = useState([
		{ name: "Auto", value: "Auto" },
		{ name: "Beauty", value: "Beauty" },
		{ name: "Clothing", value: "Clothing" },
		{ name: "Convenience", value: "Convenience" },
		{ name: "Furniture", value: "Furniture" },
		{ name: "Handcrafts", value: "Handcrafts" },
		{ name: "Jewerly", value: "Jewerly" },
		{ name: "Art", value: "Painting/Photography" },
		{ name: "Restaurants", value: "Restaurants" },
		{ name: "Grocery", value: "Grocery" },
		{ name: "Specility retail", value: "Specility retail" },
		{ name: "food & drink", value: "food & drink" },
		{ name: "Other", value: "Other" },
	]);

	const handleChange = ({ currentTarget }) => {
		const { name, value } = currentTarget;
		setData({ ...data, [name]: value });
		setErrors({ ...errors, [name]: "" });
	};

	const handleSubmit = async () => {
		setLoading(true);
		await axios
			.post(`${process.env.NEXT_PUBLIC_API_URL}/businesses/public/create-account`, {
				name: data.name,
				category: data.category,
				monthlyVolume: data.monthlyVolume,
				users: [
					{
						email: data.email,
						firstName: data.firstName,
						lastName: data.lastName,
						phoneNumber: data.phoneNumber,
						password: data.password,
					},
				],
			})
			.then((res) => {
				if (data.token) {
					window.location = `${process.env.NEXT_PUBLIC_D_URL}/integration/redirect?token=${data.token}`;
				} else setStep("SUCCESS");
			})
			.catch(({ response }) => {
				setLoading(false);
				let apiErros = { error: response?.data?.message ?? "error occured" };
				let violations = null;
				if ((violations = response?.data?.errors)) {
					violations.forEach((v) => {
						if (v.property.split(".").length > 1) {
							apiErros = { ...apiErros, [v.property.split(".")[1]]: v.message };
						} else apiErros = { ...apiErros, [v.property]: v.message };
					});
					setErrors(apiErros);
				}
			});
		setLoading(false);
	};

	return (
		<div>
			{step === "SUCCESS" ? (
				<ConfirmAccount email={data.email} />
			) : (
				<div className={`${style.b2c_login_container}`}>
					<Head>
						<title>Get started</title>
						<meta
							name='description'
							content='Offer a delightful ultra-fast delivery experience to your customers directly from your website. Integrates with Shopify, Woo-commerce, Squarespace and more. '
						/>
					</Head>
					<div>
						<form className={`${style.myForm}`} autoComplete='off'>
							<div className={`${style.card}`}>
								<div
									className={`${style.formFlowSlider}`}
									// ref={(el) => (formFlowSlider = el)}
								>
									<div className={`${style.flexingColumn}`}>
										<div className={`${style.card_title}`}>
											<div className={`${style.card_title_title}`}>
												Welcome to XpressRun!
											</div>
											<div className={`${style.card_title_sub}`}>
												Already have an account?{" "}
												<a href={`${process.env.NEXT_PUBLIC_D_URL}`}>Log in</a>
											</div>{" "}
										</div>
										<div className={`${style.InputOnFormContainer}`}>
											<div
												className={`${style.firstAndLast_input_container} ${style.inputInFromContainerKkd}`}>
												<div className={``}>
													<InputFill
														name='firstName'
														type='text'
														value={data.firstName}
														onChange={handleChange}
														error={errors.firstName}
														required
														placeholder='First name'
														label='First name'
														classInput={`${style.storeFormInputForme_Input}`}
														classLabel={`${style.storeFormInputForme_Label}`}
													/>
												</div>
												<div className={``}>
													<InputFill
														name='lastName'
														type='text'
														value={data.lastName}
														onChange={handleChange}
														error={errors.lastName}
														required
														placeholder='Last name'
														label='Last name'
														classInput={`${style.storeFormInputForme_Input}`}
														classLabel={`${style.storeFormInputForme_Label}`}
													/>
												</div>
											</div>
											<div className={`${style.inputInFromContainerKkd}`}>
												<InputFill
													name='name'
													type='text'
													value={data.name}
													onChange={handleChange}
													error={errors.name}
													required
													placeholder='Company Name'
													label='Company name'
													classInput={`${style.storeFormInputForme_Input}`}
													classLabel={`${style.storeFormInputForme_Label}`}
												/>
											</div>
											<div className={`${style.inputInFromContainerKkd}`}>
												<InputFill
													name='email'
													value={data.email}
													onChange={handleChange}
													error={errors.email}
													required
													type='email'
													placeholder='Email'
													label='Email'
													classInput={`${style.storeFormInputForme_Input}`}
													classLabel={`${style.storeFormInputForme_Label}`}
												/>
											</div>
											<div className={`${style.inputInFromContainerKkd}`}>
												<InputFill
													name='category'
													value={data.category}
													onChange={handleChange}
													error={errors.category}
													required
													type='select'
													options={categories}
													placeholder='Category'
													label='Category'
													classInput={`${style.storeFormInputForme_Input}`}
													classLabel={`${style.storeFormInputForme_Label}`}
												/>
											</div>
											<div className={`${style.inputInFromContainerKkd}`}>
												<label className={`${style.storeFormInputForme_Label}`}>
													Phone number
												</label>
												<div className={`${style.InputFill_sign_typeNUM}`}>
													<div className={`${style.OneOninput}`}>+1</div>
													<NumberFormat
														format='+1 (###) ###-####'
														mask='_'
														placeholder='(502)123-1234'
														style={{
															width: "100%",
															border: "none",
															outline: "none",
															padding: "0 10px",
														}}
														value={data.phoneNumber}
														onValueChange={(values, sourceinfo) =>
															setData({
																...data,
																phoneNumber: values.value,
															})
														}
														error={errors.phoneNumber}
														required
													/>
												</div>
											</div>
											<div className={`${style.inputInFromContainerKkd}`}>
												<InputFill
													name='password'
													value={data.password}
													onChange={({ currentTarget }) => {
														const { name, value } = currentTarget;
														setData({ ...data, [name]: value });
														setErrors({
															...errors,
															[name]: !validator.isStrongPassword(value)
																? "password must be at least 8 characters one digit one special character one uppercase"
																: "",
														});
													}}
													error={errors.password}
													required
													placeholder='Password'
													label='Password'
													type='password'
													classInput={`${style.storeFormInputForme_Input}`}
													classLabel={`${style.storeFormInputForme_Label}`}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className=''>
									<MyButton
										className={`${style.continu_button_typeSignUp}`}
										type='submit'
										disabled={false}
										loading={loading}
										handleClick={handleSubmit}
										title={"Register"}
									/>
								</div>
							</div>
							<div className={`${style.sliderImageForm}`}>
								<div className={`${style.Slider_inner_flow}`}>
									<div className={`${style.sliderImageForm_inner}`}>
										<div className={`${style.sliderImage}`}>
											<Image src={tracking} alt='' />
										</div>
										<div className={`${style.brandImageTextBellow}`}>
											<div
												style={{
													fontSize: "22px",
													fontWeight: "bold",
													padding: "10px 0",
												}}>
												Get started for FREE
											</div>
											<span style={{ fontSize: "15px", lineHeight: "1" }}>
												Save up to 50% off same day delivery rates with instant
												access and no monthly fees, markup, or hidden costs.
											</span>
										</div>
									</div>
									<div className={`${style.sliderImageForm_inner}`}>
										<div className={`${style.BrandImageContainer}`}>
											<div
												className={`${style.component18} ${style.sliderImage}`}>
												<Image src={component18} alt='' />
											</div>
										</div>
										<div className={`${style.brandImageTextBellow}`}>
											<div
												style={{
													fontSize: "22px",
													fontWeight: "bold",
													padding: "10px 0",
												}}>
												Large delivery network
											</div>
											<span style={{ fontSize: "15px", lineHeight: "1" }}>
												We provide instant access to hundreds of delivery
												providers and millions of drivers around the world.
											</span>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
