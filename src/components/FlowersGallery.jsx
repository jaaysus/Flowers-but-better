import React from 'react';
import { connect } from 'react-redux';
import FlowersCard from './FlowersCard';
import "../styles/FlowerCarousel.css";



const FlowersGallery = ({ cards }) => {
  return (
    <ul className="cards-container cards">
      {cards.map((card, index) => (
        <FlowersCard
          key={index}
          id={index}
          name={card.name}
          smallImg={card.smallImg}
          largeImg={card.largeImg}
          description={card.description}
          checked={card.checked}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  cards: state.cards.cards,
});

export default connect(mapStateToProps)(FlowersGallery);
