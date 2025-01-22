const initialState = {
    panier: [],
};

const panierReducer = (state = initialState, action) => {
    switch (action.type) {
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
            return { ...state, panier: [...state.panier, action.payload] };
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
            return { ...state, panier: state.panier.filter((item) => item.id !== action.payload.id) };
        case 'VIDER_PANIER':
            return { ...state, panier: [] };
        default:
            return state;
    }
};

export default panierReducer;
