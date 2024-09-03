import { Container } from "@mui/material";
import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
//name of library react-confitte
const LoginForm = () => {
  const [btn, setbtn] = useState(false);

  return (
    <Container style={{ marginTop: "70px" }}>
      <hr />
      <Link style={{ textDecoration: "none", color: "black" }} to={`/`}>
        <div style={{ cursor: "pointer" }}>{`<< Back To Home `}</div>
      </Link>
      <Row>
        <Col
          style={{ marginTop: "70px" }}
          className="col-12 d-flex justify-content-center"
        >
          <div style={{ width: "100%", height: "100%" }}>
            <div class="login-card">
              <div class="card-header">
                <div class="log">Login</div>
              </div>
              <form>
                <div class="form-group">
                  <label for="username">Username:</label>
                  <input
                    required=""
                    name="username"
                    id="username"
                    type="text"
                    className="logininputs"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input
                    required=""
                    name="password"
                    id="password"
                    type="password"
                    className="logininputs"
                  />
                </div>
                <div style={{ textAlign: "center", cursor: "pointer" }}>
                  Forget Password ?
                </div>
                {btn && (
                  <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    tweenDuration={500}
                    onConfettiComplete={() => setbtn(false)}
                    recycle={false}
                    numberOfPieces={1000}
                  />
                )}
                <div onClick={() => setbtn(!btn)} class="form-group my-2 ">
                  <input class="submitlogin" value="Login" type="submit" />
                </div>
                <Link to={`/Rigister`}>
                  <div style={{ textAlign: "center", cursor: "pointer" }}>
                    Create New Account Or Register
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
