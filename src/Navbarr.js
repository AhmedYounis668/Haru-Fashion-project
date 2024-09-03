import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Navbarr = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const afun = () => {
    let navbarrr = document.getElementById("nav1");
    window.addEventListener("scroll", () => {
      const srollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      console.log(scrolled, "scrolled");
      console.log(srollable);

      if (scrolled < srollable) {
        console.log(navbarrr);
        // navbarrr.style.backgroundColor = "white";
        navbarrr.classList.add("whenscroll");
      }
      if (window.scrollY === 0) {
        navbarrr.classList.remove("whenscroll");
      }
    });
  };

  useEffect(() => {
    afun();
    window.removeEventListener("scroll", afun);
  }, []);
  return (
    <div>
      {/* //colapps */}
      {/* <Button variant="primary" onClick={handleShow} className="me-2"></Button> */}
      <Offcanvas
        style={{ height: "100px", background: "yellow" }}
        placement="top"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ height: "20px" }}>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      {/* navbar */}
      <Navbar className="navfix" id="nav1">
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 ">
              <Row
                style={{ border: "2px solid yellow" }}
                className="d-flex justify-content-between w-100 "
              >
                <Col
                  style={{ border: "2px solid blue" }}
                  className="d-flex col-4 justify-content-start a"
                >
                  <Nav.Link className="navlinks mx-3" href="#home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="navlinks mx-3" href="#home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="navlinks mx-3" href="#home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="navlinks" href="#home">
                    Home
                  </Nav.Link>
                </Col>
                <Col
                  style={{
                    border: "2px solid white",
                    flexGrow: 1,
                    textAlign: "center",
                    alignItems: "center",
                  }}
                  className="col-4 col-md-3 d-flex justify-content-center  "
                >
                  HARU
                </Col>
                <Col
                  style={{ border: "2px solid white", alignItems: "center" }}
                  className="d-flex col-4  col-md-5 a  "
                >
                  <div style={{ flexGrow: "3" }} className="a ">
                    a
                  </div>
                  <div style={{ flexGrow: "3" }} className="a ">
                    a
                  </div>
                  <div style={{ flexGrow: "3" }} className=" a">
                    a
                  </div>
                  <div style={{ flexGrow: "3" }} className="a ">
                    a
                  </div>
                  <div>
                    <Nav.Link
                      onClick={handleShow}
                      className=" colapps "
                      href="#pricing"
                    >
                      |||||
                    </Nav.Link>
                  </div>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
