const initialState = {
    panier: [],
    orderInfo: {
        trackingNumbers: [],
        order: [
            {
                items: [
                    { id: 1, nom: 'Rose', quantite: 1, prix: 15 },
                    { id: 2, nom: 'Tulip', quantite: 1, prix: 10 }
                ],
                trackingNumber: "J8ETO47WSAP8",
                date:"January 25, 2025, 10:30:45 PM"
            }
        ],
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
            case 'ACCEPT_COMMANDE':
    return {
        ...state,
        orderInfo: {
            ...state.orderInfo,
            order: state.orderInfo.order.filter(order => order.trackingNumber !== action.payload),
        },
    };

            case 'VIDER_PANIER':
                const newTrackingNumber = generateTrackingNumber();
                const currentDate = new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                }).format(new Date());
            
                return {
                    ...state,
                    orderInfo: {
                        ...state.orderInfo,
                        trackingNumbers: [...state.orderInfo.trackingNumbers, newTrackingNumber],
                        order: [
                            ...state.orderInfo.order,
                            {
                                trackingNumber: newTrackingNumber,
                                items: [...state.panier],
                                userId: action.payload, // Add the userId here
                                date: currentDate,
                            },
                        ],
                    },
                    panier: [], // Clear the panier after placing the order
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
