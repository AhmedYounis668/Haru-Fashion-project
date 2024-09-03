import { Container } from "@mui/material";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CardPro from "./CardPro";
import Cardpro2 from "./Cardpro2";
import img1 from "./images/banner_minipage2.jpg";
import img2 from "./images/banner_minipage3.jpg";
import CardBanner from "./CardBanner";

const CardContainer = () => {
  const categourycard = [
    { id: 1, cardimg: img1, title: "Woman Collection" },
    { id: 2, cardimg: img2, title: "Men Collection" },
  ];
  return (
    <Container>
      <Row className="w-100">
        <Col className="col-12 col-md-5 ">
          {/* <div style={{ width: "100%", border: "2px solid red" }}>saasa</div> */}
          <CardBanner />
        </Col>
        <Col className="col-12 col-md-7 d-flex flex-wrap justify-content-center ">
          {categourycard.map((pro, index) => {
            return <Cardpro2 key={index} img={pro.cardimg} title={pro.title} />;
          })}
        </Col>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <hr />
      </Row>
      <Row
        style={{
          marginTop: "15px",
          textAlign: "center",
        }}
      >
        <h2>Best Selling</h2>
        <div>
          Here are some of our best selling products.
          <br /> Explore yourself in the latest trends.
        </div>
      </Row>
    </Container>
  );
};

export default CardContainer;
