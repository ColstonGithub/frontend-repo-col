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
  const responsiveMobile = useMediaQuery("(max-width: 600px)");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrandDetail(params));
  }, [dispatch, params]);

  const brandDetail = useSelector(
    (state) => state.brandDetail.brand.brandproduct
  );
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
          displayText={"The Brand Colston"}
          styleData={{
            fontFamily: "Rajdhani",
            fontWeight: "600",
            fontSize: !responsiveMobile ? "2.8rem" : "2.4rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid
        sx={{
          padding: !responsiveMobile ? "0px 3.2rem 5rem" : "0px 1.4rem 5rem",
        }}
      >
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
              height: !responsiveMobile ? "650px" : "62vw",
              borderRadius: "20px",
            }}
            alt={brandDetail?.imageAltText}
          />
        </div>

        <Box style={{ paddingTop: "2rem" }}>
          <h3
            style={{
              fontFamily: "Rajdhani",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "2.3rem",
              paddingBottom: "10px",
              lineHeight: "29px",
              paddingTop: "24px",
              color: "#2b2a29",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            {brandDetail?.title}
          </h3>
          <p
            style={{
              fontFamily: "Rajdhani",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.3rem",
              color: "#2b2a29",
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
