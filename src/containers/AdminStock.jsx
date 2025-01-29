import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ajouterAuPanier, modifierQuantite, deleteProductAction, updateStockQuantity, addProductAction } from '../redux/actions';
import Card from '../components/Card';
import '../styles/Products.css';


const ManageStock = () => {
    const produits = useSelector((state) => state.products.produits);
    const [newProduct, setNewProduct] = useState({
        nom: '',
        img: '',
        prix: '',
        stock: '',
    });
    const [showNewProductForm, setShowNewProductForm] = useState(false);
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


    const handleDeleteProduct = (productId) => {
        dispatch(deleteProductAction(productId));
    };
    

    

    const isAlert = (produit) => {
        return produit.stock <= 20;
    };


    const isButtonDisabled = () => {
        return false;
    };


    const handleAddNewProduct = () => {
        if (newProduct.nom && newProduct.prix && newProduct.stock) {
            const id = produits.length ? produits[produits.length - 1].id + 1 : 1; 
            const productToAdd = { ...newProduct, id, prix: parseFloat(newProduct.prix), stock: parseInt(newProduct.stock, 10) };
            dispatch(addProductAction(productToAdd)); 
            setNewProduct({ nom: '', img: '', prix: '', stock: '' });
            setShowNewProductForm(false);
        }
    };

    useEffect(() => {
        if (currentUser) {
            if (currentUser.isAdmin) {
                navigate('/Flowers-but-better/admin/stock');
            } else {
                navigate('/Flowers-but-better/userHome');
            }
        }
        else{
            navigate('/Flowers-but-better/auth');
        }
    }, [currentUser, navigate]);

    return currentUser ? (
        <>
        <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Manage Stock</h1>
        <div className="new-product-form">
        <div style={{display:"flex", justifyContent: "center",
    alignItems: "center"}}>
        <button onClick={() => setShowNewProductForm(!showNewProductForm)} className="new-product-btn">
                New Product
            </button></div>
            {showNewProductForm && (
                <div>
                    <div style={{display:"flex", justifyContent: "center",
    alignItems: "center"}}>
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={newProduct.nom}
                        onChange={(e) => setNewProduct({ ...newProduct, nom: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={newProduct.img}
                        onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={newProduct.prix}
                        onChange={(e) => setNewProduct({ ...newProduct, prix: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Stock"
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    />
                    </div>
                    <div style={{display:"flex", justifyContent: "center",
    alignItems: "center"}}>
                    <button onClick={handleAddNewProduct}>Add Product</button>
                </div></div>
            )}
        </div>
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
                            handleDeleteProduct={() => handleDeleteProduct(produit.id)}
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
