import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import Footer from "components/Footer";
import { getExhibition } from "Redux/Slices/Exhibition/ExhibitionSlice";
import { useDispatch, useSelector } from "react-redux";

const Exhibition = () => {
  const dispatch = useDispatch();
  const responsiveMobile = useMediaQuery("(max-width: 500px)");
  useEffect(() => {
    dispatch(getExhibition());
  }, [dispatch]);

  let exhibitionData = useSelector(
    (state) => state.exhibition.exhibition.PageBanner
  );
  exhibitionData = exhibitionData ? exhibitionData[0] : {};
  // console.log(exhibitionData)

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
          displayText={"Exhibitions"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: "0px 3.5rem" }}>
        {/* product box below */}
        <div
          style={{
            borderRadius: "20px",
          }}
        >
          <img
            src={exhibitionData?.bannerImage}
            style={{
              width: "100%",
              borderRadius: "20px",
              height: !responsiveMobile ? "650px" : "62vw",
            }}
            alt={exhibitionData?.bannerImageAltText}
          />
        </div>
      </Grid>
      <Footer />
    </>
  );
};

export default Exhibition;
