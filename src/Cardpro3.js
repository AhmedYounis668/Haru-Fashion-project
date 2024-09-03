import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// import Favorite from "@mui/icons-material/Favorite";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import { Checkbox } from "@mui/material";
import JSConfetti from "js-confetti";
//name of library js-confetti
// const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Cardpro3 = ({ image, title, price }) => {
  const jsConfetti = new JSConfetti();
  function con() {
    jsConfetti.addConfetti({
      confettiColors: ["black", "black"],
      emojis: ["🧡"],
    });
  }
  return (
    <div
      style={{
        height: "390px",
        marginTop: "15px",
        marginLeft: "10px",
      }}
    >
      <Link style={{ textDecoration: "none" }} to={`/productdetails`}>
        <Card className="cardcontainerpro3" style={{}}>
          <Button className="btncardpro3">Add To Cart</Button>
          <Card.Img className="cardpro3img" variant="top" src={image} />
          <div className="cardpro3footer">
            <div>{title}</div>
            <div className="d-flex justify-content-between mx-2">
              <div className="my-2">$ {price}</div>
              <div className="my-2" onClick={con}>
                <i
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  class="fa-regular fa-heart "
                ></i>
                {/* <div>
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default Cardpro3;
