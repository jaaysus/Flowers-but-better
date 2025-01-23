import React, { useState } from 'react';

const Testimony = () => {
  const testimonials = [
    {
      name: 'Sophia Loren',
      phrase: 'Floral Dreams brings timeless elegance to every arrangement. The vintage touches and sophisticated floral designs truly set this shop apart.',
      image: 'https://img.freepik.com/free-photo/medium-shot-woman-posing-vintage-portrait_23-2150794796.jpg',
    },
    {
      name: 'Tom Cruise',
      phrase: 'As a customer who values quality and style, Floral Dreams never disappoints. Their floral arrangements are simply breathtaking, each one exuding a classic charm.',
      image: 'https://i.ibb.co/yqMnq3r/image.png',
    },
    {
      name: 'John Doe',
      phrase: 'Floral Dreams is more than just a flower shop – it\'s an experience. From the moment you step in, the vintage ambiance and exquisite flower arrangements transport you to another time.',
      image: 'https://img.freepik.com/free-photo/front-view-young-man-posing-vintage-portrait_23-2150795142.jpg',
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
    background: 'linear-gradient(112deg, #07202B 50%, #821515 50%)',
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
    color: 'rgba(78, 77, 77, 0.856)',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    fontWeight: 'bold',
    lineHeight: '2rem',
  };

  const imageStyle = {
    width: '6rem',
    borderRadius: '5rem',
    marginTop: '2rem',
  };

  const imageCaptionStyle = {
    fontStyle: 'normal',
    fontSize: '1rem',
    marginTop: '0.5rem',
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
  };

  return (
    <div style={carouselStyle}>
      <div style={captionStyle}>
        <p>{testimonials[currentIndex].phrase}</p>
        <img src={testimonials[currentIndex].image} alt={`Slide ${currentIndex + 1}`} style={imageStyle} />
        <div style={imageCaptionStyle}>
          {testimonials[currentIndex].name}
        </div>
      </div>
      <button
        style={{ ...buttonStyle, left: '0' }}
        onClick={handlePrev}
      >
        <i className="fa fa-arrow-left" />
      </button>
      <button
        style={{ ...buttonStyle, right: '0' }}
        onClick={handleNext}
      >
        <i className="fa fa-arrow-right" />
      </button>
    </div>
  );
};

export default Testimony;
