

import './Projects.css';

//Swipper

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App() {

  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])

  return (
    <section className='Projects_Container' data-aos="fade-up" >
      <p>What we Delivered to our customers</p>
      <p className='Projects_Container-fp'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius magni ratione repudiandae iste labore vitae?</p>
      <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='imgcon'>
            <img src="images/pp.jpg" alt="" />
          </div>
          <div className='slide_context'>
            <h3>This is That</h3>
            <p  style={{textAlign: 'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero quidem aliquam quos commodi porro eos, perspiciatis tenetur animi eligendi repellendus nobis error modi rerum, nesciunt perferendis voluptatibus nostrum nihil.</p>
            <Link style={{color: 'black'}} href="/">Read More</Link>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='imgcon'>
            <img src="images/bg1.jpg" alt="" />
          </div>
          <div className='slide_context'>
            <h3>This is That</h3>
            <p  style={{textAlign: 'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero quidem aliquam quos commodi porro eos, perspiciatis tenetur animi eligendi repellendus nobis error modi rerum, nesciunt perferendis voluptatibus nostrum nihil.</p>
            <Link style={{color: 'black'}} href="/">Read More</Link>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='imgcon'>
            <img src="images/bg2.jpg" alt="" />
          </div>
          <div className='slide_context'>
            <h3>This is That</h3>
            <p  style={{textAlign: 'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero quidem aliquam quos commodi porro eos, perspiciatis tenetur animi eligendi repellendus nobis error modi rerum, nesciunt perferendis voluptatibus nostrum nihil.</p>
            <Link style={{color: 'black'}} href="/">Read More</Link>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='imgcon'>
            <img src="images/bg3.jpg" alt="" />
          </div>
          <div className='slide_context'>
            <h3>This is That</h3>
            <p  style={{textAlign: 'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero quidem aliquam quos commodi porro eos, perspiciatis tenetur animi eligendi repellendus nobis error modi rerum, nesciunt perferendis voluptatibus nostrum nihil.</p>
            <Link style={{color: 'black'}} href="/">Read More</Link>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
}
