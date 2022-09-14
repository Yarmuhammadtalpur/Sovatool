import React from "react";
import HeaderStyle from "./Header.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SovaLogo from "../../images/Sowa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CNLogo from "../../images/countrycanada.png";
import { useNavigate } from "react-router-dom";
import {
  faAlignRight,
  faHeart,
  faSearch,
  faShoppingBag,
  faSliders,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Row className={HeaderStyle.headerRow}>
        <Col md={6} className={HeaderStyle.headerLogo}>
          <a href="#">
            <img src={SovaLogo} className={HeaderStyle.imgLogo} />
          </a>
          <span className={HeaderStyle.logoText}>TOOLING YOUR WORLD.</span>
        </Col>
        <Col md={6} className={HeaderStyle.headerSearch}>
          <Col>
            <ul className={HeaderStyle.headerSearchItems}>
              <li className={HeaderStyle.headerSearchItem}>
                <input
                  type="text"
                  className={`form-control ${HeaderStyle.headerSearchInput}`}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className={HeaderStyle.HeaderSearchIcon}
                />
              </li>
              <li className={HeaderStyle.HeaderLogin}>
                <a href="">
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span
                    onClick={() => {
                      localStorage.setItem("isLogged", false);
                      navigate("/");
                    }}
                  >
                    Log Out
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faSliders} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faHeart} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <span>0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faAlignRight} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={CNLogo} />
                </a>
              </li>
            </ul>
          </Col>
          <Col className={HeaderStyle.Info}>
            <span className={HeaderStyle.InfoNumber}>1-800-265-8221</span>{" "}
            <san className={HeaderStyle.InfoEmail}>sales@sowatool.com</san>
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default Header;
