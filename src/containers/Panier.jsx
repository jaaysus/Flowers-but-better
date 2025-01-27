import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    modifierQuantite,
    supprimerDuPanier,
    viderPanier,
    diminuerStock,
    genereTrackingNumber,
} from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCopy } from '@fortawesome/free-solid-svg-icons';
import '../styles/panier.css';
import PanierFlower from '../components/panierflower';

const Panier = () => {
    const panier = useSelector((state) => state.panier.panier);
    const produits = useSelector((state) => state.products.produits);
    const trackingNumbers = useSelector((state) => state.panier.orderInfo.trackingNumbers); // Updated to use trackingNumbers array
    const currentUser = useSelector((state) => state.users.currentUser);
    const orders = useSelector((state) => state.panier.orderInfo.order);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [fadingItems, setFadingItems] = useState([]);
    const [commandeSuccess, setCommandeSuccess] = useState(false);
    const [copied, setCopied] = useState(false);

    const total = panier.reduce((sum, item) => {
        const produit = produits.find((p) => p.id === item.id);
        return sum + (produit?.prix || 0) * item.quantite;
    }, 0);

    const handleCommande = () => {
        panier.forEach((item, index) => {
            setTimeout(() => {
                setFadingItems((prev) => [...prev, item.id]);
            }, index * 500);
        });
    
        setTimeout(() => {
            if (currentUser) {
                dispatch(diminuerStock(panier));
                dispatch(viderPanier(currentUser.id)); // Pass currentUser.id here
                setFadingItems([]);
                setCommandeSuccess(true);
                dispatch(genereTrackingNumber(currentUser.id));
            }
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
        }, 500);
    };

    const handleCopy = () => {
        const latestTrackingNumber = trackingNumbers[trackingNumbers.length - 1]; // Get the latest tracking number
        navigator.clipboard.writeText(latestTrackingNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
            if (currentUser) {
                if (currentUser.isAdmin) {
                    navigate('/Flowers-but-better/adminHome');
                } else {
                    navigate('/Flowers-but-better/panier');
                }
            }
            else{
                navigate('/Flowers-but-better/auth');
            }
        }, [currentUser, navigate]);

    return currentUser ? (
        <div className="container">
            <h1>Cart</h1>
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
                            <span>{trackingNumbers[trackingNumbers.length - 1]}</span> {/* Data access getting more complicated but alright */}
                            <FontAwesomeIcon
                                icon={copied ? faCheckCircle : faCopy}
                                className="copy-icon"
                                onClick={handleCopy}
                            />
                        </div>
                        <p className="tracking-services-text">
                            You can use one of these services:
                        </p>
                        <div className="tracking-icons">
                            <a href="https://www.dhl.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://static.cdnlogo.com/logos/d/60/dhl-thumb.png"
                                    alt="DHL"
                                    className="tracking-icon"
                                />
                            </a>
                            <a href="https://www.fedex.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://logocreator.io/wp-content/uploads/2023/11/fedex-logo-free-download-free-vector-1.jpg"
                                    alt="FedEx"
                                    className="tracking-icon"
                                />
                            </a>
                            <a href="https://www.ups.com" target="_blank" rel="noopener noreferrer">
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
                                className={`Panier-item ${fadingItems.includes(item.id) ? 'fade-out-right' : ''}`}
                            >
                                <div className="Panier-item-content">
                                    <img
                                        src={produit?.img || ''}
                                        alt={produit?.nom || 'Product'}
                                        className="Panier-item-img"
                                    />
                                    <span className="Panier-item-name">{produit?.nom || 'Unknown'}</span>
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
                                    disabled={item.quantite >= produit?.stock} // Disable the button if quantity reaches the stock
                                    style={{
                                        backgroundColor: item.quantite >= produit?.stock ? 'red' : '',
                                        color: item.quantite >= produit?.stock ? 'white' : '',
                                        cursor: item.quantite >= produit?.stock ? 'not-allowed' : '',
                                    }}
                                >
                                    +
                                </button>

                                </div>
                                <button className="supprimer" onClick={() => handleSupprimer(item.id)}>
                                    Remove
                                </button>
                            </div>
                        );
                    })}
                    <div className="total">Total : {total} DH</div>
                    <button className="commander" onClick={handleCommande}>
                        Place Order
                    </button>
                </div>
            ) : (
                <div className="empty-cart-message">
                    <p
                        style={{
                            fontSize: '1.2rem',
                            fontWeight: '500',
                            color: '#07202B',
                            textAlign: 'center',
                        }}
                    >
                        Your cart is empty!
                    </p>
                    <p
                        style={{ marginTop: '0.5rem', color: '#555', textAlign: 'center' }}
                    >
                        Start shopping flowers to see them here.
                    </p>
                    <PanierFlower />
                </div>
            )}
        </div>
    ) : null;
};

export default Panier;
