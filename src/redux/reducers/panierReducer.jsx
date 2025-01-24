const initialState = {
    panier: [],
    trackingNumbers: [
        "ABC123456789XYZ", "DEF987654321XYZ", "GHI456789123XYZ", "JKL345678912XYZ",
        "MNO234567890XYZ", "PQR567890123XYZ", "STU678901234XYZ", "VWX890123456XYZ",
        "YZA123456789XYZ", "BCD234567890XYZ"
    ],
    trackingNumber: "", // Add the tracking number field
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
            return { ...state, panier: [], trackingNumber: "" };// reset tracking number too
        case 'GENERE_TRACKING_NUMBER':
            const randomTrackingNumber = state.trackingNumbers[Math.floor(Math.random() * state.trackingNumbers.length)];
            return { ...state, trackingNumber: randomTrackingNumber };
        default:
            return state;
    }
};

export default panierReducer;
