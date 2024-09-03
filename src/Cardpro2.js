import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Cardpro2 = ({ img, title }) => {
  return (
    <div>
      <Card
        className="cardcontainer"
        style={{
          marginTop: "15px",
          marginLeft: "15px",
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="filter">
          <div className="cardpro"></div>
        </div>
        <Button className="btncard2">{title}</Button>
      </Card>
    </div>
  );
};

export default Cardpro2;
