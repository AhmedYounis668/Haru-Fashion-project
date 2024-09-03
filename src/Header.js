import { Avatar } from "@mui/material";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="d-flex justify-content-between"
      style={{ background: "black", color: "white" }}
    >
      {/* ===================================== */}
      {/* show user profile */}
      <Offcanvas
        style={{ background: "#E8E8E8" }}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <Typewriter
              words={[
                "welcome",
                "Mr",
                "Ahmed Younis",

                "Welcome Mr Ahmed Younis in H A R U",
              ]}
              cursor
              cursorStyle="&#128525;"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={"welcom"}
              loop={1}
            />
          </div>
          <div
            style={{
              position: "absolute",
              marginTop: "25px",
              width: "100%",
              left: "0",
            }}
          >
            <a href="/#" style={{ textDecoration: "none" }}>
              <div
                className="userbtndashbord m-2 d-flex justify-content-between"
                style={{ fontWeight: "bold" }}
              >
                Home
                <i class="fa-solid fa-house"></i>{" "}
              </div>
            </a>

            <a href="/#MyProfile" style={{ textDecoration: "none" }}>
              <div
                className="userbtndashbord m-2 d-flex justify-content-between"
                style={{ fontWeight: "bold" }}
              >
                My Profile
                <i class="fa-solid fa-user"></i>
              </div>
            </a>

            <a href="/#MyAddresses" style={{ textDecoration: "none" }}>
              <div
                className="userbtndashbord m-2 d-flex justify-content-between"
                style={{ fontWeight: "bold" }}
              >
                My Address <i class="fa-solid fa-address-book"></i>
              </div>
            </a>
            <a href="/#MyFavourates" style={{ textDecoration: "none" }}>
              <div
                className="userbtndashbord m-2 d-flex justify-content-between"
                style={{ fontWeight: "bold" }}
              >
                My favourites <i class="fa-solid fa-heart"></i>
              </div>
            </a>

            <a href="/#changePassword" style={{ textDecoration: "none" }}>
              <div
                className="userbtndashbord m-2 d-flex justify-content-between"
                style={{ fontWeight: "bold" }}
              >
                Change Password <i class="fa-solid fa-lock"></i>
              </div>
            </a>
            <a href="/#Login" style={{ textDecoration: "none" }}>
              <div
                className="userbtndashbord m-2 d-flex justify-content-between"
                style={{ fontWeight: "bold" }}
              >
                Log Out <i class="fa-solid fa-right-from-bracket"></i>
              </div>
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* ============================================ */}
      <div className="d-flex">
        <div style={{ padding: "3px", cursor: "pointer" }} className="mx-2">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div style={{ padding: "3px", cursor: "pointer" }} className="">
          <i class="fa-brands fa-instagram"></i>
        </div>

        <div
          style={{
            fontSize: "12px",
            padding: "5px",
            cursor: "pointer",
            marginLeft: "18px",
          }}
        >
          About us
        </div>
        <div
          className="mx-1"
          style={{ fontSize: "12px", padding: "5px", cursor: "pointer" }}
        >
          Our Policy{" "}
        </div>
      </div>
      <div className="mx-3">
        {" "}
        <Avatar
          sx={{ width: "35px", height: "30px", cursor: "pointer" }}
          alt="Ahmed Younis"
          src="/static/images/avatar/1.jpg"
          onClick={handleShow}
        />
      </div>
    </div>
  );
};

export default Header;
