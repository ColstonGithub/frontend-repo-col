import React, { useState, useEffect } from "react";
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
  Button,
  CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaYoutube } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import Footer from "components/Footer";
import Header from "components/SearchBar/Header";
import videoBanner from "assets/videoBanner.png";
import FMTypography from "components/FMTypography/FMTypography";

// Styles for the component and its elements using Material UI's styling library - makeStyles() hook is
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
    borderRadius: "24px !important",
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
    backgroundColor: "rgba(0, 0, 0, 0.5) !important",
    borderRadius: "50%",
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "#rgba(0, 0, 0, 0.3) !important",
    },
  },

  videoInfo: {
    padding: theme.spacing(2),
  },

  videoTitle: {
    fontSize: "1.2rem !important",
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

  loadMoreButton: {
    backgroundColor: "#ff0000 !important",
    borderColor: "#ff0000 !important",
    borderRadius: "42px !important",
    padding: "0.8rem 2.5rem !important",
    color: "#fff !important",
    "&:hover": {
      backgroundColor: "#C02121 !important",
      borderColor: "#C02121 !important",
    },
  },

}));

const Videos = () => {

  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreVideos, setHasMoreVideos] = useState(true);
  const responsiveMobile = useMediaQuery("(max-width: 600px)");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://64.227.150.49:5000/api/video/getvideos?pageToken=${pageToken}`
      );
      if (response.data) {
        const { videoData, nextPageToken } = response.data;

        if (!nextPageToken) {
          setHasMoreVideos(false);
        }

        setVideos((prevVideos) => [...prevVideos, ...videoData]);
        setPageToken(nextPageToken);
      } else {
        toast.error("Error fetching videos");
      }
    } catch (err) {
      toast.error("Error fetching videos", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    fetchData();
  };

  const handlePlayVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
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

        <Grid item xs={12} style={{ paddingTop: "2rem" }}>
          <Box className={classes.videoContainer}>
            {videos &&
              videos?.map((video) => (
                <Card
                  key={video?.id?.videoId}
                  className={classes.videoCard}
                  onClick={() => handlePlayVideo(video?.id?.videoId)}
                >
                  <div className={classes.videoThumbnail}>
                    <CardMedia
                      component="img"
                      image={video?.snippet?.thumbnails?.medium?.url}
                      alt={video?.snippet?.title}
                    />
                    <IconButton className={classes.playButton}>
                      <FaYoutube size={32} className={classes.youtubeIcon} />
                    </IconButton>
                  </div>
                  <CardContent className={classes.videoInfo}>
                    <Typography className={classes.videoTitle}>
                      {video?.snippet?.title}
                    </Typography>
                    <Typography
                      className={classes.videoDescription}
                      variant="body2"
                    >
                      {video?.snippet?.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
          </Box>
          {hasMoreVideos && (
            <Box display="flex" justifyContent="center" padding="2rem">
              <Button
                variant="contained"
                className={classes.loadMoreButton}
                onClick={handleLoadMore}
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Load More"
                )}
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Videos;
