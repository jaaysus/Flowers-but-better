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
                produits: action.payload.data.produits, 
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

export default reducer;
