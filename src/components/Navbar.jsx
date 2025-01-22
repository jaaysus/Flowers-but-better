import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/App.css';

const navbarStyles = {
    nav: {
        position: "fixed",
        padding: "10px",
        top: "0px",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        transition: "top 0.5s ease",
        backgroundColor: "#07202B",
        zIndex: '5',
    },
    circle: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundImage: 'url(/navbar_flower.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%) rotate(0deg)',
        top: '50%',
        zIndex: '5',
        transition: 'top 0.5s ease, transform 2s ease',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
    badge: {
        backgroundColor: '#a99175',
        color: '#07202B',
        borderRadius: '50%',
        padding: '0.3em 0.7em',
        fontSize: '1rem',
        marginLeft: '5px',
        fontWeight: 'bold',
    },
    body: {
        margin: 0,
        height: '2000px',
        overflowX: 'hidden',
    },
};

const Navbar = () => {
    const panier = useSelector((state) => state.panier.panier || []); 
    const totalItems = panier.reduce((acc, item) => acc + item.quantite, 0);
    const currentUser = useSelector((state) => state.users.currentUser); 
    const [isNavbarVisible, setNavbarVisible] = useState(!!currentUser);

    const location = useLocation(); 

    useEffect(() => {
        setNavbarVisible(!!currentUser);
    }, [currentUser, location]); 

    return (
        <>
            <nav
                style={{
                    ...navbarStyles.nav,
                    top: isNavbarVisible ? "0px" : "-60px",
                }}
            >
                <div
                    className="circle"
                    style={{
                        ...navbarStyles.circle,
                        transform: `translateX(-50%) ${isNavbarVisible ? 'rotate(100deg)' : 'rotate(0deg)'}`,
                        top: isNavbarVisible ? '20%' : '50%',
                    }}
                ></div>

                <Link to="/" style={navbarStyles.link}>Accueil</Link>

                {/* Show "Produits" and "Panier" only for normal users */}
                {currentUser && !currentUser.isAdmin && (
                    <>
                        <Link to="/produits" style={navbarStyles.link}>Produits</Link>
                        <Link to="/panier" style={navbarStyles.link}>
                            Panier
                            {totalItems > 0 && (
                                <span style={navbarStyles.badge}>{totalItems}</span>
                            )}
                        </Link>
                    </>
                )}

                {currentUser ? (
                    currentUser.isAdmin ? (
                        <>
                            <Link to="/admin/stock" style={navbarStyles.link}>Manage Stock</Link>
                            <Link to="/admin/commands" style={navbarStyles.link}>User Commands</Link>
                            <Link to="/admin/users" style={navbarStyles.link}>User Management</Link>
                        </>
                    ) : (
                        <Link to="/userHome" style={navbarStyles.link}>Account</Link>
                    )
                ) : (
                    <Link to="/auth" style={navbarStyles.link}>Login</Link>
                )}
            </nav>
        </>
    );
};

export default Navbar;
