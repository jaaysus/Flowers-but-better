import React, { useState, useEffect } from 'react';
import "../styles/testimonies.css";// Assuming the CSS is saved in this file

const Testimonies = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = [
    {
      quote: "Curabitur ligula augue, lobortis in interdum nec, dignissim vel arcu. Donec semper aliquet mattis. Curabitur convallis urna congue viverra elementum.",
      author: "Joe Bloggs"
    },
    {
      quote: "Vivamus est felis, tempor sed mauris ac, malesuada sollicitudin ipsum. Etiam nec ullamcorper nibh, ac pretium sapien. Donec pharetra sollicitudin ligula, sit amet ornare nisi vestibulum et.",
      author: "Jane Doe"
    },
    {
      quote: "Mauris malesuada, ex at volutpat euismod, velit diam placerat lacus, eu rhoncus enim metus ultricies nisi. Mauris pharetra tristique nisl.",
      author: "John Doe"
    }
  ];

  const showSlides = (n) => {
    let newIndex = n;
    if (n > slides.length) newIndex = 1;
    if (n < 1) newIndex = slides.length;
    setSlideIndex(newIndex);
  };

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  return (
    <section className="testimony-container">

      <div className="slideshow-container">
        <h1>Here's what <span>others</span> say:</h1>

        {slides.map((slide, index) => (
          <div 
            className="mySlides" 
            key={index}
            style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
          >
            <div className="mySlidesContainer">
              <q>{slide.quote}</q>
            </div>
            <p className="author">By: <span>{slide.author}</span></p>
          </div>
        ))}

        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>

      <div className="dot-container">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`dot ${slideIndex === index + 1 ? 'active' : ''}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonies;