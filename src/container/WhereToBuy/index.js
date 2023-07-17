import React, { useEffect, useState } from "react";
import Header from "components/SearchBar/Header";
import Footer from "components/Footer";
import orientationCentre from "../../assets/orientationCentre/OrientationCentre.png";

import { Box, Grid, useMediaQuery } from "@mui/material";

import FMTypography from "components/FMTypography/FMTypography";
import { Link } from "react-router-dom";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Row, Col } from "react-bootstrap";
import {
  getWhereToBuyData,
  getWhereToBuyFilterData,
} from "Redux/Slices/WhereToBuy/WhereToBuySlice";
import { useDispatch, useSelector } from "react-redux";
import LocationDropdowns from "components/LocationDropdowns";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const WhereToBuy = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const responsiveTablet = useMediaQuery("(max-width: 1000px)");
  const responsiveMobile = useMediaQuery("(max-width: 600px)");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWhereToBuyData());
  }, [dispatch]);

  const WhereToBuyData = useSelector(
    (state) => state?.whereToBuy?.getWhereToBuyListData?.whereToBuyProducts
  );

  const filterWhereToBuy = () => {
    // dispatch(getWhereToBuyFilterData(selectedCity));
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCity("");
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: !responsiveMobile ? "2.8rem" : "1.65rem",
          paddingBottom: !responsiveMobile ? "2.8rem" : "1.65rem",
        }}
      >
        <FMTypography
          displayText={"Where To Buy"}
          styleData={{
            fontWeight: "600",
            fontSize: !responsiveMobile ? "2.8rem" : "2.4rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid>
        {/* product box below */}

        <Box
          sx={{
            borderRadius: "20px",
            padding: !responsiveMobile ? "0px 3.2rem 0rem" : "0px 1.4rem 0rem",
          }}
        >
          <img
            src={orientationCentre}
            style={{
              width: "100%",
              height: !responsiveMobile ? "auto" : "62vw",
              borderRadius: "20px",
            }}
            alt="orientation"
          />
        </Box>

        <Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: !responsiveMobile ? "2.8rem" : "1.65rem",
              paddingBottom: !responsiveMobile ? "2rem" : "1.65rem",
            }}
          >
            <FMTypography
              displayText={"Colston World & Showroom"}
              styleData={{
                fontWeight: "600",
                fontSize: !responsiveMobile ? "2.8rem" : "2.4rem",
                textAlign: "center",
              }}
            />
          </Box>

          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <Row>
              <Col xs={12} md={12}>
                <FMTypography
                  displayText={"Filter Centers By City :"}
                  styleData={{
                    fontWeight: "600",
                    fontSize: !responsiveMobile ? "2rem" : "2rem",
                    marginRight: "20px",
                    textAlign: "center",
                    paddingBottom: "10px",
                  }}
                />
              </Col>{" "}
              <Col
                xs={12}
                md={12}
                className={
                  !responsiveMobile
                    ? "d-flex justify-content-center"
                    : "d-flex justify-content-center"
                }
                style={
                  responsiveMobile
                    ? { paddingRight: "60px", paddingLeft: "60px" }
                    : null
                }
              >
                <LocationDropdowns
                  selectedState={selectedState}
                  selectedCity={selectedCity}
                  handleCityChange={handleCityChange}
                  handleStateChange={handleStateChange}
                />
                <IconButton
                  size="large"
                  style={{ marginLeft: "10px" }}
                  onClick={filterWhereToBuy}
                >
                  <FilterAltIcon />
                </IconButton>
              </Col>
            </Row>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              flexDirection: responsiveTablet ? "column" : "row",
              flexBasis: "30%",
              justifyContent: "space-evenly",
              padding: !responsiveMobile
                ? "0px 3.2rem 5rem"
                : "0px 1.4rem 5rem",
            }}
          >
            {WhereToBuyData &&
              WhereToBuyData?.map((elem) => (
                <Box
                  sx={{
                    padding: "24px",
                    background: "#FFFFFF",
                    boxShadow:
                      "0px -1px 12px rgba(180, 181, 181, 0.12), 0px 1px 12px rgba(180, 181, 181, 0.12)",
                    borderRadius: "20px",
                    fontFamily: "Rajdhani",
                    fontStyle: "normal",
                    fontSize: !responsiveMobile ? "1rem" : "1.4rem",
                    fontColor: "#717171",
                    margin: !responsiveMobile ? "1.5rem" : "1rem 0",
                  }}
                >
                  <h3>{elem?.city.toUpperCase()}</h3>
                  <p>{elem?.centerName}</p>
                  <p>{elem?.centerAddress}</p>
                  <p>
                    <b>OC Appointment</b> : {elem?.ocAppointment}
                  </p>
                  <p>
                    <b>Service</b> : {elem?.service}
                  </p>
                  <p>
                    <b>Purchase Assistance</b> : {elem?.purchaseAssistance}
                  </p>
                  <p>
                    <b>Email</b> : {elem?.email}
                  </p>
                  <p>
                    <b>Location</b> : &nbsp;
                    <Link to={elem?.location} target="_blank">
                      <DirectionsIcon
                        style={{ width: "25px", height: "25px" }}
                      />
                      Get Directions
                    </Link>
                  </p>
                </Box>
              ))}
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default WhereToBuy;