import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import Footer from "components/Footer";
import { Col, Row } from "react-bootstrap";
const CookiesPolicy = () => {
  const responsiveMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: !responsiveMobile ? "1.8rem" : "1rem",
          paddingBottom: !responsiveMobile ? "1.8rem" : "1rem",
        }}
      >
        <FMTypography
          displayText={"Cookies Policy"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: "0 3.125rem" }}>
        <div
          style={{
            borderRadius: "20px",
          }}
        >
          <img
            src=""
            style={{
              width: "100%",
              height: !responsiveMobile ? "650px" : "62vw",
              borderRadius: "35px",
            }}
          />
        </div>

        <Row
          style={{
            paddingBottom: "40px",
          }}
        >
          <Col>
            <div className="privacy_policy_heading pt-5 pb-2">Cookies Policy</div>
            <p className="privacy_policy_content">
              This Cookies Policy explains how Colston Concepts ("we," "us," or
              "our") uses cookies and similar tracking technologies on our
              website.
            </p>

            <p className="privacy_policy_heading">What Are Cookies?</p>
            <p className="privacy_policy_content">
              <div>
                <p>
                  Cookies are small text files that are stored on your device
                  when you visit a website. They help us improve your experience
                  on our site by providing valuable information about how you
                  interact with it.
                </p>
              </div>
            </p>

            <p className="privacy_policy_heading">Types of Cookies We Use</p>
            <p className="privacy_policy_content">
              <div>
                <p>
                  <strong>Essential Cookies:</strong> These cookies are
                  necessary for the functioning of our website and cannot be
                  disabled in our systems. They are usually set in response to
                  actions you take, such as setting your privacy preferences,
                  logging in, or filling out forms.{" "}
                </p>
                <p>
                  <strong>Analytical/Performance Cookies:</strong> These cookies
                  allow us to track and analyze user behavior on our website.
                  They help us understand how visitors use our site, which pages
                  are most popular, and if they encounter any errors. The
                  information collected is used to improve our website's
                  performance and user experience.
                </p>
                <p>
                  <strong>Functionality Cookies:</strong> These cookies enhance
                  the functionality of our website. They may remember choices
                  you make, such as language preferences or region, and provide
                  a more personalized experience.
                </p>
              </div>
            </p>

            <p className="privacy_policy_heading">How to Manage Cookies</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                Most web browsers allow you to control cookies through their
                settings. You can typically accept, reject, or delete cookies.
                However, disabling certain cookies may affect the functionality
                and user experience of our website.
              </div>{" "}
            </p>

            <p className="privacy_policy_heading">Third-Party Cookies</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                We may use third-party services, such as Google Analytics, that
                may also set cookies on your device. These cookies are used to
                collect information about your interactions with our website and
                other websites you visit. We do not have control over these
                third-party cookies, and their use is governed by the privacy
                policies of the respective providers.
              </div>
            </p>

            <p className="privacy_policy_heading">Updates to this Policy</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                We may update this Cookies Policy to reflect changes in our
                practices or for other operational, legal, or regulatory
                reasons. We encourage you to review this policy periodically for
                any updates.
              </div>
            </p>

            <p className="privacy_policy_heading">Contact Us</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                If you have any questions or concerns about our use of cookies
                or this Cookies Policy, please contact us at [Your Contact
                Email].
              </div>
            </p>
          </Col>
        </Row>
      </Grid>
      <Footer />
    </>
  );
};

export default CookiesPolicy;
