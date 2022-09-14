import React from "react";
import TeamCardStyle from "./TeamCard.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import img1 from "../../images/New-Catalogue-Blog.jpg";
import img2 from "../../images/Were-Hiring-Blog.jpg";
import Button from "react-bootstrap/Button";
function TeamCard() {
  return (
    <>
      <Container fluid className={TeamCardStyle.container}>
        <Row className={TeamCardStyle.TeamCardRow}>
          <Col md={6} className={TeamCardStyle.TeamCOl}>
            <Card className={TeamCardStyle.TeamCard}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>
                  <h3 className={TeamCardStyle.Title}>
                    Check out the NEW Sowa Tool Catalogue
                  </h3>
                </Card.Title>
                <Card.Text>
                  <p className={TeamCardStyle.Text}>
                    We've revamped our Sowa Tool Catalogue to now be
                    interactive. You can now use this interactive online version
                    of our catalogue to easily shop for products by clicking
                    their product code to be taken directly to the product page
                    on the website. You can also search the catalogue by the
                    product code or name of an item to more easily find what
                    you're looking for.
                  </p>
                </Card.Text>
                <Button className={TeamCardStyle.button} variant="warning">
                  Check It Out
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className={TeamCardStyle.TeamCOl}>
            <Card className={TeamCardStyle.TeamCard}>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>
                  <h3 className={TeamCardStyle.Title}>
                    Join the Sowa Tool Team!
                  </h3>
                </Card.Title>
                <p className={TeamCardStyle.Text}>
                  We're always looking for new individuals with unique
                  perspectives and experiences to help us achieve our goals.
                  Here at Sowa we want our employees to succeed just as much as
                  our business, so setting them up for success is paramount.
                </p>
                <p className={TeamCardStyle.Text}>
                  Check out our current opportunities and learn more about how
                  you can fit in the Sowa Tool Family below.
                </p>
                <Button className={TeamCardStyle.button} variant="warning">
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TeamCard;
