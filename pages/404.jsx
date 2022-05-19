import lostman from "../public/404man.svg";
import Image from "next/image";

const PageLost = () => {
	return (
		<div className='lost_page_container'>
			<div className='lostman_img_error_page'>
				<Image src={lostman}></Image>
			</div>
			<div className=''>
				<h1 className='title_error_page'>404</h1>
				<h2 className='title_2_error_page'>UH OH! You're lost.</h2>
				<p className='paragraph_error_page'>
					The page you are looking for does not exist. How you got here is a
					mystery. But you can click the button below to go back to the
					homepage.
				</p>
				<div
					className='bouton_error_page'
					onClick={() => {
						history.go(-1);
						return false;
					}}>
					Go Back
				</div>
			</div>
		</div>
	);
};

export default PageLost;
