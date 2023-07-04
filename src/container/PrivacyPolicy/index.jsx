import React from "react";
import Header from "components/SearchBar/Header";
import { Col, Row } from "react-bootstrap";

import "./PrivacyPolicy.css";
import Footer from "components/Footer";

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
















          
          <p className="privacy_policy_content">
            Colston has derived from several departments and the nature of
            business. Introducing full - fledged sanitary ware & wellness
            segment adding their accessories as well. Cropping down to the short
            & convenient services for the public as well as officials. We have
            officials, We have segregated the company into different departments
            such as Higher Management i.e. Boards committee ( consisting senior
            decision makers of the company ), Human resources, R&D, Production &
            Dispatch, Sales, Marketing & Aftersales, These are the most
            comprehensive verticals of the company which plays a vital role and
            execute as an independent body.
          </p>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
