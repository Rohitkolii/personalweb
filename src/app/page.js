'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import TechSlide from "./Components/TechSlides/TechSlide";
import Services from "./Components/Services/Services";
import Info from "./Components/Info/Info";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <TechSlide />
      <Services />
      <Info />
      <Projects />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
