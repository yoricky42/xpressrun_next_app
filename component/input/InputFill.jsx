import { useState } from "react";
import PhoneInput from "react-number-format";
import style from "./InputFill.module.css"

export const InputFill = ({
	onChange,
	name,
	label,
	placeholder,
	classInput,
	classLabel,
	type,
	error,
	required,
	value,
	disabled,
	options,
	optionKey,
	handleSelect,
	...props
}) => {
	const [show, setShow] = useState(false);

	return (
		<div>
			{label && (
				<label className={classLabel} htmlFor={label}>
					{label}
				</label>
			)}

			{type === "textarea" ? (
				<textarea
					name={name}
					required
					value={value}
					onChange={onChange}
					error={error}
					placeholder={placeholder}
					className={classInput}
				/>
			) : type === "select" ? (
				<div className={`${style.SelectCompCust}`}>
					<select
						required
						name={name}
						value={value}
						onChange={onChange}
						error={error}
						className={classInput}
					>
							
						{placeholder && (
							<option selected value={""}>
								{placeholder}
							</option>
						)}
						
						{options.map((v, i) => (
							<option key={i} value={v.value}>
								{v.name}
							</option>
						))}
					</select>
				</div>
			) : type === "tel" ? (
				<PhoneInput
					specialLabel={false}
					inputStyle={{ width: "100%" }}
					inputClass={className}
					country={"us"}
					onlyCountries={["us"]}
					disableDropdown={true}
					placeholder={placeholder}
					value={value}
					countryCodeEditable={false}
					enableAreaCodes={false}
					onChange={(v, d, e, f) => onChange(f)}
					className={classInput}
				/>
			) : type === "password" ? (
				<div>
					<input
						name={name}
						required={required}
						type={show ? "text" : "password"}
						value={value}
						onChange={onChange}
						disabled={disabled}
						style={{ width: "100%", border: "none", outline: "none" }}
						placeholder={placeholder}
						className={classInput}
						{...props}
					/>
					<span
						class={`fa ${show ? "fa-eye" : "fa-eye-slash"}`}
						onClick={() => setShow(!show)}></span>
				</div>
			) : (
				<input
					name={name}
					required={required}
					type="text"
					value={value}
					onChange={onChange}
					disabled={disabled}
					placeholder={placeholder}
					className={classInput}
					{...props}
				/>
			)}

			{error && (
				<p className='invalid-feedback' style={{ lineHeight: 1.1 }}>
					{error}
				</p>
			)}
		</div>
	);
};
