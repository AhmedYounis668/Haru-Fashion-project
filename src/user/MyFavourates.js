import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img1 from "../images/bestselling5.jfif";
import img2 from "../images/bestselling4.jfif";
import img3 from "../images/bestselling3.jfif";
import img4 from "../images/bestselling2.jfif";
import { Typewriter } from "react-simple-typewriter";
import Zoom from "react-reveal/Zoom";

import Cardpro3 from "../Cardpro3";

const MyFavourates = () => {
  const BestSellingcard = [
    { id: 1, cardimg: img1, title: "Woman pants", price: 125 },
    { id: 2, cardimg: img2, title: "Woman short", price: 200 },
    { id: 2, cardimg: img3, title: "Woman shirt", price: 300 },
    { id: 2, cardimg: img4, title: "Woman Cap", price: 400 },
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
      <Container style={{ marginTop: "75px" }}>
        <hr />
        <Typewriter
          words={["Welcome Mr Ahmed Younis inYour Favourate Products 🧡🧡🧡. "]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        <Zoom>
          <Row>
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
        </Zoom>
      </Container>
    </div>
  );
};

export default MyFavourates;
