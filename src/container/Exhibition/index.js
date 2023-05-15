import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import Footer from "components/Footer";
import { getExhibition } from "Redux/Slices/Exhibition/ExhibitionSlice";
import { useDispatch, useSelector } from "react-redux";

const Exhibition = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getExhibition());
  }, [dispatch]);
  
  let exhibitionData = useSelector(state => state.exhibition.exhibition.PageBanner);
  exhibitionData = exhibitionData ? exhibitionData[0] : {};
  // console.log(exhibitionData)

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2.8rem",
          paddingBottom: "2.8rem",
        }}
      >
        <FMTypography
          displayText={"Exhibition"}
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
            style={{ width: "100%", height: "auto" }}
            alt={exhibitionData?.bannerImageAltText}
          />
        </div>
      </Grid>
      <Footer />
    </>
  );
};

export default Exhibition;
