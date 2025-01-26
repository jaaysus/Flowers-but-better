import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ajouterAuPanier, modifierQuantite } from '../redux/actions';
import Card from '../components/Card';
import '../styles/Products.css';


const ManageStock = () => {
    const produits = useSelector((state) => state.products.produits);
    
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const currentUser = useSelector((state) => state.users.currentUser); 

    const [sortOption, setSortOption] = useState('default');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    const ProduitsSortees = [...produits].sort((a, b) => {
        if (sortOption === 'ascending') return a.prix - b.prix;
        if (sortOption === 'descending') return b.prix - a.prix;
        return 0;
    });

    const ProduitsFiltrees = ProduitsSortees.filter((produit) => {
        const min = parseFloat(priceRange.min) || 0;
        const max = parseFloat(priceRange.max) || Infinity;
        return produit.prix >= min && produit.prix <= max;
    });

    const handleAddToPanier = (produit, quantite) => {
        const existingProduct = panier.find(item => item.id === produit.id);
        const maxQuantite = produit.stock;

        const updatedQuantity = existingProduct
            ? Math.min(existingProduct.quantite + quantite, maxQuantite)
            : Math.min(quantite, maxQuantite);

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
    };

    const handleAddToStock = (produit, quantite) => {
        if (quantite > 0) {
            const updatedStock = produit.stock + quantite;
            dispatch(updateStockQuantity(produit.id, updatedStock)); 
        }
    };
    

    const isAlert = (produit) => {
        return produit.stock <= 20;
    };


    const isButtonDisabled = () => {
        return false;
    };

    useEffect(() => {
        if (currentUser) {
            if (currentUser.isAdmin) {
                navigate('/admin/stock');
            } else {
                navigate('/userHome');
            }
        }
        else{
            navigate('/auth');
        }
    }, [currentUser, navigate]);

    return currentUser ? (
        <>
        <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Manage Stock</h1>
        <div className="products-page">
            <div className="filter-sort-section">
                <div>
                    <label htmlFor="sort">Sort by:</label>
                    <select id="sort"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)} >
                        <option value="default">Default</option>
                        <option value="ascending">Price : Ascending</option>
                        <option value="descending">Price : Desceding</option>
                    </select>
                </div>
                <div>
                    <label>Fliter Price Between :</label>
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
                            handleAddToStock={handleAddToStock}
                            isButtonDisabled={isButtonDisabled}
                            cardbutton={"Add to Stock"}
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


export default ManageStock;
