import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
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
      <div id="hero01">
      <h1> Welcome to our Flower Shop</h1>
      </div>
        <div id="hero02">
            <Link to="/auth" style={{ color: '#07202B', textDecoration: 'none' }}>Buy Flowers</Link>
        </div>

      <section className="Carousel">
          <FlowersGallery  />
      </section>
      <section className="reviews">
      </section>
    </>
  );
};

export default NormalUserHome;
