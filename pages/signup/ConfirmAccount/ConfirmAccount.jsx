import React from "react";
import "./ConfirmAccount.module.css";
function ConfirmAccount({ email }) {
	return (
		<div className='Section-Principale'>
			<div className='container-fluid section-verification'>
				<div className='container section-principale-verified'>
					<div className='row'>
						<div className='col imgRect'>
							<div className='img-bg m-2'></div>
						</div>
						<div className='col'>
							<div className='text-verified'>
								<h3 className='title-verified'>Verification link sent !</h3>
								<p className='first-paragraph-verified'>
									We emailed a confirmation link to <stron>{email}</stron>{" "}
									<br />
									Check your email for a link to complete registration.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ConfirmAccount;
