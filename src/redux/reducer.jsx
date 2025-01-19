import axios from 'axios';

const apiUrl = 'https://api.myjson.online/v1/records/86308f3a-0c3a-44e2-b6fe-67a505522fb3'; // Replace with your actual API endpoint

const initialState = {
    produits: [],
    panier: [],
    filtre: {
        tri: '',
        intervalle: { min: 0, max: Infinity },
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUITS':
            return {
                ...state,
                produits: action.payload.data.produits, // Adjusted to reflect the API response structure
            };

        case 'AJOUTER_AU_PANIER':
            const produitExistant = state.panier.find((item) => item.id === action.payload.id);
            if (produitExistant) {
                return {
                    ...state,
                    panier: state.panier.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantite: item.quantite + action.payload.quantite }
                            : item
                    ),
                };
            }
            return {
                ...state,
                panier: [...state.panier, action.payload],
            };

        case 'MODIFIER_QUANTITE':
            return {
                ...state,
                panier: state.panier.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantite: action.payload.quantite }
                        : item
                ),
            };

        case 'SUPPRIMER_DU_PANIER':
            return {
                ...state,
                panier: state.panier.filter((item) => item.id !== action.payload.id),
            };

        case 'VIDER_PANIER':
            return { ...state, panier: [] };

        case 'DIMINUER_STOCK':
            return {
                ...state,
                produits: state.produits.map((produit) => {
                    const commande = action.payload.find((item) => item.id === produit.id);
                    if (commande) {
                        return { ...produit, stock: produit.stock - commande.quantite };
                    }
                    return produit;
                }),
            };

        case 'APPLIQUER_FILTRE':
            return { ...state, filtre: action.payload };

        default:
            return state;
    }
};

export const fetchProduits = () => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}`);
        dispatch({
            type: 'SET_PRODUITS',
            payload: response.data, // Adjusted to match the API response
        });
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
};

export const ajouterAuPanier = (produit) => async (dispatch) => {
    try {
        dispatch({
            type: 'AJOUTER_AU_PANIER',
            payload: produit,
        });
    } catch (error) {
        console.error("Failed to add product to cart:", error);
    }
};

export const modifierQuantite = (id, quantite) => async (dispatch) => {
    try {
        dispatch({
            type: 'MODIFIER_QUANTITE',
            payload: { id, quantite },
        });
    } catch (error) {
        console.error("Failed to modify quantity:", error);
    }
};

export const supprimerDuPanier = (id) => async (dispatch) => {
    try {
        dispatch({
            type: 'SUPPRIMER_DU_PANIER',
            payload: { id },
        });
    } catch (error) {
        console.error("Failed to remove product from cart:", error);
    }
};

export const viderPanier = () => async (dispatch) => {
    try {
        dispatch({
            type: 'VIDER_PANIER',
        });
    } catch (error) {
        console.error("Failed to empty the cart:", error);
    }
};

export const diminuerStock = (commandes) => async (dispatch) => {
    try {
        dispatch({
            type: 'DIMINUER_STOCK',
            payload: commandes,
        });
    } catch (error) {
        console.error("Failed to decrease stock:", error);
    }
};

export const appliquerFiltre = (filtre) => {
    return {
        type: 'APPLIQUER_FILTRE',
        payload: filtre,
    };
};

export default reducer;
