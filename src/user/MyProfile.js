import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

const MyProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {/* update my data model  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update My Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <InputLabel htmlFor="input-with-icon-adornment">
            User Name Required*:
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            className="w-100 my-2"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <TextField
            required
            id="outlined-required"
            label="E-mail Required"
            className="w-100 my2"
          />
          <TextField
            required
            id="outlined-required"
            label="Phone Required"
            className="w-100 my-2"
          />
          <TextField
            required
            id="outlined-required"
            label="address  Required"
            className="w-100 my-2"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ======================================= */}

      <Container style={{ marginTop: "75px", background: "#F5F5F5" }}>
        <Row>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            My Profile
          </div>
          <hr />
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Name :</span> Ahmed Younis
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>E-mail :</span> Ahmed
            Younis@gmail.com
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Phone : </span>
            01112134836
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Address :</span> 123 Main St,
            City, State, ZIP
          </div>
        </Row>
      </Container>
      <Container className="my-3">
        <div className="addcomment" onClick={handleShow}>
          Update My Data
        </div>
      </Container>
    </div>
  );
};

export default MyProfile;
