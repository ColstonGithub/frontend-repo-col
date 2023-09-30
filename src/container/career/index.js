import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import Footer from "components/Footer";
import { Link, useParams } from "react-router-dom";
import { Box, Grid, InputBase, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FMButton from "components/FMButton/FMButton";
import FMTypography from "components/FMTypography/FMTypography";
import { commonStyle } from "Styles/commonStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { careerFormSchema } from "validationSchema/careerFormSchema";
import { Row, Col, Container, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postCareer } from "Redux/Slices/Forms/postCareer";
import { getCareerDetails } from "Redux/Slices/CareerDeatils/CareerDetailsSlice";
const style = {
  bgcolor: "background.paper",
  borderRadius: "20px",
  paddingTop: "80px",
  paddingBottom: "40px",
};

const Career = () => {
  const params = useParams();
  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(careerFormSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data?.name?.toString());
    formData.append("email", data?.email?.toString());
    formData.append("mobileNo", data?.mobileNo?.toString());
    formData.append("subject", data?.subject?.toString());
    formData.append("pdf", data?.pdf[0]);
    formData.append("message", data?.message?.toString());

    dispatch(postCareer(formData))
      .then((response) => {
        if (response) {
          setValue("name", "");
          setValue("email", "");
          setValue("mobileNo", "");
          setValue("subject", "");
          setValue("message", "");
          setValue("pdf", "");
          toast("Form Submited Successfully");
        } else {
          toast.error("Form Submission Failed");
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });

    // setTimeout(() => {
    //   navigate("/");
    // }, 5000);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // useEffect(() => {
  //   dispatch(getCareer(params));
  // }, [dispatch, params]);

  // const Career = useSelector(
  //   (state) => state.Career.brand.brandproduct
  // );
  useEffect(() => {
    dispatch(getCareerDetails());
  }, [dispatch]);

  let careerDetail = useSelector(
    (state) => state?.CareerDetails?.careerDetails?.careerDetailsList
  );

  careerDetail = careerDetail ? careerDetail[0] : {};

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
          displayText={"Careers"}
          styleData={{
            fontFamily: "Rajdhani",
            fontWeight: "600",
            fontSize: !responsiveMobile ? "2.8rem" : "2.4rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid
        sx={{
          padding: !responsiveMobile ? "0px 3.2rem 5rem" : "0px 1.4rem 5rem",
        }}
      >
        {/* product box below */}
        <div
          style={{
            borderRadius: "20px",
          }}
        >
          <img
            src={careerDetail?.image}
            style={{
              width: "100%",
              height: !responsiveMobile ? "650px" : "62vw",
              borderRadius: "20px",
            }}
            alt={
              careerDetail?.imageAltText
                ? careerDetail?.imageAltText
                : "imageAltText"
            }
          />
        </div>

        <Box style={{ paddingTop: "2rem" }}>
          <h3
            style={{
              fontFamily: "Rajdhani",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "2.3rem",
              paddingBottom: "10px",
              lineHeight: "29px",
              paddingTop: "24px",
              color: "#2b2a29",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            {careerDetail?.contentHeading}
          </h3>
          <p
            style={{
              fontFamily: "Rajdhani",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.3rem",
              color: "#2b2a29",
            }}
          >
            {careerDetail?.contentText}
          </p>
        </Box>

        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              to={
                "https://app.pyjamahr.com/careers?company=colston%20concepts&company_uuid=124A078763"
              }
              target="_blank"
              style={{ paddingBottom: "40px" }}
            >
              <FMButton
                displayText={"Apply Here"}
                variant="outlined"
                styleData={
                  !responsiveMobile
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
              />
            </Link>
          </Box>
          <FMTypography
            displayText="OR"
            styleData={{
              fontFamily: "Rajdhani",
              fontWeight: "600",
              fontSize: "2rem",
              textAlign: "center",
              color: "#000000",
            }}
          />
          <FMTypography
            displayText="Fill the Form Below"
            styleData={{
              fontFamily: "Rajdhani",
              fontWeight: "600",
              fontSize: "2rem",
              textAlign: "center",
              color: "#000000",
              paddingBottom: "40px",
            }}
          />
          <Container
            fluid
            style={
              !responsiveMobile
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
                    displayText="Careers"
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
                <Col
                  md={!responsiveMobile ? 6 : 12}
                  style={{ paddingBottom: "15px" }}
                >
                  <InputBase
                    required
                    id="name"
                    name="name"
                    placeholder="Name"
                    sx={
                      !responsiveMobile
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
                <Col
                  md={!responsiveMobile ? 6 : 12}
                  style={{ paddingBottom: "15px" }}
                >
                  <InputBase
                    required
                    id="email"
                    name="email"
                    placeholder="Email"
                    sx={
                      !responsiveMobile
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
                <Col
                  md={!responsiveMobile ? 6 : 12}
                  style={{ paddingBottom: "15px" }}
                >
                  <InputBase
                    required
                    id="mobileNo"
                    name="mobileNo"
                    placeholder="Mobile Number"
                    sx={
                      !responsiveMobile
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
                <Col
                  md={!responsiveMobile ? 6 : 12}
                  style={{ paddingBottom: "15px" }}
                >
                  <InputBase
                    required
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    sx={
                      !responsiveMobile
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
                <Col md={12} style={{ paddingBottom: "15px" }}>
                  <InputBase
                    // required
                    id="pdf"
                    name="pdf"
                    type="file"
                    accept="pdf/*"
                    sx={
                      !responsiveMobile
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
                    {...register("pdf")}
                    error={errors.pdf ? true : false}
                  />
                  {/* <Button variant="contained" component="label">
                  Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>{" "} */}
                  <FMTypography
                    styleData={{
                      ...commonStyle.errorContactText,
                      fontSize: "11px",
                    }}
                    displayText={errors.pdf?.message}
                  />
                </Col>
                <Col md={12} style={{ paddingBottom: "40px" }}>
                  <InputBase
                    required
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    sx={
                      !responsiveMobile
                        ? {
                            ...commonStyle.inputFieldContactStyle,
                            ...(errors.description &&
                              commonStyle.errorContactStyle),
                            width: "555px",
                            height: "165px",
                            border: "1px solid #E6E6E6",
                            borderRadius: "10px",
                          }
                        : {
                            ...commonStyle.inputFieldContactStyle,
                            ...(errors.description &&
                              commonStyle.errorContactStyle),
                            width: "265px",
                            height: "165px",
                            border: "1px solid #E6E6E6",
                            borderRadius: "10px",
                          }
                    }
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
                </Col>
                <Col style={{ paddingBottom: "40px" }}>
                  <FMButton
                    displayText={"Submit"}
                    variant="outlined"
                    styleData={
                      !responsiveMobile
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
      </Grid>
      <Footer />
    </>
  );
};

export default Career;

// import React, { useState, useEffect } from "react";
// import { Box, InputBase } from "@mui/material";

// import FMButton from "components/FMButton/FMButton";
// import FMTypography from "components/FMTypography/FMTypography";

// import { commonStyle } from "Styles/commonStyles";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { careerFormSchema } from "validationSchema/careerFormSchema";
// import { Row, Col, Container } from "react-bootstrap";
// import Header from "components/SearchBar/Header";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { postCareer } from "Redux/Slices/Forms/postCareer";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useMediaQuery } from "@mui/material";
// import Footer from "components/Footer";
// const style = {
//   bgcolor: "background.paper",
//   borderRadius: "20px",
//   paddingTop: "40px",
//   paddingBottom: "40px",
// };

// const Career = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = useForm({
//     resolver: yupResolver(careerFormSchema),
//     mode: "onChange",
//   });
//   let responsive = useMediaQuery("(max-width:600px)");
//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("name", data?.name?.toString());
//     formData.append("email", data?.email?.toString());
//     formData.append("mobileNo", data?.mobileNo?.toString());
//     formData.append("subject", data?.subject?.toString());
//     formData.append("pdf", data?.pdf[0]);
//     formData.append("message", data?.message?.toString());

//     console.log("formData ", formData);

//     dispatch(postCareer(formData))
//       .then((response) => {
//         if (response) {
//           setValue("name", "");
//           setValue("email", "");
//           setValue("mobileNo", "");
//           setValue("subject", "");
//           setValue("message", "");
//           setValue("pdf", "");
//           toast("Form Submited Successfully");
//         } else {
//           toast.error("Form Submission Failed");
//         }
//       })
//       .catch((error) => {
//         toast.error(error?.message);
//       });

//     // setTimeout(() => {
//     //   navigate("/");
//     // }, 5000);
//   };
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);
//   return (
//     <>
//       <Header />
//       <Box sx={style}>
//         <Container
//           fluid
//           style={
//             !responsive
//               ? {
//                   width: "635px",
//                   height: "auto",
//                   background: "#FFFFFF",
//                   boxShadow:
//                     "0px -1px 12px rgb(181 180 180 / 12%), 0px 1px 12px rgb(181 180 180 / 12%)",
//                   borderRadius: "20px",
//                   padding: "0px 40px 0px 40px",
//                 }
//               : {
//                   width: "331px",
//                   height: "auto",
//                   background: "#FFFFFF",
//                   boxShadow:
//                     "0px -1px 12px rgb(181 180 180 / 12%), 0px 1px 12px rgb(181 180 180 / 12%)",
//                   borderRadius: "20px",
//                   padding: "0px 27px 0px 27px",
//                 }
//           }
//         >
//           <Box component="form" xs={12}>
//             <Row>
//               <Col
//                 md={12}
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   padding: "35px 40px",
//                 }}
//               >
//                 <FMTypography
//                   displayText="Career"
//                   styleData={{
//                     fontFamily: "Rajdhani",
//                     fontWeight: "600",
//                     fontSize: "2.8rem",
//                     lineHeight: "49px",
//                     textAlign: "center",
//                     color: "#000000",
//                   }}
//                 />
//               </Col>
//               <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "15px" }}>
//                 <InputBase
//                   required
//                   id="name"
//                   name="name"
//                   placeholder="Name"
//                   sx={
//                     !responsive
//                       ? {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.name && commonStyle.errorContactStyle),
//                         }
//                       : {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.description &&
//                             commonStyle.errorContactStyle),
//                           width: "265px",
//                           height: "52px",
//                           border: "1px solid #E6E6E6",
//                           borderRadius: "10px",
//                         }
//                   }
//                   {...register("name")}
//                   error={errors.name ? true : false}
//                 />
//                 <FMTypography
//                   styleData={{
//                     ...commonStyle.errorContactText,
//                     fontSize: "11px",
//                   }}
//                   displayText={errors.name?.message}
//                 />
//               </Col>
//               <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "15px" }}>
//                 <InputBase
//                   required
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   sx={
//                     !responsive
//                       ? {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.name && commonStyle.errorContactStyle),
//                         }
//                       : {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.description &&
//                             commonStyle.errorContactStyle),
//                           width: "265px",
//                           height: "52px",
//                           border: "1px solid #E6E6E6",
//                           borderRadius: "10px",
//                         }
//                   }
//                   {...register("email")}
//                   error={errors.email ? true : false}
//                 />
//                 <FMTypography
//                   styleData={{
//                     ...commonStyle.errorContactText,
//                     fontSize: "11px",
//                   }}
//                   displayText={errors.email?.message}
//                 />
//               </Col>
//               <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "15px" }}>
//                 <InputBase
//                   required
//                   id="mobileNo"
//                   name="mobileNo"
//                   placeholder="Mobile Number"
//                   sx={
//                     !responsive
//                       ? {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.name && commonStyle.errorContactStyle),
//                         }
//                       : {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.description &&
//                             commonStyle.errorContactStyle),
//                           width: "265px",
//                           height: "52px",
//                           border: "1px solid #E6E6E6",
//                           borderRadius: "10px",
//                         }
//                   }
//                   {...register("mobileNo")}
//                   error={errors.mobileNo ? true : false}
//                 />
//                 <FMTypography
//                   styleData={{
//                     ...commonStyle.errorContactText,
//                     fontSize: "11px",
//                   }}
//                   displayText={errors.mobileNo?.message}
//                 />
//               </Col>
//               <Col md={!responsive ? 6 : 12} style={{ paddingBottom: "15px" }}>
//                 <InputBase
//                   required
//                   id="subject"
//                   name="subject"
//                   placeholder="Subject"
//                   sx={
//                     !responsive
//                       ? {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.name && commonStyle.errorContactStyle),
//                         }
//                       : {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.description &&
//                             commonStyle.errorContactStyle),
//                           width: "265px",
//                           height: "52px",
//                           border: "1px solid #E6E6E6",
//                           borderRadius: "10px",
//                         }
//                   }
//                   {...register("subject")}
//                   error={errors.subject ? true : false}
//                 />
//                 <FMTypography
//                   styleData={{
//                     ...commonStyle.errorContactText,
//                     fontSize: "11px",
//                   }}
//                   displayText={errors.subject?.message}
//                 />
//               </Col>
//               <Col md={12} style={{ paddingBottom: "15px" }}>
//                 <InputBase
//                   // required
//                   id="pdf"
//                   name="pdf"
//                   type="file"
//                   accept="pdf/*"
//                   sx={
//                     !responsive
//                       ? {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.description &&
//                             commonStyle.errorContactStyle),
//                           width: "555px",
//                           height: "52px",
//                           border: "1px solid #E6E6E6",
//                           borderRadius: "10px",
//                         }
//                       : {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.description &&
//                             commonStyle.errorContactStyle),
//                           width: "265px",
//                           height: "52px",
//                           border: "1px solid #E6E6E6",
//                           borderRadius: "10px",
//                         }
//                   }
//                   {...register("pdf")}
//                   error={errors.pdf ? true : false}
//                 />
//                 {/* <Button variant="contained" component="label">
//                   Upload
//                   <input hidden accept="image/*" multiple type="file" />
//                 </Button>{" "} */}
//                 <FMTypography
//                   styleData={{
//                     ...commonStyle.errorContactText,
//                     fontSize: "11px",
//                   }}
//                   displayText={errors.pdf?.message}
//                 />
//               </Col>
//               <Col md={12} style={{ paddingBottom: "40px" }}>
//                 <InputBase
//                   required
//                   id="message"
//                   name="message"
//                   placeholder="Your Message"
//                   sx={
//                     !responsive
//                       ? {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.description &&
//                             commonStyle.errorContactStyle),
//                           width: "555px",
//                           height: "165px",
//                           border: "1px solid #E6E6E6",
//                           borderRadius: "10px",
//                         }
//                       : {
//                           ...commonStyle.inputFieldContactStyle,
//                           ...(errors.description &&
//                             commonStyle.errorContactStyle),
//                           width: "265px",
//                           height: "165px",
//                           border: "1px solid #E6E6E6",
//                           borderRadius: "10px",
//                         }
//                   }
//                   {...register("message")}
//                   error={errors.description ? true : false}
//                 />
//                 <FMTypography
//                   styleData={{
//                     ...commonStyle.errorContactText,
//                     fontSize: "11px",
//                   }}
//                   displayText={errors.message?.message}
//                 />
//               </Col>
//               <Col style={{ paddingBottom: "40px" }}>
//                 <FMButton
//                   displayText={"Submit"}
//                   variant="outlined"
//                   styleData={
//                     !responsive
//                       ? {
//                           fontFamily: "Rajdhani",
//                           fontStyle: "normal",
//                           fontWeight: "600",
//                           fontSize: "16px",
//                           lineHeight: "20px",
//                           background: "#c02121",
//                           width: "125px",
//                           height: "52px",
//                           borderRadius: "10px",
//                           /* identical to box height */
//                           color: "#FFFFFF",
//                           "&:hover": {
//                             border: "1px solid #222",
//                             color: "black",
//                             backgroundColor: "white",
//                           },
//                         }
//                       : {
//                           fontFamily: "Rajdhani",
//                           fontStyle: "normal",
//                           fontWeight: "600",
//                           fontSize: "16px",
//                           lineHeight: "20px",
//                           background: "#c02121",
//                           width: "265px",
//                           height: "44px",
//                           borderRadius: "10px",
//                           /* identical to box height */
//                           color: "#FFFFFF",
//                           "&:hover": {
//                             border: "1px solid #222",
//                             color: "black",
//                             backgroundColor: "white",
//                           },
//                         }
//                   }
//                   onClick={handleSubmit(onSubmit)}
//                 />
//               </Col>
//               <ToastContainer />
//             </Row>
//           </Box>
//         </Container>
//       </Box>
//       <Footer />
//     </>
//   );
// };

// export default Career;
