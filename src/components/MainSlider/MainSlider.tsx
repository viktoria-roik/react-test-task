import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down-icon.svg';

import slide1 from 'assets/slides/slide1.png';
import secondSlide from 'assets/slides/slide2.png';
import slide3 from 'assets/slides/slide3.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MainSlider.scss';

const slides = [
  {
    image: slide1,
    alt: 'extraordinary tour',
  },
  {
    image: secondSlide,
    alt: 'extraordinary tour',
  },
  {
    image: slide3,
    alt: 'extraordinary tour',
  },
];

export const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      className="swiper"
      speed={800}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      pagination={{ clickable: true }}
    >
      {slides.map(slideInfo => (
        <SwiperSlide key={slideInfo.alt} className="swiper-slide">
          <div className="swiper-slide__img-box">
            <img
              className="swiper-slide__img"
              src={slideInfo.image}
              alt={slideInfo.alt}
            />
          </div>

          <div className="swiper-slide__text">
            <h1 className="swiper-slide__title">
              the space is waiting for
              <span className="swiper-slide__title--last-word">you</span>
            </h1>

            <div className="swiper-slide__btn-container">
              <button
                className="swiper-slide__btn"
                onClick={() => {
                  const toursElement = document.getElementById('tours');

                  if (toursElement) {
                    toursElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore tours
              </button>
              <ArrowDown className="swiper-slide__arrow" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    // <section className="slider">
    // <Swiper
    //   modules={[Navigation, Pagination, Autoplay]}
    //   className="swiper"
    //   speed={800}
    //   autoplay={{
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   }}
    //   loop
    //   navigation
    //   pagination={{ clickable: true }}
    // >
    //   {slides.map(slideInfo => (
    //     <SwiperSlide key={slideInfo.alt} className="swiper-slide">
    //       <div className="swiper-slide__img-box">
    //         <img
    //           className="swiper-slide__img"
    //           src={slideInfo.image}
    //           alt={slideInfo.alt}
    //         />
    //       </div>
    // <div className="swiper-slide__text">
    // <h1 className="swiper-slide__title">
    //   the space is waiting for
    //    <span className="swiper-slide__title--last-word">you</span>
    // </h1>

    // <div className="swiper-slide__btn-container">
    // <button
    //   className="swiper-slide__btn"
    //   onClick={() => {
    //     const toursElement = document.getElementById('tours');

    //     if (toursElement) {
    //       toursElement.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   }}
    // >
    //   Explore tours
    // </button>
    //   <ArrowDown  className="swiper-slide__arrow"/>
    // </div>

    // </div>

    //     </SwiperSlide>
    //   ))}

    // </Swiper>
    // </section>
  );
};
