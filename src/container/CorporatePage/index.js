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

  const responsiveMobile = useMediaQuery("(max-width: 500px)");

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

      <Grid>
        {/* product box below */}

        <Box
          sx={{
            borderRadius: "20px",
            padding: "0px 3.2rem 5rem",
          }}
        >
          <img
            src={corporateBanner?.bannerImage}
            style={{ width: "100%", height: "auto", borderRadius: "35px" }}
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
            }}
          >
            {corporateProducts?.map((elem) => (
              <Box key={elem._id} onClick={() => onCardClick(elem)}>
                <Card
                  sx={{
                    width: responsiveMobile ? "90vw" : "317",
                    borderRadius: "20px",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        borderRadius: "20px",
                        height: "317px",
                        width: "317px",
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
                          color: "#222222",
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
