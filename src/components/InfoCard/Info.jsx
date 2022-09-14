import React from "react";
import InfoStyle from "./Info.module.css";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

function Info() {
  return (
    <>
      <Container fluid style={{ padding: 0, margin: 0 }}>
        <div className={InfoStyle.InfoSection}>
          <div className={InfoStyle.InfoSectionLeft}>
            <strong>1-800-265-8221</strong>
            <span>Monday - Friday, 8:00 am - 6:00 pm EST</span>
          </div>
          <div className={InfoStyle.InfoSectionRight}>
            <Button className={InfoStyle.InfoUpButton}>
              <FontAwesomeIcon icon={faAngleDoubleUp} />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Info;
