import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { modifierQuantite, supprimerDuPanier, viderPanier, diminuerStock } from '../redux/actions';
import '../styles/panier.css';

const Panier = () => {
    const panier = useSelector((state) => state.panier.panier);
    const produits = useSelector((state) => state.products.produits);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.users.currentUser);
    const [fadingItems, setFadingItems] = useState([]);
    const total = panier.reduce((sum, item) => {
        const produit = produits.find((p) => p.id === item.id);
        return sum + produit.prix * item.quantite;
    }, 0);

    const handleCommande = () => {
        panier.forEach((item, index) => {
            setTimeout(() => {
                setFadingItems((prev) => [...prev, item.id]);
            }, index * 500);
        });

        setTimeout(() => {
            dispatch(diminuerStock(panier));
            dispatch(viderPanier());
            setFadingItems([]);
        }, panier.length * 500);
    };

    const handleModifierQuantite = (id, delta) => {
        const item = panier.find((item) => item.id === id);
        if (item && item.quantite + delta > 0) {
            dispatch(modifierQuantite(id, item.quantite + delta));
        }
    };

    const handleSupprimer = (id) => {
        setFadingItems((prev) => [...prev, id]);
        setTimeout(() => {
            dispatch(supprimerDuPanier(id));
            setFadingItems((prev) => prev.filter((itemId) => itemId !== id));
        }, 500); // Allow the fade animation to complete
    };

    useEffect(() => {
        if (!currentUser) {
            navigate('/auth'); // Navigate to the auth page if not logged in
        }
    }, [currentUser, navigate]);

    return currentUser ? (
        <div className="container">
            <h1>Panier</h1>
            {panier.length > 0 ? (
                <div className="Panier">
                    {panier.map((item) => {
                        const produit = produits.find((p) => p.id === item.id);
                        return (
                            <div
                                key={item.id}
                                className={`Panier-item ${
                                    fadingItems.includes(item.id) ? 'fade-out-right' : ''
                                }`}
                            >
                                <div className="Panier-item-content">
                                    <img
                                        src={produit.img}
                                        alt={produit.nom}
                                        className="Panier-item-img"
                                    />
                                    <span className="Panier-item-name">{produit.nom}</span>
                                </div>
                                <div className="Panier-item-quantity">
                                    <button
                                        className="modifier-quantite"
                                        onClick={() => handleModifierQuantite(item.id, -1)}
                                    >
                                        -
                                    </button>
                                    <span className="quantite-value">{item.quantite}</span>
                                    <button
                                        className="modifier-quantite"
                                        onClick={() => handleModifierQuantite(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="supprimer"
                                    onClick={() => handleSupprimer(item.id)}
                                >
                                    Supprimer
                                </button>
                            </div>
                        );
                    })}
                    <div className="total">Total : {total} DH</div>
                    <button className="commander" onClick={handleCommande}>
                        Commander
                    </button>
                </div>
            ) : (
                <p style={{ padding: '2EM 40%',color: '#07202B' }}>Aucun produit ajouté au panier</p>
            )}
        </div>
    ) : null;
};

export default Panier;
