import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/App.css';

const Navbar = () => {
    const panier = useSelector((state) => state.panier || []); 
    const totalItems = panier.reduce((acc, item) => acc + item.quantite, 0);
    const currentUser = useSelector((state) => state.currentUser); 
    const [isNavbarVisible, setNavbarVisible] = useState(!!currentUser);

    const location = useLocation(); // Detect route changes

    useEffect(() => {
        // Update navbar visibility based on user state
        setNavbarVisible(!!currentUser);
    }, [currentUser, location]); // Trigger on user state or route change

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    padding: "10px",
                    top: isNavbarVisible ? "0px" : "-60px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",//what a funny easy fix HHHHHH
                    alignItems: "center",
                    transition: "top 0.5s ease",
                    backgroundColor: "purple",
                }}
            >
                <div
                    className="circle"
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: isNavbarVisible ? '20%' : '50%',
                        zIndex: '1',
                        border: '4px solid purple',
                        transition: 'top 0.5s ease',
                    }}
                ></div>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Accueil</Link>
                <Link to="/produits" style={{ color: 'white', textDecoration: 'none' }}>Produits</Link>
                <Link to="/panier" style={{ color: 'white', textDecoration: 'none' }}>
                    Panier
                    {totalItems > 0 && (
                        <span className="badge">{totalItems}</span>
                    )}
                </Link>
                <Link to="/auth" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
            </nav>

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
                body {
                    margin: 0;
                    height: 2000px;
                    overflow-x: hidden;
                }
            `}</style>
        </>
    );
};

export default Navbar;
