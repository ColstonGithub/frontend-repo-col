import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import { getBlogs } from "Redux/Slices/Blogs/BlogsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsCategory } from "Redux/Slices/BlogCategory/BlogCateogrySlice";
import { postBlogsByCategoryId } from "Redux/Slices/BlogsByCategoryId/postBlogsByCategoryIdSlice";
import allFilters from "../../assets/Frame 18.png";
import Footer from "components/Footer";
const Blogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [blogCatId, setblogCatId] = useState(0);
  const responsiveMobile = useMediaQuery("(max-width: 500px)");

  useEffect(() => {
    dispatch(getBlogs());
    dispatch(getBlogsCategory());
   dispatch(postBlogsByCategoryId(blogCatId));
  }, [dispatch, blogCatId]);

  const blogs = useSelector((state) => state.blogs.blogs.blogsList);
  const blogsCategory = useSelector(
    (state) => state.blogsCategory.blogsCategory.blogCategoryList
  );

  const blogsByCategory = useSelector((state) => state.blogsByCategoryId.data.blogs);

  console.log("PostFaqIdByCategory", blogsByCategory);

  const onCardClick = (element) => {
    let pId = element?._id;
    navigate(`/blogs/${pId}`);
  };
  const handleCategoryId = (id) => {
    setblogCatId(id);
  };
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
          {/* <Button
            onClick={handleCategoryId}
            width="sm"
            sx={{
              color: "#222222",
              background: "#E6E6E6",
              border: "1px solid #E6E6E6",
              borderRadius: "19px",
              padding: "10px 20px",
              margin: "0 5px",
            }}
          >
            <div>
              <img src={allFilters} alt="" />
            </div>{" "}
            <span className="mx-2">All Filtters</span>
          </Button> */}
          {blogsCategory?.map((item) => (
            <Button
              onClick={() => handleCategoryId(item._id)}
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
              {item.name}
            </Button>
          ))}
        </Container>
      </Box>

      <Grid>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexBasis: "33.333333%",
            justifyContent: "space-evenly",
          }}
        >
          {/* {blogs?.map((elem) => (
            <Box key={elem._id} onClick={() => onCardClick(elem)}>
              <Card
                sx={{
                  width: responsiveMobile ? "90vw" : "317",
                  borderRadius: "20px",
                }}
              >
                <CardActionArea>
                  <Box className="zoomin">
                    <img src={elem?.image} alt={elem?.imageAltText} />
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "1rem",
                      lineHeight: "20px",
                      color: "#FFFFFF",
                      position: "absolute",
                      marginLeft: "16px",
                      bottom: "0",
                      top: "78%",
                    }}
                  >
                    {elem?.title}
                    <Link style={{ paddingLeft: "12px" }}></Link>
                  </Typography>
                </CardActionArea>
              </Card>
            </Box>
          ))}  */}
          {blogsByCategory?.map((elem) => (
            <Box key={elem._id} onClick={() => onCardClick(elem)}>
              <Card
                sx={{
                  width: responsiveMobile ? "90vw" : "317px", 
                  height: !responsiveMobile ? "auto" : "62vw",
                  borderRadius: "20px", 
                  margin: '1rem' 
                }}
              >
                <CardActionArea>
                  <Box className="zoomin">
                    <img src={elem?.image} alt={elem?.imageAltText} />
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "1rem",
                      lineHeight: "20px",
                      color: "#FFFFFF",
                      position: "absolute",
                      marginLeft: "16px",
                      bottom: "0",
                      top: "78%",
                    }}
                  >
                    {elem?.title}
                    <Link style={{ paddingLeft: "12px" }}></Link>
                  </Typography>
                </CardActionArea>
              </Card>
            </Box>
          ))} 
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
};

export default Blogs;
