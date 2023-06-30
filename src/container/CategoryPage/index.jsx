import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Row, Col, Container } from "react-bootstrap";

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

import products from "../../constants/product";
import { getCategoryProduct } from "Redux/Slices/CategoryProduct/CategoryProductSlice";

import "./productPage.css";
import Footer from "components/Footer";

const CategoryPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const responsiveMobile = useMediaQuery("(max-width: 500px)");

  useEffect(() => {
    dispatch(getCategoryProduct(params));
  }, [dispatch, params]);

  const productPageData = useSelector(
    (state) => state.getCategoryProduct.brand
  );

  const onCardClick = (element) => {
    let id = element?._id;
    navigate(`/product-page/${id}`);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2.8rem",
        }}
      >
        <FMTypography
          displayText={productPageData.pageTitle}
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
          {productPageData?.subCategoryList?.map((elem) => (
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
                    image={elem?.categoryImage}
                    alt={elem?.imageAltText}
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

export default CategoryPage;
