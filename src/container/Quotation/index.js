import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  InputBase,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

import FMButton from "components/FMButton/FMButton";
import FMTypography from "components/FMTypography/FMTypography";

import { commonStyle } from "Styles/commonStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { QuotationSchema } from "validationSchema/quotationSchema";
import { Row, Col, Container, Dropdown } from "react-bootstrap";
import Header from "components/SearchBar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getQuotation } from "Redux/Slices/Forms/getQuotation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCategory } from "Redux/Slices/GetCategory/GetCategory";
import { useMediaQuery } from "@mui/material";
const style = {
  bgcolor: "background.paper",
  borderRadius: "20px",
  paddingTop: "40px",
};

const Quotation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const category = useSelector(
    (state) => state?.getCategoryList?.category?.categoryList
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(QuotationSchema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);

    dispatch(getQuotation(data));
    toast("Request for Quotation submited successfull ");
    // setTimeout(() => {
    //   navigate("/");
    // }, 5000);
  };
  let responsive = useMediaQuery("(max-width:500px)");
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

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
                  padding: "35px 40px",
                }}
              >
                <FMTypography
                  displayText="Request For Quotation"
                  styleData={{
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "30px",
                    lineHeight: "49px",
                    textAlign: "center",
                    color: "#000000",
                  }}
                />
              </Col>
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="name"
                  name="name"
                  placeholder="Name"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="email"
                  name="email"
                  placeholder="Email"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="mobileNo"
                  name="mobileNo"
                  placeholder="Mobile Number"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
                  id="address"
                  name="address"
                  placeholder="address"
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
                  {...register("address")}
                  error={errors.address ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.address?.message}
                />
              </Col>
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="landmark"
                  name="landmark"
                  placeholder="landmark"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
                  {...register("landmark")}
                  error={errors.landmark ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.landmark?.message}
                />
              </Col>
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="pincode"
                  name="pincode"
                  placeholder="pincode"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
                  {...register("pincode")}
                  error={errors.pincode ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.pincode?.message}
                />
              </Col>
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <Select
                  required
                  id="state"
                  name="state"
                  placeholder="state"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
                  {...register("state")}
                  error={errors.state ? true : false}
                  // inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>State</em>
                  </MenuItem>
                  {states?.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>

                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.state?.message}
                />
              </Col>
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="city"
                  name="city"
                  placeholder="city"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
                  {...register("city")}
                  error={errors.city ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.city?.message}
                />
              </Col>
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <Select
                  required
                  id="productCategory"
                  name="productCategory"
                  placeholder="productCategory"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
                  {...register("productCategory")}
                  error={errors.productCategory ? true : false}
                >
                  {category?.map((item) => (
                    <MenuItem value={item.name}>{item.name}</MenuItem>
                  ))}
                </Select>
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.productCategory?.message}
                />
              </Col>
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="productCodeName"
                  name="productCodeName"
                  placeholder="productCodeName"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
                  {...register("productCodeName")}
                  error={errors.productCodeName ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.productCodeName?.message}
                />
              </Col>
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  type="Date"
                  id="purchaseDate"
                  name="purchaseDate"
                  placeholder="purchase Date"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
                  {...register("purchaseDate")}
                  error={errors.purchaseDate ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.purchaseDate?.message}
                />
              </Col>
              <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="dealerName"
                  name="dealerName"
                  placeholder="dealer Name"
                  sx={
                    !responsive
                      ? {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.name && commonStyle.errorContactStyle),
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
                  {...register("dealerName")}
                  error={errors.dealerName ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.dealerName?.message}
                />
              </Col>
              <Col md={12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="problem"
                  name="problem"
                  placeholder="problem"
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
                  {...register("problem")}
                  error={errors.problem ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.problem?.message}
                />
              </Col>
              <Col md={12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="callType"
                  name="callType"
                  placeholder="callType"
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
                  {...register("callType")}
                  error={errors.callType ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.callType?.message}
                />
              </Col>

              <Col style={{ paddingBottom: "40px" }}>
                <FMButton
                  displayText={"Submit"}
                  variant="outlined"
                  styleData={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "20px",
                    background: "#C02222",
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
                  }}
                  onClick={handleSubmit(onSubmit)}
                />
              </Col>
              <ToastContainer />
            </Row>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Quotation;
