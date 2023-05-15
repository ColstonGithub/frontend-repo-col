import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Link } from "react-router-dom";
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
import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCorporateProducts } from "Redux/Slices/Corporate/CorporateSlice";
import { getCorporateBanner } from "Redux/Slices/Corporate/CorporateBannerSlice";

const CorporatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const responsiveMobile = useMediaQuery('(max-width: 500px)');

  useEffect(() => {
      dispatch(getCorporateProducts());
      dispatch(getCorporateBanner());
  }, [dispatch]);
  
  const corporateProducts = useSelector(state => state.corporateProducts.corporateProducts.corporateProducts);
  let corporateBanner = useSelector(state => state.corporateBanner.corporateBanner.PageBanner);
  
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
            src={corporateBanner.bannerImage}
            style={{ width: "100%", height: "auto" }}
            alt={corporateBanner.bannerImageAltText}
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
          {corporateProducts?.map((elem) => (
            <Box key={elem._id} onClick={() => onCardClick(elem)}>
              <Card sx={{ width: responsiveMobile ? "90vw" : "317", borderRadius: "20px", margin: "20px 0" }}>
                <CardActionArea>
                  <Box className="zoomin">
                    <img src={elem?.image} alt={elem.imageAltText} />
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "1rem",
                      lineHeight: "20px",
                      color: "#FFFFFF",
                      position: "absolute",
                      marginLeft:"16px",
                      bottom: "0",
                      top: "78%",
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

export default CorporatePage;
