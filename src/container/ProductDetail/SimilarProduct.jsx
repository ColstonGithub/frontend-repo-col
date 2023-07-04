import React, { useState, useEffect } from "react";
import Slider from "react-slick-slider";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductPageDetail } from "Redux/Slices/GetProducts/ProductPageDetails";
import { Grid, useMediaQuery } from "@mui/material";

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
    draggable: true,
    centerPadding: "0px",
    centerMode: true,
    lazyload: true,
    autoplay: false,
    arrows: responsiveMobile || responsiveMobile2 ? false : true,
    // slidesToShow: responsiveMobile && !responsiveMobile2 ? 2 : 4,
    slidesToShow: responsiveMobile ? 2 : 4,
    slidesToScroll: responsiveMobile ? 1 : 1,
    // fade: true, // add fade effect
  };
  const onCardClick = (element) => {
    navigate(`/product-detail/${element}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bestseller samecard">
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className="heading_text">
              <h3>Similar Products</h3>
            </div>
          </Col>
          <Col>
            <Slider {...category_settings}>
              {productDetail &&
                productDetail?.map((idata, i) => (
                  <div
                    key={idata._id}
                    onClick={() => onCardClick(idata?._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={idata?.productPictures[0]?.img}
                      // className="img-fluid"
                      alt={idata?.productPictures[0]?.imageAltText}
                    />
                    <div className="card_name">
                      <h4 style={{ textAlign: "center" }}>{idata?.name}</h4>
                    </div>
                  </div>
                ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SimilarProduct;
