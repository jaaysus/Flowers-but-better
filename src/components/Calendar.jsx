import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDate, changeMonth, saveCalendarData } from "../redux/slices/CalendarSlice"; // Updated import
import "../styles/calendar.css";

export default function Calendar() {
  const dispatch = useDispatch();
  const currentDate = new Date(useSelector((state) => state.calendar.currentDate));
  const selectedDate = useSelector((state) =>
    state.calendar.selectedDate ? new Date(state.calendar.selectedDate) : null
  );
  const currentUser = useSelector((state) => state.users.currentUser);
  const savedEvents = useSelector((state) => state.calendar.savedEvents); //debug purposes
  const [isFlipped, setIsFlipped] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+212");
  const [eventTitle, setEventTitle] = useState("");
  const [request, setRequest] = useState("");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const weeks = [];
  let day = 1 - firstDayOfMonth;
  while (day <= daysInMonth) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      if (day > 0 && day <= daysInMonth) {
        week.push(day);
      } else {
        week.push(null);
      }
      day++;
    }
    weeks.push(week);
  }

  const handleDateClick = (day) => {
    if (day) {
      const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      dispatch(selectDate(selectedDate.toISOString())); // Dispatch as string (ISO format)
      setIsFlipped(true); // Flip to the back side
    }
  };

  const handleBackButton = () => {
    setIsFlipped(false); // Flip back to the front side
  };

  const handleSave = () => {
    if (selectedDate && currentUser) {
      const eventDetails = {
        phoneNumber: phoneNumber,
        eventTitle: eventTitle, // Include eventTitle
        request: request, // Include request (textarea)
      };
  
      dispatch(saveCalendarData({
        currentUserId: currentUser.id,  // Passing userId from currentUser
        eventDate: selectedDate.toISOString(),
        eventDetails: eventDetails
      }));
  
      // Log the savedEvents from the calendar state
      console.log("Saved Events:", savedEvents);
    }
  };
  

  return (
    <div className={`calendar-container ${isFlipped ? "flip" : ""}`}>
      <div className="calendar">
        {/* Front Side */}
        <div className="front">
          <div className="current-date">
            <h1>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h1>
          </div>
          <div className="controls">
            <button onClick={() => dispatch(changeMonth(-1))} style={{ left: "0" }}>
              <img
                src="https://www.reshot.com/preview-assets/icons/RF5DMQX396/left-arrow-button-RF5DMQX396-17edd.svg"
                alt="Left Arrow"
                style={{ width: '50px', height: '50px' }}
              />
            </button>
            <button onClick={() => dispatch(changeMonth(1))} style={{ right: "0" }}>
              <img
                src="https://www.reshot.com/preview-assets/icons/YAB8GEM7SD/right-arrow-button-YAB8GEM7SD-7165c.svg"
                alt="Right Arrow"
                style={{ width: '50px', height: '50px' }}
              />
            </button>
          </div>
          <div className="current-month">
            <ul className="week-days">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                (day, index) => (
                  <li key={index}>{day}</li>
                )
              )}
            </ul>
            <div className="weeks">
              {weeks.map((week, index) => (
                <div className="week" key={index}>
                  {week.map((day, i) => (
                    <span
                      key={i}
                      className={`day ${
                        day &&
                        selectedDate &&
                        day === selectedDate.getDate() &&
                        currentDate.getMonth() === selectedDate.getMonth() &&
                        currentDate.getFullYear() === selectedDate.getFullYear()
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleDateClick(day)}
                    >
                      {day || ""}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Back Side */}
        <div className="back">
          <input
            placeholder="What's the event?"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />

          <div className="phone-request">
            <div>
              <strong style={{ transform: 'rotate(180deg)' }}>Phone Number:</strong>
              <input
                type="text"
                placeholder="+212"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div>
              <textarea
                placeholder="Write your request"
                rows="4"
                value={request}
                onChange={(e) => setRequest(e.target.value)}
              />
            </div>
          </div>

          <div className="info">
            <div className="date">
              <p className="info-date">
                Date:{" "}
                <span>
                  {selectedDate ? selectedDate.toDateString() : "No date selected"}
                </span>
              </p>
            </div>
          </div>

          <div className="actions">
            <button className="save" onClick={handleSave}>
              Save
            </button>
            <button className="dismiss" onClick={handleBackButton}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
