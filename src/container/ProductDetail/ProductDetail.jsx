import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Header from "components/SearchBar/Header";
import FMTypography from "components/FMTypography/FMTypography";
import FMButton from "components/FMButton/FMButton";

import "./ProductDetail.css";

import { signUpSchema } from "validationSchema/signupSchema";
import { Col, Container, Row } from "react-bootstrap";

import products from "../../constants/product";
//import productDetail from "../../constants/productDetail";

import SimilarProduct from "./SimilarProduct";
import Footer from "../../components/Footer";
import Form from "./Form";
import CategorySlider from "components/HomePage/CategorySlider";
import { getProductPageDetail } from "Redux/Slices/GetProducts/ProductPageDetails";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  // const { id } = params;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getProductPageDetail(params));
  }, [dispatch, params]);

  const productDetail = useSelector((state) => state.ProductPageDetail.data);

  // console.log("products", productDetail);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const uploadFormData = new FormData();
  };

  const navigate = useNavigate();

  // const product = products.products.find((item) => item._id == id);

  // console.log("p", product.name);

  // const productDetailedData = products.products;

  const apiImgs = productDetail?.product?.productPictures.map((elem) => ({
    original: elem?.img,
    thumbnail: elem?.img,
    id: elem?._id,
  }));
  const [color, setColor] = useState(0);

  const properties = {
    thumbnailPosition: "left",
    infinite: true,
    autoPlay: false,
    showNav: false,
    useBrowserFullscreen: false,
    showPlayButton: false,
    // renderItem: color !== 0 ? color : null,

    originalHeight: "100px",
    items: apiImgs?.length > 0 ? apiImgs : [],
  };

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      slidesToSlide: 2,
      // partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 2,
      slidesToSlide: 2,
      // partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 200,
      },
      items: 1,
      slidesToSlide: 1,
      // partialVisibilityGutter: 30,
    },
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleColorClick = (i) => {
    setColor(i);
    console.log("color", i);
  };

  return (
    <>
      <Header />
      <Container
        fluid
        style={{
          paddingTop: "40px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <Grid sx={{ display: "flex", gap:"3" }}>
          <Row className="gap-5">
            <Col md={6} style={{ display: "flex" }}>
              <ImageGallery
                {...properties}
                onThumbnailClick={(e, index) => {
                  console.log("clicked", index);
                }}
              />
            </Col>

            {/* info box right */}
            <Col
              // xs={6}
              component="form"
              className="right-info-box"
              // style={{ marginLeft: "3.125rem" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Box>
                <FMTypography
                  displayText={productDetail?.product?.name}
                  styleData={{
                    fontSize: "2.8rem",
                    fontWeight: "600",
                    paddingBottom: "24px",
                    fontFamily: "Montserrat",
                  }}
                />
              </Box>
              <Grid sx={{ display: "flex" }}>
                {productDetail?.product?.color?.map((item, i = 1) => (
                  <Box
                    key={item._id}
                    sx={{ display: "flex" }}
                    style={{
                      boxShadow:
                        "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                      width: "42px",
                      height: "42px",
                      marginRight: "20px",
                      borderRadius: "50%",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        paddingTop: "50px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "10px",
                        lineHeight: "12px",
                      }}
                      onClick={() => handleColorClick(i)}
                    >
                      {item.colorName}
                    </Typography>
                  </Box>
                ))}
                {/* <Box
                  sx={{ display: "flex" }}
                  style={{
                    background: "#fff",
                    boxShadow:
                      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                    width: "42px",
                    height: "42px",
                    marginRight: "20px",
                    borderRadius: "50%",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Montserrat",
                      paddingTop: "50px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#000000",
                    }}
                  >
                    White
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex" }}
                  style={{
                    background: "#D9D9D9",
                    boxShadow:
                      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                    width: "42px",
                    height: "42px",

                    borderRadius: "50%",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Montserrat",
                      paddingTop: "50px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#000000",
                    }}
                  >
                    Grey
                  </Typography>
                </Box> */}
              </Grid>

              <Box sx={{ marginTop: "32px", maxWidth: "334px" }}>
                <FMTypography
                  displayText={"Specifications"}
                  styleData={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "#000000",
                    paddingBottom: "12px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  {productDetail?.product?.specification}
                </p>
                {/* <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  -21 Spinal Jet
                </p>

                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  -(39+6) Bubble Jet
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  -23 Sidelight
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  -Ideal for 2 People
                </p> */}
              </Box>

              {/* cart and buy btns */}
              <Box sx={{ marginTop: "40px", display: "flex" }}>
                <FMButton
                  displayText={"Enquiry"}
                  variant="outlined"
                  styleData={{
                    borderRadius: "10px",
                    fontFamily: "'Montserrat'",
                    color: "#222",
                    border: "1px solid #E6E6E6",
                    width: "222px",
                    height: "52px",
                    fontWeight: "700",
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    marginRight: "24px",
                    "&:hover": {
                      border: "1px solid #222",
                      backgroundColor: "white",
                    },
                  }}
                  onClick={handleOpen}
                />

                <a href={productDetail?.product?.pdf}>
                  <FMButton
                    displayText={"Download Pdf"}
                    variant={"contained"}
                    styleData={{
                      background: "#C02222",
                      borderRadius: "10px",
                      fontWeight: "700",
                      fontSize: "1rem",
                      fontFamily: "Montserrat",
                      textTransform: "capitalise",
                      color: "#FFFFFF",
                      width: "228px",
                      height: "52px",
                      "&:hover": {
                        background: "#AD1F1F",
                      },
                    }}
                  />
                </a>

                <input type={"submit"} hidden />
              </Box>

              {/* prod desc */}
              <Box sx={{ paddingTop: "50px" }}>
                <FMTypography
                  displayText={"Product Description"}
                  styleData={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "#000000",
                    paddingBottom: "12px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  {productDetail?.product?.description}
                </p>
              </Box>

              {/* reviews scrolls */}

              {/* right box end below */}
            </Col>
          </Row>
        </Grid>
      </Container>

      {/* moere suggestions */}
      <SimilarProduct />

      <Form open={open} handleClose={handleClose} setOpen={setOpen} />

      <Footer />
    </>
  );
};

export default ProductDetail;
