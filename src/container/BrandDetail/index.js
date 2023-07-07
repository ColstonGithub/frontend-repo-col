import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { useParams } from "react-router-dom";
import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import "./BrandDetail.css";
import Footer from "components/Footer";
import { getBrandDetail } from "Redux/Slices/Brand/BrandDetailSlice";
import { useDispatch, useSelector } from "react-redux";
const BrandDetail = () => {
  const params = useParams();
  const responsiveMobile = useMediaQuery("(max-width: 500px)");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrandDetail(params));
  }, [dispatch, params]);

  const brandDetail = useSelector(
    (state) => state.brandDetail.brand.brandproduct
  );
  // console.log(brandDetail);

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
          displayText={"The Brands Colston"}
          styleData={{
            fontFamily: "Rajdhani",
            fontWeight: "600",
            fontSize: !responsiveMobile ? "2.8rem" : "2.4rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: !responsiveMobile ? "0px 3.2rem" : "0px 1.4rem" }}>
        {/* product box below */}
        <div
          style={{
            borderRadius: "20px",
          }}
        >
          <img
            src={brandDetail?.image}
            style={{
              width: "100%",
              height: !responsiveMobile ? "auto" : "62vw",
              maxHeight: "550px",
              borderRadius: "20px",
            }}
            alt={brandDetail?.imageAltText}
          />
        </div>

        <Box>
          <h3
            style={{
              fontFamily: "Rajdhani",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.6rem",
              lineHeight: "29px",
              paddingTop: "24px",
              color: "#222222",
            }}
          >
            {brandDetail?.title}
          </h3>
          <p
            style={{
              fontFamily: "Rajdhani",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.2rem",
              color: "#222222",
            }}
          >
            {brandDetail?.text}
          </p>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default BrandDetail;
