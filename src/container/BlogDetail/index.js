// import React, { useEffect } from "react";
// import Header from "components/SearchBar/Header";
// import { Box, Grid, useMediaQuery } from "@mui/material";
// import FMTypography from "components/FMTypography/FMTypography";

// import { getBlogDetail } from "Redux/Slices/BlogDetailSlice/BlogDetailSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router";
// import Footer from "components/Footer";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// const BlogDetail = () => {
//   const params = useParams();
//   const responsiveMobile = useMediaQuery("(max-width: 600px)");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   useEffect(() => {
//     dispatch(getBlogDetail(params));
//   }, [dispatch]);

//   const blogDetail = useSelector((state) => state.blog.blog.Blogs);
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <>
//       <Header />

//       {blogDetail && blogDetail ? (
//         <>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               paddingTop: !responsiveMobile ? "1.8rem" : "1rem",
//               paddingBottom: !responsiveMobile ? "1.8rem" : "1rem",
//             }}
//           >
//             <FMTypography
//               displayText={blogDetail?.pageTitle}
//               styleData={{
//                 color: "#EF1068",
//                 fontWeight: "600",
//                 fontSize: "2.8rem",
//                 textAlign: "center",
//                 textTransform: "uppercase",
//               }}
//             />
//           </Box>

//           <Grid
//             sx={{
//               padding: !responsiveMobile
//                 ? "0px 3.2rem 5rem"
//                 : "0px 1.4rem 5rem",
//             }}
//           >
//             {/* product box below */}
//             <div
//               style={{
//                 borderRadius: "20px",
//               }}
//             >
//               <img
//                 src={blogDetail?.image}
//                 style={{
//                   width: "100%",
//                   borderRadius: "20px",
//                   height: !responsiveMobile ? "650px" : "62vw",
//                 }}
//                 alt="blog"
//               />
//             </div>

//             <Box style={{ paddingTop: "2rem" }}>
//               <h3
//                 style={{
//                   fontFamily: "Rajdhani",
//                   fontStyle: "normal",
//                   fontWeight: "600",
//                   lineHeight: "29px",
//                   paddingTop: "24px",
//                   textAlign: "center",
//                   color: "#2b2a29",
//                   fontSize: "2.3rem",
//                   paddingBottom: "10px",
//                   textTransform: "capitalize",
//                 }}
//               >
//                 {blogDetail?.pageHeading}
//               </h3>
//               <div
//                 style={{ whiteSpace: "pre-wrap", fontSize: "1.3rem" }}
//                 dangerouslySetInnerHTML={{ __html: blogDetail?.text }}
//               />
//             </Box>
//           </Grid>
//         </>
//       ) : (
//         <Box
//           sx={{
//             padding: "0 2rem 2rem 2rem",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "start",
//           }}
//         >
//           <ArrowBackIcon
//             sx={{ marginRight: "3rem", cursor: "pointer" }}
//             onClick={() => navigate(-1)}
//           />{" "}
//           <FMTypography
//             displayText={"No details Found !"}
//             styleData={{ fontSize: "2rem", fontFamily: "Inter" }}
//           />
//         </Box>
//       )}
//       <Footer />
//     </>
//   );
// };

// export default BlogDetail;
import React, { useEffect, useState } from "react";
import Header from "components/SearchBar/Header";
import { Box, Grid, useMediaQuery, CircularProgress } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import { getBlogDetail } from "Redux/Slices/BlogDetailSlice/BlogDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import Footer from "components/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BlogDetail = () => {
  const params = useParams();
  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    dispatch(getBlogDetail(params))
      .then(() => {
        setLoading(false); // Set loading to false when API call is complete
      })
      .catch((error) => {
        console.error("Error fetching blog detail:", error);
        setLoading(false); // Handle error and set loading to false
      });
  }, [dispatch, params]);

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

      {loading ? ( // Display loader while loading is true
        <CircularProgress
          style={{ margin: "auto", display: "block", marginTop: "20px" }}
        />
      ) : blogDetail && blogDetail ? (
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
        <Box
          sx={{
            padding: "0 2rem 2rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <ArrowBackIcon
            sx={{ marginRight: "3rem", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />{" "}
          <FMTypography
            displayText={"No details Found !"}
            styleData={{ fontSize: "2rem", fontFamily: "Inter" }}
          />
        </Box>
      )}
      <Footer />
    </>
  );
};

export default BlogDetail;
