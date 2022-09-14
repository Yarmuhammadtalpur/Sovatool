import React, { useState } from "react";
import LoginStyles from "./Login.module.css";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
import setAuth from "../../Utils/setAuth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function Login({ error, setError }) {
  const navigate = useNavigate();
  const [color, setColor] = useState({ color: "" });
  const [userData, setUserData] = useState({
    name: "",
    pass: "",
  });
  const [passType, setPassType] = useState("password");

  const handlePass = () => {
    passType === "password"
      ? setColor({ color: "#f4ae1a" })
      : setColor({ color: "" });

    passType === "password" ? setPassType("text") : setPassType("password");
  };
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    setAuth();

    dispatch(
      login({
        name: userData.name,
        pass: userData.pass,
        loggedIn: true,
      })
    );
    const data = JSON.parse(localStorage.getItem("isLogged"));
    console.log(data, "login");
    data && navigate("/");
  };
  return (
    <>
      <div className={LoginStyles.container}>
        <Form onSubmit={(e) => handlesubmit(e)}>
          <Card className={LoginStyles.CardContainer}>
            <Card.Header className={LoginStyles.Title}>LogIn</Card.Header>
            <Card.Body>
              <Form.Label htmlFor="basic-url" className={LoginStyles.error}>
                {!error.boolean && error.message}
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Text input with checkbox"
                  placeholder="UserName"
                  name="name"
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  value={userData.name}
                  required
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Text input with checkbox"
                  placeholder="Password"
                  type={passType}
                  name="pass"
                  onChange={(e) =>
                    setUserData({ ...userData, pass: e.target.value })
                  }
                  value={userData.pass}
                  required
                />
                {/*  */}

                <InputGroup.Text
                  aria-label="Checkbox for following text input"
                  onClick={handlePass}
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    className={LoginStyles.eye}
                    style={{ color: color.color }}
                    icon={faEye}
                  />
                </InputGroup.Text>
              </InputGroup>
              <Button variant="success" type="submit">
                LogIn
              </Button>
            </Card.Body>
          </Card>
        </Form>
      </div>
    </>
  );
}

export default Login;
