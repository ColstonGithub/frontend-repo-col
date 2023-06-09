import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getNewsPressDetail } from "Redux/Slices/NewsPress/NewsPressDetailSlice";
const NewsPressDetail = () => {
  const params = useParams();

  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(getNewsPressDetail(params));
  }, [dispatch, params]);

  const newsPressDetail = useSelector(state => state.newsPressDetail.newsDetail.newsPress);
//   console.log(newsPressDetail);

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
          displayText={"News & Press Release"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: "0 3.2rem" }}>
        {/* product box below */}
        <div
          style={{
            borderRadius: "20px",
          }}
        >
          <img
            src={newsPressDetail?.image}
            style={{ width: "100%", height: "auto", maxHeight: "500px" }}
            alt={newsPressDetail?.imageAltText}
          />
        </div>

        <Box>
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
