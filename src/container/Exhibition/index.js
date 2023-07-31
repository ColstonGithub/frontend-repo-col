import React, { useEffect } from "react";
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
import Header from "components/SearchBar/Header";
import { useDispatch, useSelector } from "react-redux";
import { getExhibition } from "Redux/Slices/Exhibition/ExhibitionSlice";
import { getExhibitionProducts } from "Redux/Slices/Exhibition/ExhibitionProductSlice";

const Exhibition = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const responsiveMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    dispatch(getExhibition());
    dispatch(getExhibitionProducts());
  }, [dispatch]);

  let exhibitionData = useSelector(
    (state) => state.exhibition?.exhibition?.PageBanner
  );
  exhibitionData = exhibitionData ? exhibitionData[0] : {};

  const ExhibitionProducts = useSelector(
    (state) => state.exhibitionProduct?.exhibitionProducts?.exhibitionProducts
  );

  const onCardClick = (element) => {
    let pId = element?._id;
    navigate(`/exhibition/${pId}`);
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
          displayText={"Exhibitions and Events"}
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
        <Box
          sx={{
            borderRadius: "20px",
          }}
        >
          <img
            src={exhibitionData?.bannerImage}
            style={{
              width: "100%",
              height: !responsiveMobile ? "650px" : "62vw",
              borderRadius: "35px",
            }}
            alt={exhibitionData?.bannerImageAltText}
          />
        </Box>

        <Grid sx={{ paddingTop: "3rem" }}>
          <Grid
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexBasis: "33.333333%",
              justifyContent: "space-evenly",
              gap: "1.5rem",
            }}
          >
            {ExhibitionProducts?.map((elem) => (
              <Box key={elem?._id} onClick={() => onCardClick(elem)}>
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
                          textTransform: "capitalize",
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
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Exhibition;
