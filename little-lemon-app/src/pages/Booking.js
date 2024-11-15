import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import BookingForm from "../components/BookingForm";

function Booking() {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const submitForm = (isValid) => {
    if (isValid) {
      setIsBookingConfirmed(true);
      setDate("");
      setTime("");
      setGuests("");
      setOccasion("");
    } else {
      setIsBookingConfirmed(false);
    }
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <BookingForm
        data={{ date, time, guests, occasion, isBookingConfirmed }}
        functions={{
          setDate,
          setTime,
          setGuests,
          setOccasion,
          goToHomePage,
        }}
        onSubmit={submitForm}
      />
    </>
  );
}

export default Booking;
