import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const FooterForMe = () => {
  return (
    <div style={{ marginTop: "15px" }}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="d-flex justify-content-center">
          <div className="footerformetitle">
            Developed By Ahmed Younis - Mern Stack Developer &#128154;
          </div>
          <div className="d-flex justify-content-center my-2">
            <div className="mx-3">
              <a
                target="_blanck"
                href="https://www.linkedin.com/in/ahmed-younis-163l998/?trk=opento_sprofile_details"
              >
                <i
                  style={{ fontSize: "25px" }}
                  class="fa-brands fa-linkedin"
                ></i>
              </a>
            </div>
            <div className="mx-3">
              <a href="https://github.com/AhmedYounis668" target="_blanck">
                <i style={{ fontSize: "25px" }} class="fa-brands fa-github"></i>
              </a>
            </div>

            <div className="mx-3">
              <a
                target="_blanck"
                href="https://portofillio-mern-stack.web.app/#"
              >
                <i style={{ fontSize: "25px" }} class="fa-solid fa-user"></i>
              </a>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default FooterForMe;
