import cards from './CarouselData';

const initialState = {
    cards,
    filtre: {
        tri: '',
        intervalle: { min: 0, max: Infinity },
    },
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APPLIQUER_FILTRE': // `APPLIQUER_FILTRE` logic goes here
            return { ...state, filtre: action.payload };
        case 'SET_CARDS':
            return { ...state, cards: action.payload };
        case 'UPDATE_CARD':
            const updatedCards = [...state.cards];
            updatedCards[action.payload.index] = {
                ...updatedCards[action.payload.index],
                ...action.payload.data,
            };
            return { ...state, cards: updatedCards };
        default:
            return state;
    }
};

export default cardReducer;
