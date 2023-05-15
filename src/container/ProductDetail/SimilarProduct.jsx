import React, { useState, useEffect } from "react";
import Slider from "react-slick-slider";
import { Container, Row, Col } from "react-bootstrap";
import Data from "../../JsonDatas/JsonData";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductPageDetail } from "Redux/Slices/GetProducts/ProductPageDetails";
import { Grid, useMediaQuery } from "@mui/material";
const SimilarProduct = () => {
  const [idata, setIdata] = useState(Data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  // const { id } = params;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getProductPageDetail(params));
  }, [dispatch, params]);
  const responsiveMobile = useMediaQuery("(max-width: 500px)");
  let productDetail = useSelector((state) => state.ProductPageDetail?.data);

  productDetail = productDetail?.relatedProducts
    ? productDetail?.relatedProducts
    : [];
  console.log("productDetail", productDetail);

  const category_settings = {
    dots: false,
    infinite: true,
    speed: 200,
    draggable: true,
    centerPadding: "0px",
    centerMode: true,
    autoplay: true,
    arrows: true,
    slidesToShow: responsiveMobile ? 1 : 3,
    slidesToScroll: 1,
  };

  const onCardClick = (element) => {
    navigate(`/product-detail/${element}`);
  };

  return (
    <div className="bestseller samecard ">
      <Container fluid style={{marginTop:"80px"}}> 
        <Row>
          <Col>
            <div className="heading_text">
              <h3>Similar Products</h3>
            </div>
          </Col>
          <Col md={13}>
            <Slider {...category_settings}>
              {productDetail?.map((idata, i) => (
                <div
                  className="banner_img text-center"
                  // key={}
                  onClick={() => onCardClick(idata?._id)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={idata?.productPictures[0]?.img}
                    className="img-fluid"
                    alt={idata?.productPictures[0]?.imageAltText}
                  />
                  <div className="card_name">
                    <h4>{idata?.name}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SimilarProduct;

// import React, { useState } from "react";
// import Slider from "react-slick-slider";
// import { Container, Row, Col } from "react-bootstrap";
// import Data from "../../JsonDatas/JsonData";
// import FMTypography from "components/FMTypography/FMTypography";
// import {
//   Avatar,
//   Box,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Grid,
//   InputBase,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";

// import Carousel from "react-multi-carousel";
// const SimilarProduct = () => {
//   const [idata, setIdata] = useState(Data);

//   const category_settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     draggable: true,
//     centerPadding: "0px",
//     centerMode: true,
//     autoplay: false,
//     arrows: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   };

//   const responsive = {
//     desktop: {
//       breakpoint: {
//         max: 3000,
//         min: 1024,
//       },
//       items: 3,
//       slidesToSlide: 2,
//       // partialVisibilityGutter: 40,
//     },
//     mobile: {
//       breakpoint: {
//         max: 464,
//         min: 0,
//       },
//       items: 2,
//       slidesToSlide: 2,
//       // partialVisibilityGutter: 30,
//     },
//     tablet: {
//       breakpoint: {
//         max: 1024,
//         min: 200,
//       },
//       items: 1,
//       slidesToSlide: 1,
//       // partialVisibilityGutter: 30,
//     },
//   };

//   return (
//         <>
//         <Grid sx={{ marginTop: "80px" }}>
//         <FMTypography
//           displayText={"You may also Like"}
//           styleData={{
//             textAlign: "center",
//             fontWeight: "600",
//             fontSize: "40px",
//           }}
//         />
//         <Carousel
//           showDots={false}
//           deviceType={responsive.deviceType}
//           // arrows={false}
//           autoPlay={responsive.deviceType !== "mobile" ? true : false}
//           ssr
//           slidesToSlide={1}
//           containerClass="carousel-with-custom-dots"
//           removeArrowOnDeviceType={["tablet", "mobile"]}
//           responsive={responsive}
//           partialVisible
//           infinite
//           // customDot={<CustomDot />}
//         >
//           <Grid
//             sx={{
//               display: "flex",
//               flexWrap: "wrap",
//               flexBasis: "33.333333%",
//               justifyContent: "space-evenly",
//             }}
//           >
//          <Box
//             //  onClick={() => onCardClick(elem)}
//             >

//               <Card sx={{ width: "283px", borderRadius: "20px" }}>
//                 <CardActionArea>
//                   <CardMedia
//                     component="img"
//                     height="283"
//                     width="283"
//                     image={"elem?.productPictures[0]?.img"}
//                     alt="green iguana"
//                   />
//                   <CardContent>
//                     <Typography
//                       gutterBottom
//                       variant="h5"
//                       component="div"
//                       sx={{ fontSize: "18px", color: "#222222" }}
//                     >
//                       {"elem?.name"}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </Box>
//           </Grid>

//         </Carousel>
//       </Grid>
//       </>
//   );
// };

// export default SimilarProduct;

//     // <Grid sx={{ paddingTop: "80px",paddingBottom: "80px" }}>
//     //   <div className="bestseller samecard ">
//     //     <Container fluid>
//     //       <Row>
//     //         <Col md={12}>
//     //           <FMTypography
//     //             displayText={"RELATED PRODUCTS"}
//     //             styleData={{
//     //               textAlign: "center",
//     //               fontWeight: "600",
//     //               fontFamily: "Montserrat",
//     //               fontSize: "40px",
//     //               paddingBottom: "40px",
//     //             }}
//     //           />
//     //         </Col>
//     //         <Col md={12}>
//     //           <Slider {...category_settings}>
//     //             {idata.map((idata, i) => (
//     //               <div className="banner_img text-center" key={idata.id}>
//     //                 <a href="/">
//     //                   <img
//     //                     src={idata.thumbnailUrl}
//     //                     className="img-fluid"
//     //                     alt=""
//     //                   />
//     //                   <div className="card_name">
//     //                     <h4>{idata.title}</h4>
//     //                   </div>
//     //                 </a>
//     //               </div>
//     //             ))}
//     //           </Slider>
//     //         </Col>
//     //       </Row>
//     //     </Container>
//     //   </div>
//     // </Grid>

//         {/* moere suggestions */}
