import React, { useEffect } from "react";
import Slider from "react-slick-slider";
import Header from "components/SearchBar/Header";
import Footer from "components/Footer";

import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import { getVirtualTour } from "Redux/Slices/VirtualTourSlice/VirtualTourSlice";
import { useDispatch, useSelector } from "react-redux";


const VirtualTour = () => {
  const responsiveMobile = useMediaQuery('(max-width: 500px)');
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getVirtualTour());
  }, [dispatch]);
  
  let virtualTourData = useSelector(state => state.virtualTour.virtualTour.PageBanner);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    draggable: true,
    Margin: "100px",
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: !responsiveMobile ? "2.8rem" : "1.65rem",
          paddingBottom: !responsiveMobile ? "2.8rem" : "1.65rem",
        }}
      >
        <FMTypography
          displayText={"Virtual Tour"}
          styleData={{
            fontWeight: "600",
            fontSize: !responsiveMobile ? "2.8rem" : "2.4rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid>
        <Slider {...settings}>
          {virtualTourData?.map(virtual => (
              <Box>
                <img
                  src={virtual.bannerImage}
                  style={{ width: "100%", height: "auto", maxHeight: "500px" }}
                  alt={virtual.bannerImageAltText}
                />
              </Box>
          ))}
        </Slider>
      </Grid>
      
      <Footer />
    </>
  );
};

export default VirtualTour;
