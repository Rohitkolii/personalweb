import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Projects.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <section className='Projects_Container'>
      <p>What we Delivered to out customers</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius magni ratione repudiandae iste labore vitae?</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="images/pp.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="images/pp.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="images/pp.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="images/pp.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="images/pp.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="images/pp.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="images/pp.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
