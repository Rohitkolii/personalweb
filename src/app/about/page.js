'use client'

import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Styles from './About.module.css'

const About = () => {
  return (
    <>
    <Navbar />
      <section className={Styles.aboutpage}>
        <div> 
          <h1>About Falana Company.</h1>
          <p>Flown Developer is among the top 10 Web design and Web Development companies in India in 2022. It laid its foundations in 2017. Our experts are highly experienced in delivering websites that are easy to use, visually appealing and accessible to a wide range of devices. Avail one of the top web utilities the company provides as we tend to pull the audience that is genuinely mesmerized by your layout, web design ideas, graphics, and images to the site’s typography. We have successfully delivered to 100+ clients and are one of the most reliable web designing companies in India that transforms the online brand image of any business or startup. We believe in creating a high-quality website which will help our clients thrive in the industry. <br/> <br/> A professional website designing company in India which offers custom web and affordable web services with an aim to create the best ROI-driven mechanism for clients. We are a web design and development company in India that completes websites within budget and delivers before deadlines. A capable web design firm can assist you in creating a website that is user-friendly, search engine optimised, and visually beautiful. We are the best website design company in India, you can rely on us for a leading website design. A leading web development agency will help you develop a result-oriented web design with a wide range of web graphics, innovative ideas, and core strategic design work. We are your one-stop shop for creating a potential website for your business and provide development solutions with end-to-end services. A professional company in India providing aryston web solutions that enables a website to be compatible with all the modern tools to ensure that all the web pages have a high load speed and caters to all the needs of the users.</p>
        </div>

        <div>
          <h1>Team Members</h1>
          <p>A capable web design firm can assist you in creating a website that is user-friendly, search engine optimised, and visually beautiful. We are the best website design company in India, you can rely on us for a leading website design. A leading web development agency will help you develop a result-oriented web design with a wide range of web graphics, innovative ideas, and core strategic design work.</p>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default About