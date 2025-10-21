import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/slideImages.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Failed to load images:", err));
  }, []);

  return (
    <Swiper
      modules={[EffectCards, Autoplay]}
      effect="cards"
      autoplay={{
        delay: 2500, // ⏱ 2.5 seconds per slide
        disableOnInteraction: false,
      }}
      loop
      className="w-full max-w-[800px] h-[500px]"
    >
      {images.map((img) => (
        <SwiperSlide key={img.id}>
          <img
            src={img.url}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
