import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { CiSquareInfo } from "react-icons/ci";
import { FaRegRegistered } from "react-icons/fa";
import { BookingContext } from "../../context/BookingContext";
import { toast } from "react-toastify";

const DoctorDetails = () => {
  const data = useLoaderData();
  const { name } = useParams();
  const { setBooking } = useContext(BookingContext);
  const navigate = useNavigate();
  const singleData = data.find((doctor) => doctor.name === name);

  if (!singleData) {
    return (
      <div className=" flex items-center justify-center text-center p-4">
        <div className="w-full bg-white">
          <h1 className="text-2xl pt-8 font-semibold mb-2">Doctor Not Found</h1>
          <p className="text-gray-500 text-sm">
            Sorry, we couldn't find a doctor with that name. Please check the
            name and try again.
          </p>
          <button
            onClick={() => navigate("/")}
            className="btn mt-4 bg-blue-600 text-white md:mb-16"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }
  const today = new Date();
  const day = today.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayName = days[day];
  const isAvailable = singleData.availableDays.find(
    (available) => available === todayName
  );
  const booking = JSON.parse(localStorage.getItem("booking"));

  const handleBooking = (sg) => {
    const isExist = booking.find((exist) => exist.name === sg.name);
    if (isExist) {
      toast.error(`${sg.name} has already been added. Please check your list.`);
    } else {
      toast.success(`Appointment confirmed with ${sg.name}`);
      setBooking([...booking, sg]);
      navigate("/booking");
      localStorage.setItem("booking", JSON.stringify([...booking, sg]));
    }
  };

  return (
    <div className="pb-8">
      <div className="bg-white text-center mb-6 md:py-16 rounded-3xl">
        <h1 className="text-4xl font-semibold mb-2">
          Doctor’s Profile Details
        </h1>
        <p className="text-gray-500 w-2/3 mx-auto">
          Discover expert doctors with verified credentials, specialties, and
          experience — all in one place. View their detailed profiles and find
          the right healthcare professional for your needs.
        </p>
      </div>
      <div className="bg-white md:flex gap-6 md:mb-5 mb-2 rounded-3xl py-3 px-2 md:py-8 md:px-6">
        <img
          className="w-[335px] h-[384px] rounded-2xl"
          src={singleData.doctorImage}
          alt="doctor img"
        />
        <div>
          <h2 className="text-2xl font-bold mb-1.5">{singleData.name}</h2>
          <h2 className=" text-gray-500">{singleData.education}</h2>
          <h2 className="mb-4 text-gray-500">{singleData.speciality}</h2>
          <h2 className="text-gray-500 border-b-2 border-dashed border-gray-300 pb-3 mb-4">
            Working at <br />
            <span className="font-bold text-xl text-black">
              {singleData.workingAt}
            </span>
          </h2>
          <h2 className="text-gray-500 border-b-2 border-dashed border-gray-300 py-1.5 mb-4 flex items-center gap-2">
            <FaRegRegistered />
            Reg No: {singleData.registrationNumber}
          </h2>
          <h3 className="mb-3">
            <span className="font-bold mr-3.5">Availability </span>{" "}
            {singleData.availableDays.map((day) => (
              <span
                key={day}
                className="text-green-500 text-xs border rounded-full py-1 px-2 bg-green-50 cursor-pointer mr-2"
              >
                {day}
              </span>
            ))}
          </h3>
          <h4 className="font-bold">
            Consultation Fee:{" "}
            <span className="text-blue-400 text-xs">
              Taka: {singleData.consultationFee}{" "}
              <span className="text-gray-400">(incl. Vat)</span> Per
              consultation
            </span>
          </h4>
        </div>
      </div>
      <div className="md:mb-5 mb-2 bg-white rounded-3xl py-3 px-2 md:py-8 md:px-6">
        <h1 className="text-center font-bold text-2xl border-b-2 border-gray-100 pb-3">
          Book an Appointment
        </h1>
        <div className="flex justify-between w-full py-5 border-b-2 border-dashed border-gray-200 mb-5">
          <h2 className="font-bold">Availability</h2>
          <h2
            className={`${
              isAvailable
                ? "text-green-500 bg-green-50"
                : "text-red-500 bg-red-50"
            } text-xs border rounded-full py-1 px-2 `}
          >
            {isAvailable ? "Doctor Available Today" : "Doctor Not Available"}
          </h2>
        </div>
        <div className="text-center">
          <p className="text-orange-400 text-base border rounded-full py-1 px-2 bg-orange-50 cursor-pointer flex items-center gap-3">
            <CiSquareInfo className="rounded-full" />
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>

          <button
            onClick={() => handleBooking(singleData)}
            disabled={!isAvailable}
            className={`py-2 rounded-full text-white text-center text-lg w-full mt-12 
    ${
      !isAvailable
        ? "bg-gray-200 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-400 cursor-pointer"
    }`}
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
