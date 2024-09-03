import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import img from "../src/images/bestselling2.jfif";
import img2 from "../src/images/bestselling4.jfif";
import img3 from "../src/images/bestselling5.jfif";
import img4 from "../src/images/bestselling1.jfif";
import Footer from "./Footer";
import FooterForMe from "./FooterForMe";

const Wishlist = () => {
  const wishjlistdata = [
    { id: 1, img: img, proname: "Sweet Shirt Zara For Men", price: "130" },
    { id: 2, img: img2, proname: "Short H&M For Woman", price: "200" },
    { id: 3, img: img3, proname: "Woman Bag Addidas", price: "510" },
    {
      id: 4,
      img: img4,
      proname: "Woman Pants Prishka - color :green",
      price: "1120",
    },
  ];
  return (
    <Container style={{ marginTop: "70px" }}>
      <hr />
      <div style={{ fontWeight: "bold", fontSize: "30px" }}>Wishlist</div>
      <Link style={{ textDecoration: "none", color: "black" }} to={`/`}>
        <div style={{ marginTop: "30px" }}>{`<< Back To Home`}</div>
      </Link>
      <Row>
        <Col style={{ marginTop: "20px" }}>
          <Table responsive striped hover>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishjlistdata.map((item) => {
                return (
                  <tr>
                    <td>
                      <img
                        alt="wishlist-image"
                        src={item.img}
                        className="imgwishlist"
                      />
                    </td>
                    <td className="">
                      <div>{item.proname}</div>
                    </td>
                    <td>
                      <div>${item.price}</div>
                    </td>
                    <td>
                      <div className="removewishlist">
                        <i class="fa-solid fa-trash"></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row
        className="d-flex justify-content-center"
        style={{ marginTop: "30px" }}
      >
        <div className="clearwishlist">Clear WishList</div>
      </Row>
      <Footer />
      <FooterForMe />
    </Container>
  );
};

export default Wishlist;
