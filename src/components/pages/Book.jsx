import React, { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";
import { toast } from "react-toastify";

const Book = ({ book }) => {
  const { name, education, consultationFee, id } = book;
  const { booking, setBooking } = useContext(BookingContext);
  const handleCancelBooking = (id) => {
    toast.error(`${name} Appointment Cancelled!!`);
    const result = booking.filter((bk) => bk.id !== id);
    setBooking(result);
    
  };
  return (
    <div className="bg-white rounded-2xl py-4 px-5 mt-5">
      <h1 className="text-xl font-bold">{name}</h1>
      <div className="flex justify-between border-b-2 border-dashed border-gray-200">
        <h1 className="text-base font-light text-gray-500">{education}</h1>
        <h2 className=" pr-4 mb-3 text-gray-600">
          Appointment Fee: {consultationFee} Taka+Vat
        </h2>
      </div>
      <div className="text-center mt-4">
        <button onClick={() => handleCancelBooking(id)} className="py-1.5 rounded-full w-full border-2 cursor-pointer border-red-200 hover:bg-red-50 text-red-500">
          Cancel appointments
        </button>
      </div>
    </div>
  );
};

export default Book;
