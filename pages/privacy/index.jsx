import {React} from "react"
import Head from "next/head";
const rawHTML=`
<body>
<style>
strong{
    font-weight: bold !important;
}
ul {
list-style-type: square !important;
}

ul>li>ul {
list-style-type: circle !important;
}

ul>li>ul>li>ul {
list-style-type: square !important;
}

ol li {
font-family: Arial !important;
}
[data-custom-class='body'],
[data-custom-class='body'] * {
  background: transparent !important;
}

[data-custom-class='title'],
[data-custom-class='title'] * {
  font-family: Arial !important;
  font-size: 26px !important;
  color: #000000 !important;
}

[data-custom-class='subtitle'],
[data-custom-class='subtitle'] * {
  font-family: Arial !important;
  color: #595959 !important;
  font-size: 14px !important;
}

[data-custom-class='strong'],
[data-custom-class='strong'] * {
    font-weight:bold;
}


[data-custom-class='heading_1'],
[data-custom-class='heading_1'] * {
  font-family: Arial !important;
  font-size: 19px !important;
  color: #000000 !important;
}

[data-custom-class='heading_2'],
[data-custom-class='heading_2'] * {
  font-family: Arial !important;
  font-size: 17px !important;
  color: #000000 !important;
}

[data-custom-class='body_text'],
[data-custom-class='body_text'] * {
  color: #595959 !important;
  font-size: 16px !important;
  font-weight: 400;
  font-family: Arial !important;
}

[data-custom-class='link'],
[data-custom-class='link'] * {
  color: #3030F1 !important;
  font-size: 14px !important;
  font-family: Arial !important;
  word-break: break-word !important;
}
</style>

<div data-custom-class="body">
<div><strong><span style="font-size: 26px;"><span data-custom-class="title">PRIVACY NOTICE</span></span></strong></div>
<div><br></div>
<div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Last updated <bdt class="question">January 19, 2022</bdt></span></span></strong></span></div>
<div><br></div>
<div><br></div>
<div><br></div>
<div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">Thank you for choosing to be part of our community at <bdt class="question">XpressRun, Inc.</bdt><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>
          </span></span> ("<span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>
          </span></span><strong data-custom-class="strong">Company</strong></span><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                <bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
              </span></span></span></span></span><span data-custom-class="body_text">," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at <bdt class="question">support@xpressrun.com</bdt>.</span></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text">This privacy notice describes how we might use your information if you:</span></span></span><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>
          </span></span></span></span></span></div>
<ul>
  <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Visit our website<bdt class="block-component"></bdt> at <bdt class="question"><a href="http://www.xpressrun.com" target="_blank" data-custom-class="link">http://www.xpressrun.com</a></bdt><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                    <bdt class="statement-end-if-in-editor"></bdt>
                  </span></span></span></span></span></span></span></span></li>
</ul>
<div>
  <bdt class="block-component"><span style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                <bdt class="block-component"></bdt>
              </span></span></span></span></span></span>
    
    <div>
      <bdt class="block-component"><span style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>
                  </span></span></span></span></span></span>
        
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>
                  </span></span></span></span></span></div>
        <ul>
          <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Engage with us in other related ways ― including any sales, marketing, or events<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></li>
        </ul>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text">In this privacy notice, if we refer to:</span></span></span><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>
                  </span></span></span></span></span></div>
        <ul>
          <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">"<strong>Website</strong>," we are referring to any website of ours that references or links to this policy<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></li>
        </ul>
        <div>
          <bdt class="block-component"><span style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span></span>
            
            <div>
              <bdt class="block-component"><span style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>
                          </span></span></span></span></span></span></bdt>
            </div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">"<strong>Services</strong>," we are referring to our<span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                <bdt class="block-component"></bdt>
                              </span></span></span></span></span> Website,<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                                      <bdt class="statement-end-if-in-editor">
                                        <bdt class="block-component"></bdt>
                                      </bdt>
                                    </span></span></span></span></span></span></span></span></span></span></span><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text">&nbsp;and other related services, including any sales, marketing, or events<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                                      <bdt class="statement-end-if-in-editor"></bdt>
                                    </span></span></span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text">The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.</strong></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">TABLE OF CONTENTS</span></strong></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infocollect"><span style="color: rgb(89, 89, 89);">1. WHAT INFORMATION DO WE COLLECT?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);">
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infouse"><span style="color: rgb(89, 89, 89);">2. HOW DO WE USE YOUR INFORMATION?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);">
                          <bdt class="statement-end-if-in-editor"></bdt>
                        </span></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><a data-custom-class="link" href="#infoshare">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></span><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);">
                        <bdt class="block-component"></bdt>
                      </span>
                      <bdt class="block-component"></bdt>
                    </span></span></span></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#cookies"><span style="color: rgb(89, 89, 89);">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);">
                        <bdt class="statement-end-if-in-editor"></bdt>
                      </span></span></span></span></span><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);">
                            <bdt class="block-component"></bdt>
                          </span></span>
                        <bdt class="block-component"></bdt>
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#inforetain"><span style="color: rgb(89, 89, 89);">5. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);">
                          <bdt class="block-component"></bdt>
                        </span></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infosafe"><span style="color: rgb(89, 89, 89);">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);">
                        <bdt class="statement-end-if-in-editor"></bdt>
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><a data-custom-class="link" href="#privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</a></span></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#DNT"><span style="color: rgb(89, 89, 89);">8. CONTROLS FOR DO-NOT-TRACK FEATURES</span></a></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#caresidents"><span style="color: rgb(89, 89, 89);">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#policyupdates"><span style="color: rgb(89, 89, 89);">10. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span></div>
            <div style="line-height: 1.5;"><a data-custom-class="link" href="#contact"><span style="color: rgb(89, 89, 89); font-size: 15px;">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></div>
            <div style="line-height: 1.5;"><a data-custom-class="link" href="#request"><span style="color: rgb(89, 89, 89);">12. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></div>
            <div style="line-height: 1.5;"><br></div>
            <div id="infocollect" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">1. WHAT INFORMATION DO WE COLLECT?</span></strong></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span data-custom-class="heading_2" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong>Personal information you disclose to us</strong></span></span></div>
            <div>
              <div><br></div>
              <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong></span></span></span></span><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>&nbsp;</em></strong><em>We collect personal information that you provide to us.</em></span></span></span></span></span></span></div>
            </div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you <span style="font-size: 15px;">
                      <bdt class="block-component"></bdt>
                    </span>register on the&nbsp;</span><span style="font-size: 15px;"><span data-custom-class="body_text">
                      <bdt class="block-component"></bdt>Website, <bdt class="block-component">
                    </bdt></span>
          <span data-custom-class="body_text"><span style="font-size: 15px;">
              <bdt class="statement-end-if-in-editor"></bdt>
            </span></span><span data-custom-class="body_text">express an interest in obtaining information about us or our products and Services, when you participate in activities on the <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>Website<bdt class="block-component">
                  </bdt></span>
      </span></span></span>
      <bdt class="block-component"></bdt></span></span><span data-custom-class="body_text">&nbsp;or otherwise when you contact us.</span></span></span>
    </div>
    <div style="line-height: 1.5;"><br></div>
    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">The personal information that we collect depends on the context of your interactions with us and the <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>Website<bdt class="block-component">
                          </bdt></span>
  </span></span></span></span></span></span></span><span style="font-size: 15px;">, the choices you make and the products and features you use. The personal information we collect may include the following:<bdt class="block-component"></bdt></span></span></span></span>
</div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Personal Information Provided by You.</strong> We collect <span style="font-size: 15px;"><span data-custom-class="body_text">
            <bdt class="forloop-component"></bdt>
            <bdt class="question">names</bdt>;&nbsp;
          </span><span data-custom-class="body_text">
            <bdt class="forloop-component"></bdt>
            <bdt class="question">phone numbers</bdt>;&nbsp;
          </span><span data-custom-class="body_text">
            <bdt class="forloop-component"></bdt>
            <bdt class="question">email addresses</bdt>;&nbsp;
          </span><span data-custom-class="body_text">
            <bdt class="forloop-component"></bdt>
            <bdt class="question">mailing addresses</bdt>;&nbsp;
          </span><span data-custom-class="body_text">
            <bdt class="forloop-component"></bdt>
            <bdt class="question">billing addresses</bdt>;&nbsp;
          </span><span data-custom-class="body_text">
            <bdt class="forloop-component"></bdt>
            <bdt class="question">debit/credit card numbers</bdt>;&nbsp;
          </span><span data-custom-class="body_text">
            <bdt class="forloop-component"></bdt>and other similar information.
          </span><span data-custom-class="body_text">
            <bdt class="statement-end-if-in-editor"></bdt>
            <bdt class="block-component"></bdt>
          </span></span></span></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by<bdt class="forloop-component"></bdt><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">
                  <bdt class="block-component"></bdt>
                </span></span></span></span></span>
        <bdt class="question">Stripe</bdt><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>
                      </span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                      <bdt class="forloop-component"></bdt>
                                    </span></span></span></span></span></span></span></span></span></span></span></span>. You may find their privacy notice link(s) here:<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="forloop-component"></bdt><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">
                              <bdt class="block-component"></bdt>
                            </span></span></span></span></span>
                  </span></span></span>
              <bdt class="question"><a href="https://stripe.com/privacy" target="_blank" data-custom-class="link">https://stripe.com/privacy</a></bdt><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span>
                    <bdt class="forloop-component"></bdt><span style="font-size: 15px;"><span data-custom-class="body_text">.</span><span data-custom-class="body_text">
                        <bdt class="statement-end-if-in-editor">
                          <bdt class="block-component"></bdt>
                        </bdt>
                      </span></span>
                  </span></span></span></span></span></span></span></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.<bdt class="block-component"></bdt></span></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span data-custom-class="heading_2" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong>Information automatically collected</strong></span></span></div>
<div>
  <div><br></div>
  <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong></span></span></span></span><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>&nbsp;</em></strong><em>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                  <bdt class="block-component"></bdt>Website<bdt class="block-component">
                                </bdt></span></span></span></span></span></span></span></span>.</em></span></span></span></span></span></span></div>
</div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We automatically collect certain information when you visit, use or navigate the <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>Website<bdt class="block-component">
                      </bdt></span></span></span></span></span></span></span></span>. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>Website<bdt class="block-component">
                      </bdt></span></span></span></span></span></span></span></span> and other technical information. This information is primarily needed to maintain the security and operation of our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>Website<bdt class="block-component">
                      </bdt></span></span></span></span></span></span></span></span>, and for our internal analytics and reporting purposes.<bdt class="block-component"></bdt></span></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Like many businesses, we also collect information through cookies and similar technologies. <bdt class="block-component"></bdt>
        <bdt class="block-component"></bdt>
        <bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
        <bdt class="block-component"></bdt>
      </span></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">The information we collect includes:<bdt class="block-component"></bdt></span></span></span></div>
<ul>
  <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                          <bdt class="block-component"></bdt>Website<bdt class="block-component">
                        </bdt></span></span></span></span></span></span></span></span> and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                          <bdt class="block-component"></bdt>Website<bdt class="block-component">
                        </bdt></span></span></span></span></span></span></span></span><span style="font-size: 15px;">&nbsp;</span>(such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                    <bdt class="statement-end-if-in-editor"></bdt>
                  </span></span></span></span></span></span></span></span></li>
</ul>
<div>
  <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
  
  <div>
    <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
  </div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em>Location Data.</em> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>Website<bdt class="block-component">
                          </bdt></span></span></span></span></span></span></span></span>. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                      <bdt class="statement-end-if-in-editor"></bdt>
                    </span></span></span></span></span></span></span></span></li>
  </ul>
  <div>
    <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
    
    <bdt class="statement-end-if-in-editor"></bdt><span data-custom-class="body_text"><span style="font-size: 15px;">
        <bdt class="statement-end-if-in-editor">
          <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">
                    <bdt class="statement-end-if-in-editor">
                      <bdt class="statement-end-if-in-editor">
                        <bdt class="block-component"></bdt>
                      </bdt>
                  </bdt></span></span></span></span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                    <bdt class="statement-end-if-in-editor">
                      <bdt class="block-component"></bdt>
                    </bdt>
                  </span></span></span></span></bdt>
      </bdt></span></span>
    <bdt class="block-component"></bdt>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div id="infouse" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">2. HOW DO WE USE YOUR INFORMATION?</span></strong></span></span></span></span></span></div>
  <div>
    <div style="line-height: 1.5;"><br></div>
    <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: &nbsp;</em></strong><em>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em></span></span></span></span></span></span></div>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We use personal information collected via our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                          <bdt class="block-component"></bdt>Website<bdt class="block-component">
                        </bdt></span></span></span></span></span></span></span></span> for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.<bdt class="block-component"></bdt></span></span></span></div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We use the information we collect or receive:<bdt class="block-component"></bdt></span></span></span></div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To facilitate account creation and logon process.</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.<span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="block-component"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                              <bdt class="statement-end-if-in-editor"></bdt>
                                            </span></span></span></span></span></span></span></span></span></span></span></span></bdt>
                  </span></span></span></span></span></span></span></li>
  </ul>
  <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
          <bdt class="block-component"></bdt>
        </span></span></span></div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To post testimonials.</strong> We post testimonials on our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>Website<bdt class="block-component">
                          </bdt></span></span></span></span></span></span></span></span> that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at <span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                  <bdt class="block-component"></bdt>
                  <bdt class="question">support@xpressrun.com</bdt>
                  <bdt class="else-block"></bdt>
                </span></span></span> and be sure to include your name, testimonial location, and contact information.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                    <bdt class="statement-end-if-in-editor"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li>
  </ul>
  <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
          <bdt class="block-component"></bdt>
        </span></span></span></div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Request feedback.&nbsp;</strong>We may use your information to request feedback and to contact you about your use of our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>Website<bdt class="block-component">
                          </bdt></span></span></span></span></span></span></span></span><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                <bdt class="statement-end-if-in-editor"></bdt>
                                              </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li>
  </ul>
  <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
          <bdt class="block-component"></bdt>
        </span></span></span></div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To enable user-to-user communications.</strong> We may use your information in order to enable user-to-user communications with each user's consent.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                              <bdt class="statement-end-if-in-editor"></bdt>
                            </span></span></span></span></span></span></span></span></span></span></span></span></li>
  </ul>
  <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
          <bdt class="block-component"></bdt>
        </span></span></span></div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To manage user accounts.&nbsp;</strong>We may use your information for the purposes of managing our account and keeping it in working order.<bdt class="statement-end-if-in-editor"></bdt></span></span></span></li>
  </ul>
  <div>
    <bdt class="block-component"></bdt>
  </div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To send administrative information to you.&nbsp;</strong>We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                  <bdt class="statement-end-if-in-editor"></bdt>
                </span></span></span></span></span></span></li>
  </ul>
  <div>
    <bdt class="block-component"></bdt>
  </div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To protect our Services.&nbsp;</strong>We may use your information as part of our efforts to keep our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>Website<bdt class="block-component">
                          </bdt></span></span></span></span></span></span></span></span> safe and secure (for example, for fraud monitoring and prevention).<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                        <bdt class="statement-end-if-in-editor"></bdt>
                      </span></span></span></span></span></span></span></span></span></li>
  </ul>
  <div>
    <bdt class="block-component"></bdt>
  </div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                <bdt class="statement-end-if-in-editor"></bdt>
                              </span></span></span></span></span></span></span></span></span></strong></span></span></span></li>
  </ul>
  <div>
    <bdt class="block-component"></bdt>
  </div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To respond to legal requests and prevent harm.&nbsp;</strong>If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.<span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></span></span></span></li>
  </ul>
  <p style="font-size: 15px;">
    <bdt class="block-component"></bdt>
  </p>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Fulfill and manage your orders.&nbsp;</strong>We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                              <bdt class="block-component"></bdt>Website<bdt class="block-component">
                            </bdt></span></span></span></span></span></span></span></span><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="statement-end-if-in-editor">.</bdt>
                        </span></span></span></span></span></span><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></span></span></span></li>
  </ul>
  <p style="font-size: 15px;">
    <bdt class="block-component"></bdt>
  </p>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Administer prize draws and competitions.</strong> We may use your information to administer prize draws and competitions when you elect to participate in our competitions.<span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></span></span></span></li>
  </ul>
  <p style="font-size: 15px;">
    <bdt class="block-component"></bdt>
  </p>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To deliver and facilitate delivery of services to the user.</strong> We may use your information to provide you with the requested service.<span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></span></span></span></li>
  </ul>
  <p style="font-size: 15px;">
    <bdt class="block-component"></bdt>
  </p>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.<span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></span></span></span></li>
  </ul>
  <div>
    <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
  </div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To send you marketing and promotional communications.</strong> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>Website<bdt class="block-component">
                          </bdt></span></span></span></span></span></span></span></span>, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the "<a data-custom-class="link" href="#privacyrights"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">WHAT ARE YOUR PRIVACY RIGHTS?</span></span></a>" below).<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                              <bdt class="statement-end-if-in-editor"></bdt>
                            </span></span></span></span></span></span></span></span></span></span></span></span></li>
  </ul>
  <div>
    <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
  </div>
  <ul>
    <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Deliver targeted advertising to you.</strong></span><span data-custom-class="body_text">&nbsp;We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.<span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                <bdt class="block-component"></bdt>
              </span></span>
            <bdt class="statement-end-if-in-editor"></bdt>
          </span></span></span></li>
  </ul>
  <div>
    <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
    
    <div><span style="font-size: 15px;">
        <bdt class="block-component"></bdt>
      </span>
      <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt>
    </div>
    <div style="line-height: 1.5;"><br></div>
    <div id="infoshare" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</span></strong></span></span></span></span></span></div>
    <div style="line-height: 1.5;"><br></div>
    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em>&nbsp; We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</em></span></span></span></div>
    <div style="line-height: 1.5;"><br></div>
    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may process or share your data that we hold based on the following legal basis:<bdt class="block-component"></bdt></span></span></span></div>
    <ul>
      <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="statement-end-if-in-editor"></bdt>
                  </span></span></span></span></span></span></li>
    </ul>
    <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                  <bdt class="statement-end-if-in-editor"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="block-component"></bdt>
                        </span></span></span></bdt>
                </span></span></span></span></span></span></div>
    <ul>
      <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="statement-end-if-in-editor"></bdt>
                        </span></span></span></span></span></span></span></span></span></li>
    </ul>
    <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                  <bdt class="block-component"></bdt>
                </span></span></span></span></span></span></div>
    <ul>
      <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="statement-end-if-in-editor"></bdt>
                        </span></span></span></span></span></span></span></span></span></li>
    </ul>
    <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                  <bdt class="block-component"></bdt>
                </span></span></span></span></span></span></div>
    <ul>
      <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="statement-end-if-in-editor"></bdt>
                        </span></span></span></span></span></span></span></span></span></li>
    </ul>
    <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                  <bdt class="block-component"></bdt>
                </span></span></span></span></span></span></div>
    <ul>
      <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="statement-end-if-in-editor"></bdt>
                        </span></span></span></span></span></span></span></span></span></li>
    </ul>
    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">More specifically, we may need to process your data or share your personal information in the following situations:</span></span></span></div>
    <ul>
      <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></span></span></li>
    </ul>
    <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                  <bdt class="block-component"></bdt>
                </span></span></span></span></span></span></div>
    <ul>
      <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Place API).&nbsp;</span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">To find out more about Google’s Privacy Policy, please refer to this<span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);">&nbsp;</span><span style="color: rgb(48, 48, 241);"><a data-custom-class="link" href="https://policies.google.com/privacy" target="_blank">link</a></span></span></span>.<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>
                  </span></span></span><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                    <bdt class="block-component"></bdt>
                  </span></span></span><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                    <bdt class="block-component"></bdt>
                  </span></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="statement-end-if-in-editor"></bdt>
                        </span></span></span></span></span></span></span></span></span></li>
    </ul>
    <div><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>
          </span></span></span>
      
      <div><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
              <bdt class="block-component"></bdt>
            </span></span></span>
        
        <div><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>
                  </span></span></span></span></span></div>
        <ul>
          <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></li>
        </ul>
        <div><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                <bdt class="block-component"></bdt>
              </span></span></span></div>
        <ul>
          <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Business Partners.&nbsp;</strong>We may share your information with our business partners to offer you certain products, services or promotions.</span></span></span><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                      <bdt class="statement-end-if-in-editor"></bdt>
                    </span></span></span></span></span></li>
        </ul>
        <div><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                <bdt class="block-component"></bdt>
              </span></span></span>
          
          <div><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>
                  </span></span></span></span>
            
            <div style="line-height: 1.5;"><span style="color: rgb(89, 89, 89);">
                <bdt class="block-component"></bdt>
              </span></div>
            <div><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                        <bdt class="block-component"><span data-custom-class="heading_1"></span></bdt>
                      </span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div id="cookies" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></strong></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>&nbsp;We may use cookies and other tracking technologies to collect and store your information.</em></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice<span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>.
                      </span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                  <bdt class="statement-end-if-in-editor"></bdt>
                                </span></span></span></span></span></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span>
                                  <bdt class="block-component"><span data-custom-class="body_text">
                                      <bdt class="block-component"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                            <bdt class="block-component">
                                                          </bdt></span></span></span></span></span></span></span></span></span></span></bdt>
                                    </span>
                                </bdt></span></span></span></span></span></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div id="inforetain" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">5. HOW LONG DO WE KEEP YOUR INFORMATION?</span></strong></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>&nbsp;We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than <span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="block-component"></bdt>
                        </span></span></span>
                    <bdt class="block-component"></bdt>the period of time in which users have an account with us<bdt class="block-component"></bdt><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="else-block"></bdt>
                        </span></span></span>.
                  </span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.<span style="color: rgb(89, 89, 89);">
                      <bdt class="block-component"></bdt>
                    </span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div id="infosafe" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></strong></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>&nbsp;We aim to protect your personal information through a system of organizational and technical security measures.</em></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>Website<bdt class="block-component">
                                  </bdt></span></span></span></span></span></span></span></span> is at your own risk. You should only access the <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>Website<bdt class="block-component">
                                  </bdt></span></span></span></span></span></span></span></span> within a secure environment.<span style="color: rgb(89, 89, 89);">
                      <bdt class="statement-end-if-in-editor"></bdt>
                    </span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div id="privacyrights" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">7. WHAT ARE YOUR PRIVACY RIGHTS?</span></strong></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em>&nbsp; <span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><em>
                              <bdt class="block-component"></bdt>
                            </em></span></span></span>You may review, change, or terminate your account at any time.</em><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">&nbsp;</span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(48, 48, 241);"><span data-custom-class="body_text"><a data-custom-class="link" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank"><span style="font-size: 15px;">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</span></a></span></span></span></span></span>.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you are a resident in Switzerland, the contact details for the data protection authorities are available here: <span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(48, 48, 241);"><span data-custom-class="body_text"><span style="font-size: 15px;"><a data-custom-class="link" href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">https://www.edoeb.admin.ch/edoeb/en/home.html</a></span></span></span></span></span></span>.<bdt class="block-component"></bdt>
                    <bdt class="block-component"></bdt>
                  </span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you have questions or comments about your privacy rights, you may email us at <span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="question">support@xpressrun.com</bdt>
                        </span></span></span>.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
                                    <bdt class="statement-end-if-in-editor"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span data-custom-class="heading_2" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong>Account Information</strong></span></span></div>
            <div>
              <div><br></div>
              <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you would at any time like to review or change the information in your account or terminate your account, you can:<bdt class="forloop-component"></bdt></span></span></span></span></span></span></div>
              <ul>
                <li style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                              <bdt class="question">Contact us using the contact information provided.</bdt>
                            </span></span></span></span></span></span></li>
              </ul>
              <div><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="forloop-component"></bdt>
                          </span></span></span></span></span></span></div>
              <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                                    <bdt class="statement-end-if-in-editor"></bdt>
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></div>
            </div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>Website<bdt class="block-component">
                                  </bdt></span></span></span></span></span></span></span></span>. To opt-out of interest-based advertising by advertisers on our <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>Website<bdt class="block-component">
                                  </bdt></span></span></span></span></span></span></span></span> visit <span style="color: rgb(48, 48, 241);"><span data-custom-class="body_text"><a data-custom-class="link" href="http://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank"><span style="font-size: 15px;">http://www.aboutads.info/choices/</span></a></span></span>. <span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="block-component"></bdt><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                                      <bdt class="statement-end-if-in-editor"></bdt>
                                    </span></span></span></span></span></span>
                        </span><span data-custom-class="body_text">
                          <bdt class="block-component"></bdt>
                        </span></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><u>Opting out of email marketing:</u></strong> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:<span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                          <bdt class="forloop-component"></bdt>
                        </span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;">
                <bdt class="question"><span data-custom-class="body_text">Contact us using the contact information provided.</span></bdt>
              </li>
            </ul>
            <div>
              <bdt class="forloop-component"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="font-size: 15px;">
                                <bdt class="statement-end-if-in-editor"></bdt>
                              </span></span></span></span></span></span></span></span></bdt>
            </div>
            <div style="line-height: 1.5;"><br></div>
            <div id="DNT" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">8. CONTROLS FOR DO-NOT-TRACK FEATURES</span></strong></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</span></span>&nbsp;</span></div>
            <div style="line-height: 1.5;"><br></div>
            <div id="caresidents" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></strong></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>&nbsp;Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you are under 18 years of age, reside in California, and have a registered account with <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>the Website<bdt class="block-component">
                                  </bdt></span></span></span></span></span></span></span></span>, you have the right to request removal of unwanted data that you publicly post on the <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>Website<bdt class="block-component">
                                  </bdt></span></span></span></span></span></span></span></span>. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>Website<bdt class="block-component">
                                  </bdt></span></span></span></span></span></span></span></span>, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).<span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span data-custom-class="heading_2" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong>CCPA Privacy Notice</strong></span></span></div>
            <div>
              <div><br></div>
              <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">The California Code of Regulations defines a "resident" as:</span></span></span></span></span></span></div>
            </div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5; margin-left: 20px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">(1) every individual who is in the State of California for other than a temporary or transitory purpose and</span></span></span></div>
            <div style="line-height: 1.5; margin-left: 20px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">All other individuals are defined as "non-residents."</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>What categories of personal information do we collect?</strong></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We have collected the following categories of personal information in the past twelve (12) months:<span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <table style="width: 100%;">
              <tbody>
                <tr>
                  <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Category</strong></span></span></span></td>
                  <td style="width: 51.4385%; border-top: 1px solid black; border-right: 1px solid black;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Examples</strong></span></span></span></td>
                  <td style="width: 14.9084%; border-right: 1px solid black; border-top: 1px solid black; text-align: center;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Collected</strong></span></span></span></td>
                </tr>
                <tr>
                  <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">A. Identifiers</span></span></span></div>
                  </td>
                  <td style="width: 51.4385%; border-top: 1px solid black; border-right: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name</span></span></span></div>
                  </td>
                  <td style="width: 14.9084%; text-align: center; vertical-align: middle; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><br></div>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></div>
                    <div style="line-height: 1.5;"><br></div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">B. Personal information categories listed in the California Customer Records statute</span></span></span></div>
                  </td>
                  <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Name, contact information, education, employment, employment history and financial information</span></span></span></div>
                  </td>
                  <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><br></div>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">YES</span></span></span></div>
                    <div style="line-height: 1.5;"><br></div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">C. Protected classification characteristics under California or federal law</span></span></span></div>
                  </td>
                  <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Gender and date of birth</span></span></span></div>
                  </td>
                  <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><br></div>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></div>
                    <div style="line-height: 1.5;"><br></div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">D. Commercial information</span></span></span></div>
                  </td>
                  <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Transaction information, purchase history, financial details and payment information</span></span></span></div>
                  </td>
                  <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><br></div>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></div>
                    <div style="line-height: 1.5;"><br></div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">E. Biometric information</span></span></span></div>
                  </td>
                  <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Fingerprints and voiceprints</span></span></span></div>
                  </td>
                  <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><br></div>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></div>
                    <div style="line-height: 1.5;"><br></div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">F. Internet or other similar network activity</span></span></span></div>
                  </td>
                  <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements</span></span></span></div>
                  </td>
                  <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><br></div>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></div>
                    <div style="line-height: 1.5;"><br></div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">G. Geolocation data</span></span></span></div>
                  </td>
                  <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Device location</span></span></span></div>
                  </td>
                  <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><br></div>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></div>
                    <div style="line-height: 1.5;"><br></div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">H. Audio, electronic, visual, thermal, olfactory, or similar information</span></span></span></div>
                  </td>
                  <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Images and audio, video or call recordings created in connection with our business activities</span></span></span></div>
                  </td>
                  <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><br></div>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></div>
                    <div style="line-height: 1.5;"><br></div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">I. Professional or employment-related information</span></span></span></div>
                  </td>
                  <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us</span></span></span></div>
                  </td>
                  <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                    <div style="line-height: 1.5;"><br></div>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></div>
                    <div style="line-height: 1.5;"><br></div>
                  </td>
                </tr>
                <tr>
                  <td style="border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black; width: 33.8274%;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">J. Education Information</span></span></span></div>
                  </td>
                  <td style="border-right: 1px solid black; border-top: 1px solid black; width: 51.4385%;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Student records and directory information</span></span></span></div>
                  </td>
                  <td style="text-align: center; border-right: 1px solid black; border-top: 1px solid black; width: 14.9084%;">
                    <div style="line-height: 1.5;"><br></div>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></div>
                    <div style="line-height: 1.5;"><br></div>
                  </td>
                </tr>
                <tr>
                  <td style="border-width: 1px; border-color: black; border-style: solid; width: 33.8274%;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">K. Inferences drawn from other personal information</span></span></span></div>
                  </td>
                  <td style="border-bottom: 1px solid black; border-top: 1px solid black; border-right: 1px solid black; width: 51.4385%;">
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</span></span></span></div>
                  </td>
                  <td style="text-align: center; border-right: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black; width: 14.9084%;">
                    <div style="line-height: 1.5;"><br></div>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
                          </span></span></span></div>
                    <div style="line-height: 1.5;"><br></div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style="line-height: 1.5;">
              <bdt class="block-component"></bdt>
            </div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                              <bdt class="block-component"></bdt>
                            </span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Receiving help through our customer support channels;</span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                          <bdt class="statement-end-if-in-editor"></bdt>
                                        </span></span></span></span></span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                              <bdt class="block-component"></bdt>
                            </span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Participation in customer surveys or contests; and</span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                          <bdt class="statement-end-if-in-editor"></bdt>
                                        </span></span></span></span></span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                              <bdt class="block-component"></bdt>
                            </span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Facilitation in the delivery of our Services and to respond to your inquiries.</span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                          <bdt class="statement-end-if-in-editor"></bdt>
                                        </span></span></span></span></span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>How do we use and share your personal information?</strong></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">More information about our data collection and sharing practices can be found in this privacy notice</span></span></span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                      <bdt class="block-component"></bdt>
                    </span></span></span></span>.<span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                      <bdt class="block-component"></bdt>
                    </span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">You may contact us <span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>by email at <bdt class="question">support@xpressrun.com</bdt>, <bdt class="statement-end-if-in-editor"></bdt>
                        <bdt class="block-component"></bdt>
                      </span><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>
                        <bdt class="block-component"><span data-custom-class="body_text"></span></bdt>
                      </span></span></span></span></span><span data-custom-class="body_text">or by referring to the contact details at the bottom of this document.</span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Will your information be shared with anyone else?</strong></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal data.<span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="question">XpressRun, Inc.</bdt>
                  </span><span data-custom-class="body_text">&nbsp;has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding 12 months. <span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                          <bdt class="question">XpressRun, Inc.</bdt>
                        </span></span></span> will not sell personal information in the future belonging to website visitors, users and other consumers.<span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                <bdt class="statement-end-if-in-editor"></bdt>
                              </span></span></span></span>
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                  <bdt class="block-component"></bdt>
                </span></span><span data-custom-class="body_text">
                <bdt class="block-component"><span style="color: rgb(0, 0, 0);"><span data-custom-class="body_text">
                      <bdt class="block-component"></bdt>
                    </span></span>
              </bdt></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Your rights with respect to your personal data</strong></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><u>Right to request deletion of the data - Request to delete</u></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><u>Right to be informed - Request to know</u></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Depending on the circumstances, you have a right to know:<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">whether we collect and use your personal information;<span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                  <bdt class="statement-end-if-in-editor"></bdt>
                                </span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">the categories of personal information that we collect;<span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                  <bdt class="statement-end-if-in-editor"></bdt>
                                </span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">the purposes for which the collected personal information is used;<span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                  <bdt class="statement-end-if-in-editor"></bdt>
                                </span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">whether we sell your personal information to third parties;<span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                  <bdt class="statement-end-if-in-editor"></bdt>
                                </span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">the categories of personal information that we sold or disclosed for a business purpose;<span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                  <bdt class="statement-end-if-in-editor"></bdt>
                                </span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and<span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                  <bdt class="statement-end-if-in-editor"></bdt>
                                </span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">the business or commercial purpose for collecting or selling personal information.<span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                  <bdt class="statement-end-if-in-editor"></bdt>
                                </span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will not discriminate against you if you exercise your privacy rights.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><u>Verification process</u></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. If, however, we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity, and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><u>Other privacy rights</u></span></span></span></div>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">you may object to the processing of your personal data.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                        <bdt class="statement-end-if-in-editor"></bdt>
                                      </span></span></span></span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">you may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                        <bdt class="statement-end-if-in-editor"></bdt>
                                      </span></span></span></span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                        <bdt class="statement-end-if-in-editor"></bdt>
                                      </span></span></span></span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                    <bdt class="block-component"></bdt>
                                  </span></span></span></span></span></span></span></span></span></span></span></div>
            <ul>
              <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">you may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                        <bdt class="statement-end-if-in-editor"></bdt>
                                      </span></span></span></span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">To exercise these rights, you can contact us&nbsp;</span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                          <bdt class="block-component"></bdt>by email at <bdt class="question">support@xpressrun.com</bdt>, <bdt class="statement-end-if-in-editor"></bdt>
                          <bdt class="block-component"></bdt>
                        </span><span data-custom-class="body_text">
                          <bdt class="block-component"></bdt>
                          <bdt class="block-component"><span data-custom-class="body_text"></span></bdt>
                        </span></span></span></span></span></span><span data-custom-class="body_text">or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                  <bdt class="block-component"> &nbsp;<bdt class="block-component"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                          <bdt class="statement-end-if-in-editor">
                                            <bdt class="statement-end-if-in-editor"></bdt>
                                          </bdt>
                                        </span></span></span></span></span></span></span></span></span></span>
                </bdt></bdt></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div id="policyupdates" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">10. DO WE MAKE UPDATES TO THIS NOTICE?</span></strong>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em><strong>In Short:&nbsp;</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div id="contact" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></strong>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you have questions or comments about this notice, you may <span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>email us at <bdt class="question">support@xpressrun.com</bdt>
                        <bdt class="statement-end-if-in-editor"></bdt>
                      </span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">&nbsp;or by post to:</span></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                            <bdt class="question">XpressRun, Inc.</bdt>
                          </span></span></span></span></span><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                        <bdt class="block-component"></bdt>
                      </span></span></span></span></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">
                  <bdt class="question">__________</bdt><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
                      <bdt class="block-component"></bdt>
                    </span></span>
                </span></span></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">
                  <bdt class="question">__________</bdt><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
                      <bdt class="block-component"></bdt>
                      <bdt class="block-component"></bdt>
                    </span><span style="font-size: 15px;">
                      <bdt class="block-component"></bdt>
                      <bdt class="block-component"></bdt>
                      <bdt class="block-component"></bdt>
                    </span></span>
                </span></span></div>
            <div style="line-height: 1.5;"><span data-custom-class="body_text" style="font-size: 15px;">
                <bdt class="question">United States<span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
                                    <bdt class="statement-end-if-in-editor"></bdt>
                                  </span></span></span></span></span></span>
                        <bdt class="else-block"></bdt>
                      </span></span></span></bdt>
                <bdt class="statement-end-if-in-editor"></bdt>
              </span><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
                    <bdt class="statement-end-if-in-editor"></bdt>
                  </span></span></span><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);">
                        <bdt class="statement-end-if-in-editor"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                <bdt class="block-component">
                                  <bdt class="block-component"></bdt>
                              </bdt></span></span></span>
                      </bdt></span></span></span><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span data-custom-class="body_text">
                            <bdt class="statement-end-if-in-editor">
                              <bdt class="block-component"></bdt>
                          </bdt></span></span></span></span></span></span></span></div>
            <div style="line-height: 1.5;"><br></div>
            <div id="request" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></strong>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span></div>
            <div style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please <bdt class="block-component"></bdt></span><span data-custom-class="body_text">visit: <bdt class="question"><a href="http://www.xpressrun.com/contact" target="_blank" data-custom-class="link">http://www.xpressrun.com/contact</a></bdt>
                    <bdt class="else-block"></bdt>
                  </span></span><span data-custom-class="body_text">.</span></span></div>
          </div>
          <div style="color: #595959;font-size: 14px;font-family: Arial;padding-top:16px;">
            <a style="color: rgb(48, 48, 241) !important;" href="https://termly.io/products/privacy-policy-generator">Privacy Policy Generator</a>.
          </div>

<script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>
<script src="https://cdpn.io/cp/internal/boomboom/pen.js?key=pen.js-91d834b9-7e60-69f3-f629-2e42a314aa3a" crossorigin=""></script>


</div></div></div></div></div></bdt></div></bdt></div></bdt></div></div></body>
`

function Policy(){
    return(
       <div style={{padding:"20px 40px"}}>
         <Head>
        <title>Xpressrun Privacy notice</title>
        <meta
          name="description"
          content=""
        />
      </Head>
            <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
       </div>
    )
}

export default Policy;