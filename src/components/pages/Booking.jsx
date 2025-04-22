import React, { useContext, useEffect } from "react";

import Book from "./Book";
import { Link } from "react-router";
import AppointmentChart from "../chart/Rechart";
import { BookingContext } from "../../context/BookingContext";

const Booking = () => {
  const { booking, setBooking } = useContext(BookingContext);

  const localBooking = JSON.parse(localStorage.getItem("booking"));
  useEffect(() => {
    setBooking(booking);
  }, [booking, localBooking]);

  return (
    <div className="pb-10">
      {localBooking.length !== 0 ? (
        <div className="rounded-lg shadow-lg bg-white py-10 ">
          <AppointmentChart></AppointmentChart>
        </div>
      ) : (
        ""
      )}
      <div className="text-center">
        {localBooking.length === 0 ? (
          <h1 className="text-3xl font-thin pt-12">You Haven’t Booked Yet</h1>
        ) : (
          <h1 className="text-3xl font-thin pt-12">My Today Appointments</h1>
        )}
        <p className="text-gray-600 mt-2 w-2/3 mx-auto">
          View all your scheduled appointments for today in one place. Stay
          organized and never miss a consultation with your doctor.
        </p>
        {localBooking.length === 0 ? (
          <Link to="/" className="btn mt-4 bg-blue-600 text-white md:mb-16">
            Book An Appointment
          </Link>
        ) : (
          ""
        )}
      </div>

      {localBooking.map((book) => (
        <Book key={book.id} book={book}></Book>
      ))}
    </div>
  );
};

export default Booking;
