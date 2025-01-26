import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FlowersGallery from './FlowersGallery';
import Hero from './Hero';
import Testimony from './testimony';
import "../styles/home.css";

const NormalUserHome = () => {
  const currentUser = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    document.body.style.backgroundColor = '#a99175';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <Hero />
      
      <div id="hero01">
        <h1>Welcome to our Flower Shop</h1>
      </div>
      
      <div id="hero02">
        <Link to={currentUser ? "/Flowers-but-better/produits" : "/Flowers-but-better/auth"} style={{ color: '#07202B', textDecoration: 'none' }}>
          Buy Flowers
        </Link>
      </div>
      
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
