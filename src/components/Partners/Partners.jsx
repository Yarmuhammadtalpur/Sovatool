import React from "react";
import { Container } from "react-bootstrap";
import PartnerStyle from "./Partners.module.css";
import partner1 from "../../images/partners/mitutoyo-BW.png";
import partner2 from "../../images/partners/Starrett-BW.png";
import partner3 from "../../images/partners/Seco_web300-BW.png";
import partner4 from "../../images/partners/GuehringDLogo_1_2-BW.png";
import partner5 from "../../images/partners/Gray_Tools-BW.png";

function Partners() {
  return (
    <>
      <Container fluid>
        <h1>Authorized Distributors</h1>
        <div className={PartnerStyle.Partners}>
          <ul>
            <li>
              <img src={partner1} alt="sellers" />
            </li>
            <li>
              <img src={partner2} alt="sellers" />
            </li>
            <li>
              <img src={partner3} alt="sellers" />
            </li>
            <li>
              <img src={partner4} alt="sellers" />
            </li>
            <li>
              <img src={partner5} alt="sellers" />
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}

export default Partners;
