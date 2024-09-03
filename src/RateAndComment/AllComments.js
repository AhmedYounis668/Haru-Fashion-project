import React from "react";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";

const AllComments = () => {
  const allcoments = [
    { id: 1, comment: "good Product", name: "Ahmed Younis" },
    { id: 2, comment: "very very very good", name: "Farouk Elmasry" },
    { id: 3, comment: "charge is very slowly!!!", name: "Mohamed Ashraf" },
  ];

  // to delete your comment
  const [showdelete, setShowdelete] = useState(false);
  const handleClosedelete = () => setShowdelete(false);
  const handleShowdelete = () => setShowdelete(true);

  //to update your comment
  const [showdupdate, setShowupdate] = useState(false);
  const handleCloseupdate = () => setShowupdate(false);
  const handleShowupdate = () => setShowupdate(true);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      {/* model delete comment */}
      <Modal show={showdelete} onHide={handleClosedelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Your Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do You Want To Delete Your Comment ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosedelete}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosedelete}>
            Delete the Comment
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ====================================================== */}

      {/* modele update comment */}
      <Modal show={showdupdate} onHide={handleCloseupdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            classNames="my-2"
          />
          <TextField
            id="filled-multiline-flexible"
            label="Your Comment"
            multiline
            maxRows={4}
            variant="filled"
            className="w-100"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseupdate}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseupdate}>
            Update the Comment
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ======================================================================= */}
      <div style={{ fontWeight: "bold" }}>All Comments</div>
      <Swiper
        style={{
          height: "150px",
          width: "100%",
        }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper "
      >
        {allcoments.map((comment) => {
          return (
            <SwiperSlide style={{ background: "#F0F0F0" }} key={comment.id}>
              <div style={{ marginTop: "40px" }}>{comment.comment}</div>
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {comment.name}
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperSlide style={{ background: "#F0F0F0" }}>
          <div style={{ marginTop: "40px" }}>My Comment on this product</div>
          <div
            style={{
              marginTop: "10px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Ahmed Younis
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center"
          >
            <div onClick={handleShowupdate}>
              <i class="fa-solid fa-pen-nib"></i>
            </div>
            <div
              onClick={handleShowdelete}
              style={{ cursor: "pointer" }}
              className="mx-3"
            >
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AllComments;
