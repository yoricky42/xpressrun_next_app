import { React, useEffect } from "react";
import style from'./demo.module.css';
import TopFunct from "../../component/Top/top";
import { InlineWidget } from "react-calendly";
// import {MediaQuery, useMediaQuery} from 'react-responsive'

function Demo() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    }, [])

    // const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    // const isBigScreen = useMediaQuery({ minWidth: 1824 })
    // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    // const isPortrait = useMediaQuery({ orientation: 'portrait' })
    // const isRetina = useMediaQuery({ minResolution: '2dppx' })
    return (
        <div className={`${style.demoContainer} ALL_COMPONENT`}>
            <TopFunct />
            <div className={`${style.firstDemo}`}>
                <div className={`${style.firstDemotext}`}>
                    <div className={`${style.firstDemoBig}`}>Schedule Your Demo Now</div>
                    <div className={`${style.firstDemoSmall}`}>Please select a date and time from the calendar below  to schedule a demo with a member of our team.</div>
                </div>
            </div>
            <div className={`${style.calendly}`}>
                <InlineWidget url="https://calendly.com/xpressrun/demo?hide_gdpr_banner=1&text_color=181818" />
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </div>
        </div>
    );
}

export default Demo;