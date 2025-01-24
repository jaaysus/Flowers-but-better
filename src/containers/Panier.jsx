import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    modifierQuantite,
    supprimerDuPanier,
    viderPanier,
    diminuerStock,
} from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import '../styles/panier.css';

const Panier = () => {
    const panier = useSelector((state) => state.panier.panier);
    const produits = useSelector((state) => state.products.produits);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.users.currentUser);
    const [fadingItems, setFadingItems] = useState([]);
    const [commandeSuccess, setCommandeSuccess] = useState(false);
    const [copied, setCopied] = useState(false);

    const trackingNumber = "ABC123456789XYZ"; // Example tracking number
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
            setCommandeSuccess(true);
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

    const handleCopy = () => {
        navigator.clipboard.writeText(trackingNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        if (!currentUser) {
            navigate('/auth'); // Navigate to the auth page if not logged in
        }
    }, [currentUser, navigate]);

    return currentUser ? (
        <div className="container">
            <h1>Panier</h1>
            {commandeSuccess ? (
                <div className="success-container">
                    <img
                        src="https://www.svgrepo.com/download/13679/success.svg"
                        alt="Success"
                        className="success-svg"
                        style={{ fill: '#07202B' }}
                    />
                    <p className="success-text">
                        Your Flowers are on the way, use the Tracking number below to stay in touch
                    </p>
                    <div className="tracking-section">
                         <div className="tracking-number">
                            <span>{trackingNumber}</span>
                            <FontAwesomeIcon
                                icon={copied ? faCheckCircle : faCopy} // Conditionally render the success icon or copy icon
                                className="copy-icon"
                                onClick={handleCopy}
                            />
                        </div>
                        <p className="tracking-services-text">
                            You can use one of these services:
                        </p>
                        <div className="tracking-icons">
                            <a
                                href="https://www.dhl.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://static.cdnlogo.com/logos/d/60/dhl-thumb.png"
                                    alt="DHL"
                                    className="tracking-icon"
                                />
                            </a>
                            <a
                                href="https://www.fedex.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://logocreator.io/wp-content/uploads/2023/11/fedex-logo-free-download-free-vector-1.jpg"
                                    alt="FedEx"
                                    className="tracking-icon"
                                />
                            </a>
                            <a
                                href="https://www.ups.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.zenkraft.com/static/images/carriers/ups.png"
                                    alt="UPS"
                                    className="tracking-icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            ) : panier.length > 0 ? (
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
                <p style={{ padding: '2rem', textAlign: 'center', color: '#07202B' }}>
                    Panier est vide
                </p>
            )}
        </div>
    ) : null;
};

export default Panier;
