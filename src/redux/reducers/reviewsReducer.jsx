const initialState = {
  reviews: [
    {
      id: 1,
      name: 'Sophia Loren',
      phrase: 'Floral Dreams brings timeless elegance to every arrangement. The vintage touches and sophisticated floral designs truly set this shop apart.',
      userId: 5, // Update to correct userId
    },
    {
      id: 2,
      name: 'Tom Cruise',
      phrase: 'As a customer who values quality and style, Floral Dreams never disappoints. Their floral arrangements are simply breathtaking, each one exuding a classic charm.',
      userId: 6,
    },
    {
      id: 3,
      name: 'Juan Carlos',
      phrase: 'Floral Dreams is more than just a flower shop – it\'s an experience. From the moment you step in, the vintage ambiance and exquisite flower arrangements transport you to another time.',
      userId: 7,
    }
  ],
};

  
const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return { ...state, reviews: [...state.reviews, action.payload] };
    case 'REMOVE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter(review => review.userId !== action.payload), 
      };
    case 'UPDATE_REVIEW': {
      const updatedReviews = state.reviews.map((review) =>
        review.id === action.payload.id ? action.payload : review
      );
      return { ...state, reviews: updatedReviews };
    }
    default:
      return state;
  }
};

  
  export default reviewsReducer;
  