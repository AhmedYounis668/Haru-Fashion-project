import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "./images/curly_hair_girl-1.jpg";
import img2 from "./images/curly_hair_white-1.jpg";
import img3 from "./images/monigote.jpg";
import img1mobile from "./images/curly_hair_girl-1_mobile.jpg";
import img2mobile from "./images/monigote_mobile.jpg";
import img3mobile from "./images/curly_hair_white-1_mobile.jpg";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Box } from "@mui/material";

// install Swiper modules

const SliderShow = () => {
  const sliders = [
    {
      id: 1,
      image: img1,
      imageTablet: img1,
      imageMobile: img1mobile,
      subtitle: "50% off",
      titleUp: "New Cocktail",
      titleDown: "Dresses",
      leftText: true,
    },
    {
      id: 2,
      image: img3,
      imageTablet: img3,
      imageMobile: img2mobile,
      subtitle: "spring promo",
      titleUp: "New The Weekend ",
      titleDown: "Promotions",
      leftText: true,
    },
    {
      id: 3,
      image: img2,
      imageTablet: img2,
      imageMobile: img3mobile,
      subtitle: "Spring Revolution",
      titleUp: "Night Summer",
      titleDown: "Dresses",
      rightText: true,
    },
  ];

  //   window.onresize = function () {
  //     const width = window.innerWidth;
  //     if (width < 600) {
  //       setimgres((document.getElementById("image").src = img1mobile));
  //     } else {
  //       setimgres((document.getElementById("image").src = img1));
  //     }
  //   };

  // window.onresize = function () {
  //   const width = window.innerWidth;
  //   sliders.map((slider) => {
  //     if (width < 600) {
  //       imgres.push(
  //         (document.getElementById("image").src = slider.imageMobile)
  //       );
  //     } else {
  //       imgres.push((document.getElementById("image").src = slider.image));
  //     }
  //   });
  // };
  // console.log(imgres);

  // window.addEventListener("resize", (slider) => {
  //   const width = window.innerWidth;
  //   return width < 600 ? slider.imageMobile : slider.image;
  //   // return (document.getElementById("image").src = width < 600? slider.imageMobile : slider.image);
  // });

  // useEffect(() => {
  //   window.onresize = function () {
  //     // return (width = width);
  //     window.location.reload(false);
  //   };
  // });
  // useEffect(() => {
  //   console.log(width);
  // }, [width]);

  const [windowdimension, detectw] = useState({ winwidth: window.innerWidth });

  const detectsize = () => {
    detectw({
      winwidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectsize);
    return () => {
      window.removeEventListener("resize", detectsize);
    };
  }, [windowdimension]);

  const res = (slider) => {
    return windowdimension.winwidth < 600 ? slider.imageMobile : slider.image;
    // return (document.getElementById("image").src = width < 600? slider.imageMobile : slider.image);
  };

  return (
    <Box>
      <Swiper
        style={{ height: "660px", width: "100%" }}
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
        {/* اضافه تيكيست علي الاسلايدر والصوره */}
        {
          sliders.map((slider) => (
            <SwiperSlide>
              {slider.leftText === true ? (
                <div
                  id="lefttext"
                  style={{
                    position: "absolute",
                    top: "230px",
                    left: "200px",
                  }}
                  className="hideslidertext"
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      marginTop: "-25px",
                      background: "black",
                      color: "white",
                      width: "120px",
                      height: "auto",
                      borderRadius: "5px",
                    }}
                  >
                    {slider.subtitle}
                  </div>
                  <div style={{ fontSize: "40px", fontWeight: "bold" }}>
                    {slider.titleUp}
                  </div>
                  <div
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      position: "absolute",
                      left: "0",
                    }}
                  >
                    {slider.titleDown}
                  </div>

                  <div
                    style={{
                      fontSize: "20px",
                      position: "absolute",
                      left: "0",
                      marginTop: "80px",
                    }}
                  >
                    Shop Now
                  </div>
                </div>
              ) : null}
              {slider.rightText === true ? (
                <div
                  id="righttext"
                  style={{
                    position: "absolute",
                    top: "230px",
                    right: "200px",
                  }}
                  className="hideslidertext"
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      marginTop: "-25px",
                      background: "black",
                      color: "white",
                      width: "160px",
                      height: "auto",
                      borderRadius: "5px",
                    }}
                  >
                    {slider.subtitle}
                  </div>
                  <div style={{ fontSize: "40px", fontWeight: "bold" }}>
                    {slider.titleUp}
                  </div>
                  <div
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      position: "absolute",
                      left: "0",
                    }}
                  >
                    {slider.titleDown}
                  </div>

                  <div
                    style={{
                      fontSize: "20px",
                      position: "absolute",
                      left: "0",
                      marginTop: "80px",
                    }}
                  >
                    Shop Now
                  </div>
                </div>
              ) : null}

              <div
                style={{
                  position: "absolute",
                  top: "65%",
                  bottom: "28px",
                  textAlign: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "auto",
                }}
                className="hideandshowslidertextformobile"
              >
                <div
                  style={{
                    width: "70%",
                    marginRight: "auto",
                    marginLeft: "auto",
                    background: "white",
                    opacity: "0.8",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      background: "black",
                      color: "white",
                      borderRadius: "5px",
                      width: "120px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontSize: "16px",
                    }}
                  >
                    {slider.subtitle}
                  </div>
                  <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                    {" "}
                    {slider.titleUp}
                  </div>
                  <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                    {" "}
                    {slider.titleDown}
                  </div>
                  <div style={{ marginTop: "5px" }}>Shop Now</div>
                </div>
              </div>
              <img id="image" alt="slide1" src={res(slider)} />
            </SwiperSlide>
          ))

          // window.onresize = function () {
          //   const width = window.innerWidth;
          //   sliders.map((slider) => {
          //     if (width < 600) {
          //       imgres.push(
          //         (document.getElementById("image").src = slider.imageMobile)
          //       );
          //     } else {
          //       imgres.push((document.getElementById("image").src = slider.image));
          //     }
          //   });
          // };
          // console.log(imgres);

          // sliders.map((slider) => (
          //   <SwiperSlide>
          //     <img id="image" alt="slide1" src={slider
        }
        {/* <SwiperSlide>
          <img id="image" alt="slide1" src={imgres} />
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <img id="image" alt="slide1" src={imgres} />
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <img alt="slide2" src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="slide3" src={img3} />
        </SwiperSlide> */}
      </Swiper>
    </Box>
  );
};

export default SliderShow;
