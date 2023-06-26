import React, { useState, useEffect } from "react";
import Header from "components/SearchBar/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { postFaqId } from "Redux/Slices/FAQ/FaqCategoryId";
import Footer from "components/Footer";
import { getfaqcategory } from "Redux/Slices/FAQ/GetFaqCategory";
import { Box, Grid, Container, Button, Input } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import { postSearch } from "Redux/Slices/Search/Search";
import { SearchStyle } from "../../components/SearchBar/searchBarStyles";
import "../../components/SearchBar/searchBarMedia.css";
import SearchIcon from "../../assets/Vector (2).png";
import { Col, Row } from "react-bootstrap";
import { postSearchFaq } from "Redux/Slices/SearchFaq/SearchFaq";
import { getFaqs } from "Redux/Slices/FAQ/GetFaqs";

const Faq = () => {
  const responsiveMobile = useMediaQuery("(max-width: 500px)");

  const dispatch = useDispatch();
  const [faqId, setFaqId] = useState(0);
  const [faqList, setFaqList] = useState();

  let searchResult = useSelector((state) => state?.searchFaq.data.products);

  useEffect(() => {
    dispatch(getFaqs());
    dispatch(postFaqId(faqId));
    dispatch(getfaqcategory());
  }, [dispatch, faqId]);

  const GetFaqCategory = useSelector(
    (state) => state.getFaqCategory?.data?.faqCategoryList
  );

  const PostFaqIdByCategory = useSelector(
    (state) => state.faqCategoryId.data.faqs
  );

  const faqs = useSelector((state) => state.getFaqsList?.faqs.faqData);

  const handleCategoryId = (id) => {
    setFaqList("");
    setFaqId(id);
  };
  const handleSearchFaq = (e) => {
    dispatch(postSearchFaq(e.target.value));
  };

  useEffect(() => {
    setFaqList(faqs);
  }, []);

  return (
    <>
      <Header /> 
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: !responsiveMobile ? "2.8rem" : "1.65rem",
          paddingBottom: !responsiveMobile ? "2.8rem" : "1.65rem",
        }}
      >
        <FMTypography
          displayText={"Frequently Asked Questions"}
          styleData={{
            fontWeight: "600",
            fontSize: !responsiveMobile ? "2.8rem" : "2.4rem",
            textAlign: "center",
          }}
        />
        <FMTypography
          displayText={"Our FAQ's"}
          styleData={{
            fontWeight: "500",
            fontSize: !responsiveMobile ? "1rem" : "1.2rem",
            textAlign: "center",
            padding: "1rem 0",
          }}
        />
        <FMTypography
          displayText={"Have any questions?"}
          styleData={{
            fontWeight: "500",
            fontSize: !responsiveMobile ? "2rem" : "1.6rem",
            textAlign: "center",
          }}
        />
        <Row style={{ margin: "0" }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Box
              sx={{ ...SearchStyle.searchBoxWrapper }}
              className="searchBoxWrapper"
            >
              <Input
                // fullWidth
                placeholder={"Search questions"}
                onChange={(e) => {
                  handleSearchFaq(e);
                }}
                // value={value}
                sx={SearchStyle.inputField}
                disableUnderline
              />
              {/* <SearchIcon sx={SearchStyle.searchIcon} /> */}
              <div>
                <img src={SearchIcon} alt="Search" />
              </div>
            </Box>
          </Col>
        </Row>

        <Container
          maxWidth="xl"
          sx={{
            mt: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {GetFaqCategory?.map((item) => (
            <Button
              onClick={() => handleCategoryId(item._id)}
              width="sm"
              sx={{
                color: "#222222",
                backgroundColor: faqId === item._id ? "#E6E6E6" : "#FFFFFF",
                border: "1px solid #F7F7F7",
                boxShadow:
                  "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                borderRadius: "27px",
                padding: "0.625rem 1.25rem",
                margin: "0 5px",
              }}
            >
              {item.name}
            </Button>
          ))}
        </Container>
      </Box>

      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: !responsiveMobile ? "0px 50px 80px" : "0 0 20px",
          margin: "0 auto",
          maxWidth: !responsiveMobile ? "60vw" : "90vw",
        }}
      >
        {faqList && faqList
          ? faqList?.map((faq) => {
              return (
                <Accordion
                  sx={{
                    border: "0",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                    margin: "20px 0",
                    boxShadow:
                      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      minHeight: "65px",
                    }}
                  >
                    <Typography sx={{ fontWeight: 500 }}>
                      {faq?.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq?.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })
          : searchResult?.length > 0
          ? searchResult?.map((faq) => {
              return (
                <Accordion
                  sx={{
                    border: "0",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                    margin: "20px 0",
                    boxShadow:
                      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      minHeight: "65px",
                    }}
                  >
                    <Typography sx={{ fontWeight: 500 }}>
                      {faq?.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq?.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })
          : PostFaqIdByCategory?.map((faq) => {
              return (
                <Accordion
                  sx={{
                    border: "0",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                    margin: "20px 0",
                    boxShadow:
                      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      minHeight: "65px",
                    }}
                  >
                    <Typography sx={{ fontWeight: 500 }}>
                      {faq?.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq?.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
      </Grid>

      <Footer />
    </>
  );
};

export default Faq;
