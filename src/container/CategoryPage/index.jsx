import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
import Header from "components/SearchBar/Header";
import Footer from "components/Footer";
import { getCategoryProduct } from "Redux/Slices/CategoryProduct/CategoryProductSlice";
import "./productPage.css";

const loadingWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
};

const CategoryPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  const [loading, setLoading] = useState(true);
  const [productPageData, setProductPageData] = useState(null);

  const onCardClick = (element) => {
    let id = element?._id;
    navigate(`/product-page/${id}`);
  };

  useEffect(() => {
    setLoading(true);
  }, [params]);

  useEffect(() => {
    dispatch(getCategoryProduct(params))
      .then((response) => {
        setProductPageData(response.payload);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch, params]);

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
              marginTop: "2.8rem",
            }}
          >
            <FMTypography
              displayText={productPageData?.pageTitle}
              styleData={{
                fontWeight: "600",
                fontSize: "2.8rem",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            />
          </Box>
          <Grid sx={{ padding: "3.2rem" }}>
            <Grid
              sx={
                responsiveMobile
                  ? {
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      gap: "1rem",
                    }
                  : {
                      display: "flex",
                      flexWrap: "wrap",
                      flexBasis: "33.333333%",
                      justifyContent: "space-evenly",
                      gap: "1rem",
                    }
              }
            >
              {productPageData?.subCategoryList?.map((elem) => (
                <Box key={elem?._id} onClick={() => onCardClick(elem)}>
                  <Card
                    sx={{
                      width: responsiveMobile ? "80vw" : "317",
                      borderRadius: "20px",
                      marginBottom: "1rem",
                    }}
                  >
                    <CardActionArea
                      className="zoomin-img"
                      style={{ borderBottom: "20px" }}
                    >
                      <CardMedia
                        component="img"
                        sx={
                          responsiveMobile
                            ? {
                                borderBottom: "30px",
                                width: "100%",
                                height: "360px",
                              }
                            : {
                                borderBottom: "20px",
                                height: "360px",
                                width: "360px",
                              }
                        }
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
                            color: "#2b2a29",
                            fontWeight: "600",
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
            </Grid>
          </Grid>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CategoryPage;
