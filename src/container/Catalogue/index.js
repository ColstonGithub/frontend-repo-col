import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import downloadIcon from "assets/download.png";
import FMTypography from "components/FMTypography/FMTypography";
import { useNavigate } from "react-router-dom";

import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCatalogue } from "Redux/Slices/Catalogue/CatalogueSlice";
import { getCatalogueBanner } from "Redux/Slices/Catalogue/CatalogueBannerSlice";
const Catalogue = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const responsiveMobile = useMediaQuery("(max-width: 500px)");

  useEffect(() => {
    dispatch(getCatalogue());
    dispatch(getCatalogueBanner());
  }, [dispatch]);

  const catalogue = useSelector(
    (state) => state.catalogue.catalogue.catalogueList
  );
  let catalogueBanner = useSelector(
    (state) => state.catalogueBanner.catalogueBanner.PageBanner
  );

  catalogueBanner = catalogueBanner ? catalogueBanner[0] : {};

  const handleDownload = (pdfLink) => {
    let alink = document.createElement("a");
    alink.href = pdfLink;
    alink.download = pdfLink;
    alink.click();
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
          paddingTop: !responsiveMobile ? "2.8rem" : "1.65rem",
          paddingBottom: !responsiveMobile ? "2.8rem" : "1.65rem",
        }}
      >
        <FMTypography
          displayText={"Catalogue"}
          styleData={{
            fontWeight: "600",
            fontSize: !responsiveMobile ? "2.8rem" : "2.4rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexBasis: "33.333333%",
            justifyContent: "space-evenly",
          }}
        >
          {catalogue?.map((elem) => (
            <Box>
              <Card
                sx={{
                  width: responsiveMobile ? "90vw" : "317",
                  height: !responsiveMobile ? "auto" : "62vw",
                  borderRadius: "20px",
                  margin: "1rem",
                }}
              >
                <CardActionArea>
                  <Box className="zoomin">
                    <img src={elem?.image} alt={elem?.imageAltText} />
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Rajdhani",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: !responsiveMobile ? "1rem" : "1.6rem",
                      lineHeight: "20px",
                      color: "#FFFFFF",
                      position: "absolute",
                      marginLeft: "16px",
                      bottom: "0",
                      top: !responsiveMobile ? "78%" : "85%",
                    }}
                  >
                    {elem?.title}
                  </Typography>
                  <IconButton
                    onClick={() => handleDownload(elem?.pdf)}
                    sx={{
                      position: "absolute",
                      marginRight: "16px",
                      bottom: "0",
                      color: "#fff",
                      top: !responsiveMobile ? "78%" : "81.5%",
                      right: "-5px",
                      height: "35px",
                      width: "35px",
                      backgroundColor: "#000",
                    }}
                  >
                    <img src={downloadIcon} alt="download" />
                  </IconButton>
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

export default Catalogue;
