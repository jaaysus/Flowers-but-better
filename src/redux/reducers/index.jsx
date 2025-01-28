import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
import panierReducer from './panierReducer';
import cardReducer from './cardReducer';
import reviewsReducer from './reviewsReducer'; 
//import calendarReducer from "./calendarReducer";
import CalendarSlice from '../slices/CalendarSlice';
const Rootreducer = combineReducers({
  users: userReducer,
  products: productReducer,
  panier: panierReducer,
  cards: cardReducer,
  reviews: reviewsReducer,
  calendar: CalendarSlice
});

export default Rootreducer;
