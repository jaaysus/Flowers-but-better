import React, { useState, useEffect } from 'react';

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 1000); // Transition time
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 1000); // Transition time
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

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
    transition: 'transform 1s ease-in-out',
    transform: isTransitioning ? 'translateX(-100%)' : 'translateX(0)',
  };

  const imageCaptionStyle = {
    fontStyle: 'normal',
    fontSize: '1rem',
    marginTop: '0.5rem',
    transition: 'transform 1s ease-in-out',
    transform: isTransitioning ? 'translateX(-100%)' : 'translateX(0)',
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
        <p style={{ color: "#07202B" }}>{testimonials[currentIndex].phrase}</p>
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
