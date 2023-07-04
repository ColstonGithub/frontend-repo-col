import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, useMediaQuery } from "@mui/material";
import Slider from "react-slick-slider";
import { postNewArrival } from "Redux/Slices/NewArrival/NewArrival";

const CategorySlider = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const banners = useSelector(
    (state) => state.newArrival?.banners?.newArrivals
  );
  const responsiveMobile = useMediaQuery("(max-width: 500px)");
  const responsiveMobile2 = useMediaQuery("(max-width: 770px)");

  useEffect(() => {
    dispatch(postNewArrival());
  }, []);

  const category_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    draggable: true,
    centerPadding: "0px",
    centerMode: true,
    autoplay: false,
    arrows: responsiveMobile || responsiveMobile2 ? false : true,
    slidesToShow: responsiveMobile ? 2 : 4,
    slidesToScroll: responsiveMobile ? 1 : 1,
  };

  const onCardClick = (element) => {
    let pId = element?._id;
    navigate(`/product-detail/${pId}`);
  };

  return (
    <div className="bestseller samecard">
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className="heading_text">
              <h3>New Arrivals</h3>
            </div>
          </Col>
          <Col>
            <Slider {...category_settings}>
              {banners?.map((idata, i) => (
                <div
                  key={idata._id}
                  onClick={() => onCardClick(idata)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={idata?.productPictures[0]?.img}
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

export default CategorySlider;