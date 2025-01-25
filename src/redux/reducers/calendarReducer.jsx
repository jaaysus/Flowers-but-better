const initialState = {
  currentDate: new Date(), 
  selectedDate: null,
};

function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_DATE":
      return {
        ...state,
        selectedDate: action.payload,      };
    case "CHANGE_MONTH":
      const newDate = new Date(state.currentDate);
      newDate.setMonth(state.currentDate.getMonth() + action.payload);
      return {
        ...state,
        currentDate: newDate,
      };
      
    default:
      return state;
  }
}


export default calendarReducer;
