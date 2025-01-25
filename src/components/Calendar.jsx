import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDate, changeMonth } from "../redux/actions";
import "../styles/Calendar.css";

export default function Calendar() {
  const dispatch = useDispatch();
  const { currentDate, selectedDate } = useSelector((state) => state.calendar);

  const [isFlipped, setIsFlipped] = useState(false);

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
      dispatch(
        selectDate(
          new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
        )
      );
      setIsFlipped(true); // Flip to the back side
    }
  };

  const handleBackButton = () => {
    setIsFlipped(false); // Flip back to the front side
  };

  return (
    <div className={`calendar-container ${isFlipped ? "flip" : ""}`}>
      <div className="calendar">
        {/* Front Side */}
        <div className="front">
          <div className="current-date">
            <h1>{currentDate.toDateString()}</h1>
          </div>
          <div className="controls">
            <button onClick={() => dispatch(changeMonth(-1))}>Previous</button>
            <button onClick={() => dispatch(changeMonth(1))}>Next</button>
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
                        day === selectedDate?.getDate() ? "active" : ""
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
          <div className="info">
            <div className="date">
              <p className="info-date">
                Date:{" "}
                <span>
                  {selectedDate
                    ? selectedDate.toDateString()
                    : "No date selected"}
                </span>
              </p>
            </div>
          </div>
          <button className="dismiss" onClick={handleBackButton}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
