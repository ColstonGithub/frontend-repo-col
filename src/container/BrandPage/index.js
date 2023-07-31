import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Typography,
  useMediaQuery,
  CardMedia,
  CardContent,
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

  const responsiveMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    dispatch(getBrandProducts());
    dispatch(getBrandBanner());
  }, [dispatch]);

  const brandProducts = useSelector(
    (state) => state.brandProducts.brandProducts.brandProducts
  );
  let brandBanner = useSelector(
    (state) => state.brandBanner.brandBanner.PageBanner
  );
  brandBanner = brandBanner ? brandBanner[0] : {};

  const onCardClick = (element) => {
    let pId = element?._id;
    navigate(`/brand-page/${pId}`);
  };
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

      <Grid>
        {/* product box below */}

        <Box
          sx={{
            borderRadius: "20px",
            padding: !responsiveMobile ? "0px 3.2rem 5rem" : "0px 1.4rem 5rem",
          }}
        >
          <img
            src={brandBanner?.bannerImage}
            style={{
              width: "100%",
              height: !responsiveMobile ? "650px" : "62vw",
              borderRadius: "20px",
            }}
            alt={brandBanner?.bannerImageAltText}
          />
        </Box>
        <Grid sx={{ padding: "3.2rem" }}>
          {/* product box below */}
          <Grid
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexBasis: "33.333333%",
              justifyContent: "space-evenly",
              gap: "1rem",
            }}
          >
            {brandProducts?.map((elem) => (
              <Box
                onClick={() => onCardClick(elem)}
                style={{ paddingBottom: "20px" }}
              >
                <Card
                  sx={{
                    width: responsiveMobile ? "90vw" : "350",
                    borderRadius: "20px",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        borderRadius: "20px",
                        height: "360px",
                        width: "360px",
                      }}
                      image={elem?.image}
                      alt={elem?.imageAltText}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "18px",
                          color: "#2b2a29",
                          fontWeight: "600",
                          fontFamily: "Rajdhani",
                          width: "320px",
                          textTransform: "capitalize",
                        }}
                      >
                        {elem?.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
            {/* prodct box ended */}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default BrandPage;
