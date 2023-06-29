import React, { useEffect, useState, useRef } from "react";
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

// import products from "../../constants/product";
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
  const [color, setColor] = useState(0);
  const [open, setOpen] = useState(false);
  const [apiImgs, setApiImgs] = useState([]);

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

  useEffect(() => {
    const imgs = productDetail?.product?.colors?.[0].productPictures?.map((elem) => ({
      original: elem?.img,
      thumbnail: elem?.img,
      id: elem?._id,
    }));

    setApiImgs(imgs);
  }, []);

  const imageGalleryRef = useRef(null);

  const onClickHandler = () => {
    imageGalleryRef.current.toggleFullScreen();
  };

  const properties = {
    thumbnailPosition: "left",
    infinite: false,
    autoPlay: false,
    showNav: false,
    disableThumbnailScroll: true,
    useBrowserFullscreen: false,
    showPlayButton: false,
    onClick: onClickHandler,
    originalHeight: "100%",
    originalWidth: "100%",
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
    console.log("Clicking ", i);
    const imgs = productDetail?.product?.colors?.[i].productPictures?.map((elem) => ({
      original: elem?.img,
      thumbnail: elem?.img,
      id: elem?._id,
    }));

    setColor(i);
    setApiImgs(imgs);
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
        <Grid sx={{ display: "flex", gap: "3" }}>
          <Row className="gap-5">
            <Col md={6} style={{ display: "flex" }}>
              <ImageGallery
                ref={imageGalleryRef}
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
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    paddingBottom: "24px",
                    fontFamily: "Montserrat",
                  }}
                />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      textAlign: "center",
                      padding: "10px 0",
                    }}
                >
                  {productDetail?.product?.colors?.map((item, i) => (
                    <Grid 
                      style={{
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        marginRight: "20px",
                        cursor: "pointer"
                      }} 
                      onClick={() => handleColorClick(i)}
                    >
                      <Box
                        key={item?._id}
                        sx={{
                          gap: "5px",
                          boxShadow:
                            "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                          width: "47px",
                          height: "47px",
                          padding: "5px",
                          border: color === i ? "2px solid black" : "2px solid transparent",
                          display: "flex",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <img
                          src={item?.productPictures[0]?.img}
                          alt={item?.productPictures[0]?.colorImageAltText}
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontFamily: "Montserrat",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "14px",
                          color: "#000000",
                          textTransform: "capitalize",
                          textAlign: "center",
                          marginTop: "5px"
                        }}
                      >
                        {item?.colorName}
                      </Typography>
                      </Grid>
                  ))}
                </Grid>
              </Box>
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
                      background: "#c02121",
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
