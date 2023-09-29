import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import Footer from "components/Footer";
import { Col, Row } from "react-bootstrap";
const AboutUs = () => {
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
          displayText={"Disclaimer"}
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
            <div className="privacy_policy_heading pb-2">Disclaimer</div>
            <p className="privacy_policy_content">
              Welcome to Colston Concepts (the "Website"). The information
              provided on this Website is for general informational purposes
              only. By accessing and using this Website, you agree to the
              following terms and conditions:
            </p>
          
            <p className="privacy_policy_heading">Accuracy of Information</p>
            <p className="privacy_policy_content">
              <div>
                <p>
                  The content on this Website is provided "as is" and is subject
                  to change without notice. While we make every effort to ensure
                  the accuracy and reliability of the information presented, we
                  do not guarantee or warrant the accuracy, completeness, or
                  reliability of any content.
                </p>
              </div>
            </p>
            <p className="privacy_policy_heading">Product Information </p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                The product descriptions, images, and specifications provided on
                this Website are for reference only. We make every effort to
                accurately represent our products, but actual product details
                may vary. It is your responsibility to verify product
                information before making a purchase.
              </div>
            </p>

            <p className="privacy_policy_heading">
              Links to Third-Party Websites{" "}
            </p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                This Website may contain links to third-party websites for your
                convenience. We do not endorse or control the content on these
                websites, and we are not responsible for their content, privacy
                policies, or practices. Use of third-party websites is at your
                own risk.
              </div>{" "}
            </p>

            <p className="privacy_policy_heading">Limitation of Liability</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                Colston Concepts and its affiliates shall not be liable for any
                direct, indirect, incidental, consequential, or punitive damages
                arising from the use or inability to use this Website, even if
                we have been advised of the possibility of such damages.
              </div>
            </p>

            <p className="privacy_policy_heading">Indemnification</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                You agree to indemnify and hold Colston Concepts harmless from
                any claims, losses, liabilities, and expenses (including legal
                fees) arising out of your use of this Website or any violation
                of these terms and conditions.
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
                If you have any questions or concerns regarding this disclaimer,
                please contact us at info@colstonconcepts.com.
              </div>
            </p>
          </Col>
        </Row>
      </Grid>
      <Footer />
    </>
  );
};

export default AboutUs;
