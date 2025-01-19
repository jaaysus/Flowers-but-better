import axios from 'axios';

// Action to add a product to the cart
export const ajouterAuPanier = (produit) => ({
    type: 'AJOUTER_AU_PANIER',
    payload: produit,
});

// Action to modify the quantity of a product in the cart
export const modifierQuantite = (id, quantite) => ({
    type: 'MODIFIER_QUANTITE',
    payload: { id, quantite },
});

// Action to remove a product from the cart
export const supprimerDuPanier = (id) => ({
    type: 'SUPPRIMER_DU_PANIER',
    payload: { id },
});

// Action to clear the cart
export const viderPanier = () => ({
    type: 'VIDER_PANIER',
});

// Action to decrease the stock of products
export const diminuerStock = (commandes) => ({
    type: 'DIMINUER_STOCK',
    payload: commandes,
});

// Action to apply a filter
export const appliquerFiltre = (filtre) => ({
    type: 'APPLIQUER_FILTRE',
    payload: filtre,
});

// Async action to fetch products from the API
export const fetchProduits = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.myjson.online/v1/records/86308f3a-0c3a-44e2-b6fe-67a505522fb3');
        dispatch({
            type: 'SET_PRODUITS',
            payload: response.data,
        });
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
};
