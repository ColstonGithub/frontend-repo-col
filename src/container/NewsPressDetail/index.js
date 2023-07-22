import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getNewsPressDetail } from "Redux/Slices/NewsPress/NewsPressDetailSlice";
const NewsPressDetail = () => {
  const params = useParams();

  const responsiveMobile = useMediaQuery("(max-width: 600px)");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsPressDetail(params));
  }, [dispatch, params]);

  const newsPressDetail = useSelector(
    (state) => state.newsPressDetail.newsDetail.newsPress
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
          displayText={"News & Press Release"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
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
            src={newsPressDetail?.image}
            style={{
              width: "100%",
              height: !responsiveMobile ? "650px" : "62vw",
            }}
            alt={newsPressDetail?.imageAltText}
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
            {newsPressDetail?.title}
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
            {newsPressDetail?.text}
          </p>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default NewsPressDetail;
