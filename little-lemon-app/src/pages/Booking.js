import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { availableTimes } from "../Constants";

function Booking() {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState(true);
  const [guestsError, setGuestsError] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const checkValidation = () => {
    const isValid = date && time && guests;

    // check date validation
    if (date) {
      setDateError("");
    } else {
      setDateError("Please select the date");
    }

    // check time validation
    if (time) {
      setTimeError("");
    } else {
      setTimeError("Please select the time");
    }
    // check guests validation
    if (guests === "" || guests < 1) {
      setGuestsError("Please enter non zero value (max 10).");
    } else if (guests > 10) {
      setGuestsError("Guest count should be less than 11.");
    } else {
      setGuestsError("");
    }

    return isValid;
  };

  const submitForm = () => {
    const isValid = checkValidation();
    if (isValid) {
      setIsBookingConfirmed(true);
    } else {
      setIsBookingConfirmed(false);
    }
  };

  const handleGuestsChange = (e) => {
    const value = e.target.value;
    setGuests(value);
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDate(value);
    setDateError(false);
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTime(value);
    setTimeError(false);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const displayBookingform = () => (
    <div className="booking-form text-center">
      <div className="row">
        <div className="col-12">
          <h1>Book Now</h1>
        </div>
      </div>

      <form>
        <div className="row">
          <div className="col-12 mt-3">
            <label htmlFor="booking-date">Select the date: </label>
            <input
              type="date"
              id="booking-date"
              value={date}
              onChange={handleDateChange}
              required
            />
            {dateError && <div className="form-error mt-1">{dateError}</div>}
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-3">
            <label htmlFor="booking-time">Select the time: </label>
            <select
              id="booking-time"
              value={time}
              onChange={handleTimeChange}
              required
            >
              <option value="" disabled hidden>
                -- Select Time --
              </option>
              {availableTimes?.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            {timeError && <div className="form-error mt-1">{timeError}</div>}
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-3">
            <label htmlFor="guests">Number of guests: </label>
            <input
              id="guests"
              type="number"
              placeholder="1"
              min="1"
              max="10"
              value={guests}
              onChange={handleGuestsChange}
              required
            />
            {guestsError && (
              <div className="form-error mt-1">{guestsError}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-3">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={handleOccasionChange}
            >
              <option value="" disabled hidden>
                -- Select Occasion --
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-3">
            <button
              type="submit"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                submitForm();
              }}
            >
              Make Your reservation
            </button>
          </div>
        </div>
      </form>

      {isBookingConfirmed && (
        <>
          <div className="success-message mt-3 text-left">
            <h3>Thank You!</h3>
            <p>Your booking has been confirmed.</p>
          </div>
          <div
            className="mt-2"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Go To Home Page
          </div>
        </>
      )}
    </div>
  );

  return <div>{displayBookingform()}</div>;
}

export default Booking;
