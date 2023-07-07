import React from "react";
import Header from "components/SearchBar/Header";
import { Col, Row } from "react-bootstrap";

import "./PrivacyPolicy.css";
import Footer from "components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />

      <Row
        style={{
          marginLeft: "50px",
          marginRight: "50px",
          paddingBottom: "40px",
        }}
      >
        <Col>
          <div className="privacy_policy_title">Privacy Policy</div>
          <p className="privacy_policy_heading">
            We mandate our privacy to be acknowledged and respected equally for
            both consumer and the brand. We as Colston Bath & Spa Pvt. Ltd.
            (Herein after referred as “Colston”)
          </p>
          <p className="privacy_policy_content">
            Colston abides the privacy of each individual who views our website.
            Colston is strict to the privacy concerns of their website viewers
            and take care of the information shared by you is fully secure
            prohibiting the misuses. The above shared statement brief you about
            the information received by Colston, hence the methods for using
            one’s personal information.
          </p>

          <p className="privacy_policy_heading">
            How the personal information is collected…!
          </p>

          <p className="privacy_policy_content">
            If somebody slides in to the website, we may not ask for any of the
            personal identity that could be any of the document such as name,
            address, contact number, email or any identity proof. Since there is
            the provision for voluntary submission on few tabs that has forms
            integrated within, which seeks personal information to get the call
            back arranged or resolving the complaints and queries. Besides this
            it also acknowledges that one who doesn’t fill ups the forms or
            don’t share the personal information may loses the chance of
            involvement in certain programs or era’s initiated by Colston.
          </p>

          <p className="privacy_policy_heading">
            How we use the information collected…!
          </p>

          <p className="privacy_policy_content">
            Colston may feed or process your personal information submitted by
            you to rectify your needs for better use and responses. On the basis
            of information submitted by you also helps the brand to be concerned
            for improvisation of products and service rendered by Colston. It
            helps the brand to reachout for updates of promotions or campaigns
            or any sort of marketing activity that can be beneficial to you,
            responding to any query or comment is also initiated on the basis of
            gathered information only. We commit that Colston shall not pass any
            personal information, identity or documents to any agency or third
            party organisation without your consent. The data shared with us may
            get circulated within the teams of Colston for their use and to
            provide suitable assistance.
          </p>

          <p className="privacy_policy_heading">
            How your data is secured……..!!
          </p>

          <p className="privacy_policy_content">
            Colston shall take the whole sole responsibility and necessary
            precautions on the technical grounds to avoid any sort of loss in
            data gathered and make sure it gets processed safely in a decent
            manner. Colston teams who are connected to the process of data
            assessment or utilisation have sensible control over the services
            provided. Hence, we ensure that any of the resident source of
            Colston doesn’t perform any illegal activity related to data
            received apart from this they are directed to render the require
            service to the seeker only. We all are prohibited to share or use
            the data outside Colston terms and services as it is highly
            confidential to the brand. At any point Colston is doesn’t hold any
            sort of liability to the individual who has uploaded personal
            information over the website i.e.{" "}
            <span className="privacy-policy-content-hover">
              <Link to="https://www.colstonconcepts.com/" target="_blank">
                www.colstonconcepts.com&nbsp;
              </Link>
            </span>
            and gets misused by somebody else and its defined not to be our
            fault or negligence.
          </p>

          <p className="privacy_policy_heading">
            Fetching of non-personal identity information
          </p>

          <p className="privacy_policy_content">
            The technology has an adverse effect as the data collection also
            includes the verticle for fetching the information that isn’t
            uploaded by the user, such as information about the internet browser
            type, computer operating system one is using, the domain from where
            you linked our website or operating through.
          </p>
          <p className="privacy_policy_heading">Cross border data transfers</p>

          <p className="privacy_policy_content">
            The brand has an extensive approach to its way of technical usage,
            any information uploaded by any individual over the internet has
            higher probability of getting circulated across the globe. One
            agrees for cross border data transfers of their information
            submitted. Apart from this, we hereby disclose that brand may take
            necessary actions in its favour if it is meant to be done on the
            legal grounds such as finding any connections with legal proceedings
            or in establishing, exercising or to defend legal rights of the
            brand.
          </p>

          <p className="privacy_policy_heading">External websites</p>

          <p className="privacy_policy_content">
            The website has embedded with various links to external websites
            such as e commerce and social media (Facebook, Instagram, LinkedIn
            and YouTube) we are not responsible for any privacy policy, T&C of
            any third party website.
          </p>

          <ul style={{ listStyleType: "none" }}>
            <li className="privacy_policy_content">
              ➢ Data fetched by third party websites, platforms or applications
              are not under our control.
            </li>
            <li className="privacy_policy_content">
              ➢ We do not ensure the right usage or any discretion due to
              promotional resources over third party website in form of Banners,
              sweepstakes and other advertisements that we may sponsor.
            </li>
            <li className="privacy_policy_content">
              ➢ Every individual is responsible for their information shared to
              any site or link as each site holds its own privacy terms.
            </li>
          </ul>

          <p className="privacy_policy_heading">Cookies Fetched</p>

          <p className="privacy_policy_content">
            Colston may also fetch the information to track user behaviour and
            preferences for internal analysis from every user of the website.
            This information is collected via server logging and tracking
            technologies to analyse that information may include we beacons and
            cookies. Here every individual understands, agree and acknowledge
            that the collection and processing of one’e personal data is for
            lawful purposes, hence supports the website to be more efficient for
            you.
          </p>
          <p className="privacy_policy_heading">Information deletion </p>

          <p className="privacy_policy_content">
            In case any individual is willing to get his/her information
            provided to be deleted, one can get it processed by mailing the
            request at below mentioned credentials but one must keep this in
            mind that deletion of any information may lead to the cancellation
            of registration and access to the website.
          </p>
          <p className="privacy_policy_heading">Contact us</p>

          <p className="privacy_policy_content">
            Please drop the mail at{" "}
            <span>
              <Link to="mailto: abc@example.com" target="_blank">
                <span className="privacy-policy-content-hover">
                  info@colstonconcepts.com&nbsp;
                </span>
              </Link>
            </span>
            for any updates or queries relevant to our privacy policy.
          </p>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
