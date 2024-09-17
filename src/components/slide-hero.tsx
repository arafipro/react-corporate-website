import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import business1 from "../assets/business1.jpg";
import business2 from "../assets/business2.jpg";
import business3 from "../assets/business3.jpg";
import business4 from "../assets/business4.jpg";
import mainVisual from "../assets/mainvisual.jpg";
import SlideImage from "./ui/slide-image";

export default function SlideHero() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SlideImage
          title="	ＸＸＸＸＸＸ株式会社"
          imageUrl={mainVisual}
          alt="ヒーロー画像"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage
          title="Web制作・マーケティング"
          imageUrl={business1}
          alt="ヒーロー画像"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage
          title="インターネットメディア事業"
          imageUrl={business2}
          alt="ヒーロー画像"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage
          title="プロモーション企画・制作"
          imageUrl={business3}
          alt="ヒーロー画像"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage
          title="ソーシャル企画・運営"
          imageUrl={business4}
          alt="ヒーロー画像"
        />
      </SwiperSlide>
    </Swiper>
  );
}
