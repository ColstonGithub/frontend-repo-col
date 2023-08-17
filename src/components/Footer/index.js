import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import ColstonLogo from "../../assets/ColstonLogo.png";
import "./Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "Redux/Slices/GetCategory/GetCategory";

import { useMediaQuery } from "@mui/material";
import { wrap } from "@sentry/react";
import { LANDING_PAGE } from "Routes/Routes";
import { HeaderStyle } from "../SearchBar/HeaderStyle";
import { commonStyle } from "../../Styles/commonStyles";
const Footer = () => {
  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  const dispatch = useDispatch();
  //  const navigate = useNavigate();
  const reply = useSelector((state) => state?.getCategoryList);
  const accountDetailData = reply.category.categoryList;

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <>
      <Container
        fluid
        className=""
        style={{
          background: "#FCFCFC",
          fontSize: "1.27rem",
          padding: !responsiveMobile ? "40px 100px 20px" : "30px 24px",
        }}
      >
        <Row>
          <Col sm={1} md={4} style={{ padding: responsiveMobile ? 0 : "" }}>
            <Col
              md={10}
              style={{
                ...commonStyle.flexDisplayStyle,
              }}
            >
              <Link to={LANDING_PAGE}>
                <div style={{}}>
                  <img
                    src={ColstonLogo}
                    alt="ColstonLogo"
                    style={{ ...HeaderStyle.imageStyle }}
                  />
                </div>
              </Link>
            </Col>
            <div style={{ paddingTop: "25px" }}>
              DELHI Colston FLC (Flagship Live Centre)
            </div>
            <div
              className="footer-content-address"
              style={{ padding: "5px 0px 15px" }}
            >
              Address: 24, Ring Road, Lajpat Nagar - IV,
              <br />
              Lower Ground, New Delhi, Delhi 110024
            </div>
            <div>MUMBAI Colston Design Centre (DC) Shakti mills</div>{" "}
            <div
              className="footer-content-address"
              style={{ padding: "5px 0px 15px" }}
            >
              Address: 6-A, Ground Floor, Laxmi Woollen Mill Estate,
              <br />
              Dr. E Moses Road, Shakti Mills Ln, Jacob Circle,
              <br />
              Mumbai, Maharashtra 400011
            </div>
            <div>
              <div>
                <span className="footer-title">Mobile:</span>{" "}
                <span className="footer-content">+91-7428201028</span>
              </div>
            </div>
            <div>
              <div>
                <span className="footer-title">Email:</span>{" "}
                <Link to="mailto: info@colstonconcepts.com">
                  <span className="footer-content">
                    info@colstonconcepts.com
                  </span>
                </Link>
              </div>
            </div>
          </Col>

          {!responsiveMobile ? (
            <>
              <Col md={2}>
                <div className="footer-title">About</div>
                <Link to="/about-us">
                  <div className="footer-content">About Us</div>
                </Link>
                <Link to="/where-to-buy">
                  <div className="footer-content">Where to Buy</div>
                </Link>
                <Link to="/">
                  <div className="footer-content">Concepts by Colston</div>
                </Link>
                <Link to="/newspress">
                  <div className="footer-content">Press Release</div>
                </Link>
                <Link to="/career">
                  <div className="footer-content">Career</div>
                </Link>
                {/* <Link to="/">
                  <div className="footer-content">Site Map</div>
                </Link> */}
                <Link to="/blogs">
                  <div className="footer-content">Blog</div>
                </Link>
              </Col>

              <Col md={2}>
                <div className="footer-title">Services</div>
                <Link to="/faq">
                  <div className="footer-content">FAQ</div>
                </Link>{" "}
                <Link
                  to="https://my.matterport.com/show/?m=qR6V1k73wja"
                  target="_blank"
                >
                  <div className="footer-content">Virtual Tour</div>
                </Link>
                <Link to="/orientation-centre">
                  <div className="footer-content">Orientation Centre</div>
                </Link>
                <Link to="/virtual-tour">
                  <div className="footer-content">Virtual Tour</div>
                </Link>
                <Link to="/orientation-centre">
                  <div className="footer-content">Live Display Centre</div>
                </Link>
                <Link to="/contact-us">
                  <div className="footer-content">Book an Appointment</div>
                </Link>
                <Link to="/catalogue">
                  <div className="footer-content">Catalogue</div>
                </Link>
                <Link to="/Quotation">
                  <div className="footer-content">Request for Quotation</div>
                </Link>
                <Link to="/contact-us">
                  <div className="footer-content">Customer Care</div>
                </Link>
                <Link to="/warranty-registration">
                  <div className="footer-content">
                    Warranty and Registration
                  </div>
                </Link>
              </Col>

              <Col md={2}>
                <div className="footer-title">Products</div>

                {accountDetailData?.map((displayCategory) => {
                  return (
                    <Link to={`/category-page/${displayCategory._id}`}>
                      <div
                        className="footer-content"
                        style={{ textTransform: "capitalize" }}
                      >
                        {displayCategory.name}
                      </div>
                    </Link>
                  );
                })}
              </Col>

              <Col md={2}>
                <div className="footer-title">Legal</div>

                <Link to="/privacy-policy">
                  <div className="footer-content">Privacy Policy</div>
                </Link>
                <Link to="/">
                  <div className="footer-content">Cookies Policy</div>
                </Link>
                <Link to="/">
                  <div className="footer-content">Terms & Conditions</div>
                </Link>
                <Link to="/">
                  <div className="footer-content">Disclaimer</div>
                </Link>
              </Col>
            </>
          ) : (
            <>
              <Row style={{ paddingTop: "20px" }}>
                <Col xs={7} style={{ padding: 0 }}>
                  <div className="footer-title">About</div>
                  <Link to="/about-us">
                    <div className="footer-content">About Us</div>
                  </Link>{" "}
                  <Link to="/orientation-center">
                    <div className="footer-content">Where to Buy</div>
                  </Link>{" "}
                  <Link to="/">
                    <div className="footer-content">Concepts by Colston</div>
                  </Link>{" "}
                  <Link to="/newspress">
                    <div className="footer-content">Press Release</div>
                  </Link>{" "}
                  <Link to="/career">
                    <div className="footer-content">Career</div>
                  </Link>{" "}
                  <Link to="/site-map">
                    <div className="footer-content">Site Map</div>
                  </Link>{" "}
                  <Link to="/blogs">
                    <div className="footer-content">Blog</div>
                  </Link>
                </Col>
                <Col xs={5} style={{ padding: 0 }}>
                  <div className="footer-title">Products</div>

                  {accountDetailData?.map((displayCategory) => {
                    return (
                      <Link to={`/category-page/${displayCategory._id}`}>
                        <div className="footer-content">
                          {displayCategory.name}
                        </div>
                      </Link>
                    );
                  })}
                </Col>
              </Row>

              <Row>
                <Col xs={7} style={{ padding: 0 }}>
                  <div className="footer-title">Services</div>
                  <Link to="/faq">
                    <div className="footer-content">FAQ</div>
                  </Link>{" "}
                  <Link to="/virtual-tour">
                    <div className="footer-content">Virtual Tour</div>
                  </Link>{" "}
                  <Link to="/orientation-centre">
                    <div className="footer-content">Orientation Centre</div>
                  </Link>{" "}
                  <Link to="/contact-us">
                    <div className="footer-content">Book an Appointment</div>
                  </Link>{" "}
                  <Link to="/catalogue">
                    <div className="footer-content">Catalogue</div>
                  </Link>{" "}
                  <Link to="/quotation">
                    <div className="footer-content">Request for Quotation</div>
                  </Link>{" "}
                  <Link to="/contact-us">
                    <div className="footer-content">Customer Care</div>
                  </Link>{" "}
                  <Link to="//warranty-registration">
                    <div className="footer-content">
                      Warranty and Registration
                    </div>
                  </Link>
                </Col>

                <Col xs={5} style={{ padding: 0 }}>
                  <div className="footer-title">Legal</div>

                  <Link to="/privacy-policy">
                    <div className="footer-content">Privacy Policy</div>
                  </Link>
                  <Link to="/">
                    <div className="footer-content">Cookies Policy</div>
                  </Link>
                  <Link to="/">
                    <div className="footer-content">Terms & Conditions</div>
                  </Link>
                  <Link to="/">
                    <div className="footer-content">Disclamier</div>
                  </Link>
                </Col>
              </Row>
            </>
          )}
        </Row>
        <Row className="p-0 m-0" style={{ display: "none" }}>
          <Col>
            <div className="text-center text-lg-start">
              <div className=" float-lg-end" style={{ color: "#717171" }}>
                <Link
                  to="https://thewebgross.com/"
                  className="footer-content"
                  target="_blank"
                >
                  Website Designed by{" "}
                  <span className="webgross-hover">@Webgross</span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
