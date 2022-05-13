import styles from "./top.module.css"
import Top from "./ATtop.svg"
import Image from "next/image"

export default ()=>{
  const scrollToTop = () =>{
		window.scrollTo({
		  top: 0, 
		  behavior: 'smooth'
		  /* you can also use 'auto' behaviour
			 in place of 'smooth' */
		});
	};
    return(
        <div className={styles.buttonTop} onClick={()=>scrollToTop()}>
				<Image src={Top} />
		</div>
    )
}