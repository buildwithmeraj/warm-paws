import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/slideImages.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Failed to load images:", err));
  }, []);

  if (images.length === 0) return null;

  return (
    <Swiper
      modules={[EffectCoverflow, Autoplay]}
      effect="coverflow"
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={images.length > 2}
      centeredSlides
      slidesPerView={1}
      className="w-[350px] md:w-[600px] lg:w-[800px] h-[250px] md:h-[400px] lg:h-[500px]"
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
