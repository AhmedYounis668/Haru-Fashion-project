import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import CreatableSelect from "react-select/creatable";

const MyAddress = () => {
  // for model update
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   ===for modele delete
  const [showdelete, setShowdelete] = useState(false);

  const handleClosedelete = () => setShowdelete(false);
  const handleShowdelete = () => setShowdelete(true);

  //for add new address
  const [showaddnewaddress, setShowaddnewaddress] = useState(false);

  const handleCloseaddnewaddress = () => setShowaddnewaddress(false);
  const handleShowaddnewaddress = () => setShowaddnewaddress(true);

  const optionscountry = [
    { value: "Egypt", label: "Egypt" },
    { value: "Suadi Arabia", label: "Suadi Arabia" },
    { value: "Emarites", label: "Emarites" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Algeria", label: "Algeria" },
  ];

  const optionscity = [
    { value: "Cairo", label: "Cairo" },
    { value: "Giza", label: "Giza" },
    { value: "Aswan", label: "Aswan" },
    { value: "Sharm Elshikh", label: "Kuwait" },
    { value: "Dahab", label: "Dahab" },
    { value: "Tanta", label: "Tanta" },
  ];
  return (
    <div>
      {/* update my Address data model  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update My Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <TextField
            required
            id="outlined-required"
            label="Address Required"
            className="w-100 my2"
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

      {/* ======================================== */}
      {/* delete address model */}
      <Modal show={showdelete} onHide={handleClosedelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete My Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do You Sure For Deleting This Address ? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosedelete}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosedelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ========================================================== */}

      {/* model add new address */}
      <Modal show={showaddnewaddress} onHide={handleCloseaddnewaddress}>
        <Modal.Header closeButton>
          <Modal.Title>Add My Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            required
            id="outlined-required"
            label="Address Required"
            className="w-100 my-2"
          />{" "}
          <TextField
            required
            id="outlined-required"
            label="Postal Code Required"
            className="w-100 my-2"
          />{" "}
          <TextField
            required
            id="outlined-required"
            label="Phone  Required"
            className="w-100 my-2"
          />{" "}
          <div>Country :</div>
          <CreatableSelect
            isClearable
            className="my-2"
            options={optionscountry}
          />
          <div>City :</div>
          <CreatableSelect isClearable className="my-2" options={optionscity} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseaddnewaddress}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseaddnewaddress}>
            Add <i class="fa-solid fa-plus"></i>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ================================================ */}

      <Container style={{ marginTop: "75px", background: "#F5F5F5" }}>
        <Row>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            My Addresses
          </div>
          <hr />
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Address id :</span>1
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>
              Address for order number:
            </span>{" "}
            #125dss457dsdsds
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Address:</span>
            123 Main St, City, State, ZIP{" "}
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>E-mail :</span> Ahmed
            Younis@gmail.com
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Phone : </span>
            01112134836
          </div>
          <div className="my-1 d-flex justify-content-end">
            <div className="btnmyaddress" onClick={handleShow}>
              <i class="fa-solid fa-pen-nib"></i>Update
            </div>
            <div className="mx-3 btnmyaddress" onClick={handleShowdelete}>
              <i class="fa-solid fa-trash"></i>Delete
            </div>
          </div>
        </Row>

        {/* address2 */}
        <Row>
          <hr />
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Address id :</span>1
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>
              Address for order number:
            </span>{" "}
            #125dss457dsdsds
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Address:</span>
            123 Main St, City, State, ZIP{" "}
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>E-mail :</span> Ahmed
            Younis@gmail.com
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Phone : </span>
            01112134836
          </div>
          <div className="my-1 d-flex justify-content-end">
            <div className="btnmyaddress" onClick={handleShow}>
              <i class="fa-solid fa-pen-nib"></i>Update
            </div>
            <div className="mx-3 btnmyaddress" onClick={handleShowdelete}>
              <i class="fa-solid fa-trash"></i>Delete
            </div>
          </div>
        </Row>

        {/* address3 */}
        <Row>
          <hr />
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Address id :</span>1
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>
              Address for order number:
            </span>{" "}
            #125dss457dsdsds
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Address:</span>
            123 Main St, City, State, ZIP{" "}
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>E-mail :</span> Ahmed
            Younis@gmail.com
          </div>
          <div className="my-1">
            <span style={{ fontWeight: "bold" }}>Phone : </span>
            01112134836
          </div>
          <div className="my-1 d-flex justify-content-end">
            <div className="btnmyaddress" onClick={handleShow}>
              <i class="fa-solid fa-pen-nib"></i>Update
            </div>
            <div className="mx-3 btnmyaddress" onClick={handleShowdelete}>
              <i class="fa-solid fa-trash"></i>Delete
            </div>
          </div>
        </Row>
      </Container>
      <Container>
        <div className="btn btn-primary" onClick={handleShowaddnewaddress}>
          <i class="fa-solid fa-plus"></i> Add New Address
        </div>
      </Container>
    </div>
  );
};

export default MyAddress;
