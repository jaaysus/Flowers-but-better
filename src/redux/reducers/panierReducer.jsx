const initialState = {
    panier: [],
    orderInfo: {
        trackingNumbers: [], // Store an array of tracking numbers
        userId: null,        // Store the current user ID
    },
};

const generateTrackingNumber = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let trackingNumber = '';
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        trackingNumber += characters[randomIndex];
    }
    return trackingNumber;
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
            return { ...state, panier: [], orderInfo: { ...state.orderInfo } };
        case 'GENERE_TRACKING_NUMBER':
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo,
                    trackingNumbers: [...state.orderInfo.trackingNumbers, generateTrackingNumber()], // Add new tracking number to the array
                },
            };
        case 'SET_USER_ID':
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo,
                    userId: action.payload,
                },
            };
        default:
            return state;
    }
};

export default panierReducer;
