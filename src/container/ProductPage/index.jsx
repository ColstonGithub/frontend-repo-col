import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postProductPage } from "Redux/Slices/GetProducts/ProductPage";

import "./productPage.css";
import Footer from "components/Footer";

const ProductPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const responsiveMobile = useMediaQuery("(max-width: 500px)");

  useEffect(() => {
    dispatch(postProductPage(params));
  }, [dispatch, params]);

  let productPageData = useSelector((state) => state.ProductPage.data);
  // console.log(productPageData);
  const Title = productPageData?.pageTitle;
  productPageData = productPageData?.products;
  const onCardClick = (element) => {
    let id = element?._id;
    navigate(`/product-detail/${id}`);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <FMTypography
          displayText={Title}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
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
          }}
        >
          {productPageData?.map((elem) => (
            <Box onClick={() => onCardClick(elem)}>
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
                    image={elem?.productPictures[0]?.img}
                    alt="green iguana"
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
                      {elem?.name}
                    </Typography>
                  </CardContent>
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

export default ProductPage;
