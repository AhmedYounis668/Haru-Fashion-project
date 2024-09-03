import React, { useState } from "react";
import JSConfetti from "js-confetti";
const ProductData = () => {
  const [color, setcolor] = useState();
  const [size, setsize] = useState("S");

  const colors = [
    { id: 1, color: "black" },
    { id: 2, color: "white" },
    { id: 3, color: "green" },
  ];
  const jsConfetti = new JSConfetti();

  function addtocardfunc() {
    jsConfetti.addConfetti({
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
    });
  }
  return (
    <div>
      <div className="productdata">Product Details</div>
      <div className="nameandcategouryandbrand">
        <div>
          <span style={{ fontWeight: "bold" }}>Product Name :</span>Nike Pants
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Categoury:</span>Clothes
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Brand:</span>Nike
        </div>
      </div>

      <div style={{ marginTop: "20px" }} className="d-flex  ">
        {" "}
        <span style={{ fontWeight: "bold" }}> available Colors:</span>
        {colors.map((color, index) => {
          return (
            <div
              style={{
                backgroundColor: color.color,
              }}
              className="mx-2 colorofproduct"
              id={color.id}
              key={index}
              onClick={() => setcolor(color.color)}
            ></div>
          );
        })}
      </div>
      <div className="my-3">
        <span style={{ fontWeight: "bold" }}>discription:</span> Most people
        have limited time and attention spans, making it unlikely that they’ll
        read through lengthy paragraphs of product details. By keeping the
        content concise and to the point, you increase the likelihood that
        people will read it and understand it.
      </div>
      <div className="d-flex">
        <span style={{ fontWeight: "bold" }}>Rate : </span> 3.5
        <i class="fa-solid fa-star"></i>
      </div>
      <div className="d-flex my-3">
        <span style={{ fontWeight: "bold" }}>Available Quantity: </span>{" "}
        <span
          className="mx-3"
          style={{ color: "royalblue", fontWeight: "bold" }}
        >
          10
        </span>
      </div>
      <div className="d-flex my-3">
        <span style={{ fontWeight: "bold" }}>Size:</span>
        <div onClick={() => setsize("S")} className="mx-2 sizeofproduct">
          S
        </div>
        <div onClick={() => setsize("M")} className="mx-2 sizeofproduct">
          M
        </div>
        <div onClick={() => setsize("L")} className="mx-2 sizeofproduct">
          L
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div>
          <span style={{ fontWeight: "bold" }}>price :</span>150$
        </div>
        <div onClick={addtocardfunc} className="Addtocartbtn">
          <i class="fa-solid fa-basket-shopping"></i> Add To Cart
        </div>
      </div>

      <div className="d-flex justify-content-center my-3">
        <div
          style={{
            backgroundColor: color,
          }}
          className="mx-2 colorofproduct"
        ></div>
        <div className="mx-2 sizeofproduct">{size}</div>
      </div>
    </div>
  );
};

export default ProductData;
