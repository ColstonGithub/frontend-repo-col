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
import { getCategoryProduct } from "Redux/Slices/CategoryProduct/CategoryProductSlice";
import Footer from "components/Footer";
import "./productPage.css";

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
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <div>
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
              <Box onClick={() => onCardClick(elem)}>
                <Card
                  sx={{
                    width: responsiveMobile ? "80vw" : "317",
                    borderRadius: "20px",
                    marginBottom: "1rem",
                  }}
                >
                  <CardActionArea className="zoomin-img">
                    <CardMedia
                      component="img"
                      sx={
                        responsiveMobile
                          ? {
                              padding: "1rem",
                              marginTop: "1rem",
                              borderRadius: "30px",
                              width: "360px",
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
                          width: "320px",
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
      <Footer />
    </>
  );
};

export default CategoryPage;
