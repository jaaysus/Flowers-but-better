import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/App.css'

const Navbar = () => {
    // Get the number of products in the panier
    const panier = useSelector((state) => state.panier);
    const totalItems = panier.reduce((acc, item) => acc + item.quantite, 0);

    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/produits">Produits</Link>
            <Link to="/panier">
                Panier
                {totalItems > 0 && (
                    <span className="badge">{totalItems}</span> // Display badge
                )}
            </Link>

            <style>{`
                .badge {
                    background-color: red;
                    color: white;
                    border-radius: 50%;
                    padding: 0.3em 0.7em;
                    font-size: 1rem;
                    margin-left: 5px;
                    font-weight: bold;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
