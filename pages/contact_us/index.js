import { React, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import style from "./contact.module.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import logo from "../../Assets/contact/logo.jpeg";
import Head from "next/head";

const SERVICE_ID = "service_4tvjs98"; //"service_4wheitc";
const TEMPLATE_ID = "template_iw6cdsg";
const USER_ID = "user_nfuSmG616zpv4BIigXkDT";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  }, []);
  const [categories] = useState([
    { value: "1", name: "Interested in our solutions" },
    { value: "2", name: "Join our network" },
    { value: "3", name: "Customer service " },
    { value: "4", name: "Other" },
  ]);

  var logo_ = "";
  logo_ = logo;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Something was wrong!",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className={`${style.principalContact} ALL_COMPONENT`}>
      <Head>
        <title>Xpressrun | Contact us</title>
        <meta
          name="description"
          content="Want to learn more about our fully automated same-day delivery platform?"
        />
      </Head>
      <div className={`${style.contactusContainer}`}>
        <div className={`${style.contactUs_leftSide}`}>
          <div className={`${style.contactUs_leftSide_title}`}>
            We’d love to
          </div>
          <div className={`${style.contactUs_leftSide_title}`}>
            hear from you
          </div>
          <div className={`${style.contactUs_leftSide_Subtitle}`}>
            Want to learn more about our fully automated same-day delivery
            platform? Submit this form and our sales representative will contact
            you soon.
          </div>
          <div className={`${style.contactUs_leftSide_line}`}></div>
          <div className={`${style.contactUs_leftSide_contact}`}>
            <div className={`${style.title}`}>Contact</div>
            <div className={`${style.subtitle}`}>support@xpressrun.com</div>
          </div>
          <div className={`${style.contactUs_leftSide_contact}`}>
            <div className={`${style.title}`}>Based in</div>
            <div className={`${style.subtitle}`}>Louisville,KY</div>
          </div>
          <div className={`${style.contactUs_leftSide_social}`}>
            <div>
              <a href="https://www.facebook.com/xpressrunapp">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 19C38 8.50658 29.4934 0 19 0C8.50658 0 0 8.50658 0 19C0 28.4833 6.94799 36.3438 16.0312 37.7692V24.4922H11.207V19H16.0312V14.8141C16.0312 10.0522 18.8679 7.42187 23.2078 7.42187C25.286 7.42187 27.4609 7.79297 27.4609 7.79297V12.4687H25.0652C22.705 12.4687 21.9688 13.9335 21.9688 15.4375V19H27.2383L26.3959 24.4922H21.9688V37.7692C31.052 36.3438 38 28.4833 38 19Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/xpressrun.hq/">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3.42148C24.0766 3.42148 24.6777 3.44375 26.6742 3.53281C28.5297 3.61445 29.5316 3.92617 30.1996 4.18594C31.0828 4.52734 31.7211 4.94297 32.3816 5.60352C33.0496 6.27148 33.4578 6.90234 33.7992 7.78555C34.059 8.45352 34.3707 9.46289 34.4523 11.3109C34.5414 13.3148 34.5637 13.916 34.5637 18.9852C34.5637 24.0617 34.5414 24.6629 34.4523 26.6594C34.3707 28.5148 34.059 29.5168 33.7992 30.1848C33.4578 31.068 33.0422 31.7063 32.3816 32.3668C31.7137 33.0348 31.0828 33.443 30.1996 33.7844C29.5316 34.0441 28.5223 34.3559 26.6742 34.4375C24.6703 34.5266 24.0691 34.5488 19 34.5488C13.9234 34.5488 13.3223 34.5266 11.3258 34.4375C9.47031 34.3559 8.46836 34.0441 7.80039 33.7844C6.91719 33.443 6.27891 33.0273 5.61836 32.3668C4.95039 31.6988 4.54219 31.068 4.20078 30.1848C3.94102 29.5168 3.6293 28.5074 3.54766 26.6594C3.45859 24.6555 3.43633 24.0543 3.43633 18.9852C3.43633 13.9086 3.45859 13.3074 3.54766 11.3109C3.6293 9.45547 3.94102 8.45352 4.20078 7.78555C4.54219 6.90234 4.95781 6.26406 5.61836 5.60352C6.28633 4.93555 6.91719 4.52734 7.80039 4.18594C8.46836 3.92617 9.47774 3.61445 11.3258 3.53281C13.3223 3.44375 13.9234 3.42148 19 3.42148ZM19 0C13.8418 0 13.1961 0.0222656 11.1699 0.111328C9.15117 0.200391 7.76328 0.526953 6.56094 0.994531C5.30664 1.48438 4.24531 2.13008 3.19141 3.19141C2.13008 4.24531 1.48438 5.30664 0.994531 6.55352C0.526953 7.76328 0.200391 9.14375 0.111328 11.1625C0.0222656 13.1961 0 13.8418 0 19C0 24.1582 0.0222656 24.8039 0.111328 26.8301C0.200391 28.8488 0.526953 30.2367 0.994531 31.4391C1.48438 32.6934 2.13008 33.7547 3.19141 34.8086C4.24531 35.8625 5.30664 36.5156 6.55352 36.998C7.76328 37.4656 9.14375 37.7922 11.1625 37.8812C13.1887 37.9703 13.8344 37.9926 18.9926 37.9926C24.1508 37.9926 24.7965 37.9703 26.8227 37.8812C28.8414 37.7922 30.2293 37.4656 31.4316 36.998C32.6785 36.5156 33.7398 35.8625 34.7938 34.8086C35.8477 33.7547 36.5008 32.6934 36.9832 31.4465C37.4508 30.2367 37.7773 28.8563 37.8664 26.8375C37.9555 24.8113 37.9777 24.1656 37.9777 19.0074C37.9777 13.8492 37.9555 13.2035 37.8664 11.1773C37.7773 9.15859 37.4508 7.7707 36.9832 6.56836C36.5156 5.30664 35.8699 4.24531 34.8086 3.19141C33.7547 2.1375 32.6934 1.48438 31.4465 1.00195C30.2367 0.534375 28.8563 0.207813 26.8375 0.11875C24.8039 0.0222656 24.1582 0 19 0Z"
                    fill="white"
                  />
                  <path
                    d="M19 9.24023C13.6117 9.24023 9.24023 13.6117 9.24023 19C9.24023 24.3883 13.6117 28.7598 19 28.7598C24.3883 28.7598 28.7598 24.3883 28.7598 19C28.7598 13.6117 24.3883 9.24023 19 9.24023ZM19 25.3309C15.5043 25.3309 12.6691 22.4957 12.6691 19C12.6691 15.5043 15.5043 12.6691 19 12.6691C22.4957 12.6691 25.3309 15.5043 25.3309 19C25.3309 22.4957 22.4957 25.3309 19 25.3309Z"
                    fill="white"
                  />
                  <path
                    d="M31.4242 8.8542C31.4242 10.1159 30.4 11.1327 29.1457 11.1327C27.884 11.1327 26.8672 10.1085 26.8672 8.8542C26.8672 7.59248 27.8914 6.57568 29.1457 6.57568C30.4 6.57568 31.4242 7.5999 31.4242 8.8542Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/XpressRun_hq">
                <svg
                  width="38"
                  height="31"
                  viewBox="0 0 38 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9544 30.8761C26.2905 30.8761 34.1339 18.9959 34.1339 8.69661C34.1339 8.36262 34.1265 8.02122 34.1117 7.68723C35.6375 6.58381 36.9542 5.21706 38 3.65122C36.579 4.28344 35.0703 4.69635 33.5254 4.87582C35.152 3.90076 36.37 2.36899 36.9535 0.564457C35.4232 1.47138 33.7497 2.11113 32.0046 2.45629C30.8288 1.20696 29.2742 0.379761 27.5812 0.102574C25.8881 -0.174613 24.1509 0.113656 22.6381 0.922812C21.1253 1.73197 19.9212 3.01694 19.2119 4.57907C18.5027 6.1412 18.3278 7.89347 18.7143 9.56497C15.6156 9.40947 12.5842 8.60452 9.81664 7.20232C7.04904 5.80011 4.60701 3.83193 2.64887 1.42539C1.65363 3.1413 1.34909 5.17176 1.79713 7.10414C2.24517 9.03651 3.41218 10.7258 5.06098 11.8286C3.82316 11.7893 2.61246 11.4561 1.52891 10.8564V10.9529C1.5278 12.7536 2.15032 14.4991 3.29066 15.8927C4.43099 17.2863 6.01876 18.242 7.78406 18.5974C6.63742 18.9111 5.43397 18.9568 4.26684 18.731C4.76497 20.2796 5.73416 21.6341 7.03914 22.6054C8.34412 23.5766 9.91978 24.1163 11.5462 24.1489C8.78501 26.3179 5.37411 27.4944 1.86289 27.4888C1.2402 27.4878 0.618132 27.4497 0 27.3745C3.56702 29.6629 7.71642 30.8784 11.9544 30.8761Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={`${style.contactUs_rightSide}`}>
          <form
            action=""
            className={`${style.contactUs_rightSide_form}`}
            onSubmit={sendEmail}
          >
            <div className={`${style.form_container_contactUs}`}>
              <div className={`${style.container_info}`}>
                <div className={`${style.info}`}>
                  <div className={`${style.title}`}>Name</div>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="john Doe"
                  />
                </div>
                <div className={`${style.info}`}>
                  <div className={`${style.title}`}>Company</div>
                  <input
                    name="company"
                    required
                    type="text"
                    placeholder="J&D Inc."
                  />
                </div>
              </div>
              <div className={`${style.container_info}`}>
                <div className={`${style.info}`}>
                  <div className={`${style.title}`}>Phone number</div>
                  <NumberFormat
                    name="phoneNumber"
                    className=""
                    format="+1 (###) ###-####"
                    mask="_"
                    placeholder="(502)123-1234"
                    style={{ width: "100%", border: "none", outline: "none" }}
                    required
                  />
                </div>
                <div className={`${style.info}`}>
                  <div className={`${style.title}`}>Email address</div>
                  <input
                    name="Email"
                    required
                    type="text"
                    placeholder="johnDoe@example.com"
                  />
                </div>
              </div>
              <div className={`${style.container_info}`}>
                <div className={`${style.info}`}>
                  <div className={`${style.title}`}>Contact reason</div>
                  <select name="help" type="select">
                    <option value={0} name={0}>
                      How can we help you
                    </option>
                    {categories.map((el, i) => {
                      return (
                        <option key={i} value={el.value} name={el.name}>
                          {el.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className={`${style.container_info}`}>
                <div className={`${style.info}`}>
                  <div className={`${style.title}`}>Message</div>
                  <textarea name="message" type="text" placeholder="..." />
                </div>
              </div>
              <div className={`${style.container_info}`}>
                <button className={`${style.submitBtnFormContact}`}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
