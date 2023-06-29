import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import ColstonLogo from "../../assets/homepage/colston-logo-new.png";
import "./Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "Redux/Slices/GetCategory/GetCategory";

import { useMediaQuery } from "@mui/material";
import { wrap } from "@sentry/react";

const Footer = () => {
  const responsiveMobile = useMediaQuery("(max-width: 500px)");
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
          padding: !responsiveMobile ? "80px 100px 20px" : "40px 24px",
        }}
      >
        <Row>
          <Col sm={1} md={4} style={{ padding: responsiveMobile ? 0 : "" }}>
            <div>
              <img src={ColstonLogo} />
            </div>
            <div
              className="footer-content-address"
              style={{ padding: "32px 0px 25px" }}
            >
              Address: 24, ring Road, Lajpat Nagar - IV,
              <br />
              Lower Ground, New Delhi, Delhi 110024
            </div>
            <div>
              <p>
                <span className="footer-title">Mobile:</span>{" "}
                <span className="footer-content">+91-7428201028</span>
              </p>
            </div>

            <div>
              <p>
                <span className="footer-title">Email:</span>{" "}
                <Link to="mailto: abc@example.com">
                  <span className="footer-content">
                    info@colstonconcepts.com
                  </span>
                </Link>
              </p>
            </div>
          </Col>

          {!responsiveMobile ? (
            <>
              <Col md={2}>
                <div className="footer-title">About</div>
                <Link to="/about-us">
                  <div className="footer-content">About Us</div>
                </Link>
                <Link to="/orientation-centre">
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
                <Link to="/">
                  <div className="footer-content">Site Map</div>
                </Link>
                <Link to="/blogs">
                  <div className="footer-content">Blog</div>
                </Link>
              </Col>

              <Col md={2}>
                <div className="footer-title">Services</div>
                <Link to="/faq">
                  <div className="footer-content">FAQ</div>
                </Link>{" "}
                {/* <Link to="/virtual-tour">
                <div className="footer-content">Virtual Tour</div>
              </Link>
              <Link to="/orientation-centre">
                <div className="footer-content">Orientation Centre</div>
              </Link> */}
                <Link to="/virtual-tour">
                  <div className="footer-content">Virtual Tour</div>
                </Link>
                <Link to="/orientation-centre">
                  <div className="footer-content">Orientation Centre</div>
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
                      <div className="footer-content">
                        {displayCategory.name}
                      </div>
                    </Link>
                  );
                })}
              </Col>

              <Col md={2}>
                <div className="footer-title">Legal</div>

                <a href="/privacy-policy">
                  <div className="footer-content">Privacy Policy</div>
                </a>
                <a href="/">
                  <div className="footer-content">Cookies Policy</div>
                </a>
                <a href="/">
                  <div className="footer-content">Terms & Conditions</div>
                </a>
                <a href="/">
                  <div className="footer-content">Disclaimer</div>
                </a>
              </Col>
            </>
          ) : (
            <>
              <Row>
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
        <Row className="p-0 m-0">
          <Col>
            <div className="text-center text-lg-start">
              <div className=" float-lg-end" style={{ color: "#717171" }}>
                <a
                  href="https://thewebgross.com/"
                  className="footer-content"
                  target="_blank"
                >
                  Website Designed by{" "}
                  <span style={{ color: "#ff7f50" }}> @Webgross</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
