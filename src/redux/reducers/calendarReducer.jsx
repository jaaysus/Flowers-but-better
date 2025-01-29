const initialState = {
  currentDate: new Date().toISOString(),
  selectedDate: null,
  savedEvents: [
    {
      currentUserId: 1,
      eventDate: new Date("2025-01-15").toISOString(),
      eventDetails: {
        phoneNumber: "+212600000000",
        eventTitle: "Event for flower delivery", // Include eventTitle
        request: "Please deliver the flowers to the venue.", // Include request
      },
    },
    {
      currentUserId: 2,
      eventDate: new Date("2025-01-20").toISOString(),
      eventDetails: {
        phoneNumber: "+212738540000",
        eventTitle: "Wedding bouquet request", // Include eventTitle
        request: "Wedding bouquet for the ceremony.", // Include request
      },
    },
  ],
};

function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_DATE":
      return {
        ...state,
        selectedDate: action.payload ? new Date(action.payload).toISOString() : null,
      };
    case "CHANGE_MONTH":
      const currentDate = new Date(state.currentDate);
      currentDate.setMonth(currentDate.getMonth() + action.payload);
      return {
        ...state,
        currentDate: currentDate.toISOString(),
      };
    case "SAVE_CALENDAR_DATA":
      const { currentUserId, eventDate, eventDetails } = action.payload;
      return {
        ...state,
        savedEvents: [
          ...(state.savedEvents || []),
          { currentUserId, eventDate, eventDetails },
        ],
      };
      case 'DISMISS_REQUEST':
        return {
          ...state,
          savedEvents: state.savedEvents.filter(
            (event) =>
              !(event.currentUserId === action.payload.userId && event.eventDate === action.payload.eventDate && event.eventDetails.request)
          ),
        };
      
    default:
      return state;
  }
}

export default calendarReducer;