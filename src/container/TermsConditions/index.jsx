import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import Footer from "components/Footer";
import { Col, Row } from "react-bootstrap";
const TermsAndConditions = () => {
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
          displayText={"Terms and Conditions"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: "0 3.125rem" }}>

        <Row
          style={{
            paddingBottom: "40px",
          }}
        >
          <Col>
            <div className="privacy_policy_heading pb-2">
              Terms and Conditions
            </div>
            <p className="privacy_policy_content">
              Welcome to Colston Concepts (the "Website"). By accessing and
              using this Website, you agree to the following terms and
              conditions:
            </p>

            <p className="privacy_policy_heading">Use of the Website</p>
            <p className="privacy_policy_content">
              <div>
                <p>
                  You may use this Website for personal and non-commercial
                  purposes. You agree not to use this Website for any unlawful
                  or prohibited activities.
                </p>
              </div>
            </p>
            <p className="privacy_policy_heading">Product Information </p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                The product descriptions, images, and specifications provided on
                this Website are for informational purposes only. While we
                strive to provide accurate and up-to-date information, we do not
                guarantee the accuracy, completeness, or reliability of any
                content.
              </div>
            </p>

            <p className="privacy_policy_heading">Ordering and Pricing</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                By placing an order on this Website, you agree to pay the
                specified price for the selected products or services. Pricing
                and availability are subject to change without notice.
              </div>{" "}
            </p>

            <p className="privacy_policy_heading">Payment and Security</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                We use secure payment processing methods to protect your
                financial information. However, we are not responsible for any
                unauthorized access or breaches that may occur.
              </div>
            </p>

            <p className="privacy_policy_heading">Shipping and Returns</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                Shipping and return policies are outlined in detail on our
                Shipping and Returns page. Please review this information before
                making a purchase.
              </div>
            </p>

            <p className="privacy_policy_heading">Intellectual Property</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                All content on this Website, including text, images, logos, and
                trademarks, is the property of Colston Concepts and is protected
                by intellectual property laws. Unauthorized use of this content
                is prohibited.
              </div>
            </p>

            <p className="privacy_policy_heading">Privacy Policy</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                Our Privacy Policy governs the collection and use of your
                personal information. By using this Website, you consent to the
                practices outlined in the Privacy Policy.
              </div>
            </p>

            <p className="privacy_policy_heading">Limitation of Liability</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                Colston Concepts and its affiliates shall not be liable for any
                direct, indirect, incidental, consequential, or punitive damages
                arising from the use of this Website.
              </div>
            </p>

            <p className="privacy_policy_heading">Changes to Terms</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                We reserve the right to modify, amend, or update these terms and
                conditions at any time. Please check this page periodically for
                changes. Your continued use of the Website after changes are
                posted constitutes your acceptance of the modified terms.
              </div>
            </p>

            <p className="privacy_policy_heading">Contact Information</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                If you have any questions or concerns regarding these terms and
                conditions, please contact us at info@colstonconcepts.com.
              </div>
            </p>
          </Col>
        </Row>
      </Grid>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
