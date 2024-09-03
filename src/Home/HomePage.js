import React from "react";

import SliderShow from "../SliderShow";
import CardContainer from "../CardContainer";

import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Cardpro3 from "../Cardpro3";
import Col from "react-bootstrap/esm/Col";
import img1 from "../images/bestselling1.jfif";
import img2 from "../images/bestselling2.jfif";
import ClientOpenion from "../ClientOpenion";
import FeaturedProductsContainer from "../FeaturedProductsContainer";
import OurShop from "../OurShop";
import Footer from "../Footer";
import FooterForMe from "../FooterForMe";
const HomePage = () => {
  const BestSellingcard = [
    { id: 1, cardimg: img1, title: "Woman pants", price: 125 },
    { id: 2, cardimg: img2, title: "Woman Cap", price: 200 },
    {
      id: 3,
      cardimg: " https://i.ibb.co/3cRjBJc/minimalist-img-8-364x492.jpg",
      title: "Woman Skirt",
      price: 400,
    },
    {
      id: 4,
      cardimg: "https://i.ibb.co/pnWP7v2/0248251433-1-1-3-1000x1282.jpg",
      title: "Men Pants",
      price: 50,
    },
  ];
  return (
    <div>
      <SliderShow />

      <CardContainer />

      {/* best selling */}
      <Container>
        <Row style={{ width: "100%" }}>
          <Col className="col-12 d-flex flex-wrap justify-content-center ">
            {BestSellingcard.map((card, index) => (
              <Cardpro3
                key={index}
                title={card.title}
                price={card.price}
                image={card.cardimg}
              />
            ))}
          </Col>
        </Row>
      </Container>

      <div
        style={{
          background: "#E5E4E2",
          marginTop: "70px",
          color: "black",
          textAlign: "center",
          width: "100%",
        }}
      >
        <ClientOpenion />
      </div>
      <hr style={{ marginTop: "40px" }} />

      {/* feature products */}
      <Container>
        <Row
          style={{ fontSize: "25px" }}
          className="d-flex justify-content-center w-100"
        >
          Featured Products
        </Row>

        <FeaturedProductsContainer />
        <hr style={{ marginTop: "60px" }} />

        <OurShop />
      </Container>

      <Footer />
      <FooterForMe />
    </div>
  );
};

export default HomePage;
