import React from "react";
import Bounce from "react-reveal/Bounce";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const ClientOpenion = () => {
  const clientopinion = [
    {
      id: 1,
      name: "Ahmed Younis",
      opinion:
        "provident neque obcaecati, quo consequatur delectus s ullam iusto, maiores facere consecte",
      slug: "Business Owner",
    },
    {
      id: 2,
      name: "Farouk Elmasry",
      opinion:
        "provident neque obcaecati, quo consequatur delectus s ullam iusto, maiores facere consecte",
      slug: "Athlete",
    },
  ];
  return (
    <Container>
      <Row>
        <Col className="col-12">
          <div style={{ fontSize: "25px", marginTop: "20px" }}>Testimonial</div>

          <Bounce>
            <Swiper
              style={{ height: "180px", width: "100%" }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[
                EffectCoverflow,
                Autoplay,
                Navigation,
                Pagination,
                Mousewheel,
                Keyboard,
              ]}
              className="mySwiper "
            >
              {clientopinion.map((opinion, index) => {
                return (
                  <SwiperSlide
                    style={{
                      background: "#E5E4E2",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                        alignItems: "center",
                        fontSize: "15px",
                      }}
                    >
                      {opinion.opinion}
                    </div>
                    <div style={{ fontWeight: "bold", marginTop: "25px" }}>
                      -{opinion.name}-
                    </div>
                    <div style={{ fontSize: "16px", marginTop: "5px" }}>
                      ({opinion.slug})
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Bounce>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientOpenion;
