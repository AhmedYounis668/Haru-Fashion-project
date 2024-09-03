import React from "react";
import ReactStars from "react-rating-stars-component";
import TextField from "@mui/material/TextField";
import AllComments from "./AllComments";
const RateAndComment = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <hr />
      <div
        style={{ fontWeight: "bold" }}
        className="d-flex justify-content-center"
      >
        Rates and Comments
      </div>

      <div style={{ direction: "ltr" }}>
        <div>User Name: Ahmed Younis</div>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="m-2"> Rate Now :</div>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
          <div className="m-2">Product Rate: 3.5</div>
        </div>
      </div>
      {/* comment */}
      <div className="mx-2">
        <div style={{ fontWeight: "bold" }}>Add Your Comment Here </div>
        <div>
          <TextField
            id="filled-multiline-flexible"
            label="Add Your Comment"
            multiline
            maxRows={10}
            variant="filled"
            className="w-100"
          />{" "}
        </div>
        <div className="addcomment my-3">
          <i class="fa-solid fa-plus"></i> Add Comment
        </div>
      </div>

      {/* All Comments on product */}

      <hr />
      <AllComments />
    </div>
  );
};

export default RateAndComment;
