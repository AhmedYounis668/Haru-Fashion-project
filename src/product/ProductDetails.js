import React, { useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ProductImage from "./ProductImage";
import ProductData from "./ProductData";
import RateAndComment from "../RateAndComment/RateAndComment";
import img1 from "../../src/images/bestselling1.jfif";
import img2 from "../../src/images/bestselling2.jfif";
import Cardpro3 from "../Cardpro3";
import Footer from "../Footer";
import FooterForMe from "../FooterForMe";
import Zoom from "react-reveal/Zoom";

const ProductDetails = () => {
  useEffect(() => {
    const heightscroll = window.scrollY;
    if (heightscroll > 0) {
      window.scrollTo(0, 0);
    }
  });
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
    <div style={{ background: "#F0F0F0" }}>
      <Container style={{ marginTop: "75px" }}>
        <Row>
          <Col xs={6} md={4} className="productimage">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
                color: "royalblue",
                margin: "5px",
              }}
            >
              Product Images
            </div>
            <ProductImage />
          </Col>

          <Col xs={12} md={8}>
            <ProductData />
          </Col>
        </Row>
        <RateAndComment />
        {/* منتجات قد تعجبك */}
        <Zoom>
          <div style={{ fontWeight: "bold" }}>Products you may like</div>
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
        </Zoom>
      </Container>
      <div style={{ background: "white" }}>
        <hr />

        <Footer />
        <FooterForMe />
      </div>
    </div>
  );
};

export default ProductDetails;
