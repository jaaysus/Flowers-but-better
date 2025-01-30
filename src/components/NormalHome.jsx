import React, { useEffect } from 'react';
import FlowersGallery from './FlowersGallery';
import Hero from './Hero';
import Testimony from './testimony';
import "../styles/home.css";
import Testimonies from './Testimonies';

const NormalUserHome = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#a99175';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <Hero />      
      <section className="Carousel">
        <h1 id="carouselH1">Our<br />Flowers</h1>
        <FlowersGallery />
      </section>
      
      <section className="reviews">
        <Testimony />
      </section>

    </>
  );
};

export default NormalUserHome;
