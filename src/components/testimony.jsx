import React from 'react';

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

  const carouselStyle = {
    background: 'linear-gradient(112deg, #07202B 50%, #821515 50%)',
    maxWidth: '900px',
    margin: 'auto',
    height: '450px',
  };

  const captionStyle = {
    position: 'initial',
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

  return (
    <div className="container">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
      
      <div id="demo" className="carousel slide" data-ride="carousel" style={carouselStyle}>
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="carousel-caption" style={captionStyle}>
                <p>{testimonial.phrase}</p>
                <img src={testimonial.image} alt={`Slide ${index + 1}`} style={imageStyle} />
                <div id="image-caption" style={imageCaptionStyle}>
                  {testimonial.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <i className="fa fa-arrow-left"></i>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Testimony;
