import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import Footer from "components/Footer";
import orientationCentre from "../../assets/orientationCentre/OrientationCentre.png";

import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import { Link } from "react-router-dom";
import DirectionsIcon from "@mui/icons-material/Directions";

import { getOrientationCenter } from "Redux/Slices/OrientationCenter/OrientationCenterSlice";
import { useDispatch, useSelector } from "react-redux";

const OrientationCentre = () => {
  const responsiveTablet = useMediaQuery("(max-width: 1000px)");
  const responsiveMobile = useMediaQuery("(max-width: 500px)");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrientationCenter());
    console.log("inner");
  }, [dispatch]);

  const orientationCentreData = useSelector(
    (state) => state?.orientationCenter?.orientationCenter?.orientationProducts
  );

  console.log("added ", orientationCentreData);

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: !responsiveMobile ? "1.8rem" : "1rem",
          paddingBottom: !responsiveMobile ? "1.8rem" : "1rem",
        }}
      >
        <FMTypography
          displayText={"Live Display Centre"}
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
              height: !responsiveMobile ? "650px" : "62vw",
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
              paddingBottom: !responsiveMobile ? "2.8rem" : "1.65rem",
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
            {orientationCentreData &&
              orientationCentreData?.map((elem) => (
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
                    width: !responsiveMobile ? "350px" : "300px",
                    height: "430px",
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

export default OrientationCentre;
