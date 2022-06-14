import React from "react";
import { SliderContainer } from "./style";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider(props) {
  const { bannerList } = props;
  const autoplayOption = {
    delay: 3000,
    disableOnInteraction: false,
  };

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="swiper">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={autoplayOption}
          loop
          pagination
        >
          {bannerList.map((slider, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={slider.imageUrl}
                  width="100%"
                  height="100%"
                  alt="推荐"
                />
              </SwiperSlide>
            );
          })}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </SliderContainer>
  );
}

export default React.memo(Slider);
