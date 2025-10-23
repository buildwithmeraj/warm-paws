import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Snowfall from "react-snowfall";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Loading from "./Loading";
import Error from "./Error";
import snowflakeImage1 from "../assets/snowflake1.png";
import snowflakeImage2 from "../assets/snowflake2.png";

const Slider = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snowflakeImages, setSnowflakeImages] = useState([]);

  useEffect(() => {
    const img1 = new Image();
    img1.src = snowflakeImage1;
    const img2 = new Image();
    img2.src = snowflakeImage2;
    setSnowflakeImages([img1, img2]);
  }, []);

  useEffect(() => {
    fetch("/slideImages.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (images.length === 0) return null;

  return (
    <div className="relative my-0">
      {snowflakeImages.length > 0 && (
        <Snowfall
          snowflakeCount={110}
          color="#ffffff"
          radius={[5, 20]}
          speed={[0.5, 1.5]}
          wind={[0.5, 2]}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 50,
            pointerEvents: "none",
          }}
          images={snowflakeImages}
        />
      )}

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
        className="w-[350px] md:w-[600px] lg:w-[800px] h-60 md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
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
    </div>
  );
};

export default Slider;
