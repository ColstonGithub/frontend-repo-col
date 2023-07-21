import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaYoutube } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import Footer from "components/Footer";
import Header from "components/SearchBar/Header";
import videoBanner from "assets/videoBanner.png";
import FMTypography from "components/FMTypography/FMTypography";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.breakpoints.up("sm") ? "1.8rem" : "1rem",
    paddingBottom: theme.breakpoints.up("sm") ? "1.8rem" : "1rem",
  },

  bannerImage: {
    width: "100%",
    borderRadius: theme.spacing(3),
  },
  videoContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    padding: theme.spacing(3, 0),
  },
  videoCard: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.spacing(2),
    overflow: "hidden",
    boxShadow: theme.shadows[2],
    cursor: "pointer",
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  videoThumbnail: {
    position: "relative",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    padding: theme.spacing(2),
    color: theme.palette.common.white,
  },
  videoInfo: {
    padding: theme.spacing(2),
  },
  videoTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  videoDescription: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
  },

  youtubeIcon: {
    color: "#fff",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#ff0000",
    },
  },
}));

const Videos = () => {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const containerRef = useRef(null);
  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [videos]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/video/getvideos?pageToken=${pageToken}`
      );
      console.log("response ", response);
      if (response.data) {
        const { videoData, nextPageToken } = response.data;
        setVideos((prevVideos) => [...prevVideos, ...videoData]);
        setPageToken(nextPageToken);
      } else {
        toast.error("Error fetching videos");
      }
    } catch (err) {
      toast.error("Error fetching videos:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <>
      <Header />
      <Box className={classes.headerContainer}>
        <FMTypography
          displayText={"Videos"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid container sx={{ padding: "0 3.2rem 3.2rem 3.2rem" }}>
        {/* Banner Image */}
        <Grid item xs={12}>
          <Box className={classes.bannerImage}>
            <img
              src={videoBanner}
              alt="youtube banner"
              className={classes.bannerImage}
              style={{ height: !responsiveMobile ? "650px" : "62vw" }}
            />
          </Box>
        </Grid>

        {/* Video Cards */}
        <Grid item xs={12} style={{ paddingTop: "2rem" }}>
          <Box className={classes.videoContainer}>
            {videos &&
              videos.map((video) => (
                <Card
                  key={video.id.videoId}
                  className={classes.videoCard}
                  onClick={() => handlePlayVideo(video.id.videoId)}
                >
                  <div className={classes.videoThumbnail}>
                    <CardMedia
                      component="img"
                      image={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                    />
                    <IconButton className={classes.playButton}>
                      <FaYoutube size={32} className={classes.youtubeIcon} />
                    </IconButton>
                  </div>
                  <CardContent className={classes.videoInfo}>
                    <Typography className={classes.videoTitle} variant="h3">
                      {video.snippet.title}
                    </Typography>
                    <Typography
                      className={classes.videoDescription}
                      variant="body2"
                    >
                      {video.snippet.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            <div ref={containerRef}></div>
          </Box>
        </Grid>
      </Grid>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Videos;
