import React, { useEffect } from "react";
import Slider from "react-slick-slider";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import { postHomepageBanner } from "Redux/Slices/HomePageBanner/HomePageBannerSlice";

const Banner = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.HomePageBanner.banners);
  const responsiveMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    dispatch(postHomepageBanner({}));
  }, [dispatch]);

  const settings = {
    dots: responsiveMobile ? false : true,
    infinite: true,
    speed: 300,
    draggable: true,
    margin: responsiveMobile ? "50px" : "100px",
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const finalData =
    banners.homepageBanner?.map((element) => element?.banner) || [];

  return (
    <div className="banner_slider">
      <Row className="m-0">
        <Col className="p-0">
          <Slider {...settings}>
            {finalData &&
              finalData?.map((imageName, index) => (
                <Box className="banner_img">
                  <img
                    src={imageName}
                    alt=""
                    style={{
                      width: "100%",
                      height: !responsiveMobile ? "auto" : "62vw",
                    }}
                  />
                </Box>
              ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
