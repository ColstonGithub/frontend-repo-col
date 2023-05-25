import React, { useEffect, useState } from "react";
import Slider from "react-slick-slider";
import { Container, Row, Col } from "react-bootstrap";

import { postHomepageBanner } from "Redux/Slices/HomePageBanner/HomePageBannerSlice";
import { useDispatch, useSelector } from "react-redux";
import { Grid, useMediaQuery } from "@mui/material";

const Banner = () => {
  // const [bannerdata, setBannerData] = useState(BData);
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.HomePageBanner.banners);
  const responsiveMobile = useMediaQuery("(max-width: 500px)");
  useEffect(() => {
    dispatch(postHomepageBanner({}));
  }, [dispatch]);

  // console.log("data", data, loading, error);
  const settings = {
    dots: responsiveMobile ? false : true,
    infinite: true,
    speed: 500,
    draggable: true,
    margin: responsiveMobile ? "50px" : "100px",
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const finalData = [];
  banners.homepageBanner?.map((element) => {
    finalData.push(element.banner);
  });
  console.log("finalData", finalData);
  return (
    <div className="banner_slider">
      <Row className="m-0">
        <Col className="p-0">
          <Slider {...settings}>
            {finalData?.map((imageName, index) => (
              <div className="banner_img">
                <img src={imageName} className="img-fluid" alt="" />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
