import React from "react";
import img from "./images/banner_minipage1-tablet.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CardBanner = () => {
  return (
    <div>
      <Card
        className="cardcontainerBanner"
        style={{
          marginTop: "15px",
          marginLeft: "15px",
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="filterBanner">
          <div className="cardproBanner"></div>
        </div>
        <Button className="btncard2Banner">New Arrivals</Button>
      </Card>
    </div>
  );
};

export default CardBanner;
