import { CANCEL_GREY_BORDER, LIGHT_GREY_BORDER } from "constants/colors";
export const commonStyle = {
  flexDisplayStyle: { display: "flex" },
  capitalizeTextStyle: { textTransform: "capitalize" },
  mainGridContainer: {
    display: "flex",
    alignItems: "center",
    background: "white",
    height: "75vh",
    justifyContent: "center",
  },
  innerGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem",
    marginTop: "5rem",
    borderRadius: "20px",
    boxShadow:
      " 0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
  },
  formOuterBoxStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  flexStyle: {
    display: "flex",
    flexDirection: "column",
  },

  inputFieldStyle: {
    width: "265px",
    height: "52px",
    border: "1px solid #E6E6E6",
    borderRadius: "10px",
    marginBottom: "15px",
    color: "black",
    fontFamily: "Rajdhani",
    fontStyle: "normal",
    fontWeight: "400",
    paddingLeft: "20px",
    fontSize: "16px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      color: "black",
    },
    "&::placeholder": {
      fontFamily: "Rajdhani",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      paddingLeft: "20px",
      /* identical to box height */
      color: "#B4B4B4",
      opacity: "1",
    },
  },

  errorStyle: {
    border: "0.125rem solid red",

    "&:hover": {
      border: "0.125rem solid red",
    },
  },
  errorText: {
    width: "100%",
    color: "red",
    height: "1.25rem",
    fontSize: "0.875rem",
    paddingBottom: "30px",
  },

  inputFieldContactStyle: {
    width: "265px",
    height: "52px",
    border: "1px solid #E6E6E6",
    borderRadius: "10px",
    color: "black",
    fontFamily: "Rajdhani",
    fontStyle: "normal",
    fontWeight: "400",
    paddingLeft: "20px",
    fontSize: "16px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      color: "black",
    },
    "&::placeholder": {
      fontFamily: "Rajdhani",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      paddingLeft: "20px",
      /* identical to box height */
      color: "#717171",
      opacity: "1",
    },
  },

  errorContactStyle: {
    border: "0.125rem solid red",

    "&:hover": {
      border: "0.125rem solid red",
    },
  },
  errorContactText: {
    width: "100%",
    color: "red",
    paddingTop: "10px",
    fontSize: "0.875rem",
  },

  paddingZero: {
    padding: 0,
  },
  buttonBox: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "1.625rem",
  },
  buttonStyles: {
    width: "auto",
    height: "2.75rem",
    backgroundColor: "#801317",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "700",
    lineHeight: "1.5rem",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#801317",
    },
  },
  textTransformStyle: {
    textTransform: "none",
    fontFamily: " 'Rajdhani', sans-serif",
    fontWeight: "600",
  },
  disableRippleStyle: {
    color: "#717171",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  inputLabelStyle: {
    fontStyle: "normal",
    fontFamily: " 'Rajdhani', sans-serif",
    fontSize: "1.063rem",
    marginTop: "1rem",
    lineHeight: "1.25rem",
    color: "rgba(26,26,26,0.4)",
    fontWeight: "600",
  },
  headingStyle: {
    fontWeight: "600",
    fontSize: "1.5rem",
  },
  dropdownStyle: {
    background: "white",
    boxShadow: `0rem 0.0625rem 0.125rem ${LIGHT_GREY_BORDER}`,
    borderRadius: "0.5rem",
    height: "2.75rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: `0.0625rem solid ${CANCEL_GREY_BORDER}`,
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: `0.0625rem solid ${CANCEL_GREY_BORDER}`,
      },
    },
  },
};
