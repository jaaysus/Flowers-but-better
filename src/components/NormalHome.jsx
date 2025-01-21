import React, { useEffect } from 'react';
import FlowersGallery from './FlowersGallery';
import Hero from './Hero';

const NormalUserHome = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#07202B';
    return () => {
      document.body.style.backgroundColor = ''; // Reset when the component is unmounted
    };
  }, []);

  return (
    <>
      <Hero />
      <FlowersGallery />
    </>
  );
};

export default NormalUserHome;
