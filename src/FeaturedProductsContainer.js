import React from "react";
import Cardpro3 from "./Cardpro3";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";

const FeaturedProductsContainer = () => {
  const featurproducts = [
    {
      id: 1,
      cardimg: "https://i.ibb.co/ygvLnKn/minimalist-img-3-364x492.jpg",
      title: "Jacket",
      price: 125,
    },
    {
      id: 2,
      cardimg: "https://i.ibb.co/tCKthsB/minimalist-img-2-1.jpg",
      title: "Pants",
      price: 200,
    },
    {
      id: 3,
      cardimg: "https://i.ibb.co/QHBzFhv/minimalist-img-51-364x492.jpg",
      title: "Water Prof Jacket",
      price: 400,
    },
    {
      id: 4,
      cardimg: "https://i.ibb.co/NxMKQSW/minimalist-img-9-364x492.jpg",
      title: "Woman Pants",
      price: 150,
    },
    {
      id: 5,
      cardimg: "https://i.ibb.co/8Y20hY2/minimalist-img-12-364x492.jpg",
      title: "Men Shirt",
      price: 85,
    },
    {
      id: 6,
      cardimg: "https://i.ibb.co/1TKhSV9/0150220400-1-1-3-1000x1282.jpg",
      title: "Woman Pants",
      price: 110,
    },
    {
      id: 7,
      cardimg: "https://i.ibb.co/nrB2Sn6/0040847800-1-1-3-1000x1282.jpg",
      title: "Woman Pants",
      price: 66,
    },
    {
      id: 8,
      cardimg: "https://i.ibb.co/9bKsRYv/minimalist-img-7-jpg.webp",
      title: "Woman Skirt",
      price: 130,
    },
  ];
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-wrap justify-content-center w-100">
          {featurproducts.map((card) => (
            <Cardpro3
              key={card.id}
              image={card.cardimg}
              title={card.title}
              price={card.price}
            />
          ))}
        </Col>
      </Row>

      {/* see more button */}
      <Row
        className="d-flex justify-content-center"
        style={{ marginTop: "40px" }}
      >
        <Button className="seemorebtn">See More ....</Button>
      </Row>
    </Container>
  );
};

export default FeaturedProductsContainer;
