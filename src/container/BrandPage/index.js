import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Typography,
  useMediaQuery
} from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import { useNavigate } from "react-router-dom";

import "./BrandPage.css";
import Footer from "components/Footer";
import { getBrandProducts } from "Redux/Slices/Brand/BrandSlice";
import { getBrandBanner } from "Redux/Slices/Brand/BrandBannerSlice";
import { useDispatch, useSelector } from "react-redux";

const BrandPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const responsiveMobile = useMediaQuery('(max-width: 500px)');

  useEffect(() => {
      dispatch(getBrandProducts());
      dispatch(getBrandBanner());
  }, [dispatch]);
  
  const brandProducts = useSelector(state => state.brandProducts.brandProducts.brandProducts);
  let brandBanner = useSelector(state => state.brandBanner.brandBanner.PageBanner);
  brandBanner = brandBanner ? brandBanner[0] : {};




  const onCardClick = (element) => {
    let pId = element?._id;
    navigate(`/brand-page/${pId}`);
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
          displayText={"The Brands Colston"}
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
            src={brandBanner.bannerImage}
            style={{ width: "100%", height: !responsiveMobile ? "auto" : "62vw", borderRadius: "20px" }}
            alt={brandBanner.bannerImageAltText}
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
          {brandProducts?.map((elem) => (
            <Box onClick={() => onCardClick(elem)}>
              <Card sx={{ 
                width: responsiveMobile ? "90vw" : "317", 
                height: !responsiveMobile ? "auto" : "62vw",
                borderRadius: "20px", 
                margin: '1rem' 
              }}>
                <CardActionArea>
                  <Box className="zoomin">
                    <img src={elem?.image} alt={elem?.imageAltText} />
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
                      color: "#fff",
                      top: !responsiveMobile ? "78%" : "85%",
                    }}
                  >
                    {elem?.title}
                  </Typography>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default BrandPage;
