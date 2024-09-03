import { Button, Container } from "@mui/material";
import React from "react";

const CardPro = () => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <div className="cardcontainer">
        <div className="filter">
          <div className="cardpro"></div>
        </div>
        <Button variant="contained" className="btncard">
          Woman Collection
        </Button>
      </div>
    </Container>
  );
};

export default CardPro;
