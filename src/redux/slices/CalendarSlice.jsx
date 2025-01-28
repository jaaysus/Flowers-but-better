import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentDate: new Date().toISOString(),
  selectedDate: null,
  savedEvents: [
    {
      currentUserId: 1,
      eventDate: new Date("2025-01-15").toISOString(),
      eventDetails: {
        phoneNumber: "+212600000000",
        eventTitle: "Event for flower delivery",
        request: "Please deliver the flowers to the venue.",
      },
    },
    {
      currentUserId: 2,
      eventDate: new Date("2025-01-20").toISOString(),
      eventDetails: {
        phoneNumber: "+212738540000",
        eventTitle: "Wedding bouquet request",
        request: "Wedding bouquet for the ceremony.",
      },
    },
  ],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    selectDate(state, action) {
      state.selectedDate = action.payload ? new Date(action.payload).toISOString() : null;
    },
    changeMonth(state, action) {
      const currentDate = new Date(state.currentDate);
      currentDate.setMonth(currentDate.getMonth() + action.payload);
      state.currentDate = currentDate.toISOString();
    },
    saveCalendarData(state, action) {
      const { currentUserId, eventDate, eventDetails } = action.payload;
      state.savedEvents.push({ currentUserId, eventDate, eventDetails });
    },
    dismissRequest(state, action) {
      const { userId, eventDate } = action.payload;
      state.savedEvents = state.savedEvents.filter(
        (event) =>
          !(event.currentUserId === userId && event.eventDate === eventDate && event.eventDetails.request)
      );
    },
  },
});

export const { selectDate, changeMonth, saveCalendarData, dismissRequest } = calendarSlice.actions;

export default calendarSlice.reducer;
