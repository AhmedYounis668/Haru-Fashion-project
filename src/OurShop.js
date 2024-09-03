import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import shopimage from "../src/images/ourshop.png";
const OurShop = () => {
  return (
    <Container>
      <Row style={{ marginTop: "50px" }}>
        <Col style={{ textAlign: "center" }}>
          <div style={{ fontSize: "25px" }}>Our Shop</div>
          <div style={{ fontSize: "16" }}>
            Stop by our stores to learn the stories behind our products, get a
            personal styling session, or shop the latest in person. See our
            store locations Stop by our stores to learn the stories behind our
            products, get a personal styling session, or shop the latest in
            person. See our store locations
          </div>
        </Col>
      </Row>

      <Row style={{ width: "100%" }}>
        <div style={{ marginTop: "30px" }}>
          <img style={{ width: "100%" }} alt="shop_image" src={shopimage} />
        </div>
      </Row>
    </Container>
  );
};

export default OurShop;
