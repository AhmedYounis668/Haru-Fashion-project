import { Container } from "@mui/material";
import React, { useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import img from "../images/bestselling1.jfif";
import img2 from "../images/bestselling2.jfif";
import img3 from "../images/bestselling3.jfif";
import img4 from "../images/bestselling4.jfif";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Footer from "../Footer";
import FooterForMe from "../FooterForMe";

const ViewCart = () => {
  useEffect(() => {
    const heightscroll = window.scrollY;
    if (heightscroll > 0) {
      window.scrollTo(0, 0);
    }
  });
  const UserCartData = [
    {
      id: 1,
      qty: 1,
      img: img,
      proname: "Woman pants",
      price: "130",
    },
    {
      id: 2,
      qty: 2,
      img: img2,
      proname: "Woman Cap Protect from Sun",
      price: "200",
    },
    { id: 3, qty: 3, img: img3, proname: "Woman Shirt", price: "510" },
    {
      id: 4,
      qty: 4,
      img: img4,
      proname: "Woman Short Prishka - color :White",
      price: "1120",
    },
  ];
  return (
    <div>
      <Container style={{ marginTop: "75px" }}>
        <hr />
        <Row>
          <Col className="col-12">
            <div style={{ fontSize: "25px", fontWeight: "bold" }}>
              Shopping Cart
            </div>

            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <div style={{ paddingTop: "20px" }}>{`<< Continue Shopping`}</div>
            </Link>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col xs={12} md={8}>
            <Table responsive striped>
              <thead>
                <tr>
                  <th>product image</th>
                  <th>product Name</th>
                  <th>p </th>
                  <th>Qty</th>
                  <th>Amount</th>
                  <th>Del</th>
                </tr>
              </thead>
              <tbody>
                {UserCartData.map((item) => {
                  return (
                    <tr>
                      <td>
                        <img
                          className="imgcart"
                          alt="product_image"
                          src={item.img}
                        />
                      </td>
                      <td>{item.proname}</td>
                      <td>${item.price}</td>
                      <td>{item.qty}</td>
                      <td>${item.qty * item.price}</td>
                      <td>
                        <div style={{ cursor: "pointer" }}>
                          <i class="fa-solid fa-trash"></i>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="clearcartbtn">Clear Cart</div>
          </Col>

          <Col xs={6} md={4} className="checkoutcard">
            <div
              style={{
                width: "100%",
                border: "2px solid black",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  marginTop: "10px",
                  fontWeight: "bold",
                  marginLeft: "4px",
                }}
              >
                Cart Totals
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div style={{ fontWeight: "bold", marginLeft: "4px" }}>
                  Subtotal :
                </div>
                <div style={{ fontWeight: "bold", marginRight: "4px" }}>
                  $ 0.00
                </div>
              </div>
              <hr />
              <div style={{ fontWeight: "bold", marginLeft: "4px" }}>
                Delivery
              </div>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Within Yangon"
                name="radio-buttons-group"
                label="Within Yangon"
                style={{ marginLeft: "4px" }}
              >
                <FormControlLabel
                  value="Store Pickup"
                  control={<Radio />}
                  label="Store Pickup"
                />
                <FormControlLabel
                  value="Within Yangon"
                  control={<Radio />}
                  label="Within Yangon"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other Cities"
                />
              </RadioGroup>
              <hr />
              <div className="mx-2 d-flex justify-content-between">
                <div style={{ fontWeight: "bold" }}>Grand Total :</div>
                <div style={{ fontWeight: "bold" }}>$0.0</div>
              </div>
              <div className="my-3 d-flex justify-content-center proceedtocheckout">
                Proceed To Checkout
              </div>
            </div>
          </Col>
        </Row>

        <Footer />
      </Container>
      <FooterForMe />
    </div>
  );
};

export default ViewCart;
