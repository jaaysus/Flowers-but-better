import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css'; 

const Card = ({ produit, handleAddToPanier, handleAddToStock, isButtonDisabled, cardbutton, isAlert, handleDeleteProduct }) => {


    return (
    
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    <img src={produit.img} alt={produit.nom} />
                </div>
                <div className="contentBx">
                    <h2>{produit.nom}</h2>
                    <div className="size" style={isAlert(produit)? {backgroundColor: 'red'} : {}}>
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
                            if (cardbutton === "Add to Stock") {
                                handleAddToStock(produit, quantite);
                            } else {
                                handleAddToPanier(produit, quantite);
                            }
                        }}
                        className="add-to-Panier"
                        disabled={isButtonDisabled(produit)}
                        style={{ padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
                    >
                        {cardbutton}
                    </button>
                    {cardbutton === "Add to Stock" ? (
                        <button
                            onClick={() => {
                                if (confirm("Are you sure?")) {
                                    handleDeleteProduct();
                                }
                            }}                            
                            className="delete-product"
                            style={{
                                padding: '10px 20px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                backgroundColor: 'red',
                            }}
                        >
                            Remove
                        </button>
                    ) : (
                        ""
                    )}
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