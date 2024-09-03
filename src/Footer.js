import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Footer = () => {
  return (
    <Container style={{ marginTop: "70px" }}>
      <hr />
      <Row>
        <Col className="wrap" xs>
          <div className="footeraddress"> Company</div>
          <div className="footercontaint">
            <a className="footercontaintlink" href="#">
              About Us
            </a>
          </div>
          <div className="footercontaint">
            <a className="footercontaintlink" href="#">
              Contact Us
            </a>
          </div>
          <div className="footercontaint">
            <a className="footercontaintlink" href="#">
              Store Location
            </a>
          </div>
          <div className="footercontaint">
            <a className="footercontaintlink" href="#">
              Career
            </a>
          </div>
        </Col>
        <Col xs={{ order: 0 }}>
          <div className="footeraddress">Help</div>
          <div className="footercontaint">
            <a className="footercontaintlink" href="#">
              Order Tracking
            </a>
          </div>
          <div className="footercontaint">
            <a className="footercontaintlink" href="#">
              FAQs
            </a>
          </div>
          <div className="footercontaint">
            <a className="footercontaintlink" href="#">
              Privacy Policy
            </a>
          </div>
          <div className="footercontaint">
            <a className="footercontaintlink" href="#">
              Terms & Conditions
            </a>
          </div>
        </Col>
        <Col xs={{ order: 0 }}>
          <div className="footeraddress">Store</div>
          <div className="footercontaint">
            <a className="footercontaintlink" href="#">
              Woman
            </a>
          </div>

          <div className="footercontaint">
            <a className="footercontaintlink" href="#">
              Men
            </a>
          </div>

          <div className="footercontaint">
            <a className="footercontaintlink" href="#">
              Bags
            </a>
          </div>
        </Col>
        <Col xs={{ order: 0 }}>
          <div className="footeraddress"> Keep In </div>
          <div className="footercontaintkeepin">
            No(7), Ground Floor, Malikha Building, Yadanar Road, Thingangyun,
            Yangon
          </div>
          <div className="footercontaintkeepin">+95 95 096 051</div>
          <div className="footercontaintkeepin">
            Open All Days - 9:00 AM ~ 11:00 PM
          </div>
        </Col>
      </Row>
      {/* ========================================================================= */}
      {/* News letter */}
      <Row style={{ textAlign: "center", width: "100%", marginTop: "30px" }}>
        <div style={{ fontSize: "25px" }}>Newsletter</div>
        <div>Be the first to know about new arrivals, sales & promos!</div>
        <div
          style={{ marginTop: "15px" }}
          className="d-flex justify-content-center w-100"
        >
          <div>
            <input type="email" className="emailinput" placeholder="E-mail" />
          </div>
          <div className="mx-2 ">
            <Button className="sendbtn">Send</Button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
