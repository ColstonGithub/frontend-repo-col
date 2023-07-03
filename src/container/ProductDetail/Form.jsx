import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  OutlinedInput,
} from "@mui/material";

import FMButton from "components/FMButton/FMButton";
import FMTypography from "components/FMTypography/FMTypography";

import { commonStyle } from "Styles/commonStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enquiryFormSchema } from "validationSchema/enquiryFormSchema";
import FMInputLabel from "components/FMInputLabel/FMInputLabel";
//import { notify } from "components/FMToaster/FMToaster";
import Cross from "../../assets/ProductPage/Vector.png";
import { Row, Col, Container } from "react-bootstrap";
import { useMediaQuery } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(enquiryFormSchema),
    mode: "onChange",
  });

  const passwordToggle = () => {
    setPasswordType(!passwordType);
  };

  const onSubmit = (data) => {
    console.log("form submit");
    toast("form submited successfully");
    setTimeout(() => {
      setOpen(false);
    }, 5000);
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
                height: "586px",
                overflowY: responsiveMobile ? "scroll" : "none",
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
                      id="location"
                      name="location"
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
                  <Col md={12}>
                    <InputBase
                      required
                      id="description"
                      name="description"
                      placeholder="Description"
                      sx={{
                        ...commonStyle.inputFieldStyle,
                        ...(errors.description && commonStyle.errorStyle),
                        width: responsiveMobile ? "100%" : "555px",
                        height: responsiveMobile ? "70px" : "165px",
                        border: "1px solid #E6E6E6",
                        borderRadius: "10px",
                      }}
                      {...register("description")}
                      error={errors.description ? true : false}
                    />
                    <FMTypography
                      styleData={{ ...commonStyle.errorText, fontSize: "11px" }}
                      displayText={errors.description?.message}
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

// import React,{useState} from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function Form({open,handleClose}) {
//  // const [open, setOpen] = useState(false);
//  // const handleOpen = () => setOpen(true);
//   //const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//             <Typography id="transition-modal-title" variant="h6" component="h2">
//               Text in a modal
//             </Typography>
//             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </Typography>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }

// // import React, { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { Box, Grid, InputBase } from "@mui/material";

// // import { tests } from "constants/AppConstant";
// // import { EMAIL_VERIFY, FORGOTPASSWORD, LOGIN } from "Routes/Routes";

// // import FMButton from "components/FMButton/FMButton";
// // import FMTypography from "components/FMTypography/FMTypography";

// // import { login } from "Redux/Slices/Login/auth.slice";

// // import { commonStyle } from "Styles/commonStyles";

// // import { HeaderStyle } from "components/SearchBar/HeaderStyle";
// // import { setItem } from "services/commonService";
// // import { useForm } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import { loginSchema } from "validationSchema/loginSchema";
// // import FMOutlinedInput from "components/FMOutlinedInput/FMOutlinedInput";
// // import { signUpSchema } from "validationSchema/signupSchema";
// // import { signUpUser } from "Redux/Slices/SignUp/SignUp";

// // const Login = () => {
// //   const [passwordType, setPasswordType] = useState(true);
// //   const [confirmPasswordType, setConfirmPasswordType] = useState(true);
// //   const [passwordErrors, setPassowordErrors] = useState({
// //     length: true,
// //     upperCase: true,
// //     lowerCase: true,
// //     symbol: true,
// //     digits: true,
// //   });

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm({
// //     resolver: yupResolver(signUpSchema),
// //     mode: "onChange",
// //   });

// //   const passwordToggle = () => {
// //     setPasswordType(!passwordType);
// //   };
// //   const confirmPasswordToggle = () => {
// //     setConfirmPasswordType(!confirmPasswordType);
// //   };

// //   const handelPasswordChange = (e) => {
// //     const value = e.target.value;

// //     Object.keys(tests).forEach((error) => {
// //       const pattern = tests[error];
// //       setPassowordErrors((prev) => ({
// //         ...prev,
// //         [error]: !pattern.test(value),
// //       }));
// //     });
// //   };

// //   const registerField = (field, options = {}) => {
// //     const { onChange: fieldOnChange, ...restProps } = register(field);
// //     const { onChange } = options;

// //     const handleChange = (e) => {
// //       onChange?.(e);
// //       fieldOnChange(e);
// //     };

// //     return { onChange: handleChange, ...restProps };
// //   };

// //   const onSubmit = (data) => {
// //     const postData = {
// //       firstName: data?.firstName,
// //       lastName: data?.lastName,
// //       email: data?.email,
// //       password: data?.password,
// //       contactNumber: data?.contactNumber,
// //     };
// //   };

// //   return (
// //     <>
// //       <Grid container sx={commonStyle.mainGridContainer}>
// //         <Grid item sx={{ ...commonStyle.innerGrid, width: "400px" }}>
// //           <Box sx={commonStyle.formDetailsContainer}>
// //             <FMTypography
// //               displayText="Enquiry"
// //               styleData={{
// //                 fontFamily: "Montserrat",
// //                 fontStyle: "normal",
// //                 fontWeight: "600",
// //                 fontSize: "24px",
// //                 lineHeight: "29px",
// //                 color: "#222222",
// //               }}
// //             />
// //           </Box>
// //           <Box sx={commonStyle.formOuterBoxStyle}>
// //             <Box component="form" xs={12} onSubmit={handleSubmit(onSubmit)}>
// //               <Box sx={commonStyle.flexStyle}>
// //                 <Box sx={{ display: "flex" }}>
// //                   <Box sx={{ marginRight: "1rem" }}>
// //                     <InputBase
// //                       required
// //                       id="Name"
// //                       name="Name"
// //                       placeholder="Name"
// //                       sx={{
// //                         ...commonStyle.inputFieldStyle,

// //                         ...(errors.firstName && commonStyle.errorStyle),
// //                       }}
// //                       {...register("Name")}
// //                       error={errors.firstName ? true : false}
// //                     />
// //                     <FMTypography
// //                       styleData={{ ...commonStyle.errorText, fontSize: "11px" }}
// //                       displayText={errors.firstName?.message}
// //                     />
// //                   </Box>

// //                   <Box>
// //                     <InputBase
// //                       required
// //                       id="email"
// //                       name="email"
// //                       placeholder="Enter your email"
// //                       sx={{
// //                         ...commonStyle.inputFieldStyle,
// //                         ...(errors.email && commonStyle.errorStyle),
// //                       }}
// //                       {...register("email")}
// //                       error={errors.email ? true : false}
// //                     />
// //                     <FMTypography
// //                       styleData={commonStyle.errorText}
// //                       displayText={errors.email?.message}
// //                     />
// //                   </Box>
// //                 </Box>

// //                 <InputBase
// //                   required
// //                   id="contactNumber"
// //                   name="contactNumber"
// //                   placeholder="Enter your contact Number"
// //                   sx={{
// //                     ...commonStyle.inputFieldStyle,

// //                     ...(errors.contactNumber && commonStyle.errorStyle),
// //                   }}
// //                   {...register("contactNumber")}
// //                   error={errors.contactNumber ? true : false}
// //                 />
// //                 <FMTypography
// //                   styleData={commonStyle.errorText}
// //                   displayText={errors.contactNumber?.message}
// //                 />

// //                 <FMOutlinedInput
// //                   // inputLabel="Password"
// //                   placeholder="Subject"
// //                   type={subjectType ? "subject" : "text"}
// //                   register={registerField("subject", {
// //                     onChange: handelSubjectChange,
// //                   })}
// //                   error={!!errors.subject}
// //                   subjectToggle={subjectToggle}
// //                   subjectType={subjectType}
// //                   errors={errors}
// //                   errorKey="subject"
// //                 />

// //                 <FMOutlinedInput
// //                   // inputLabel="Password"
// //                   placeholder="Description"
// //                   type={descType ? "desc" : "text"}
// //                   register={registerField("desc")}
// //                   error={!!errors.desc}
// //                   descToggle={descToggle}
// //                   descType={descType}
// //                   errors={errors}
// //                   errorKey="desc"
// //                 />

// //                 <FMButton
// //                   displayText={"Submit"}
// //                   variant={"contained"}
// //                   styleData={{
// //                     ...commonStyle.buttonStyles,
// //                   }}
// //                   onClick={handleSubmit(onSubmit)}
// //                 />
// //                 <input type={"submit"} hidden />
// //               </Box>

// //             </Box>
// //           </Box>
// //         </Grid>
// //       </Grid>
// //     </>
// //   );
// // };

// // export default Login;

// // import React, { useEffect, useState } from "react";

// // import { TextField } from "@mui/material";
// // import { Send } from "@mui/icons-material";

// // import { useFormik } from "formik";
// // import * as Yup from "yup";

// // import FMTypography from "components/FMTypography/FMTypography";
// // import FMButton from "components/FMButton/FMButton";
// // import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

// // import FMOutlinedInput from "components/FMOutlinedInput/FMOutlinedInput";

// // import { commonStyle } from "Styles/commonStyles";
// // import { Box, Grid, InputBase } from "@mui/material";
// // import { Row, Col } from "react-bootstrap";
// // import FormControlContext from "@mui/material/FormControl/FormControlContext";

// // const validationSchema = Yup.object().shape({
// //   name: Yup.string().required("Name is required"),
// //   mobileNo: Yup.string().required("Name is required"),
// //   email: Yup.string()
// //     .email("Invalid email format")
// //     .required("Email is required"),
// //   subject: Yup.string().required("Message is required"),
// //   desc: Yup.string().required("Message is required"),
// // });

// // const Form = () => {
// //   // const formik = useFormik({
// //   //   initialValues: {
// //   //     name: "",
// //   //     email: "",
// //   //     mobileNo: "",
// //   //     subject: "",
// //   //     desc: "",
// //   //   },
// //   //   validationSchema: validationSchema,
// //   //   onSubmit: (values) => {
// //   //     alert(JSON.stringify(values, null, 2));
// //   //   },
// //   // });

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     mobileNo: "",
// //     subject: "",
// //     desc: "",
// //   });

// //   const [errors, setErrors] = useState({});

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const formErrors = validateForm(formData);
// //     if (Object.keys(formErrors).length === 0) {
// //       console.log("Form data:", formData);
// //       // submit form data here
// //     } else {
// //       setErrors(formErrors);
// //     }
// //   };

// //   const validateForm = (formData) => {
// //     let errors = {};
// //     if (!formData.name) {
// //       errors.name = "Name is required";
// //     }
// //     if (!formData.email) {
// //       errors.email = "Email is required";
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       errors.email = "Invalid email address";
// //     }
// //     if (!formData.password) {
// //       errors.password = "Password is required";
// //     } else if (formData.password.length < 6) {
// //       errors.password = "Password must be at least 6 characters";
// //     }
// //     if (formData.password !== formData.confirmPassword) {
// //       errors.confirmPassword = "Passwords do not match";
// //     }
// //     if (!formData.age) {
// //       errors.age = "Age is required";
// //     } else if (isNaN(formData.age)) {
// //       errors.age = "Age must be a number";
// //     }
// //     return errors;
// //   };
// //   //   const {
// //   //     register,
// //   //     handleSubmit,
// //   //     formState: { errors },
// //   //   } = useForm({
// //   //     resolver: yupResolver(signUpSchema),
// //   //     mode: "onChange",
// //   //   });

// //   return (
// //     <>
// //       <FormControl>
// //         <Row>
// //           <Col md={6}>
// //             <InputBase
// //               required
// //               id="name"
// //               name="name"
// //               placeholder="Name"
// //               sx={{
// //                 ...(errors.email && commonStyle.errorStyle),
// //               }}
// //               // {...register("email")}
// //               error={errors.email ? true : false}
// //             />
// //             <FMTypography
// //               styleData={commonStyle.errorText}
// //               displayText={errors.email?.message}
// //             />
// //           </Col>
// //           <Col md={6}>
// //             <InputBase
// //               required
// //               id="email"
// //               name="email"
// //               placeholder="Email"
// //               sx={{
// //                 ...(errors.email && commonStyle.errorStyle),
// //               }}
// //               // {...register("email")}
// //               error={errors.email ? true : false}
// //             />
// //             <FMTypography
// //               styleData={commonStyle.errorText}
// //               displayText={errors.email?.message}
// //             />
// //           </Col>

// //           <Col md={6}>
// //             <InputBase
// //               required
// //               id="mobileNo"
// //               name="mobileNO"
// //               placeholder="Mobile Number"
// //               sx={{
// //                 ...(errors.email && commonStyle.errorStyle),
// //               }}
// //               // {...register("email")}
// //               error={errors.email ? true : false}
// //             />
// //             <FMTypography
// //               styleData={commonStyle.errorText}
// //               displayText={errors.email?.message}
// //             />
// //           </Col>
// //           <Col md={6}>
// //             <InputBase
// //               required
// //               id="subject"
// //               name="subject"
// //               placeholder="Subject"
// //               sx={{
// //                 ...(errors.email && commonStyle.errorStyle),
// //               }}
// //               // {...register("email")}
// //               error={errors.email ? true : false}
// //             />
// //             <FMTypography
// //               styleData={commonStyle.errorText}
// //               displayText={errors.email?.message}
// //             />
// //           </Col>
// //           <Col md={6}>
// //             <InputBase
// //               required
// //               id="desc"
// //               name="desc"
// //               placeholder="Description"
// //               sx={{
// //                 ...(errors.email && commonStyle.errorStyle),
// //               }}
// //               // {...register("email")}
// //               error={errors.email ? true : false}
// //             />
// //             <FMTypography
// //               styleData={commonStyle.errorText}
// //               displayText={errors.email?.message}
// //             />
// //           </Col>
// //         </Row>
// //       </FormControl>

// //       {/* <FormHelperText id="my-helper-text">
// //           We'll never share your desc.
// //         </FormHelperText>
// //         <TextField
// //           fullWidth
// //           multiline
// //           rows={4}
// //           id="mobileNo"
// //           name="mobileNo"
// //           label="mobileNo"
// //           value={formik.values.mobileNo}
// //           onChange={formik.handleChange}
// //           error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
// //           helperText={formik.touched.mobileNo && formik.errors.mobileNo}
// //         /> */}
// //     </>
// //   );
// // };

// // export default Form;

// // <TextField
// // name="name"
// // label="Name"
// // variant="outlined"
// // margin="normal"
// // value={formData.name}
// // onChange={handleChange}
// // error={errors.name ? true : false}
// // helperText={errors.name}
// // fullWidth
// // />
// // <TextField
// // name="email"
// // label="Email"
// // variant="outlined"
// // margin="normal"
// // value={formData.email}
// // onChange={handleChange}
// // error={errors.email ? true : false}
// // helperText={errors.email}
// // fullWidth
// // />

// // <TextField
// // name="mobileNo"
// // label="Mobile Number"
// // type="text"
// // variant="outlined"
// // margin="normal"
// // value={formData.mobileNo}
// // onChange={handleChange}
// // error={errors.mobileNo ? true : false}
// // helperText={errors.mobileNo}
// // fullWidth
// // />

// // <TextField
// // id="subject"
// // name="subject"
// // label="Subject"
// // value={formData.subject}
// // onChange={handleChange}
// // error={errors.subject ? true : false}
// // helperText={errors.subject}
// // fullWidth
// // />
// // <TextField
// // id="desc"
// // name="desc"
// // label="Description"
// // value={formData.desc}
// // onChange={handleChange}
// // error={errors.desc ? true : false}
// // helperText={errors.desc}
// // fullWidth
// // />
