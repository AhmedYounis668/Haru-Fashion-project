import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../images/bestselling1.jfif";
import img2 from "../images/bestselling2.jfif";
import img3 from "../images/bestselling3.jfif";
import { Autoplay, Navigation } from "swiper/modules";

const ProductImage = () => {
  const sliders = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img3,
    },
    {
      id: 3,
      image: img2,
    },
  ];
  return (
    <div>
      <Swiper
        style={{ height: "100%", width: "100%" }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper "
      >
        {sliders.map((images, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                style={{ height: "370px" }}
                id={images.id}
                alt="slide1"
                src={images.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductImage;
