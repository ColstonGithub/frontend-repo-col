import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCareClean } from "Redux/Slices/CareClean/CareCleanSlice";

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
  // console.log(careClean);

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
          <h3
            style={{
              fontFamily: "Rajdhani",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.5rem",
              lineHeight: "29px",
              paddingTop: "24px",
              color: "#000000",
            }}
          >
            {careClean?.heading}
          </h3>
          <p
            style={{
              fontFamily: "Rajdhani",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1rem",
              color: "#717171",
            }}
          >
            {careClean?.text}
          </p>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default CareCleaning;
