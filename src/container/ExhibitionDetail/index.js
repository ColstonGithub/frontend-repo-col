import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getExhibitionDetail } from "Redux/Slices/Exhibition/ExhibitionDetailSlice";

const ExhibitionDetail = () => {
  const params = useParams();
  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExhibitionDetail(params));
  }, [dispatch, params]);

  const exhibitionDetail = useSelector(
    (state) => state.exhibitionDetail.exhibition.exhibitionproduct
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
          displayText={"Exhibitions and Events"}
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
            src={exhibitionDetail?.image}
            style={{
              width: "100%",
              height: !responsiveMobile ? "650px" : "62vw",
              borderRadius: "20px",
            }}
            alt={exhibitionDetail?.imageAltText}
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
            {exhibitionDetail?.title}
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
            {exhibitionDetail?.text}
          </p>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default ExhibitionDetail;
