import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Autoplay, FreeMode } from "swiper";

interface Props {
    data: string[]
}

export const Carousel = ({data}: Props) => {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={12}
                freeMode
                modules={[FreeMode, Autoplay]}
                loop
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {data.map(img => <SwiperSlide><img src={img} alt={img} /></SwiperSlide>)}
            </Swiper>
        </div>
    );
}