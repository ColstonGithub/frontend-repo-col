import React, { useEffect } from "react";
import Banner from "components/HomePage/Banner";
import Header from "components/SearchBar/Header";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategorySlider from "components/HomePage/CategorySlider";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";
import { postCategoryBanner } from "Redux/Slices/GetCategoryBanners/GetCategoryBanners";
import { postCorporateBanners } from "Redux/Slices/GetCorporateBanners/GetCorporateBanners";
import { postExploreCategory } from "Redux/Slices/ExploreCategory/ExploreCategory";
import { getCategory } from "Redux/Slices/GetCategory/GetCategory";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import finalCorporateBanner from "assets/homepage/colston-timeline-banner.jpg";

const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postCategoryBanner());
    dispatch(postCorporateBanners());
    dispatch(getCategory());
    dispatch(postExploreCategory());
  }, [dispatch]);

  const navigate = useNavigate();
  const banners = useSelector(
    (state) => state.categoryBanner.banners.CategoryBanner
  );

  const responsiveMobile = useMediaQuery("(max-width: 600px)");

  let newexploreCategory = useSelector(
    (state) => state.exploreCategory?.banners?.exploreCategory
  );

  const Style = {
    one: {
      position: "absolute",
      top: responsiveMobile ? "16px" : "7.5rem",
      right: "3rem",
    },
    two: {
      position: "absolute",
      left: "45.1rem",
      top: "7.5rem",
    },
  };

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  const onCatClick = (categoryId) => {
    navigate(`/category-page/${categoryId}`);
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
        <Banner />
      </div>

      {banners &&
        banners?.map((item, index) => (
          <section
            style={
              responsiveMobile
                ? {
                    marginTop: "30px",
                  }
                : { marginTop: "60px" }
            }
          >
            <div
              class="container reveal"
              onClick={() => onCatClick(item?.categoryId)}
            >
              <Row class="text-container">
                <Col xs={12} style={{ cursor: "pointer", padding: "0px 30px" }}>
                  <img
                    src={item?.bannerImage}
                    alt={item?.bannerImageAltText}
                    loading="lazy"
                    style={
                      responsiveMobile
                        ? {
                            width: "100%",
                            height: "auto",
                            borderRadius: "20px",
                          }
                        : { width: "100%", borderRadius: "20px" }
                    }
                  />
                </Col>

                {/* <Col
                  class="text-box"
                  style={index % 2 !== 0 ? Style.two : Style.one}
                >
                  <div>
                    <img
                      src={item?.bannerImageText}
                      alt={item?.bannerImageTextAltText}
                      className="banner-image-text"
                      style={{ cursor: "pointer", borderRadius: "20px" }}
                    />
                  </div>
                </Col>
                {index % 2 !== 0 ? (
                  ""
                ) : (
                  <Col>
                    <img
                      src={item?.bannerImage}
                      alt={item?.bannerImageAltText}
                      style={
                        responsiveMobile
                          ? {
                              width: "255px",
                              height: "150px",
                              marginLeft: "80px",
                              borderRadius: "20px",
                            }
                          : {
                              width: "100%",
                              cursor: "pointer",
                              borderRadius: "20px",
                            }
                      }
                    />
                  </Col>
                )} */}
              </Row>
            </div>
          </section>
        ))}

      <div>
        <Container
          fluid
          style={{
            padding: responsiveMobile ? "0px" : "0px 70px 50px",
          }}
        >
          <Row
            style={
              !responsiveMobile
                ? { margin: "0", marginTop: "80px" }
                : {
                    margin: "30px",
                  }
            }
          >
            <Col
              style={{
                paddingLeft: "0px !important",
                paddingRight: "0px !important",
              }}
            >
              <CategorySlider />
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid>
        <Row
          style={{
            padding: !responsiveMobile ? "0px 70px" : "0px 20px",
          }}
        >
          <Col style={{}}>
            <img
              src={finalCorporateBanner}
              loading="lazy"
              alt={"Corporate Banner"}
              style={{ width: "100%", borderRadius: "20px" }}
            />
          </Col>
        </Row>
      </Container>

      <div className="shopbyocca">
        <Container fluid className="m-0 p-0">
          <Row
            style={
              responsiveMobile
                ? {
                    marginTop: "30px",
                  }
                : { margin: "0", marginTop: "80px" }
            }
          >
            <Col md={12}>
              <div className="heading_text">
                <h3>Exclusive Design</h3>
              </div>
            </Col>

            {newexploreCategory?.map((item, i = 0) => (
              <Col
                xs={
                  !responsiveMobile
                    ? i === 0 || i % 5 === 0
                      ? 6
                      : 3
                    : i === 0 || i % 6 === 0
                    ? 12
                    : i === 0 || i % 5 === 0 ? 12 : 6
                }
              >
                <div
                  className={
                    !responsiveMobile
                      ? i === 0 || i % 5 === 0
                        ? "heighautoimg zoomin-img"
                        : "heighautoimg2 zoomin-img"
                      : i === 0 || i % 3 === 0
                      ? "heighautoimg zoomin-img"
                      : "heighautoimg2 zoomin-img"
                  }
                >
                  <div>
                    <Link
                      to={`product-page/${item.categoryId}`}
                      className="overlay"
                    >
                      <img
                        src={item?.image}
                        className="img-fluid"
                        loading="lazy"
                        alt={item?.imageAltText}
                        style={{ width: "100%" }}
                      />
                      <p>{item?.imageTitle}</p>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
