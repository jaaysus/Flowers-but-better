// PokemonCard.js
import React from 'react';
import { connect } from 'react-redux';
import { updateCard } from '../redux/actions';

const FlowersCard = ({ id, name, smallImg, largeImg, description, checked, updateCard }) => {
  const handleChange = () => {
    updateCard(id, { checked: !checked });
  };

  return (
    <li style={{ '--i': id }} data-name={name}>
      <input
        type="radio"
        id={`item-${id}`}
        name="gallery-item"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={`item-${id}`}>
        <img src={smallImg} alt={`${name} small`} />
      </label>
      <img src={largeImg} alt={`${name} large`} loading="lazy" />
      <h2>{name}</h2>
      <p>{description}</p>
    </li>
  );
};

const mapDispatchToProps = {
  updateCard,
};

export default connect(null, mapDispatchToProps)(FlowersCard);
