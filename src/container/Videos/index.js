import React, { useEffect, useState } from "react";
import Header from "components/SearchBar/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Box,
  Grid,
  CardMedia,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";

import FMTypography from "components/FMTypography/FMTypography";
import { postVideo } from "Redux/Slices/Videos/Videos";
import Footer from "components/Footer";
const Videos = () => {
  const responsiveMobile = useMediaQuery("(max-width: 500px)");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(postVideo());
  }, [dispatch]);

  const video = useSelector((state) => state?.videos?.banners?.videoData);
  console.log("video", video);
  const videos = [
    "https://www.youtube.com/embed/zHlSgxg8Zpk",
    "https://www.youtube.com/embed/zHlSgxg8Zpk",
    "https://www.youtube.com/embed/zHlSgxg8Zpk",
  ];
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "2.8rem",
          paddingBottom: "2.8rem",
        }}
      >
        <FMTypography
          displayText={"Videos"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: "3.2rem 3.2rem" }}>
        <Box
          sx={{
            borderRadius: "20px",
            padding: "0px 3.2rem 5rem",
          }}
        >
          <ReactPlayer
            height="800px"
            width="800px"
            position="absolute"
            url={
              "https://colston-app.s3.ap-south-1.amazonaws.com/oUDGOTCnjU-big_buck_bunny_240p_30mb.mp4"
            }
            playing={true}
            controls={true}
          />
        </Box>

        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexBasis: "33.333333%",
            justifyContent: "space-evenly",
          }}
        >
          {video?.map((video) => (
            <Box>
              <Card
                sx={{
                  width: responsiveMobile ? "90vw" : "317",
                  borderRadius: "20px",
                }}
              >
                <ReactPlayer
                  component="iframe"
                  url={video.video}
                  sx={{
                    borderRadius: "20px",
                    height: "317px",
                    width: "317px",
                  }}
                />
              </Card>
            </Box>
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
    // <>
    //   <Header />
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "center",
    //       marginTop: "2.8rem",
    //     }}
    //   >
    //     <FMTypography
    //       displayText={"Videos"}
    //       styleData={{
    //         fontWeight: "600",
    //         fontSize: "2.8rem",
    //         textAlign: "center",
    //       }}
    //     />
    //   </Box>

    //   <Grid sx={{ padding: "3.2rem 3.2rem" }}>
    //     {/* product box below */}
    //     <Grid
    //       sx={{
    //         display: "flex",
    //         flexWrap: "wrap",
    //         flexBasis: "33.333333%",
    //         justifyContent: "space-evenly",
    //       }}
    //     >
    //       {videos?.map((elem) => (
    //         <Box>
    //           <Card
    //             sx={{
    //               width: responsiveMobile ? "90vw" : "317",
    //               borderRadius: "20px",
    //             }}
    //           >
    //             <CardActionArea>
    //               <CardMedia
    //                 component="img"
    //                 sx={{
    //                   borderRadius: "20px",
    //                   height: "317px",
    //                   width: "317px",
    //                 }}
    //                 image={elem?.categoryImage}
    //                 alt={elem?.imageAltText}
    //               />
    //               <CardContent>
    //                 <Typography
    //                   gutterBottom
    //                   variant="h5"
    //                   component="div"
    //                   sx={{
    //                     fontSize: "19px",
    //                     color: "#ffffff",
    //                     fontWeight: "450",
    //                     textAlign: "center",
    //                     position: "absolute",
    //                     bottom: "10%",
    //                     left: "35%",
    //                   }}
    //                 >
    //                   {elem?.name}
    //                 </Typography>
    //               </CardContent>
    //             </CardActionArea>
    //           </Card>
    //         </Box>
    //       ))}
    //       {/* prodct box ended */}
    //     </Grid>
    // </Grid>
    // </>
  );
};

export default Videos;
