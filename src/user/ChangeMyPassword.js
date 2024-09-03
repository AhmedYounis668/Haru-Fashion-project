import { Container } from "@mui/material";
import React from "react";
import Row from "react-bootstrap/esm/Row";
import TextField from "@mui/material/TextField";
import { Typewriter } from "react-simple-typewriter";

const ChangeMyPassword = () => {
  return (
    <Container style={{ marginTop: "75px" }}>
      <hr />
      <Typewriter
        words={[
          "Welcome Mr Ahmed Younis , Create Strong Password To Protect Your Account 🧡. ",
        ]}
        loop={1}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
      <Row>
        <div style={{ textAlign: "center" }}>
          <div className="my-2" style={{ fontWeight: "bold" }}>
            Enter Current Password :
          </div>
          <TextField
            id="outlined-password-input"
            label="Current Password"
            type="password"
            autoComplete="current-password"
            className="changepasswordinput"
          />

          <div className="my-2" style={{ fontWeight: "bold" }}>
            Enter New Password :
          </div>
          <TextField
            id="outlined-password-input"
            label="New Password"
            type="password"
            autoComplete="current-password"
            className="changepasswordinput"
          />

          <div className="my-2" style={{ fontWeight: "bold" }}>
            Enter Confirm New Password :
          </div>
          <TextField
            id="outlined-password-input"
            label="Confirm New Password"
            type="password"
            autoComplete="current-password"
            className="changepasswordinput"
          />
        </div>
      </Row>
      <div className="savepasswoedchangesbtn">Save Changes</div>
    </Container>
  );
};

export default ChangeMyPassword;
