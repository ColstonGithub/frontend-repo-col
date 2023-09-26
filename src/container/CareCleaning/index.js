import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCareClean } from "Redux/Slices/CareClean/CareCleanSlice";
import { Col, Row } from "react-bootstrap";

const CareCleaning = () => {
  const dispatch = useDispatch();

  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  useEffect(() => {
    dispatch(getCareClean());
  }, [dispatch]);

  let careClean = useSelector(
    (state) => state.careClean.careClean.careCleanData
  );
  careClean = careClean ? careClean[0] : {};
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
          displayText={"Care and Cleaning"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: "0px 50px" }}>
        {/* product box below */}
        <div
          style={{
            borderRadius: "20px",
          }}
        >
          <img
            src={careClean?.bannerImage}
            style={{
              width: "100%",
              height: !responsiveMobile ? "650px" : "62vw",
              borderRadius: "20px",
            }}
            alt={careClean?.bannerImageAltText}
          />
        </div>

        <Box style={{ paddingTop: "1rem" }}>
          <Row
            style={{
              marginLeft: "50px",
              marginRight: "50px",
              paddingBottom: "40px",
            }}
          >
            <Col>
              <p className="privacy_policy_heading"></p>
              <p className="privacy_policy_content">
                <div className="pb-2">
                  Ensuring the best usage and durability of your product,
                  Proficient in escalating the technical issues that restricts
                  the free flow usage. Below are the precautions to be taken
                  care off, while using the colston’s commodity.
                </div>
              </p>

              <p className="privacy_policy_content">
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    ➢ Prior to using the cleaning solution we must ensure the
                    safe use of it by applying on desecrated area.
                  </li>
                  <li>
                    ➢ Immediately wipe off the surface after applying solution
                    to avoid further complications.
                  </li>
                  <li>
                    ➢ The proper cleaning shall incurred the measure that ask
                    you to rinse and dry the over sprayed area and shouldn’t be
                    allowed to get soaked by the cleaner.
                  </li>
                  <li>
                    ➢ Prohibit the use of coarse stuff to clear the surface such
                    as brush or scouring pad. Initiate cleaning through a
                    dampened sponge or a soft cloth.
                  </li>
                </ul>
              </p>

              <p className="privacy_policy_heading">Fittings & Faucets</p>
              <p className="privacy_policy_content">
                <div className="pb-2">
                  Chrome & Vibrant PVD Colours and Finishes
                </div>
                <div className="pb-2">
                  Restricting the usage of cleaners that consist the ratios of
                  bleach, acid or ammonia. The oil rubbed bronze finishes are
                  supposed to be vanished by genuine surface or glass cleaners
                  along with the dedicated rinsing and wiping through soft cloth
                  after each use.
                </div>
              </p>

              <p className="privacy_policy_heading">Whirlpools & Baths </p>
              <p className="privacy_policy_content">
                <div className="pb-2">
                  Sponging through chemical polishes, scrubs, thinners or any
                  other cleansing material can either destroy the life or cause
                  damages to your product. Please ensure the safe use of
                  cleaners in case of stains occurrence. Soft nylon brush can be
                  an advantage in cleaning of safeguard surface i.e. bottom of
                  the bath. Restrict the use of wire brushes or steel wool or
                  abrasive pads of sponge stuff.
                </div>
              </p>

              <p className="privacy_policy_heading">Acrylic</p>
              <p className="privacy_policy_content">
                <div className="pb-2">
                  Acrylics are the most sensitive component that attracts the
                  stains and scratched so rapidly. So the safety measures in
                  mind one must use soft fibre cloth commencing with the dry
                  wiping following normal cleaning through sprinkling of water
                  that doesn’t extends the TDS above 150. Aerosol products can
                  be harmful for bath surfaces.
                </div>{" "}
              </p>

              <p className="privacy_policy_heading">CERAMIC MATERIAL</p>
              <p className="privacy_policy_content">
                <div className="pb-2">
                  Soft abrasive cleaners are recommended to clean COLSTON’s
                  ceramic ranges. Using abrasive cleaners will provoke scratches
                  and lead it to dull surfaces. Suggesting the usage of toilet
                  bowl cleaners only for inner surfaces, prohibiting the same in
                  tank as it can desecrate the tank valve or may affect other
                  working parts. Wiping the chemical splashes from plastic or
                  plated surface immediately.
                </div>{" "}
              </p>

              <p className="privacy_policy_heading">Care Tip</p>

              <p className="privacy_policy_content">
                As the time passes clogging of toilet rim holes and trap ways
                may occur due to hard water deposits. Processing the cleaning is
                to be initiated by commercial cleaners that are recommended and
                proficient for the same. Kindly follow the instructions or
                guidelines mentioned on the package.
              </p>
            </Col>
          </Row>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default CareCleaning;
