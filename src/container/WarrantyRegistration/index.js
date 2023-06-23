import React, { useState, useEffect } from "react";
import { Box, Grid, InputBase } from "@mui/material";

import FMButton from "components/FMButton/FMButton";
import FMTypography from "components/FMTypography/FMTypography";

import { commonStyle } from "Styles/commonStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { WarrantyFormSchema } from "validationSchema/WarrantyFormSchema";
import { Row, Col, Container } from "react-bootstrap";
import Header from "components/SearchBar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { postWarrantyRegisteration } from "Redux/Slices/Forms/postWarrantyRegistration";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Footer from "components/Footer";

const style = {
  bgcolor: "background.paper",
  borderRadius: "20px",
  paddingTop: "40px",
  paddingBottom: "40px",
};

const WarrantyRegisteration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(WarrantyFormSchema),
    mode: "onChange",
  });

  let responsive = useMediaQuery("(max-width:500px)");
  const onSubmit = (data) => {
    delete data.confirmPassword;
    console.log(data);
    dispatch(postWarrantyRegisteration(data));
    toast("form submited successfully redirect to homepage");
    // setTimeout(() => {
    //   navigate("/");
    // }, 5000);
  };

  return (
    <>
      <Header />
      <Box sx={style}>
        <Container
          fluid
          style={
            !responsive
              ? {
                  width: "635px",
                  height: "auto",
                  background: "#FFFFFF",
                  boxShadow:
                    "0px -1px 12px rgb(181 180 180 / 12%), 0px 1px 12px rgb(181 180 180 / 12%)",
                  borderRadius: "20px",
                  padding: "0px 40px 0px 40px",
                }
              : {
                  width: "331px",
                  height: "auto",
                  background: "#FFFFFF",
                  boxShadow:
                    "0px -1px 12px rgb(181 180 180 / 12%), 0px 1px 12px rgb(181 180 180 / 12%)",
                  borderRadius: "20px",
                  padding: "0px 27px 0px 27px",
                }
          }
        >
          <Box component="form" xs={12}>
            <Row>
              <Col
                md={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "2.5rem 2.8rem",
                }}
              >
                <FMTypography
                  displayText="Warranty Registration"
                  styleData={
                    !responsive
                      ? {
                          fontFamily: "Montserrat",
                          fontWeight: "600",
                          fontSize: "2.8rem",
                          lineHeight: "49px",
                          textAlign: "center",
                          color: "#000000",
                        }
                      : {
                          fontFamily: "Montserrat",
                          fontWeight: "600",
                          fontSize: "2.8rem",
                          lineHeight: "49px",
                          textAlign: "center",
                          color: "#000000",
                        }
                  }
                />
              </Col>
              <Col md={12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="name"
                  name="name"
                  placeholder="Name"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "555px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                      : {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "265px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                  }
                  {...register("name")}
                  error={errors.name ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.name?.message}
                />
              </Col>
              <Col md={12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="email"
                  name="email"
                  placeholder="Email"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "555px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                      : {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "265px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                  }
                  {...register("email")}
                  error={errors.email ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.email?.message}
                />
              </Col>
              <Col md={12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="mobileNo"
                  name="mobileNo"
                  placeholder="Mobile Number"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "555px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                      : {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "265px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                  }
                  {...register("mobileNo")}
                  error={errors.mobileNo ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.mobileNo?.message}
                />
              </Col>
              <Col md={12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "555px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                      : {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "265px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                  }
                  {...register("subject")}
                  error={errors.subject ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.subject?.message}
                />
              </Col>
              <Col md={12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="password"
                  name="password"
                  placeholder="Password"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "555px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                      : {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "265px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                  }
                  {...register("password")}
                  error={errors.password ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.password?.message}
                />
              </Col>
              <Col md={12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "555px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                      : {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "265px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                        }
                  }
                  {...register("confirmPassword")}
                  error={errors.confirmPassword ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.confirmPassword?.message}
                />
              </Col>
              {/* <Col md={12} style={{ paddingBottom: "40px" }}>
                <InputBase
                  required
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  sx={{
                    ...commonStyle.inputFieldContactStyle,
                    ...(errors.description && commonStyle.errorContactStyle),
                    width: "555px",
                    height: "165px",
                    border: "1px solid #E6E6E6",
                    borderRadius: "10px",
                  }}
                  {...register("message")}
                  error={errors.description ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.message?.message}
                />
              </Col> */}
              <Col style={{ paddingBottom: "40px" }}>
                <FMButton
                  displayText={"Submit"}
                  variant="outlined"
                  styleData={
                    !responsive
                      ? {
                          fontFamily: "Montserrat",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "16px",
                          lineHeight: "20px",
                          background: "#c02121",
                          width: "125px",
                          height: "52px",
                          borderRadius: "10px",
                          /* identical to box height */
                          color: "#FFFFFF",
                          "&:hover": {
                            border: "1px solid #222",
                            color: "black",
                            backgroundColor: "white",
                          },
                        }
                      : {
                          fontFamily: "Montserrat",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "16px",
                          lineHeight: "20px",
                          background: "#c02121",
                          width: "265px",
                          height: "44px",
                          borderRadius: "10px",
                          /* identical to box height */
                          color: "#FFFFFF",
                          "&:hover": {
                            border: "1px solid #222",
                            color: "black",
                            backgroundColor: "white",
                          },
                        }
                  }
                  onClick={handleSubmit(onSubmit)}
                />
              </Col>
              <ToastContainer />
            </Row>
          </Box>
        </Container>
      </Box>
      <Footer/>
    </>
  );
};

export default WarrantyRegisteration;
