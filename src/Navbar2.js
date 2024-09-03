import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
const Navbar2 = () => {
  const [showcollaps, setshowcollaps] = useState(false);
  const [searchword, setsearchword] = useState("");

  console.log(searchword);
  const search = (e) => {
    setsearchword(e.target.value);
    const path = document.location.pathname;
    if (path !== "/#search") {
      document.location.href = "/#search";
    }
  };
  const handleClosecollaps = () => setshowcollaps(false);
  const handleShowcollaps = () => setshowcollaps(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showsearch, setShowsearch] = useState(false);

  const handleClosesearch = () => setShowsearch(false);
  const handleShowsearch = () => setShowsearch(true);
  const afun = () => {
    let navbarrr = document.getElementById("nav1");
    window.addEventListener("scroll", () => {
      const srollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      if (scrolled < srollable) {
        // navbarrr.style.backgroundColor = "white";
        navbarrr.classList.add("whenscroll");
      }
      if (scrolled === 0) {
        navbarrr.classList.remove("whenscroll");
      }

      if (scrolled > 0) {
        navbarrr.style.marginTop = "0";
      } else {
        navbarrr.style.marginTop = "28px";
      }
    });
  };

  useEffect(() => {
    afun();
    window.removeEventListener("scroll", afun);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        borderRadius: "10px",
        textAlign: "center",
        alignItems: "center",
        zIndex: "999",
        marginTop: "28px",
      }}
      className="navfix"
      id="nav1"
    >
      {/* collaps */}
      {/* colapps for mobile */}

      <Offcanvas
        style={{ height: "100%", background: "white" }}
        placement="top"
        show={showcollaps}
        onHide={handleClosecollaps}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>H A R U</Offcanvas.Title>
        </Offcanvas.Header>
        {/* <Offcanvas.Body style={{ height: "20px" }}> */}
        <Row>
          <Col className="col-12">
            <div
              style={{
                width: "100%",
              }}
              className="d-flex justify-content-center"
            >
              <TextField
                sx={{ width: "90%", textAlign: "center" }}
                id="standard-basic"
                label="Search"
                variant="standard"
                className="my-4"
                onChange={search}
              />
            </div>
            <Nav.Link className="collapscontaint " href="/">
              Men
            </Nav.Link>
            <Nav.Link className="collapscontaint " href="/">
              Woman
            </Nav.Link>
            <Nav.Link className="collapscontaint" href="/">
              Bags
            </Nav.Link>
            <Nav.Link className="collapscontaint" href="/">
              Blogs
            </Nav.Link>
            <Nav.Link className="collapscontaint" href="/">
              About Us
            </Nav.Link>
            <Nav.Link className="collapscontaint" href="/">
              Contact Us
            </Nav.Link>
            <hr />
            {/* login */}
            <a href="/#Login" style={{ textDecoration: "none" }}>
              <div
                style={{ paddingLeft: "13px", paddingRight: "13px" }}
                className="collapscontaint d-flex justify-content-between w-100"
              >
                <div>Login</div>
                <i
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  class="fa-regular fa-user"
                ></i>
              </div>
            </a>

            <hr />
            {/* wishlist */}
            <a style={{ textDecoration: "none" }} href="/#wishlist">
              <div
                style={{ paddingLeft: "13px", paddingRight: "13px" }}
                className="collapscontaint d-flex justify-content-between w-100"
              >
                <div>Wishlist</div>
                <i
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  class="fa-regular fa-heart"
                ></i>
              </div>
            </a>
            <hr />

            <div className="col-12" style={{ width: "100%" }}>
              <div class="select">
                <select>
                  <option>--Select Language--</option>
                  <option>English</option>
                  <option>Arabic</option>
                </select>
                <div class="select_arrow"></div>
              </div>
            </div>
            <br />
            <div
              style={{ position: "fixed", bottom: "25px" }}
              className="d-flex justify-content-center w-100"
            >
              <i
                style={{ fontSize: "25px", marginLeft: "15px" }}
                class="fa-brands fa-facebook-f"
              ></i>
              <i
                style={{ fontSize: "25px", marginLeft: "15px" }}
                class="fa-brands fa-instagram"
              ></i>
            </div>
          </Col>
        </Row>
        {/* </Offcanvas.Body> */}
      </Offcanvas>
      {/* =============================================================== */}
      {/* bag */}
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header style={{ background: "#e8e8e8" }} closeButton>
          <Offcanvas.Title>{`Cart(0)`}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              left: 1,
              right: 1,
              height: "auto",
            }}
          >
            <div
              style={{ padding: "10px" }}
              className="d-flex justify-content-between"
            >
              <div>Subtotal :</div>
              <div>$ 0.00</div>
            </div>

            <a
              href="/#ViewCart"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="viewcartbtn">View Cart</div>
            </a>
            <div className="checkoutbtn">Checkout</div>
          </div>
          <div>No Items in This Card</div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* search */}
      <Offcanvas placement="top" show={showsearch} onHide={handleClosesearch}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <TextField
            sx={{ width: "100%", textAlign: "center" }}
            id="standard-basic"
            label="Search"
            variant="standard"
            onChange={search}
          />
        </Offcanvas.Body>
      </Offcanvas>

      <Container
        style={{
          marginTop: "10px",
        }}
      >
        <Row
          style={{
            direction: "rtl",
          }}
        >
          {/* =================================col1 */}
          <Col className="d-flex " xs={{ order: "last" }}>
            <div
              className=" justify-content-end w-100 colapps"
              onClick={handleShowcollaps}
            >
              ||||
            </div>
            <Nav.Link className="navlinks" href="/">
              Blogs
            </Nav.Link>
            <Nav.Link className="navlinks mx-3" href="/">
              Bags
            </Nav.Link>
            <Nav.Link className="navlinks mx-3" href="/">
              Woman
            </Nav.Link>
            <Nav.Link className="navlinks mx-3" href="/">
              Men
            </Nav.Link>
          </Col>

          {/* =================================col2 */}

          <Col
            xs
            style={{
              textAlign: "center",
              alignItems: "center",
              letterSpacing: "8px",
              fontSize: "25px",
              marginTop: "-7px",
            }}
          >
            HARU
          </Col>

          {/* =================================col3 */}
          <Col className="d-flex navlinks" xs={{ order: "first" }}>
            <div className="bag" onClick={handleShow}>
              {/* <i class="fa-solid fa-bag-shopping mx-3  naviconclick "></i> */}
              <Badge badgeContent={4} color="primary">
                {/* <MailIcon color="action" /> */}
                <i class="fa-solid fa-bag-shopping mx-1  naviconclick "></i>
              </Badge>
            </div>

            <div className="navlinks" style={{ flexGrow: "3" }}>
              <a style={{ textDecoration: "none" }} href="/#wishlist">
                <i class="fa-regular fa-heart naviconclick "></i>
              </a>
            </div>
            <div className="navlinks" style={{ flexGrow: "3" }}>
              <a href="/#Login">
                <i class="fa-regular fa-user naviconclick"></i>
              </a>
            </div>

            <div
              className="navlinks"
              style={{ flexGrow: "3" }}
              onClick={handleShowsearch}
            >
              <i class="fa-solid fa-magnifying-glass naviconclick"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar2;
