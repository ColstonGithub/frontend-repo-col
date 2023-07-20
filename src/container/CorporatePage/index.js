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
  CardMedia,
  CardContent,
} from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import { useNavigate } from "react-router-dom";
import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCorporateProducts } from "Redux/Slices/Corporate/CorporateSlice";
import { getCorporateBanner } from "Redux/Slices/Corporate/CorporateBannerSlice";

const CorporatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const responsiveMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    dispatch(getCorporateProducts());
    dispatch(getCorporateBanner());
  }, [dispatch]);

  const corporateProducts = useSelector(
    (state) => state.corporateProducts.corporateProducts.corporateProducts
  );
  let corporateBanner = useSelector(
    (state) => state.corporateBanner.corporateBanner.PageBanner
  );

  corporateBanner = corporateBanner ? corporateBanner[0] : {};

  const onCardClick = (element) => {
    let pId = element?._id;
    navigate(`/corporate-page/${pId}`);
  };

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
          displayText={"Corporate"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: "3.2rem" }}>
        {/* product box below */}

        <Box
          sx={{
            borderRadius: "20px",
            padding: !responsiveMobile ? "0px 3.2rem 5rem" : "0px 1.4rem 5rem",
          }}
        >
          <img
            src={corporateBanner?.bannerImage}
            style={{
              width: "100%",
              height: !responsiveMobile ? "650px" : "62vw",
              borderRadius: "35px",
            }}
            alt={corporateBanner?.bannerImageAltText}
          />
        </Box>

        <Grid>
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
            {corporateProducts?.map((elem) => (
              <Box key={elem._id} onClick={() => onCardClick(elem)}>
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
                        height: "350px",
                        width: "350px",
                      }}
                      image={elem?.image}
                      alt={elem.imageAltText}
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
                          width: "320px",
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

export default CorporatePage;
