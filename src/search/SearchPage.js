import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SearchDroupDown from "./SearchDroupDown";
import LeftSideSearch from "./LeftSideSearch";
import img1 from "../images/bestselling2.jfif";
import img2 from "../images/bestselling4.jfif";
import Cardpro3 from "../Cardpro3";
import Footer from "../Footer";
import FooterForMe from "../FooterForMe";
import Zoom from "react-reveal/Zoom";

const searchpage = () => {
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
    <Container style={{ marginTop: "75px" }}>
      <Row>
        <div className="d-flex justify-content-between my-3">
          <div>
            <SearchDroupDown />
          </div>
          <div style={{ fontWeight: "bold" }}>
            <u style={{ color: "royalblue" }}>4</u> Result is Found
          </div>
        </div>
        <hr />
        <Col style={{ background: "#F0F0F0" }} sm={3}>
          <LeftSideSearch />
        </Col>

        <Col sm={9} className="col-12 d-flex productsearchshow ">
          <Zoom>
            {BestSellingcard.map((card, index) => (
              <Cardpro3
                key={index}
                title={card.title}
                price={card.price}
                image={card.cardimg}
              />
            ))}{" "}
          </Zoom>
        </Col>
      </Row>
      <Footer />
      <FooterForMe />
    </Container>
  );
};

export default searchpage;
