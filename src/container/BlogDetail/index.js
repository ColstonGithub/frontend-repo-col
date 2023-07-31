import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import { getBlogDetail } from "Redux/Slices/BlogDetailSlice/BlogDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const BlogDetail = () => {
  const params = useParams();
  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogDetail(params));
  }, [dispatch]);

  const blogDetail = useSelector((state) => state.blog.blog.Blogs);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Header />

      {blogDetail && blogDetail ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: !responsiveMobile ? "1.8rem" : "1rem",
              paddingBottom: !responsiveMobile ? "1.8rem" : "1rem",
            }}
          >
            <FMTypography
              displayText={blogDetail?.pageTitle}
              styleData={{
                color: "#EF1068",
                fontWeight: "600",
                fontSize: "2.8rem",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            />
          </Box>

          <Grid
            sx={{
              padding: !responsiveMobile
                ? "0px 3.2rem 5rem"
                : "0px 1.4rem 5rem",
            }}
          >
            {/* product box below */}
            <div
              style={{
                borderRadius: "20px",
              }}
            >
              <img
                src={blogDetail?.image}
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  height: !responsiveMobile ? "650px" : "62vw",
                }}
                alt="blog"
              />
            </div>

            <Box style={{ paddingTop: "2rem" }}>
              <h3
                style={{
                  fontFamily: "Rajdhani",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "29px",
                  paddingTop: "24px",
                  textAlign: "center",
                  color: "#2b2a29",
                  fontSize: "2.3rem",
                  paddingBottom: "10px",
                  textTransform: "capitalize",
                }}
              >
                {blogDetail?.pageHeading}
              </h3>
              <div
                style={{ whiteSpace: "pre-wrap", fontSize: "1.3rem" }}
                dangerouslySetInnerHTML={{ __html: blogDetail?.text }}
              />
            </Box>
          </Grid>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default BlogDetail;
