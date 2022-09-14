import React, { useState } from "react";
import LoginStyles from "./Login.module.css";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
import setAuth from "../../Utils/setAuth";
import { useNavigate } from "react-router-dom";

function Login({ error, setError }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    pass: "",
  });
  const [passType, setPassType] = useState("password");

  const handlesubmit = () => {
    setAuth(userData);

    const data = JSON.parse(localStorage.getItem("isLogged"));
    !data
      ? setError({ boolean: false, message: "Wrong Credentials" })
      : setError({ boolean: null, message: null });
    console.log(data, "login");
    data && navigate("/");
  };
  return (
    <>
      <div className={LoginStyles.container}>
        <Form>
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
                <InputGroup.Checkbox
                  aria-label="Checkbox for following text input"
                  onClick={() => {
                    passType === "password"
                      ? setPassType("text")
                      : setPassType("password");
                  }}
                />
              </InputGroup>
              <Button variant="success" onClick={handlesubmit}>
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
