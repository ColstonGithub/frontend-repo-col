import React, { useEffect, useState } from "react";
import Header from "components/SearchBar/Header";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
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
  const [loading, setLoading] = useState(true);
  const responsiveMobile = useMediaQuery("(max-width: 600px)");

  const loadingWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
  };

  useEffect(() => {
    setLoading(true);
  }, [params]);

  useEffect(() => {
    dispatch(postProductPage(params))
      .then(() => {
        console.log("Data Fetched Successfully");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        // Set loading to false after data is fetched or an error occurs
        setLoading(false);
      });
  }, [dispatch, params]);

  let productPageData = useSelector((state) => state.ProductPage.data);
  // console.log(productPageData);
  const Title = productPageData?.pageTitle;
  productPageData = productPageData?.products;
  const onCardClick = (element) => {
    let id = element?._id;
    navigate(`/product-detail/${id}`);
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
      {loading ? (
        <div style={{ ...loadingWrapper }}>
          <CircularProgress />
        </div>
      ) : (
        <div>
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
                textTransform: "capitalize",
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
                gap: "1.5rem",
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
                    <CardActionArea className="zoomin-img">
                      <CardMedia
                        component="img"
                        sx={{
                          borderRadius: "20px",
                          height: "350px",
                          width: "350px",
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
                            color: "#2b2a29",
                            fontWeight: "600",
                            textAlign: "center",
                            width: "325px",
                            textTransform: "capitalize",
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
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductPage;
