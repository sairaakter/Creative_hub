import { useRef } from "react"; // useRef import kora hoyeche
import "swiper/css";
import { Autoplay } from "swiper/modules"; // Autoplay module import korun
import { Swiper, SwiperSlide } from "swiper/react";

import Tempy from "../style/Team.module.css";
import { TeamData } from "./Data/Teamdata";
import Teampcard from "./Teampcard";

export default function Teamp() {
  // Swiper instance control korar jonno ref create kora holo
  const swiperRef = useRef(null);

  return (
    <div className={Tempy.portfolio}>
      <div className="container ban_container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`pull-right hidden-xs ${Tempy.t_control}`}>
              {/* Previous Button - Left Arrow */}
              <button
                className={`${Tempy.right} btn btn-success ${Tempy.t_custyle}`}
                onClick={() => swiperRef.current?.slidePrev()} // Previous slide-e jabe
                type="button"
                style={{ cursor: "pointer" }}
              >
                <svg
                  width="26"
                  height="12"
                  viewBox="0 0 26 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={Tempy.imgcolochang}
                >
                  <path
                    d="M6 11L1 6M1 6L6 0.999998M1 6L25 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Next Button - Right Arrow */}
              <button
                className={`${Tempy.left} btn btn-success ${Tempy.t_custyle}`}
                onClick={() => swiperRef.current?.slideNext()} // Next slide-e jabe
                type="button"
                style={{ cursor: "pointer" }}
              >
                <svg
                  width="26"
                  height="12"
                  viewBox="0 0 26 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={Tempy.imgcolochang}
                >
                  <path
                    d="M20 1L25 6M25 6L20 11M25 6H1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Swiper
          className={Tempy.mySwiper}
          // Swiper initialize hobar somoy instance-ta ref-e save korchi
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay]} // Autoplay jukto kora holo
          spaceBetween={25}
          slidesPerView="auto"
          loop={true} // Infinite loop chalu ache
          speed={3000} // Animation koto khon dhore cholbe (5000ms = 5s)
          autoplay={{
            delay: 0, // Kono deri chara shuru hobe
            disableOnInteraction: false, // Mouse diye dhurleo bondho hobe na
          }}
          // Smooth linear animation-er jonno
          // allowTouchMove={false}
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
          {TeamData.map((card) => (
            <SwiperSlide key={card.id}>
              <Teampcard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
