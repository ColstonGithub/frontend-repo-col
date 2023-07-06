import React, { useState, useEffect } from "react";
import Slider from "react-slick-slider";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductPageDetail } from "Redux/Slices/GetProducts/ProductPageDetails";
import { Grid, useMediaQuery } from "@mui/material";
import { CircularProgress } from "@mui/material";

const loadingWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px" /* Adjust height as needed */,
};

const SimilarProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  useEffect(() => {
    dispatch(getProductPageDetail(params));
  }, [dispatch, params]);

  let productDetail = useSelector((state) => state.ProductPageDetail?.data);
  productDetail = productDetail?.relatedProducts
    ? productDetail?.relatedProducts
    : [];

  const responsiveMobile = useMediaQuery("(max-width: 500px)");
  const responsiveMobile2 = useMediaQuery("(max-width: 770px)");

  const category_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    draggable: true,
    centerPadding: "0px",
    arrows: responsiveMobile || responsiveMobile2 ? false : true,
    slidesToShow: responsiveMobile ? 2 : 6,
    slidesToScroll: 1,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const onCardClick = (element) => {
    let pId = element?._id;
    navigate(`/product-detail/${pId}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Container fluid style={{ paddingBottom: "40px" }}>
        <Row className="m-0 p-0">
          <Col md={12}>
            <div className="heading_text">
              <h3>Similar Products</h3>
            </div>
          </Col>

          <Col style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            {productDetail && productDetail.length > 0 ? (
              <Slider {...category_settings}>
                {productDetail?.map((idata, i) => (
                  <div
                    key={idata?._id}
                    onClick={() => onCardClick(idata)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className="img-fluid"
                      src={idata?.productPictures[0]?.img}
                      alt={idata?.productPictures[0]?.imageAltText}
                    />
                    <div>
                      <h4 style={{ textAlign: "center" }}>{idata?.name}</h4>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <div style={{ ...loadingWrapper }}>
                <CircularProgress />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SimilarProduct;
