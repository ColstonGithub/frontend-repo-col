import React, { useEffect, useState } from "react";
import { Box, InputBase } from "@mui/material";

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
import { useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";
import Footer from "components/Footer";

const style = {
  bgcolor: "background.paper",
  borderRadius: "20px",
  paddingTop: "40px",
  paddingBottom: "40px",
};

const WarrantyRegisteration = () => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(WarrantyFormSchema),
    mode: "onChange",
  });

  let responsive = useMediaQuery("(max-width:600px)");

  const handleImage = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data?.title?.toString());
    formData.append("email", data?.text?.toString());
    formData.append("mobileNo", data?.imageAltText?.toString());
    formData.append("subject", data?.subject?.toString());
    formData.append("image", image);

    //Dispatch the async thunk action
    dispatch(postWarrantyRegisteration(formData))
      .then((response) => {
        // Handle successful response
        if (response) {
          const usersListData = { page: 1 };
          dispatch(getBrandPage(usersListData));
          setOpen(false);
          setValue("name", "");
          setValue("email", "");
          setValue("mobileNo", "");
          setValue("subject", "");
          setImage("");
          notify({ type: "success", messgae: "Data Added Successfully" });
        } else {
          toast.error("form submission failed");
        }
      })
      .catch((error) => {
        // Handle error and access the error object values
        toast.error(error?.message);
      });
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
                          fontFamily: "Rajdhani",
                          fontWeight: "600",
                          fontSize: "2.8rem",
                          lineHeight: "49px",
                          textAlign: "center",
                          color: "#000000",
                        }
                      : {
                          fontFamily: "Rajdhani",
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
                          fontWeight: "600",
                        }
                      : {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "265px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                          fontWeight: "600",
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
                          fontWeight: "600",
                        }
                      : {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "265px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                          fontWeight: "600",
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
                          fontWeight: "600",
                        }
                      : {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "265px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                          fontWeight: "600",
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
                          fontWeight: "600",
                        }
                      : {
                          ...commonStyle.inputFieldContactStyle,
                          ...(errors.description &&
                            commonStyle.errorContactStyle),
                          width: "265px",
                          height: "52px",
                          border: "1px solid #E6E6E6",
                          borderRadius: "10px",
                          fontWeight: "600",
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

              <Col md={12} style={{ paddingBottom: "15px" }}>
                <InputBase
                  // required
                  id="image"
                  name="image"
                  type="file"
                  placeholder="Image"
                  accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                  onClick={handleImage}
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
                />
              </Col>
              <Col md={12}>
                {imagePreview && (
                  <Box className="my-4">
                    <div style={commonStyle.commonModalTitleStyle}>
                      {`Image Preview`}
                    </div>
                    <img
                      src={imagePreview}
                      style={{
                        width: "300px",
                        height: "300px",
                      }}
                    />
                  </Box>
                )}
              </Col>

              <Col md={12} style={{ paddingBottom: "40px" }}>
                <FMButton
                  displayText={"Submit"}
                  variant="outlined"
                  styleData={
                    !responsive
                      ? {
                          fontFamily: "Rajdhani",
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
                          fontFamily: "Rajdhani",
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
      <Footer />
    </>
  );
};

export default WarrantyRegisteration;
