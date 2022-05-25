import React from "react";
import style from "./ConfirmAccount.module.css";
function ConfirmAccount({ email }) {
	return (
			<div className={`${style.section_verification} paddingHomeCenter`}>
				<div className={`${style.Section_Principale_verified}`}>
					<div className={`${style.imageAndconfimationtext}`}>
						<div className={`${style.imgRect}`}>
							<div className={`${style.img_bg}`}></div>
						</div>
						<div className={`${style.text_verified}`}>
							<h3 className={`${style.title_verified}`}>Verification link sent !</h3>
							<div className={`${style.first_paragraph_verified}`}>
								<div>We emailed a confirmation link to <stron>{email}</stron>{" "}</div>
								<div>Check your email for a link to complete registration.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
}
export default ConfirmAccount;
