import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ajouterAuPanier, modifierQuantite } from '../redux/actions';
import Card from '../components/Card';
import '../styles/Products.css';

const Products = () => {
    const produits = useSelector((state) => state.products.produits);
    const panier = useSelector((state) => state.panier.panier);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const currentUser = useSelector((state) => state.users.currentUser); 

    const [sortOption, setSortOption] = useState('default');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    // Log the initial produits and panier from Redux
    console.log("Produits from Redux:", produits);
    console.log("Panier from Redux:", panier);

    const ProduitsSortees = [...produits].sort((a, b) => {
        if (sortOption === 'ascending') return a.prix - b.prix;
        if (sortOption === 'descending') return b.prix - a.prix;
        return 0;
    });

    console.log("Sorted Products:", ProduitsSortees);

    const ProduitsFiltrees = ProduitsSortees.filter((produit) => {
        const min = parseFloat(priceRange.min) || 0;
        const max = parseFloat(priceRange.max) || Infinity;
        return produit.prix >= min && produit.prix <= max;
    });

    console.log("Filtered Products:", ProduitsFiltrees);

    const handleAddToPanier = (produit, quantite) => {
        const existingProduct = panier.find(item => item.id === produit.id);
        const maxQuantite = produit.stock;

        const updatedQuantity = existingProduct
            ? Math.min(existingProduct.quantite + quantite, maxQuantite)
            : Math.min(quantite, maxQuantite);

        // Log the action of adding to panier
        console.log("Adding to Panier - Produit:", produit);
        console.log("Adding to Panier - Quantity:", quantite);

        if (existingProduct) {
            dispatch(modifierQuantite(produit.id, updatedQuantity));
        } else {
            dispatch(ajouterAuPanier({ 
                id: produit.id, 
                nom: produit.nom, 
                quantite: updatedQuantity, 
                prix: produit.prix 
            }));
        }

        // Log the updated panier
        console.log("Updated Panier after Add:", panier);
    };

    const isButtonDisabled = (produit) => {
        const productInPanier = panier.find(item => item.id === produit.id);
        const totalQuantityInPanier = productInPanier ? productInPanier.quantite : 0;
        return totalQuantityInPanier >= produit.stock;
    };

    const isAlert = (produit) => {
        return false;
    };

    useEffect(() => {
        // Log currentUser and navigation logic
        console.log("Current User:", currentUser);

        if (currentUser) {
            if (currentUser.isAdmin) {
                navigate('/Flowers-but-better/adminHome');
            } else {
                navigate('/Flowers-but-better/produits');
            }
        } else {
            navigate('/Flowers-but-better/auth');
        }
    }, [currentUser, navigate]);

    return currentUser ? (
        <>
        <h1>Flowers</h1>

        <div className="products-page">
            <div className="filter-sort-section">
                <div>
                    <label htmlFor="sort">Sort by:</label>
                    <select id="sort"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)} >
                        <option value="default">Default</option>
                        <option value="ascending">Price : Ascending</option>
                        <option value="descending">Price : Descending</option>
                    </select>
                </div>
                <div>
                    <label>Filter Price Between:</label>
                    <input
                        type="number"
                        placeholder="Min"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    />
                    <label>&</label>
                    <input
                        type="number"
                        placeholder="Max"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    />
                </div>
            </div>
            <div className="products-list">
                {ProduitsFiltrees.length > 0 ? (
                    ProduitsFiltrees.map((produit) => (
                        <Card
                            key={produit.id}
                            produit={produit}
                            handleAddToPanier={handleAddToPanier}
                            isButtonDisabled={isButtonDisabled}
                            cardbutton={"Add to Cart"}
                            isAlert={isAlert}
                        />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
        </>
    ) : null;
};

export default Products;
