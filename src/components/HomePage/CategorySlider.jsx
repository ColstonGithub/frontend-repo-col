import React, { useState, useEffect } from "react";
import Slider from "react-slick-slider";
import { Container, Row, Col } from "react-bootstrap";
import Data from "../../JsonDatas/JsonData";
import { useNavigate } from "react-router-dom";
import { postNewArrival } from "Redux/Slices/NewArrival/NewArrival";
// import homepageBanner1 from "../../assets/homebanner1.jpg";
// import homepageBanner2 from "../../assets/homebanner2.jpg";
// import homepageBanner3 from "../../assets/homebanner3.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Grid, useMediaQuery } from "@mui/material";

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
    // slidesToShow: responsiveMobile && !responsiveMobile2 ? 2 : 4,
    slidesToShow: responsiveMobile ? 2 : 4,
    slidesToScroll: responsiveMobile ? 1 : 1,
    // fade: true, // add fade effect
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
            {/* <Slider {...settings}>
              {banners?.map((card) => (
                <div key={card.id}>
                  <div className="card">
                    <img
                      src={card?.productPictures[0]?.img}
                      alt={card?.productPictures[0]?.imageAltText}
                    />
                    <h3 style={{ textAlign: "center" }}>{card?.name}</h3>
                  </div>
                </div>
              ))}
            </Slider> */}
            <Slider {...category_settings}>
              {banners?.map((idata, i) => (
                <div
                  // className=" "
                  key={idata._id}
                  onClick={() => onCardClick(idata)}
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
            {/* <Slide>
              {banners?.map((idata, i) => (
                <div className="banner_img text-center">
                  <div
                    className="img-fluid"
                    style={{ backgroundImage: idata?.productPictures[0]?.img }}
                  ></div>
                  <div className="card_name">
                    <h4>{idata?.name}</h4>
                  </div>
                </div>
              ))}
            </Slide> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategorySlider;
