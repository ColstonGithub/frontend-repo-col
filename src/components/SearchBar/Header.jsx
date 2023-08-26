import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FMTypography from "components/FMTypography/FMTypography";
import { Grid, useMediaQuery } from "@mui/material";
import {
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  NavLink,
  Row,
} from "react-bootstrap";
import "./HeaderBootstrapMenu.css";
import FMButton from "components/FMButton/FMButton";
import SearchBar from "components/SearchBar/SearchBar";
import ColstonLogo from "assets/ColstonLogo.png";
import WorldIcon from "assets/WorldIcon.svg";
import { getCategory } from "Redux/Slices/GetCategory/GetCategory";
import { useDispatch, useSelector } from "react-redux";
import { LANDING_PAGE } from "Routes/Routes";
import { HeaderStyle } from "./HeaderStyle";
import { commonStyle } from "../../Styles/commonStyles";
import CircularProgress from "@mui/material/CircularProgress";
import { getCategoryProduct } from "Redux/Slices/CategoryProduct/CategoryProductSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [subCategories, setSubCategories] = React.useState([]);
  const [loadingSubcategories, setLoadingSubcategories] = useState(true);

  const open = Boolean(anchorEl);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const reply = useSelector((state) => state?.getCategoryList);
  const accountDetailData = reply.category.categoryList;

  useEffect(() => {
    const updatedSubCategories = [];

    const fetchSubcategories = async () => {
      accountDetailData?.map(async (elem) => {
        if (elem?.children && elem?.children?.length > 0) {
          dispatch(getCategoryProduct({ id: elem?._id }))
            .then((response) => {
              const data = response.payload;
              updatedSubCategories.push(data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      });
      setSubCategories(updatedSubCategories);
      setLoadingSubcategories(false); // Set loading state to false when data is ready
    };

    fetchSubcategories();
  }, [accountDetailData, dispatch]);

  const [show, setShow] = useState("");
  const showDropdown = (id) => {
    setShow(id);
  };
  const hideDropdown = () => {
    setShow("");
  };
  const onCategoryCardClick = (e) => {
    navigate(`/category-page/${e}`);
  };
  const onProductCardClick = (e) => {
    navigate(`/product-page/${e}`);
  };
  const onContactClick = () => {
    navigate(`/contact-us`);
  };
  const onServiceCardClick = (e) => {
    if (e === 0) {
      navigate(`/Career`);
    } else if (e === 1) {
      navigate(`/care-cleaning`);
    } else if (e === 2) {
      navigate(`/contact-us`);
    } else if (e === 3) {
      navigate(`/warranty-registration`);
    }
  };
  const onCompanyCardClick = (e) => {
    if (e === 0) {
      navigate(`/brand-page`);
    } else if (e === 1) {
      navigate(`/corporate-page`);
    } else if (e === 2) {
      navigate(`/exhibition`);
    } else if (e === 3) {
      navigate(`/videos`);
    } else if (e === 4) {
      navigate(`/newspress`);
    } else if (e === 5) {
      navigate(`/privacy-policy`);
    } else if (e === 6) {
      navigate(`/blogs`);
    } else if (e === 7) {
      navigate(`/orientation-centre`);
    }
  };

  const company = [
    "The Brand Colston",
    "Corporate",
    "Exhibitions",
    "Videos",
    "News & Press Release",
    "Privacy Policy",
    "Blog",
    "Live Display Centre",
  ];
  const services = [
    "Careers",
    "Care & Cleaning",
    "Contact Us",
    "Warranty & Registration",
  ];

  return (
    <>
      <Grid style={{ ...HeaderStyle.headerFullStyle }}>
        {!responsiveMobile ? (
          <Row style={{ ...HeaderStyle.topHeader, margin: "0" }}>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 3.125rem",
              }}
            >
              <FMTypography
                displayText={"Colston World"}
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#FFFFFF",
                  marginRight: "8px",
                }}
              />
              <div>
                <img src={WorldIcon} alt="WorldIcon" />
              </div>
            </Col>

            <Col
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "8px 3.125rem",
              }}
            >
              <FMTypography
                displayText={"Dealership Query"}
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#FFFFFF",
                  marginRight: "24px",
                }}
              />
              <div>
                <FMButton
                  displayText={"Book an Appointment"}
                  variant={"outlined"}
                  onClick={() => onContactClick()}
                  styleData={{
                    fontFamily: "Rajdhani",
                    fontWeight: "500",
                    fontSize: "10px",
                    background: "#FFF",
                    color: "#000",
                    textTransform: "none",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    border: "1px solid #fff",
                    borderRadius: "20px",
                    "&:hover": {
                      background: "#fff",
                      border: "1px solid #000",
                    },
                  }}
                />
              </div>
            </Col>
          </Row>
        ) : (
          ""
        )}

        <Row
          style={{
            display: "flex",
            flexDirection: responsiveMobile ? "row-reverse" : "row",
            alignItems: "baseline",
            margin: "0",
          }}
        >
          <Col
            xs={10}
            md={3}
            style={{
              ...commonStyle.flexDisplayStyle,
              padding: !responsiveMobile
                ? "1.65rem 3.125rem"
                : "2rem 8.5rem 2rem 3.5rem",
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

          <Col xs={2} md={6} style={{ ...commonStyle.flexDisplayStyle }}>
            <div className="main_header">
              <Navbar bg="" expand="lg" className="p-0">
                <Container fluid>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav className="" navbarScroll>
                      <NavLink
                        className="link-hover"
                        title="Home"
                        id="navbarScrollingDropdown"
                        onClick={() => navigate("/")}
                      >
                        Home
                      </NavLink>
                      <NavDropdown
                        title="Company"
                        key={123}
                        id="123"
                        onMouseEnter={() => showDropdown(123)}
                        onMouseLeave={hideDropdown}
                        show={show === 123}
                      >
                        <Nav className="" navbarScroll>
                          <Row
                            className="rowOnHover"
                            style={{ padding: "2rem 1.2rem" }}
                          >
                            {company?.map((elem, i) => (
                              <Row md={1}>
                                <div className="cate_area">
                                  <FMTypography
                                    displayText={elem}
                                    className="link-hover"
                                    sx={{
                                      fontFamily: "Rajdhani",
                                      fontStyle: "normal",
                                      fontWeight: "500",
                                      fontSize: "18px",
                                      lineHeight: "22px",
                                      cursor: "pointer",
                                      color: "#2b2a29",
                                      marginBottom: "15px",
                                      textTransform: "capitalize",
                                    }}
                                    onClick={() => onCompanyCardClick(i)}
                                  />
                                  {/* <h3 onClick={() => onCompanyCardClick(i)}>
                                    {elem}
                                  </h3> */}
                                </div>
                              </Row>
                            ))}
                          </Row>
                        </Nav>
                      </NavDropdown>
                      <NavDropdown
                        title="Products"
                        key={321}
                        id="321"
                        onMouseEnter={() => showDropdown(321)}
                        onMouseLeave={hideDropdown}
                        show={show === 321}
                      >
                        <Nav sm={1} className="" navbarScroll>
                          {/* Conditionally render the loader */}
                          {loadingSubcategories && loadingSubcategories ? (
                            <Col
                              md={6}
                              style={{ textAlign: "center", marginTop: "1rem" }}
                            >
                              <CircularProgress />
                            </Col>
                          ) : (
                            // Render the actual category and sub-category items
                            accountDetailData &&
                            accountDetailData?.map((elem) => {
                              return elem?.children?.length > 0 ? (
                                <Row
                                  className="rowOnHover"
                                  style={{ padding: "2rem 1.2rem" }}
                                >
                                  <Col sm={6}>
                                    <div className="cate_area">
                                      <FMTypography
                                        displayText={elem?.name}
                                        sx={{
                                          fontFamily: "Rajdhani",
                                          fontStyle: "normal",
                                          fontWeight: "600",
                                          fontSize: "18px",
                                          lineHeight: "22px",
                                          cursor: "pointer",
                                          color: "#2b2a29",
                                          marginBottom: "8px",
                                          textTransform: "capitalize",
                                        }}
                                        onClick={() =>
                                          onCategoryCardClick(elem?._id)
                                        }
                                      />

                                      {subCategories &&
                                        subCategories
                                          ?.slice()
                                          .reverse()
                                          .map((secElem) => {
                                            return elem?._id ===
                                              secElem?.parentId ? (
                                              secElem?.subCategoryList?.map(
                                                (childCat) => (
                                                  <Col md={12}>
                                                    <div>
                                                      <FMTypography
                                                        className="link-hover"
                                                        displayText={
                                                          childCat?.name
                                                        }
                                                        sx={{
                                                          fontFamily:
                                                            "Rajdhani",
                                                          fontStyle: "normal",
                                                          fontWeight: "500",
                                                          fontSize: "18px",
                                                          cursor: "pointer",
                                                          lineHeight: "22px",
                                                          color: "#2b2a29",
                                                          textTransform:
                                                            "capitalize",
                                                        }}
                                                        onClick={() =>
                                                          onProductCardClick(
                                                            childCat?._id
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </Col>
                                                )
                                              )
                                            ) : (
                                              <></>
                                            );
                                          })}
                                    </div>
                                  </Col>
                                </Row>
                              ) : (
                                <NavLink
                                  className="link-hover"
                                  title={elem?.name}
                                  style={{ textTransform: "capitalize" }}
                                >
                                  {elem?.name}
                                </NavLink>
                              );
                            })
                          )}
                        </Nav>
                      </NavDropdown>

                      <NavDropdown
                        title="Services & Support"
                        key={333}
                        id="333"
                        onMouseEnter={() => showDropdown(333)}
                        onMouseLeave={hideDropdown}
                        show={show === 333}
                      >
                        <Nav className="" navbarScroll>
                          <Row
                            className="rowOnHover"
                            style={{ padding: "2rem 1.2rem" }}
                          >
                            {services?.map((elem, i) => (
                              <Row md={1}>
                                <div className="cate_area">
                                  <FMTypography
                                    displayText={elem}
                                    className="link-hover"
                                    sx={{
                                      fontFamily: "Rajdhani",
                                      cursor: "pointer",
                                      fontStyle: "normal",
                                      fontWeight: "500",
                                      fontSize: "18px",
                                      lineHeight: "22px",
                                      color: "#2b2a29",
                                      marginBottom: "15px",
                                      textTransform: "capitalize",
                                    }}
                                    onClick={() => onServiceCardClick(i)}
                                  />
                                </div>
                              </Row>
                            ))}
                          </Row>
                        </Nav>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </Col>

          <Col
            md={3}
            style={{
              ...commonStyle.flexDisplayStyle,
              justifyContent: "flex-end",
              marginTop: "14px",
              padding: "0px 3.125rem",
            }}
          >
            {!responsiveMobile ? <SearchBar placeholder={"Search"} /> : ""}
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Header;
