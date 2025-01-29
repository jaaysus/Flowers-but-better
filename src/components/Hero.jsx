import React, { useEffect, useState } from "react";

const Hero = () => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100); // Small delay to ensure animation starts after the component is rendered
  }, []);

  return (
    <div style={{ width: '100%', height: 'auto' }}>

      <img
        src="/Flowers-but-better/hero bg color.png" 
        alt="background_color"
        style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' }}
      />
      <img
        src="/Flowers-but-better/blue flower.png" 
        alt="blue_flower"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          position: "absolute",
          top: "0.25rem",
          right: "15.3rem",
          zIndex: "2",
          transform: animate ? "scale(1)" : "scale(0)",
          transition: "transform 1s ease-in-out"}}
      />

      <img
        src="/Flowers-but-better/pink flower.png" 
        alt="pink_flower"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          position: 'absolute',
          top: '1.5rem',
          left: '17rem' ,
          zIndex: '2',
          transform: animate ? "scale(1)" : "scale(0)",
          transition: "transform 1s ease-in-out"
        }}
      />

      <img
        src="/Flowers-but-better/main text.png" 
        alt="main_text"
        style={{ width: '72%', height: '72%', objectFit: 'contain', position: 'absolute', top: '7rem', left: '11rem' , zIndex: '1'}}
      />

      <img
        src="/Flowers-but-better/bg flowers.png" 
        alt="backgroung_flowers"
        style={{
          width: "100%",
          height: "120%",
          objectFit: "contain",
          position: "absolute",
          top: "0rem",
          left: "1rem",
          zIndex: "0",
          transform: animate ? "scale(1)" : "scale(0.2)",
          transition: "transform 1.5s ease-in-out"}}
      />
    </div>
  );
};

export default Hero;
