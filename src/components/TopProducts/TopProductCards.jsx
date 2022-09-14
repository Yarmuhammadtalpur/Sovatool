import React from "react";
import TopProductStyle from "./TopProducts.module.css";
import Card from "react-bootstrap/Card";
import drills from "../../images/Drilling-L1.jpg";
import cuttingtool from "../../images/Indexable-L1.jpg";
import MeasuringTool from "../../images/Measuring-L1.jpg";
import mailing from "../../images/Milling-L1.jpg";
import threading from "../../images/Threading-L1.jpg";
import holding from "../../images/ToolHolding-L1.jpg";
import clamping from "../../images/Workholding-L1.jpg";
function TopProductCards() {
  return (
    <>
      <div className={TopProductStyle.container}>
        <h2>Top Product Categories</h2>
        <div className={TopProductStyle.Cardcontainer}>
          <Card className={TopProductStyle.Card}>
            <Card.Body className={TopProductStyle.CardBody}>
              <Card.Img
                className={TopProductStyle.CardImg}
                variant="top"
                src={drills}
              />
              <h3 className={TopProductStyle.CardText}>
                Drilling & Holemaking
              </h3>
            </Card.Body>
          </Card>
          <Card className={TopProductStyle.Card}>
            <Card.Body className={TopProductStyle.CardBody}>
              <Card.Img
                className={TopProductStyle.CardImg}
                variant="top"
                src={cuttingtool}
              />
              <h3 className={TopProductStyle.CardText}>
                Indexable Cutting Tools
              </h3>
            </Card.Body>
          </Card>
          <Card className={TopProductStyle.Card}>
            <Card.Body className={TopProductStyle.CardBody}>
              <Card.Img
                className={TopProductStyle.CardImg}
                variant="top"
                src={MeasuringTool}
              />
              <h3 className={TopProductStyle.CardText}>
                Measuring & Inspacting
              </h3>
            </Card.Body>
          </Card>
          <Card className={TopProductStyle.Card}>
            <Card.Body className={TopProductStyle.CardBody}>
              <Card.Img
                className={TopProductStyle.CardImg}
                variant="top"
                src={mailing}
              />
              <h3 className={TopProductStyle.CardText}>Mailing</h3>
            </Card.Body>
          </Card>
          <Card className={TopProductStyle.Card}>
            <Card.Body className={TopProductStyle.CardBody}>
              <Card.Img
                className={TopProductStyle.CardImg}
                variant="top"
                src={threading}
              />
              <h3 className={TopProductStyle.CardText}>Tool Holding</h3>
            </Card.Body>
          </Card>
          <Card className={TopProductStyle.Card}>
            <Card.Body className={TopProductStyle.CardBody}>
              <Card.Img
                className={TopProductStyle.CardImg}
                variant="top"
                src={holding}
              />
              <h3 className={TopProductStyle.CardText}>
                Workholding, Clamping & Fixturing
              </h3>
            </Card.Body>
          </Card>
          <Card className={TopProductStyle.Card}>
            <Card.Body className={TopProductStyle.CardBody}>
              <Card.Img
                className={TopProductStyle.CardImg}
                variant="top"
                src={clamping}
              />
              <h3 className={TopProductStyle.CardText}>
                Drilling & Holemaking
              </h3>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default TopProductCards;
