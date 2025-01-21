import React, { useEffect } from 'react';
import FlowersGallery from './FlowersGallery';
import Hero from './Hero';
import "../styles/home.css";


const NormalUserHome = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(150, 93, 137)';
    return () => {
      document.body.style.backgroundColor = ''; // Reset when the component is unmounted
    };
  }, []);

  return (
    <>
      <Hero />
      <section className="Carousel">
          <FlowersGallery  />
      </section>
      <section className="reviews">
      </section>
    </>
  );
};

export default NormalUserHome;
