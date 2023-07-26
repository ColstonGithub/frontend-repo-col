import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/SearchBar/Header";
import Typography from "@mui/material/Typography";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  useMediaQuery,
  Container,
  Button,
  CardContent,
  CardMedia,
} from "@mui/material";

import FMTypography from "components/FMTypography/FMTypography";
import { getBlogs } from "Redux/Slices/Blogs/BlogsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsCategory } from "Redux/Slices/BlogCategory/BlogCateogrySlice";
import { postBlogsByCategoryId } from "Redux/Slices/BlogsByCategoryId/postBlogsByCategoryIdSlice";
import Footer from "components/Footer";

const Blogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [blogCatId, setblogCatId] = useState(0);
  const responsiveMobile = useMediaQuery("(max-width: 500px)");
  const [blogList, setBlogList] = useState();
  const [blogListById, setBlogListById] = useState();

  useEffect(() => {
    dispatch(getBlogs());
    dispatch(getBlogsCategory());
    dispatch(postBlogsByCategoryId(blogCatId));
  }, [dispatch, blogCatId]);
  const blogsCategory = useSelector(
    (state) => state.blogsCategory?.blogsCategory?.blogCategoryList
  );
  const blogs = useSelector((state) => state.blogs?.blogs?.blogsList);
  const blogsByCategory = useSelector(
    (state) => state.blogsByCategoryId?.data?.blogs
  );

  const onCardClick = (element) => {
    let pId = element?._id;
    navigate(`/blogs/${pId}`);
  };
  const handleCategoryId = (id) => {
    setBlogList("");
    setBlogListById("");
    setblogCatId(id);
  };

  useEffect(() => {
    setBlogListById(blogsByCategory);
  }, [blogsByCategory]);

  useEffect(() => {
    setBlogList(blogs);
  }, [blogs]);
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
        }}
      >
        <FMTypography
          displayText={"Blogs"}
          styleData={{
            fontWeight: "600",
            fontSize: !responsiveMobile ? "2.8rem" : "2.4rem",
            textAlign: "center",
          }}
        />
        <FMTypography
          displayText={"Make every moment a celebration"}
          styleData={{
            fontWeight: "500",
            fontSize: !responsiveMobile ? "1.5rem" : "1.4rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "2.8rem",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            mt: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {blogsCategory?.map((item) => (
            <Button
              onClick={() => handleCategoryId(item?._id)}
              width="sm"
              sx={{
                color: "#222222",
                backgroundColor: "#E6E6E6",
                border: "1px solid #F7F7F7",
                boxShadow:
                  "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                borderRadius: "27px",
                padding: "10px 20px",
                margin: "0 5px",
              }}
            >
              {item?.name}
            </Button>
          ))}
        </Container>
      </Box>

      <Grid sx={{ padding: "0 3.2rem 3.2rem 3.2rem" }}>
        {/* product box below */}
        <Grid
          sx={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            flexBasis: "33.333333%",
            justifyContent: "space-evenly",
          }}
        >
          {blogListById && blogListById
            ? blogListById?.map((elem) => {
                return (
                  <Box key={elem?._id} onClick={() => onCardClick(elem)}>
                    <Card
                      sx={{
                        width: responsiveMobile ? "90vw" : "317px",
                        borderRadius: "20px",
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          sx={{
                            borderRadius: "20px",
                            height: "350px",
                            width: "350px",
                          }}
                          image={elem?.image}
                          alt={elem?.imageAltText}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                              fontSize: "18px",
                              color: "#2b2a29",
                              textAlign: "center",
                              width: "325px",
                              textTransform: "capitalize",
                            }}
                          >
                            {elem?.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                );
              })
            : blogList &&
              blogList?.map((elem) => {
                return (
                  <Box key={elem?._id} onClick={() => onCardClick(elem)}>
                    <Card
                      sx={{
                        width: responsiveMobile ? "90vw" : "317",
                        borderRadius: "20px",
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          sx={{
                            borderRadius: "20px",
                            height: "350px",
                            width: "350px",
                          }}
                          image={elem?.image}
                          alt={elem?.imageAltText}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                              fontSize: "18px",
                              color: "#2b2a29",
                              fontWeight: "600",
                              textAlign: "center",
                              width: "325px",
                              textTransform: "capitalize",
                            }}
                          >
                            {elem?.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                );
              })}
          {/* prodct box ended */}
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default Blogs;
