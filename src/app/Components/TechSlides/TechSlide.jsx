import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './TechSlide.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function TechSlide() {
  return (
    <section style={{width: '95%', margin: 'auto'}}>
    {/* <p style={{fontSize: 30,fontWeight: 600, marginTop: 20, textAlign: 'center', color: 'rgb(3, 192, 129)' }}>Technologies we use</p> */}
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          '@0.75': {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          '@1.00': {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/lang/react.png" alt="lang logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/lang/next.png" alt="lang logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/lang/javascript.png" alt="lang logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/lang/css.png" alt="lang logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/lang/python.png" alt="lang logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/lang/sql.png" alt="lang logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/lang/flutter.png" alt="lang logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/lang/html.png" alt="lang logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/lang/html.png" alt="lang logo" /></SwiperSlide>
      </Swiper>
    </section>
  );
}
