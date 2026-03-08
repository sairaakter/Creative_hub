// import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Autoplay } from "swiper/modules"; // Autoplay module import korun
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import tesmony from "../style/Testimonial.module.css";
import { TestyData } from "./Data/Testydata";
import Testcard from "./Testcard";

export default function Testimonial() {
  return (
    <div className={tesmony.testimonial}>
      <div className="container ban_container">
        <Swiper
          className={tesmony.mySwiper}
          // modules={[Autoplay, Navigation, Pagination]}
          modules={[Autoplay]} // Autoplay jukto kora holo
          spaceBetween={25}
          slidesPerView="auto"
          // centeredSlides={true} ata nije nije slid hobe
          loop={true} // <--- Eitai holo infinite loop
          speed={5000} // Animation koto khon dhore cholbe (5000ms = 5s)
          autoplay={{
            delay: 0, // Kono deri chara shuru hobe
            disableOnInteraction: false, // Mouse diye dhurleo bondho hobe na
          }}
          // Smooth linear animation-er jonno
          allowTouchMove={false}
          // navigation
          // pagination={{ clickable: true }} this is for bottoms dots
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {TestyData.map((card) => (
            <SwiperSlide key={card.id}>
              <Testcard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
