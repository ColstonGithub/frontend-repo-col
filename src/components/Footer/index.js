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

  console.log("see ", accountDetailData);
  return (
    <>
      <Container
        fluid
        className=""
        style={{
          background: "#FCFCFC",
          fontSize: "1.27rem",
          padding: !responsiveMobile ? "80px 100px" : "40px 24px",
        }}
      >
        <Row>
          <Col sm={1} md={4} style={{ padding: responsiveMobile ? 0 : "" }}>
            <div>
              <img src={ColstonLogo} />
            </div>
            <div
              className="footer-content"
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
                <a href="/about-us">
                  <div className="footer-content">About Us</div>
                </a>{" "}
                <a href="/">
                  <div className="footer-content">Where to Buy</div>
                </a>{" "}
                <a href="/">
                  <div className="footer-content">Concepts by Colston</div>
                </a>{" "}
                <a href="/newspress">
                  <div className="footer-content">Press Release</div>
                </a>{" "}
                <a href="/">
                  <div className="footer-content">Career</div>
                </a>{" "}
                <a href="/">
                  <div className="footer-content">Site Map</div>
                </a>{" "}
                <a href="/blogs">
                  <div className="footer-content">Blog</div>
                </a>
              </Col>

              <Col md={2}>
                <div className="footer-title">Services</div>
                <a href="/faq">
                  <div className="footer-content">FAQ</div>
                </a>{" "}
                {/* <Link to="/virtual-tour">
                <div className="footer-content">Virtual Tour</div>
              </Link>
              <Link to="/orientation-centre">
                <div className="footer-content">Orientation Centre</div>
              </Link> */}
                <a href="/virtual-tour">
                  <div className="footer-content">Virtual Tour</div>
                </a>{" "}
                <a href="/orientation-centre">
                  <div className="footer-content">Orientation Centre</div>
                </a>{" "}
                <a href="/contact-us">
                  <div className="footer-content">Book an Appointment</div>
                </a>{" "}
                <a href="/catalogue">
                  <div className="footer-content">Catalogue</div>
                </a>{" "}
                <a href="/Quotation">
                  <div className="footer-content">Request for Quotation</div>
                </a>{" "}
                <a href="/">
                  <div className="footer-content">Customer Care</div>
                </a>{" "}
                <a href="/warranty-registration">
                  <div className="footer-content">
                    Warrenty and Registration
                  </div>
                </a>
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
                  <a href="/about-us">
                    <div className="footer-content">About Us</div>
                  </a>{" "}
                  <a href="/">
                    <div className="footer-content">Where to Buy</div>
                  </a>{" "}
                  <a href="/">
                    <div className="footer-content">Concepts by Colston</div>
                  </a>{" "}
                  <a href="/newspress">
                    <div className="footer-content">Press Release</div>
                  </a>{" "}
                  <a href="/">
                    <div className="footer-content">Career</div>
                  </a>{" "}
                  <a href="/">
                    <div className="footer-content">Site Map</div>
                  </a>{" "}
                  <a href="/blogs">
                    <div className="footer-content">Blog</div>
                  </a>
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
                  <a href="/faq">
                    <div className="footer-content">FAQ</div>
                  </a>{" "}
                  <a href="/virtual-tour">
                    <div className="footer-content">Virtual Tour</div>
                  </a>{" "}
                  <a href="/orientation-centre">
                    <div className="footer-content">Orientation Centre</div>
                  </a>{" "}
                  <a href="/">
                    <div className="footer-content">Book an Appointment</div>
                  </a>{" "}
                  <a href="/catalogue">
                    <div className="footer-content">Catalogue</div>
                  </a>{" "}
                  <a href="/">
                    <div className="footer-content">Request for Quotation</div>
                  </a>{" "}
                  <a href="/">
                    <div className="footer-content">Customer Care</div>
                  </a>{" "}
                  <a href="/">
                    <div className="footer-content">
                      Warrenty and Registration
                    </div>
                  </a>
                </Col>

                <Col xs={5} style={{ padding: 0 }}>
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
                    <div className="footer-content">Disclamier</div>
                  </a>
                </Col>
              </Row>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Footer;
