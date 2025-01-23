import React, { useState } from 'react';

const Testimony = () => {
  const testimonials = [
    {
      name: 'Sophia Loren',
      phrase: 'Floral Dreams brings timeless elegance to every arrangement. The vintage touches and sophisticated floral designs truly set this shop apart.',
    },
    {
      name: 'Tom Cruise',
      phrase: 'As a customer who values quality and style, Floral Dreams never disappoints. Their floral arrangements are simply breathtaking, each one exuding a classic charm.',
    },
    {
      name: 'John Doe',
      phrase: 'Floral Dreams is more than just a flower shop – it\'s an experience. From the moment you step in, the vintage ambiance and exquisite flower arrangements transport you to another time.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const carouselStyle = {
    background: 'linear-gradient(112deg,rgb(148, 116, 78) 50%, #a99175 50%)',
    maxWidth: '900px',
    margin: 'auto',
    height: '450px',
    position: 'relative',
    overflow: 'hidden',
  };

  const captionStyle = {
    position: 'absolute',
    zIndex: 10,
    padding: '5rem 8rem',
    color: '#07202B',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    fontWeight: 'bold',
    lineHeight: '2rem',
  };

  const imageCaptionStyle = {
    fontStyle: 'normal',
    fontSize: '1rem',
    marginTop: '2rem',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '2rem',
    cursor: 'pointer',
    zIndex: 20,
    padding: '1rem',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem',
  };

  return (
    <div style={carouselStyle}>
      <div style={captionStyle}>
      <p style={{ color: "#07202B", marginTop: "4.5rem" }}>{testimonials[currentIndex].phrase}</p>
        <div style={imageCaptionStyle}>
          {testimonials[currentIndex].name}
        </div>
      </div>
      <button
        style={{ ...buttonStyle, left: '0' }}
        onClick={handlePrev}
      >
        <img
          src="https://www.reshot.com/preview-assets/icons/RF5DMQX396/left-arrow-button-RF5DMQX396-17edd.svg"
          alt="Left Arrow"
          style={{ width: '50px', height: '50px' }}
        />
      </button>
      <button
        style={{ ...buttonStyle, right: '0' }}
        onClick={handleNext}
      >
        <img
          src="https://www.reshot.com/preview-assets/icons/YAB8GEM7SD/right-arrow-button-YAB8GEM7SD-7165c.svg"
          alt="Right Arrow"
          style={{ width: '50px', height: '50px' }}
        />
      </button>
    </div>
  );
};

export default Testimony;
