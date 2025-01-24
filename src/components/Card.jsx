import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css'; 

const Card = ({ produit, handleAddToPanier, isButtonDisabled }) => {
    return (
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    <img src={produit.img} alt={produit.nom} />
                </div>
                <div className="contentBx">
                    <h2>{produit.nom}</h2>
                    <div className="size">
                        <h3>Stock:</h3>
                        <span>{produit.stock}</span>
                    </div>
                    <div className="price">
                        <h3>Price:</h3>
                        <span>{produit.prix} DH</span>
                    </div>
                    <div className="quantity-control">
                        <h3>Quantity:</h3>
                        <input
                            type="number"
                            min="1"
                            defaultValue="1"
                            id={`quantity-${produit.id}`}
                            style={{ width: '50px', margin: '0 10px' }}
                        />
                    </div>
                    <button
                        onClick={() => {
                            const quantite = parseInt(document.getElementById(`quantity-${produit.id}`).value, 10);
                            handleAddToPanier(produit, quantite);
                        }}
                        className="add-to-Panier"
                        disabled={isButtonDisabled(produit)}
                        style={{ padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    produit: PropTypes.object.isRequired,
    handleAddToPanier: PropTypes.func.isRequired,
    isButtonDisabled: PropTypes.func.isRequired,
};

export default Card;