import React, { useEffect } from "react";
import Banner from "../components/HomePage/Banner";
import Header from "components/SearchBar/Header";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategorySlider from "../components/HomePage/CategorySlider";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";
import { postCategoryBanner } from "Redux/Slices/GetCategoryBanners/GetCategoryBanners";
import { postCorporateBanners } from "Redux/Slices/GetCorporateBanners/GetCorporateBanners";
import { postExploreCategory } from "Redux/Slices/ExploreCategory/ExploreCategory";
import { getCategory } from "Redux/Slices/GetCategory/GetCategory";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import finalCorporateBanner from "../assets/homepage/colston-timeline-banner.png";

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

  const responsiveMobile = useMediaQuery("(max-width: 500px)");

  // const corporateBanner = useSelector(
  //   (state) => state.PostcorporateBanner.banners.PageBanner
  // );
  //  const finalCorporateBanner = corporateBanner ? corporateBanner[0] : {};

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

  const onCatClick = (e) => {
    navigate(`/category-page/${e}`);
  };
  return (
    <>
      <Header />
      <div>
        <Banner />
      </div>

      {/* <Grid style={{ display: "flex", justifyContent: "center" }}>
        <Row
          style={{ margin: "80px 366px 80px 50px", justifyContent: "center" }}
        >
          <div style={{ position: "relative" }}>
            {" "}
            <Col md={6}>
              <div>
                <img src={FaucetImage} alt="" />
              </div>
            </Col>
            <Col
              md={6}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                marginTop: "7.5rem",
                animation: "2s slidein-right",
                animationDelay: "5s",
                transition: " all 0.5s ease-in-out",
                animationIterationCount: 1,
                animationFillMode: "both",
              }}
            >
              <div style={{ marginLeft: "14.1rem" }}>
                <img src={FaucetsText} alt="" />
                <FMButton
                  sx={{
                    // width: 317px;
                    // height: 79px;
                    marginLeft: "8rem",
                    padding: "12px 87px",
                    background: "#C02222",
                    boxShadow:
                      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                    borderRadius: "10px",
                    fontFamily: "'Montserrat'",
                    textTransform: "capitalize",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "32px",
                    "&:hover": {
                      background: "#AD1F1F",
                    },
                  }}
                  displayText={"Discover"}
                />
              </div>
            </Col>
          </div>
        </Row>
      </Grid> */}
      {banners?.map((item, index) => (
        <section style={{ marginTop: "60px" }}>
          <div
            class="container reveal"
            onClick={() => onCatClick(item?.categoryId)}
          >
            <Row class="text-container">
              {/* //If index is even image will render first */}
              {index % 2 !== 0 ? (
                <Col xs={12} style={{ cursor: "pointer" }}>
                  <img
                    src={item?.bannerImage}
                    alt={item?.bannerImageAltText}
                    style={
                      responsiveMobile
                        ? {
                            width: "255px",
                            height: "150px",
                            marginLeft: "20px",
                          }
                        : { width: "86.5%" }
                    }
                  />
                </Col>
              ) : (
                ""
              )}

              <Col
                class="text-box"
                style={index % 2 !== 0 ? Style.two : Style.one}
              >
                <div>
                  <img
                    src={item?.bannerImageText}
                    alt={item?.bannerImageTextAltText}
                    className="banner-image-text"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                {/* <FMButton
                  sx={{
                    marginLeft: index % 2 === 0 ? "8.88vw" : "13.33vw",
                    padding: "0.83vw 6vw",
                    background: "#C02222",
                    boxShadow:
                      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                    borderRadius: "10px",
                    fontFamily: "'Montserrat'",
                    textTransform: "capitalize",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "2.22vw",
                    "&:hover": {
                      background: "#AD1F1F",
                    },
                  }}
                  displayText={item.buttonText}
                /> */}
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
                          }
                        : {
                            width: "85.5%",
                            marginLeft: "15.5%",
                            cursor: "pointer",
                          }
                    }
                  />
                </Col>
              )}
            </Row>
          </div>
        </section>
      ))}

      {/* <section style={{ marginTop: "80px" }}>
        <div class="container reveal" onClick={() => onCatClick("Faucets")}>
          <Row class="text-container">
            <Col class="text-box">
              <img src={FaucetImage} alt="" />
            </Col>
            <Col
              className="text-box"
              style={{
                position: "absolute",
                left: "46.1rem",
                top: "7.5rem",
              }}f
            >
              <div>
                <img src={FaucetsText} alt="" />
              </div>
              <FMButton
                sx={{
                  marginLeft: "8rem",
                  padding: "12px 87px",
                  background: "#C02222",
                  boxShadow:
                    "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                  borderRadius: "10px",
                  fontFamily: "'Montserrat'",
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "32px",
                  "&:hover": {
                    background: "#AD1F1F",
                  },
                }}
                displayText={"Discover"}
              />
            </Col>
          </Row>
        </div>
      </section>

      <section style={{ marginTop: "80px" }}>
        <div className="container reveal" onClick={() => onCatClick("Wellness")}>
          <Row className="text-container">
            <Col
              className="text-box"
              style={{
                position: "absolute",
                top: "9.5rem",
                right: "2.7rem",
              }}
            >
              <div>
                <img src={Wellness} alt="" />
              </div>
              <FMButton
                sx={{
                  marginLeft: "12rem",
                  padding: "12px 87px",
                  background: "#C02222",
                  boxShadow:
                    "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                  borderRadius: "10px",
                  fontFamily: "'Montserrat'",
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "32px",
                  "&:hover": {
                    background: "#AD1F1F",
                  },
                }}
                displayText={"Discover"}
              />
            </Col>
            <Col className="text-box" style={{ textAlign: "end" }}>
              <img src={WellnessImage} alt="" />
            </Col>
          </Row>
        </div>
      </section>

      <section style={{ marginTop: "80px" }}>
        <div className="container reveal" onClick={() => onCatClick("Showers")}>
          <Row className="text-container">
            <Col className="text-box">
              <img src={ShowersImage} alt="" />
            </Col>
            <Col
              className="text-box"
              style={{
                position: "absolute",
                left: "41.6rem",
                top: "7.5rem",
              }}
            >
              <div s>
                <img src={ShowersText} alt="" />
              </div>
              <FMButton
                sx={{
                  marginLeft: "17rem",
                  padding: "12px 87px",
                  background: "#C02222",
                  boxShadow:
                    "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                  borderRadius: "10px",
                  fontFamily: "'Montserrat'",
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "32px",
                  "&:hover": {
                    background: "#AD1F1F",
                  },
                }}
                displayText={"Discover"}
              />
            </Col>
          </Row>
        </div>
      </section>

      <section style={{ marginTop: "80px", marginBottom: "80px" }}>
        <div className="container reveal" onClick={() => onCatClick("Basins")}>
          <Row className="text-container">
            <Col
              className="text-box"
              style={{
                position: "absolute",
                top: "9.5rem",
                right: "2.7rem",
              }}
            >
              <div>
                <img src={BasinsText} alt="" />
              </div>
              <FMButton
                sx={{
                  marginLeft: "8rem",
                  padding: "12px 87px",
                  background: "#C02222",
                  boxShadow:
                    "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                  borderRadius: "10px",
                  fontFamily: "'Montserrat'",
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "32px",
                  "&:hover": {
                    background: "#AD1F1F",
                  },
                }}
                displayText={"Discover"}
              />
            </Col>
            <Col className="text-box" style={{ textAlign: "end" }}>
              <img src={BasinsImage} alt="" />
            </Col>
          </Row>
        </div>
      </section> */}

      <div>
        <Container fluid>
          <Row
            style={
              !responsiveMobile
                ? { margin: "0", marginTop: "80px" }
                : {
                    margin: "10px",
                    // marginTop: "80px",
                    // marginBottom: "80px",
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
          style={
            responsiveMobile
              ? {
                  position: "absolute",
                  width: "343px",
                  height: "126px",
                  left: "26px",
                  // top: "1275px",
                  // padding: "21px 7px 0",
                  // marginBottom: "80px",
                }
              : { padding: "80px 85px 0" }
          }
        >
          <Col style={{}}>
            <img
              src={finalCorporateBanner}
              alt={"Corporate Banner"}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>

      <div className="shopbyocca">
        <Container fluid>
          <Row style={{ margin: "0", marginTop: "80px" }}>
            <Col md={12}>
              <div className="heading_text">
                <h3
                  style={
                    responsiveMobile
                      ? {
                          paddingBottom: "75px",
                        }
                      : {}
                  }
                >
                  Exclusive Collection/ Design
                </h3>
              </div>
            </Col>

            {newexploreCategory?.map((item, i = 0) => (
              <Col
                xs={
                  !responsiveMobile
                    ? i === 0 || i % 5 === 0
                      ? 6
                      : 3
                    : i === 0 || i % 3 === 0
                    ? 12
                    : 6
                }
              >
                <div
                  className={
                    !responsiveMobile
                      ? i === 0 || i % 5 === 0
                        ? "heighautoimg"
                        : "heighautoimg2"
                      : i === 0 || i % 3 === 0
                      ? "heighautoimg"
                      : "heighautoimg2"
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
                        alt={item?.imageAltText}
                      />
                      <p>{item?.imageTitle}</p>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}

            {/* <Col md={6}>
              <Row>
                <Col md={3}>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="heighautoimg second_row ">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg second_row">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg second_row">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="heighautoimg forth_row">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg forth_row">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <div className="overlay position-relative">
                <img src="../../../images/one.png" alt="" />
                <div className="twobandata">
                  <h4>The Anniversary Edit</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi, alias!
                  </p>
                  <a href="/">Gift Now</a>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
