import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postFaqId } from "Redux/Slices/FAQ/FaqCategoryId";
import { getfaqcategory } from "Redux/Slices/FAQ/GetFaqCategory";
import { getFaqs } from "Redux/Slices/FAQ/GetFaqs";
import SearchIcon from "../../assets/Vector (2).png";
import {
  Input,
  Box,
  Grid,
  Container,
  Button,
  CircularProgress,
} from "@mui/material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";
import Header from "components/SearchBar/Header";
import FMTypography from "components/FMTypography/FMTypography";
import { SearchStyle } from "../../components/SearchBar/searchBarStyles";
import "../../components/SearchBar/searchBarMedia.css";
import Footer from "components/Footer";
import { Col, Row } from "react-bootstrap";
import { makeStyles } from "@mui/styles";
import "./faq.css";
const useStyles = makeStyles((theme) => ({
  questionStyle: {
    color: "#2b2a29",
    transition: "1s all ease",
    fontWeight: "600 !important",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.2rem !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2rem !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("xxl")]: {
      fontSize: "1.5rem",
    },
  },

  answerStyle: {
    color: "#2b2a29",
    transition: "1s all ease",
    fontWeight: "500 !important",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.1rem !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.up("xxl")]: {
      fontSize: "1.4rem",
    },
  },
}));

const Faq = () => {
  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  const dispatch = useDispatch();
  const [faqId, setFaqId] = useState(0);
  const [faqList, setFaqList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [showFaqList, setShowFaqList] = useState(true);
  const [faqListById, setFaqListById] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const classes = useStyles();

  useEffect(() => {
    setLoading(true); // Set loading state to true before API calls
    dispatch(getFaqs())
      .then((response) => {
        setFaqList(response.payload?.faqList || []);
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after API call is done
      });
    dispatch(getfaqcategory());
  }, [dispatch]);

  const faqs = useSelector((state) => state.getFaqsList?.faqs?.faqList || []);
  const GetFaqCategory = useSelector(
    (state) => state.getFaqCategory?.data?.faqCategoryList || []
  );

  useEffect(() => {
    setFaqList(faqs);
  }, [faqs]);

  useEffect(() => {
    setFaqListById([]); // Clear faqListById when a category is clicked to fetch fresh data
    if (faqId !== 0) {
      setLoading(true); // Set loading state to true before API call
      dispatch(postFaqId(faqId))
        .then((response) => {
          setFaqListById(response.payload?.faqs || []);
        })
        .finally(() => {
          setLoading(false); // Set loading state to false after API call is done
        });
    }
  }, [faqId]);

  const handleCategoryId = (id) => {
    setFaqId(id);
    setShowFaqList(true);
    setFaqList([]);
    setSearchResult([]);
  };

  const handleShowAllFaqs = () => {
    // Clear faqId and fetch all FAQs
    setFaqId(0);
    setShowFaqList(true);
    setFaqListById([]);
    setSearchResult([]);
    setLoading(true); // Set loading state to true before API call
    dispatch(getFaqs())
      .then((response) => {
        setFaqList(response.payload?.faqList || []);
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after API call is done
      });
  };

  const handleSearchFaq = (e) => {
    setLoading(true); // Set loading state to true before searching
    const searchValue = e.target.value.trim();
    if (searchValue === "") {
      setShowFaqList(true);
      setFaqList(faqs);
      setSearchResult([]);
    } else {
      setShowFaqList(false);
      setSearchResult(
        faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchValue.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
    setLoading(false); // Set loading state to false after searching
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      
        <Row style={{ margin: "0" }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{ ...SearchStyle?.searchBoxWrapper }}
              className="searchBoxWrapper"
            >
              <Input
                placeholder={"Search questions"}
                onChange={handleSearchFaq}
                sx={SearchStyle?.inputField}
                disableUnderline
              />
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
          {/* Add a button for showing all FAQs */}
          <Button
            key="all"
            onClick={handleShowAllFaqs}
            width="sm"
            sx={{
              color: "#222222",
              backgroundColor: faqId === 0 ? "#E6E6E6" : "#FFFFFF",
              border: "1px solid #F7F7F7",
              boxShadow:
                "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
              borderRadius: "27px",
              padding: "0.625rem 1.25rem",
              margin: "0 5px",
            }}
          >
            All
          </Button>
          {/* Render the existing category buttons */}
          {GetFaqCategory.map((item) => (
            <Button
              key={item?._id}
              onClick={() => handleCategoryId(item?._id)}
              width="sm"
              sx={{
                color: "#222222",
                backgroundColor: faqId === item?._id ? "#E6E6E6" : "#FFFFFF",
                border: "1px solid #F7F7F7",
                boxShadow:
                  "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                borderRadius: "27px",
                padding: "0.625rem 1.25rem",
                margin: "0 5px",
              }}
            >
              {item?.name}
            </Button>
          ))}
        </Container>
      </Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px", // Adjust height based on your requirement
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: !responsiveMobile ? "0px 50px 80px" : "0 0 20px",
            margin: "0 auto",
            maxWidth: !responsiveMobile ? "60vw" : "90vw",
            transition: "1s all ease",
          }}
        >
          {showFaqList
            ? (faqListById?.length > 0 ? faqListById : faqList).map((faq) => (
                <Accordion
                  key={faq?.id}
                  sx={{
                    border: "0",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                    margin: "20px 0",
                    transition: "1s all ease",
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
                    <Typography className={classes.questionStyle}>
                      {faq?.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.answerStyle}>
                      {faq?.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            : null}
          {searchResult.map((faq) => (
            <Accordion
              key={faq.id}
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
          ))}
        </Grid>
      )}
      <Footer />
    </>
  );
};

export default Faq;
