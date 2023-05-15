import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCorporateDetail } from "Redux/Slices/Corporate/CorporateDetailSlice";
const CorporateDetail = () => {
  const params = useParams();

  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(getCorporateDetail(params));
  }, [dispatch, params]);

  const corporateDetail = useSelector(state => state.corporateDetail.corporate.corporateproduct);
  // console.log(corporateDetails);

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
          displayText={"Corporate"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: "0px 3.2rem" }}>
        {/* product box below */}
        <div
          style={{
            borderRadius: "20px",
          }}
        >
          <img
            src={corporateDetail?.image}
            style={{ width: "100%", height: "auto", maxHeight: "500px" }}
            alt={corporateDetail?.imageAltText}
          />
        </div>

        <Box>
          <h3
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.5rem",
              lineHeight: "29px",
              paddingTop: "24px",
              color: "#222222",
            }}
          >
            {corporateDetail?.title}
          </h3>
          <p
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "1rem",
              color: "#222222",
            }}
          >
            {corporateDetail?.text}
          </p>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default CorporateDetail;
