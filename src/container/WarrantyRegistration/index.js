import React, { useEffect, useState } from "react";
import { Box, InputBase } from "@mui/material";
import { Row, Col, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";

import FMButton from "components/FMButton/FMButton";
import FMTypography from "components/FMTypography/FMTypography";
import Header from "components/SearchBar/Header";
import Footer from "components/Footer";
import { notify, getImagePreview } from "constants/utils";
import { postWarrantyRegisteration } from "Redux/Slices/Forms/postWarrantyRegistration";

import { commonStyle } from "Styles/commonStyles";
import { WarrantyFormSchema } from "validationSchema/WarrantyFormSchema";

const style = {
  bgcolor: "background.paper",
  borderRadius: "20px",
  paddingTop: "40px",
  paddingBottom: "40px",
};

const inputFieldStyle = {
  ...commonStyle.inputFieldContactStyle,
  width: "555px",
  height: "52px",
  border: "1px solid #E6E6E6",
  borderRadius: "10px",
  fontWeight: "600",
};

const buttonStyle = {
  fontFamily: "Rajdhani",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "20px",
  background: "#c02121",
  width: "125px",
  height: "52px",
  borderRadius: "10px",
  color: "#FFFFFF",
  "&:hover": {
    border: "1px solid #222",
    color: "black",
    backgroundColor: "white",
  },
};

const WarrantyRegisteration = () => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(WarrantyFormSchema),
    mode: "onChange",
  });

  let responsive = useMediaQuery("(max-width:600px)");

  const handleImage = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      setImage(selectedImage);
    } else {
      notify({ type: "error", message: "Image not loaded try again" });
    }
  };

  const handleFormSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data?.title?.toString());
    formData.append("email", data?.text?.toString());
    formData.append("mobileNo", data?.imageAltText?.toString());
    formData.append("subject", data?.subject?.toString());
    formData.append("image", image);

    dispatch(postWarrantyRegisteration(formData))
      .then((response) => {
        if (response) {
          setValue("name", "");
          setValue("email", "");
          setValue("mobileNo", "");
          setValue("subject", "");
          setImage("");
          notify({ type: "success", message: "Data Added Successfully" });
        } else {
          toast.error("Form submission failed");
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <>
      <Header />
      <Box sx={style}>
        <Container
          fluid
          style={{
            width: !responsive ? "635px" : "331px",
            height: "auto",
            background: "#FFFFFF",
            boxShadow:
              "0px -1px 12px rgb(181 180 180 / 12%), 0px 1px 12px rgb(181 180 180 / 12%)",
            borderRadius: "20px",
            padding: !responsive ? "0px 40px" : "0px 27px",
          }}
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
                  styleData={{
                    fontFamily: "Rajdhani",
                    fontWeight: "600",
                    fontSize: "2.8rem",
                    lineHeight: "49px",
                    textAlign: "center",
                    color: "#000000",
                  }}
                />
              </Col>
              <Col md={12} style={{ paddingBottom: "10px" }}>
                <InputBase
                  required
                  id="name"
                  name="name"
                  placeholder="Name"
                  sx={inputFieldStyle}
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
                  sx={inputFieldStyle}
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
                  sx={inputFieldStyle}
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
                  sx={inputFieldStyle}
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
                  id="image"
                  name="image"
                  type="file"
                  placeholder="Image"
                  accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                  onChange={handleImage} 
                  sx={inputFieldStyle}
                />
                {imagePreview && imagePreview ? (
                  <Box className="my-4">
                    <div
                      style={commonStyle.commonModalTitleStyle}
                      className="pb-2 fw-bold"
                    >{`Image Preview`}</div>
                    <img
                      src={imagePreview}
                      style={{
                        width: "300px",
                        height: "300px",
                      }}
                    />
                  </Box>
                ) : (
                  <></>
                )}
              </Col>
              <Col md={12} style={{ paddingBottom: "40px" }}>
                <FMButton
                  displayText={"Submit"}
                  variant="outlined"
                  styleData={buttonStyle}
                  onClick={handleSubmit(handleFormSubmit)}
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
