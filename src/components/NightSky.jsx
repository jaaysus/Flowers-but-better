import React from 'react';
import '../styles/NightSky.scss'; // Make sure to import the CSS file

const NightSky = () => {
  return (
    <div className="stars-div">
      <div className="night">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="shooting_star"></div>
        ))}
      </div>
    </div>
  );
};

export default NightSky;
