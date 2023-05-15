import React from "react";
import SearchIcon from "../../assets/SearchIcon.svg";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSearch } from "Redux/Slices/Search/Search";

import { SearchStyle } from "./searchBarStyles";
import "./searchBarMedia.css";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";

const SearchBar = ({
  placeholder,
  onChange,
  value,
  clearText,
  cancelIconRight,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const history = useHistory();

  let searchResult = useSelector((state) => state?.search?.data?.products);
  const onProductClick = (id) => {
    searchResult = [];
    navigate(`/product-detail/${id}`);
  };

  // if (history.location.pathname !== history.listen.pathname) {
  //   searchResult = [];
  // }
  return (
    <Box sx={SearchStyle.searchBoxWrapper} className="searchBoxWrapper">
      <Input
        // fullWidth
        placeholder={placeholder}
        onChange={(e) => {
          dispatch(postSearch(e.target.value));
        }}
        value={value}
        sx={SearchStyle.inputField}
        disableUnderline
      />
      {/* <SearchIcon sx={SearchStyle.searchIcon} /> */}
      <div>
        <img src={SearchIcon} alt="Search" />
      </div>{" "}
      <div
        style={{
          position: "absolute",
          top: "55px",
          zIndex: 999,
          backgroundColor: "#fff",
          width: "95%",
          borderRadius: "20px",
          border: "0px ",
        }}
      >
        {searchResult?.length > 0 ? (
          <Table>
            <TableBody>
              {searchResult?.map((result) => (
                <TableRow key={result.id}>
                  {/* <TableCell>{result.id}</TableCell> */}
                  <TableCell onClick={() => onProductClick(result._id)}>
                    {result.name}
                  </TableCell>
                  {/* <TableCell>{result.price}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div> </div>
        )}
      </div>
      {cancelIconRight && value.length !== 0 && (
        <CloseOutlinedIcon onClick={clearText} sx={SearchStyle.cancelIcon} />
      )}
    </Box>
  );
};

export default SearchBar;
