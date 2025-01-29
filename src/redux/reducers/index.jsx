import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
import panierReducer from './panierReducer';
import cardReducer from './cardReducer';
import reviewsReducer from './reviewsReducer'; 
import calendarReducer from "./calendarReducer";

const Rootreducer = combineReducers({
  users: userReducer,
  products: productReducer,
  panier: panierReducer,
  cards: cardReducer,
  reviews: reviewsReducer,
  calendar: calendarReducer
});

export default Rootreducer;