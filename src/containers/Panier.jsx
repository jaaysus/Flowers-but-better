import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { modifierQuantite, supprimerDuPanier, viderPanier, diminuerStock } from '../redux/actions';
import '../styles/panier.css';

const Panier = () => {
    const panier = useSelector((state) => state.panier);
    const produits = useSelector((state) => state.produits);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const currentUser = useSelector((state) => state.currentUser);
    const total = panier.reduce((sum, item) => {
        const produit = produits.find((p) => p.id === item.id);
        return sum + produit.prix * item.quantite;
    }, 0);

    const handleCommande = () => {
        dispatch(diminuerStock(panier));
        dispatch(viderPanier());
    };

    useEffect(() => {
        if (!currentUser) {
            navigate('/auth'); // Navigate to the auth page if not logged in
        }
    }, [currentUser, navigate]);

    return currentUser ? (
        <div className='container'>
            <h1>Panier</h1>
            {panier.length > 0 ? (
                <div className="Panier">
                    {panier.map((item) => {
                        const produit = produits.find((p) => p.id === item.id);
                        return (
                            <div key={item.id} className="Panier-item">
                                <span>{produit.nom}</span>
                                <input
                                    type="number"
                                    value={item.quantite}
                                    onChange={(e) =>
                                        dispatch(modifierQuantite(item.id, Number(e.target.value)))
                                    }
                                />
                                <button
                                    className="supprimer"
                                    onClick={() => dispatch(supprimerDuPanier(item.id))}
                                >
                                    Supprimer
                                </button>
                            </div>
                        );
                    })}
                    <div className="total">Total : {total} DH</div>
                    <button className="commander" onClick={() => handleCommande()}>
                        Commander
                    </button>
                </div>
            ) : (
                <p style={{ padding: '2EM 40%' }}>Aucun produit ajouté au panier</p>
            )}
        </div>
    ) : null;
};

export default Panier;
