import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import {
  Box,

  InputBase,
} from "@mui/material";

import FMButton from "components/FMButton/FMButton";
import FMTypography from "components/FMTypography/FMTypography";

import { commonStyle } from "Styles/commonStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Cross from "../../assets/ProductPage/Vector.png";
import { Row, Col, Container } from "react-bootstrap";
import { useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postContactUs } from "Redux/Slices/Forms/postContactUs";
import { contactFormSchema } from "validationSchema/contactFormSchema";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "20px",
};

export default function Form({ open, handleClose, setOpen }) {
  const [passwordType, setPasswordType] = useState(true);
  const responsiveMobile = useMediaQuery("(max-width: 800px)");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    mode: "onChange",
  });

  const passwordToggle = () => {
    setPasswordType(!passwordType);
  };

  const onSubmit = (data) => {
    dispatch(postContactUs(data));
    toast("form submited successfully");
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Container
              fluid
              style={{
                width: responsiveMobile ? "90vw" : "635px",
                height: "auto",
                overflowY: "hidden",
                background: "#FFFFFF",
                boxShadow:
                  "0px -1px 12px rgb(181 180 180 / 12%), 0px 1px 12px rgb(181 180 180 / 12%)",
                borderRadius: "20px",
                padding: "0px 40px 0px 40px",
              }}
            >
              <Box component="form" xs={12}>
                <Row>
                  <Col
                    md={12}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "35px 40px",
                    }}
                  >
                    <FMTypography
                      displayText="Enquiry"
                      styleData={commonStyle.headingStyle}
                    />
                    <div onClick={handleClose} style={{ cursor: "pointer" }}>
                      <img src={Cross} alt="x" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <InputBase
                      required
                      id="name"
                      name="name"
                      placeholder="Name"
                      sx={{
                        ...commonStyle.inputFieldStyle,
                        ...(errors.name && commonStyle.errorStyle),
                      }}
                      {...register("name")}
                      error={errors.name ? true : false}
                    />
                    <FMTypography
                      styleData={{ ...commonStyle.errorText, fontSize: "11px" }}
                      displayText={errors.name?.message}
                    />
                  </Col>
                  <Col md={6}>
                    <InputBase
                      required
                      id="email"
                      name="email"
                      placeholder="Email"
                      sx={{
                        ...commonStyle.inputFieldStyle,
                        ...(errors.email && commonStyle.errorStyle),
                      }}
                      {...register("email")}
                      error={errors.email ? true : false}
                    />
                    <FMTypography
                      styleData={{ ...commonStyle.errorText, fontSize: "11px" }}
                      displayText={errors.email?.message}
                    />
                  </Col>
                  <Col md={6}>
                    <InputBase
                      required
                      id="mobileNo"
                      name="mobileNo"
                      placeholder="Mobile Number"
                      sx={{
                        ...commonStyle.inputFieldStyle,
                        ...(errors.mobileNo && commonStyle.errorStyle),
                      }}
                      {...register("mobileNo")}
                      error={errors.mobileNo ? true : false}
                    />
                    <FMTypography
                      styleData={{ ...commonStyle.errorText, fontSize: "11px" }}
                      displayText={errors.mobileNo?.message}
                    />
                  </Col>
                  <Col md={6}>
                    <InputBase
                      required
                      id="subject"
                      name="subject"
                      placeholder="Location"
                      sx={{
                        ...commonStyle.inputFieldStyle,
                        ...(errors.subject && commonStyle.errorStyle),
                      }}
                      {...register("subject")}
                      error={errors.subject ? true : false}
                    />
                    <FMTypography
                      styleData={{ ...commonStyle.errorText, fontSize: "11px" }}
                      displayText={errors.subject?.message}
                    />
                  </Col>
                  <Col md={12} xd={6} sm={6}>
                    <InputBase
                      required
                      id="message"
                      name="message"
                      placeholder="Message"
                      sx={{
                        ...commonStyle.inputFieldStyle,
                        ...(errors.description && commonStyle.errorStyle),
                        width: responsiveMobile ? "100%" : "555px",
                        height: responsiveMobile ? "70px" : "165px",
                        border: "1px solid #E6E6E6",
                        borderRadius: "10px",
                      }}
                      {...register("message")}
                      error={errors.description ? true : false}
                    />
                    <FMTypography
                      styleData={{ ...commonStyle.errorText, fontSize: "11px" }}
                      displayText={errors.description?.message}
                    />
                  </Col>
                  <Col md={12} style={{ paddingBottom: "40px" }}>
                    <FMButton
                      displayText={"Submit"}
                      variant="outlined"
                      styleData={{
                        fontFamily: "Rajdhani",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "20px",
                        background: "#222",
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
        </Fade>
      </Modal>
    </div>
  );
}
