import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
import panierReducer from './panierReducer';
import cardReducer from './cardReducer';
import reviewsReducer from './reviewsReducer'; // import reviewsReducer

const Rootreducer = combineReducers({
  users: userReducer,
  products: productReducer,
  panier: panierReducer,
  cards: cardReducer,
  reviews: reviewsReducer,
});

export default Rootreducer;
