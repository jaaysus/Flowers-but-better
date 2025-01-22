import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
import panierReducer from './panierReducer';
import cardReducer from './cardReducer';

const Rootreducer = combineReducers({
    users: userReducer,
    products: productReducer,
    panier: panierReducer,
    cards: cardReducer,
});

export default Rootreducer;
