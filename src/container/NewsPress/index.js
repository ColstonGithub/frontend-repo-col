import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import { useNavigate } from "react-router-dom";

import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getNewsPress } from "Redux/Slices/NewsPress/NewsPressSlice";
import { getNewsPressBanner } from "Redux/Slices/NewsPress/NewsPressBannerSlice";

const NewsPress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responsiveMobile = useMediaQuery('(max-width: 500px)');

  useEffect(() => {
      dispatch(getNewsPress());
      dispatch(getNewsPressBanner());
  }, [dispatch]);
  
  const newsPress = useSelector(state => state.newsPress.newsPress.newsPressList);  
  let newsPressBanner = useSelector(state => state.newsPressBanner.newsPressBanner.PageBanner);
  
  newsPressBanner = newsPressBanner ? newsPressBanner[0] : {};
  
  const onCardClick = (element) => {
    let pId = element?._id;
    navigate(`/newspress/${pId}`);
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
          displayText={"News & Press Release"}
          styleData={{
            fontWeight: "600",
            fontSize: !responsiveMobile ? "2.8rem" : "2.4rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid>
        {/* product box below */}

        <Box
          sx={{
            borderRadius: "20px",
            padding: !responsiveMobile ? "0px 3.2rem 5rem" : "0px 1.4rem 5rem",
          }}
        >
          <img
            src={newsPressBanner.bannerImage}
            style={{ width: "100%", height: !responsiveMobile ? "auto" : "62vw", borderRadius: "20px" }}
            alt={newsPressBanner.bannerImageAltText}
          />
        </Box>

        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexBasis: "33.333333%",
            justifyContent: "space-evenly",
          }}
        >
          {newsPress?.map((elem) => (
            <Box 
              key={elem._id} 
              onClick={() => onCardClick(elem)}
            > 
              <Card sx={{ 
                width: responsiveMobile ? "90vw" : "317", 
                height: !responsiveMobile ? "auto" : "62vw",
                borderRadius: "20px", 
                margin: '1rem' 
              }}>
               <CardActionArea>
                  <Box className="zoomin">
                    <img 
                      src={elem?.image} 
                      alt={elem?.imageAltText} 
                    />
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: !responsiveMobile ? "1rem" : "1.6rem",
                      lineHeight: "20px",
                      color: "#FFFFFF",
                      position: "absolute",
                      marginLeft:"16px",
                      bottom: "0",
                      top: !responsiveMobile ? "78%" : "85%", 
                    }}
                  >
                    {elem?.title}
                    <Link
                      style={{ paddingLeft: "12px" }}
                    >
                      {/* <img src={Vector} alt="" /> */}
                    </Link>
                  </Typography>
                </CardActionArea>
              </Card>
            </Box>
          ))}
          
          {/* prodct box ended */}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default NewsPress;
