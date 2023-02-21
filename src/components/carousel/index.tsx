import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { FreeMode } from "swiper";

interface Props {
  data: {
    img: string;
    id: string;
  }[];
}

export const Carousel = ({ data }: Props) => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={12}
        freeMode
        modules={[FreeMode]}
        loop
      >
        {data.map(({ img, id }) => (
          <SwiperSlide key={id}>
            <img src={img} alt={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
