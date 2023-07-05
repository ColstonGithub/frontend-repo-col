export const SearchStyle = {
  searchBoxWrapper: {
    display: "flex",
    alignItems: "center",
    width: "321px",
    height: "52px",
    background: "#FFFFFF",
    border: "1px solid #F7F7F7",
    boxShadow:
      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
    borderRadius: "27px",
    justifyContent: "space-around",
  },

  searchIcon: {
    marginRight: "0.625rem",
    color: "#1a1a1a66",
  },
  inputField: {
    "&.MuiInput-input": {
      lineHeight: "1.3125rem",
      fontFamily: "'Rajdhani'",
      fontStyle: "normal",
      fontWeight: "400",
      color: "black",
      fontSize: "0.875rem",
    },

    "&::placeholder": {
      fontFamily: "'Rajdhani'",
      fontWeight: "300",
      fontSize: "16px",
      color: "#717171",
    },
  },
  cancelIcon: {
    color: "#1a1a1a66",
    cursor: "pointer",
  },
};
