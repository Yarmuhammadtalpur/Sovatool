import React from "react";
import FooterStyle from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import facebookIcon from "../../images/social/facebook-app.png";
import InstaIcon from "../../images/social/instagram-logo.png";
import youtubeIcon from "../../images/social/youtube.png";
import LinkedinIcon from "../../images/social/linkedin.png";

function Footer() {
  return (
    <>
      <Container fluid className={FooterStyle.Container}>
        <Row className={FooterStyle.Wrapper}>
          <Col md={2}>
            <ul>
              <li className={FooterStyle.ListHeading}>ACCOUNT</li>
              <li className={FooterStyle.ListItem}>Customer Login</li>
              <li className={FooterStyle.ListItem}>Order History</li>
              <li className={FooterStyle.ListItem}>Returns</li>
              <li className={FooterStyle.ListItem}>
                Ordering, Shipping & Payment
              </li>
              <li className={FooterStyle.ListItem}>Help & Support</li>
            </ul>
          </Col>
          <Col md={2}>
            <ul>
              <li className={FooterStyle.ListHeading}>DOWNLOADS</li>
              <li className={FooterStyle.ListItem}>Catalogues & Brochures</li>
              <li className={FooterStyle.ListItem}>GS Tooling Package Forms</li>
              <li className={FooterStyle.ListItem}>RGA</li>
              <li className={FooterStyle.ListItem}>Quote Request Forms</li>
            </ul>
          </Col>
          <Col md={2}>
            <ul>
              <li className={FooterStyle.ListHeading}>COMPANY</li>
              <li className={FooterStyle.ListItem}>About Us</li>
              <li className={FooterStyle.ListItem}>Careers</li>
              <li className={FooterStyle.ListItem}>Customer Support</li>
              <li className={FooterStyle.ListItem}>Privacy Policy</li>
              <li className={FooterStyle.ListItem}>Request Information</li>
            </ul>
          </Col>
          <Col md={2}>
            <ul>
              <li className={FooterStyle.FooterHeading}>FIND A DISTRIBUTOR</li>
            </ul>
          </Col>
          <Col md={3} className={FooterStyle.FooterSocailSection}>
            <ul>
              <li className={FooterStyle.FooterSocialHeading}>WE'RE SOCIAL</li>
            </ul>
            <ul
              className={`${FooterStyle.ListHeading} ${FooterStyle.ListHeadingSocial}`}
            >
              <li className={FooterStyle.socailList}>
                <img
                  className={FooterStyle.socailImg}
                  src={facebookIcon}
                  alt="social_icon"
                />
              </li>
              <li className={FooterStyle.socailList}>
                <img
                  className={FooterStyle.socailImg}
                  src={InstaIcon}
                  alt="social_icon"
                />
              </li>
              <li className={FooterStyle.socailList}>
                <img
                  className={FooterStyle.socailImg}
                  src={youtubeIcon}
                  alt="social_icon"
                />
              </li>{" "}
              <li className={FooterStyle.socailList}>
                <img
                  className={FooterStyle.socailImg}
                  src={LinkedinIcon}
                  alt="social_icon"
                />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
