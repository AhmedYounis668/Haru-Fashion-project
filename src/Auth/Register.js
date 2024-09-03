import React from "react";
import { Container } from "@mui/material";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <Container style={{ marginTop: "70px" }}>
        <hr />
        <Link style={{ textDecoration: "none", color: "black" }} to={`/`}>
          <div style={{ cursor: "pointer" }}>{`<< Back To Home `}</div>
        </Link>
        <Row>
          <Col
            style={{ marginTop: "40px" }}
            className="col-12 d-flex justify-content-center"
          >
            <div style={{ width: "100%", height: "100%" }}>
              <div class="login-card">
                <div class="card-header">
                  <div class="log">Rigister</div>
                </div>
                <form>
                  <div class="form-group">
                    <label for="name">Username:</label>
                    <input
                      required=""
                      name="username"
                      id="username"
                      type="text"
                      className="logininputs"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                      required=""
                      name="email"
                      id="email"
                      type="email"
                      className="logininputs"
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input
                      required=""
                      name="phone"
                      id="phone"
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

                  <div class="form-group">
                    <label for="confirmpassword">Confirm Password:</label>
                    <input
                      required=""
                      name="confirmpassword"
                      id="confirmpassword"
                      type="password"
                      className="logininputs"
                    />
                  </div>

                  <div class="form-group my-2 ">
                    <input class="submitlogin" value="Login" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
