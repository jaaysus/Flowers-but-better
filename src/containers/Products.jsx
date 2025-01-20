import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ajouterAuPanier, modifierQuantite, fetchProduits } from '../redux/actions';
import '../styles/Products.css';

const Products = () => {
    const produits = useSelector((state) => state.produits);
    const panier = useSelector((state) => state.panier);
    const dispatch = useDispatch();

    const [sortOption, setSortOption] = useState('default');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    useEffect(() => {
        dispatch(fetchProduits());
    }, [dispatch]);

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
        if (existingProduct) {
            const updatedQuantity = existingProduct.quantite + quantite;
            dispatch(modifierQuantite(produit.id, updatedQuantity));
        } else {
            dispatch(ajouterAuPanier({ 
                id: produit.id, 
                nom: produit.nom, 
                quantite: quantite || 1, 
                prix: produit.prix 
            }));
        }
    };

    return (
        <div className="products-page">
            <h1>Liste des produits</h1>
            <div className="filter-sort-section">
                <div>
                    <label htmlFor="sort">Trier par:</label>
                    <select id="sort"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)} >
                        <option value="default">Par défaut</option>
                        <option value="ascending">Prix croissant</option>
                        <option value="descending">Prix décroissant</option>
                    </select>
                </div>
                <div>
                    <label>Filtrer par prix entre:</label>
                    <input
                        type="number"
                        placeholder="Min"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    />
                    et
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
                        <div key={produit.id} className="product-card">
                            <img src={produit.img} alt={produit.nom} className="product-image" />
                            <h3>{produit.nom}</h3>
                            <p>Prix: {produit.prix} DH</p>
                            <p>Stock: {produit.stock}</p>
                            <div className="quantity-control">
                                <label>Qte:</label>
                                <input
                                    type="number"
                                    min="1"
                                    defaultValue="1"
                                    id={`quantity-${produit.id}`}
                                />
                            </div>
                            <button
                                onClick={() => {
                                    const quantite = parseInt(document.getElementById(`quantity-${produit.id}`).value, 10);
                                    handleAddToPanier(produit, quantite);
                                }}
                                className="add-to-Panier"
                            >
                                Ajouter au panier
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Aucun produit disponible.</p>
                )}
            </div>
        </div>
    );
};

export default Products;
