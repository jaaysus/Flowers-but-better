const initialState = {
  currentDate: new Date().toISOString(), // Serialize to ISO string
  selectedDate: null,
};

function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_DATE":
      return {
        ...state,
        selectedDate: action.payload, // Expecting ISO string or null
      };
    case "CHANGE_MONTH":
      const currentDate = new Date(state.currentDate); // Deserialize
      currentDate.setMonth(currentDate.getMonth() + action.payload);
      return {
        ...state,
        currentDate: currentDate.toISOString(),
      };
    default:
      return state;
  }
}

export default calendarReducer;
