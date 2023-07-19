import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import { getBlogDetail } from "Redux/Slices/BlogDetailSlice/BlogDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const BlogDetail = () => {
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogDetail(params));
  }, [dispatch]);

  const blogDetail = useSelector((state) => state.blog.blog.Blogs);
  console.log(blogDetail);

  return (
    <>
      <Header />

      {blogDetail && blogDetail ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "2.8rem",
              paddingBottom: "40px",
            }}
          >
            <FMTypography
              displayText={blogDetail?.pageTitle}
              styleData={{
                color: "#EF1068",
                fontWeight: "500",
                fontSize: "1.5rem",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            />
          </Box>

          <Grid sx={{ padding: "0px 50px" }}>
            {/* product box below */}
            <div
              style={{
                borderRadius: "20px",
              }}
            >
              <img
                src={blogDetail?.image}
                style={{ width: "100%", height: "auto", maxHeight: "500px" }}
                alt="blog"
              />
            </div>

            <Box>
              <h3
                style={{
                  fontFamily: "Rajdhani",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "1.5rem",
                  lineHeight: "29px",
                  paddingTop: "24px",
                  color: "#222222",
                }}
              >
                {blogDetail?.pageHeading}
              </h3>
              <div
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
