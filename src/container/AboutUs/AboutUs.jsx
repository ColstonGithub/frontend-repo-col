import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";

import { Box, Grid, useMediaQuery } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import "./BrandDetail.css";
import Footer from "components/Footer";
import { postAboutUs } from "Redux/Slices/AboutUs/AboutUs";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
const AboutUs = () => {
  const dispatch = useDispatch();
  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  useEffect(() => {
    dispatch(postAboutUs());
  }, [dispatch]);

  const AboutUs = useSelector(
    (state) => state.aboutUs?.banners?.aboutUsData || {}
  );
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
          justifyContent: "center",
          paddingTop: !responsiveMobile ? "1.8rem" : "1rem",
          paddingBottom: !responsiveMobile ? "1.8rem" : "1rem",
        }}
      >
        <FMTypography
          displayText={"About Us"}
          styleData={{
            fontWeight: "600",
            fontSize: "2.8rem",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: "0 3.125rem" }}>
        {/* product box below */}
        <div
          style={{
            borderRadius: "20px",
          }}
        >
          {/* <p>{console.log(AboutUs[0]?.bannerImage)}</p> */}
          <img
            src={AboutUs[0]?.bannerImage}
            style={{
              width: "100%",
              height: !responsiveMobile ? "650px" : "62vw",
              borderRadius: "35px",
            }}
            alt={AboutUs[0]?.bannerImageAltText}
          />
        </div>

        {/* <Box style={{ paddingTop: "2rem" }}>
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
            {AboutUs?.title}
          </h3>
          <p
            style={{
              fontFamily: "Rajdhani",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1rem",
              color: "#222222",
            }}
          >
            {AboutUs[0]?.text}
          </p>
        </Box> */}

        <Row
          style={{
            marginLeft: "50px",
            marginRight: "50px",
            paddingBottom: "40px",
          }}
        >
          <Col>
            <div className="privacy_policy_title">Colston</div>
            <p className="privacy_policy_heading">
              About Colston Colston: Elevating Bathroom Elegance, One Decor
              Add-on at a Time!"
            </p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                Welcome to "Your Bathroom Never Looked So Good" - your ultimate
                destination for transforming your bathroom into a sanctuary of
                style and functionality. At Colston, we understand that your
                bathroom is more than just a functional space; it's a reflection
                of your personal style and a place of relaxation and
                rejuvenation. That's why we've curated a stunning collection of
                decor add-ons to elevate your bathroom experience.
              </div>
              <div className="pb-2">
                One of the key areas of focus for Colston is bathtubs and
                showers. The company offers an extensive range of bathtubs that
                cater to different customer needs. Whether you are looking for a
                simple and functional bathtub or a luxurious one with all the
                bells and whistles, Colston has got you covered. In addition to
                bathtubs, Colston also offers a wide range of shower options.
                The company has a product for every need, from simple
                showerheads to luxurious shower panels.
              </div>
              The shower products offered by Colston are known for their
              durability, functionality, and ease of use. For those who love
              swimming, Colston offers an impressive range of swimming pool
              options. The company has various pools catering to different needs
              and budgets. Whether you want a small pool for your backyard or a
              large one for your commercial property, Colston has got you
              covered. Apart from bathtubs, showers, and pools, Colston also
              offers a range of other bathroom products. These include bathroom
              sinks, toilets, faucets, and accessories
            </p>

            <p className="privacy_policy_heading">Why Choose Colston?</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                All the products offered by Colston are made from high-quality
                materials and are designed to last for years. At Colston,
                customer satisfaction is a top priority. The company has a team
                of experts who are always ready to assist customers with their
                needs. Whether you need help choosing the right product or have
                a query about an existing one, the Colston team is always happy
                to help. In conclusion, Colston is a company that has
                established itself as a leader in the bathroom accessories
                market. With a focus on quality, functionality, and customer
                satisfaction, the company has managed to build a loyal customer
                base over the years. If you are looking for top-quality bathroom
                accessories, look no further than Colston.
              </div>
            </p>

            <p className="privacy_policy_heading"> What we are offering </p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                One of the services that Colston provides is the supply of
                bathroom products such as bathtubs, showers, and faucets. These
                products are carefully crafted to provide maximum comfort and
                luxury to the user. They are made using high-quality materials
                that are durable and long-lasting. Another service that Colston
                provides is installation. They have a team of experts who can
                install the products for you, ensuring that they are properly
                installed and working efficiently.{" "}
              </div>{" "}
              <div className="pb-2">
                Their installation services are affordable and designed to
                provide peace of mind, knowing that professionals have installed
                your bathroom products. Colston also provides maintenance and
                repair services for their products. They understand that regular
                maintenance is important to ensure that the products continue to
                function properly. Their expert team can provide maintenance
                services to keep your products in top condition. In case of any
                damage or malfunction, their repair services are also available
                to fix the problem promptly. One of the best things about
                Colston is their commitment to customer satisfaction. They work
                hard to ensure their customers' satisfaction with their products
                and services. They have a customer support team that is always
                ready to assist you with any questions or concerns that you may
                have. Their team is friendly, knowledgeable, and ready to help
                you with anything that you need.
              </div>
            </p>
            <p className="privacy_policy_heading"> Vision of colston </p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                At Colston, we have a vision that inspires us to provide the
                best possible bathroom experience to our customers. We believe
                that every bathroom should be a haven of relaxation and comfort,
                which is why we offer a wide array of bathroom accessories,
                including top-notch bathtubs and showers. Our products are
                crafted with utmost care, using only the finest materials to
                ensure durability and long-lasting use.
              </div>{" "}
              <div className="pb-2">
                Our commitment to exceptional customer support is what sets us
                apart. We strive to ensure that our customers have a positive
                experience every time they interact with us. Our team of experts
                is dedicated to ensuring that our products are installed and
                maintained properly. We offer installation services to ensure
                that your products are installed efficiently and working at
                their best.
              </div>{" "}
              <div className="pb-2">
                Our maintenance and repair services are designed to keep your
                products in top condition, ensuring that they continue to
                function properly for years to come. We believe in providing
                exceptional customer support to ensure that our customers feel
                valued and heard. Our team is always ready to assist you with
                any questions or concerns you may have.
              </div>{" "}
            </p>

            <p className="privacy_policy_heading">Mission of Colston</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                At Colston, we are committed to providing our esteemed customers
                with the best possible bathroom experience. We firmly believe
                that every bathroom should offer a serene and comfortable
                atmosphere, which is why we offer a wide range of top-quality
                bathroom accessories, including bathtubs and showers. Our
                products are crafted with utmost care and use only the finest
                materials to guarantee durability and long-lasting use.
              </div>{" "}
              <div className="pb-2">
                At Colston, we believe in providing unparalleled customer
                support to ensure that our customers feel valued and heard. Our
                team is always ready to assist you with any questions or
                concerns that you may have. We are fueled by a passion to
                provide the ultimate bathroom experience to our customers. With
                our unwavering commitment to quality products and exceptional
                services, we aim to exceed your expectations and deliver the
                bathroom of your dreams.
              </div>{" "}
            </p>

            <p className="privacy_policy_heading">Our Products</p>
            <p className="privacy_policy_content">
              <p>
                Discover the extensive range of products that make up the
                Colston experience:
              </p>
              <ul>
                <li>
                  Whirlpool Bathtub: Immerse yourself in the ultimate relaxation
                  experience with our luxurious whirlpool bathtubs, designed to
                  rejuvenate both body and mind.
                </li>
                <li>
                  Waterfall Whirlpools: Indulge in the soothing sound of
                  cascading water while enjoying the benefits of a therapeutic
                  whirlpool experience.
                </li>
                <li>
                  Designer Bathtub: Elevate your bathroom's aesthetics with our
                  designer bathtubs, where artistry meets comfort for a truly
                  unique bathing experience.
                </li>
                <li>
                  Outdoor Spa and Pools: Extend luxury beyond the confines of
                  your bathroom with our outdoor spas and pools, creating an
                  oasis of relaxation in your own space.
                </li>
                <li>
                  Steam Cabin: Immerse yourself in the revitalizing power of
                  steam with our meticulously designed steam cabins, offering a
                  holistic approach to well-being.
                </li>
                <li>
                  Shower Panel: Transform your daily shower routine into a
                  spa-like experience with our advanced shower panels, equipped
                  with innovative features.
                </li>
                <li>
                  Sauna: Experience the traditional benefits of a sauna in the
                  comfort of your home, promoting detoxification and relaxation.
                </li>
                <li>
                  Steam Generator: Power your steam and sauna experiences with
                  our high-quality steam generators, delivering consistent
                  performance.
                </li>
              </ul>
            </p>

            <p className="privacy_policy_heading">Pan-India Availability</p>
            <p className="privacy_policy_content">
              With a widespread distribution network, Colston's products and
              solutions are within reach for customers across the length and
              breadth of India. This accessibility not only underscores the
              company's commitment to creating a greener future but also
              empowers individuals and businesses to be a part of this
              transformative journey.
            </p>

            <p className="privacy_policy_heading">
              {" "}
              Ultimate relaxation and comfort with Colston's luxurious bathtubs{" "}
            </p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                Elevate your bathing experience to new heights with the
                exceptional bathtubs offered by Colston. Colston's range of
                products is unparalleled, from outdoor pool and spa options to
                whirlpool and idromassaggio baths, as well as bespoke design and
                lynx-eyed bathtubs. Their unwavering commitment to utilizing
                only the highest quality materials and cutting-edge technology
                ensures that you receive nothing short of the best. Colston
                offers an array of saunas for those seeking a truly unique
                experience. Transform your bathroom experience today and indulge
                in the ultimate in relaxation and comfort with Colston's
                luxurious bathtubs. Experience the pinnacle of luxury showering
                with Colston's precision-crafted and technology-driven series.
              </div>{" "}
            </p>
            <p className="privacy_policy_heading">
              Colston's high-quality shower enclosures{" "}
            </p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                Escape to a world of indulgence with Colston's superior shower
                enclosures. Crafted with precision and packed with innovative
                technology, our shower enclosures offer a luxurious bathing
                experience like no other. With a range of designs to choose
                from, you can elevate your bathroom to new heights of
                sophistication and style. Get ready to immerse yourself in a
                world of pure relaxation and rejuvenation with Colston's
                high-quality shower enclosures.
              </div>{" "}
            </p>

            <p className="privacy_policy_heading">Customer Experience</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                To provide a great customer experience, you need to make every
                touchpoint seamless and stress-free. This requires accessible,
                responsive, and transparent interactions, plus listening to
                feedback for improvement. A knowledgeable and empathetic team is
                crucial for handling questions and concerns, while consistency
                across all channels builds trust and fosters long-term
                relationships. You can create loyal customers who will recommend
                your business to others by delivering exceptional service and
                consistent value.
              </div>{" "}
            </p>

            <p className="privacy_policy_heading">Conclusion</p>
            <p className="privacy_policy_content">
              <div className="pb-2">
                Colston is a company that provides top-notch bathroom products
                and services. They are committed to providing their customers
                with the best products and services possible. Whether you need
                bathroom products, installation, maintenance, or repair
                services, Colston covers you. They are a reliable and trusted
                company that you can count on for all your bathroom needs.
              </div>{" "}
            </p>
          </Col>
        </Row>
      </Grid>
      <Footer />
    </>
  );
};

export default AboutUs;
