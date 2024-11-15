import React, { useState } from "react";

import { availableTimes } from "../Constants";

function BookingForm(props) {
  const { date, time, guests, occasion, isBookingConfirmed } = props.data;
  const { setDate, setTime, setGuests, setOccasion, goToHomePage } =
    props.functions;

  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [guestsError, setGuestsError] = useState("");

  // check form validation
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

  // handle form submission
  const submitForm = () => {
    const isValid = checkValidation();
    props.onSubmit(isValid);
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDate(value);
    setDateError("");
  };

  const handleGuestsChange = (e) => {
    const value = e.target.value;
    setGuests(value);
    setGuestsError("");
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTime(value);
    setTimeError("");
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const displayBookingform = () => {
    return (
      <>
        <form>
          <div className="row">
            <div className="col-12 mt-3">
              <label htmlFor="booking-date">Select the date: </label>
              <input
                type="date"
                id="booking-date"
                className={dateError ? "input-error" : ""}
                value={date}
                onChange={handleDateChange}
              />
              {dateError && <div className="form-error mt-1">{dateError}</div>}
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-3">
              <label htmlFor="booking-time">Select the time: </label>
              <select
                id="booking-time"
                className={timeError ? "input-error" : ""}
                value={time}
                onChange={handleTimeChange}
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
                className={guestsError ? "input-error" : ""}
                min="1"
                max="10"
                value={guests}
                onChange={handleGuestsChange}
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
      </>
    );
  };

  const displayConfirmBooking = () => {
    return (
      <>
        <div className="success-message mt-3 text-left">
          <h3>Thank You!</h3>
          <p>Your booking has been confirmed.</p>
          <div
            className="mt-2 text-bold"
            onClick={(e) => {
              e.preventDefault();
              goToHomePage();
            }}
          >
            Go To Home Page
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="booking-form-contanier text-center">
      <div className="booking-form text-center">
        <div className="row">
          <div className="col-12">
            <h1>Book Now</h1>
          </div>
        </div>
        {displayBookingform()}
      </div>
      {isBookingConfirmed && displayConfirmBooking()}
    </div>
  );
}

export default BookingForm;
