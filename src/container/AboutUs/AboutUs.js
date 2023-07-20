import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";

import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import "./BrandDetail.css";
import Footer from "components/Footer";
import { postAboutUs } from "Redux/Slices/AboutUs/AboutUs";
import { useDispatch, useSelector } from "react-redux";
const AboutUs = () => {
  const dispatch = useDispatch();
  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  useEffect(() => {
    dispatch(postAboutUs());
  }, [dispatch]);

  const AboutUs = useSelector(
    (state) => state.aboutUs.banners?.aboutUsData || {}
  );

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
          displayText={"About Us"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: "0 3.125rem" }}>
        {/* product box below */}
        <div
          style={{
            borderRadius: "20px",
          }}
        >
          {/* <p>{console.log(AboutUs[0]?.bannerImage)}</p> */}
          <img
            src={AboutUs[0]?.bannerImage}
            style={{
              width: "100%",
              height: !responsiveMobile ? "650px" : "62vw",
              borderRadius: "35px",
            }}
            alt={AboutUs[0]?.bannerImageAltText}
          />
        </div>

        <Box style={{ paddingTop: "2rem" }}>
          <h3
            style={{
              fontFamily: "Rajdhani",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.5rem",
              lineHeight: "29px",
              paddingTop: "24px",
              color: "#222222",
            }}
          >
            {AboutUs?.title}
          </h3>
          <p
            style={{
              fontFamily: "Rajdhani",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1rem",
              color: "#222222",
            }}
          >
            {AboutUs[0]?.text}
          </p>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default AboutUs;
