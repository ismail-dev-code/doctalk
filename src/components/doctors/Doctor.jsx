import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router";

const Doctor = ({ doctor }) => {
  const {
    doctorImage,
    name,
    education,
    speciality,
    experience,
    registrationNumber,
    availableDays,
  } = doctor;

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
  const isAvailable = availableDays.find(
    (available) => available === todayName
  );
  return (
    <div className="rounded-2xl bg-white max-w-screen mx-auto">
      <div className="card-img">
        <img
          className="md:w-[347px] md:h-[260px] w-full h-full md:m-4 m-0 rounded-2xl"
          src={doctorImage}
          alt="doctor Image"
        />
      </div>
      <div className="card-details">
        <div className="flex md:gap-4 gap-2 md:mt-0 mt-1 justify-center items-center px-2 md:px-6">
          <p className="text-green-500 text-xs border rounded-full md:py-1 py-0 md:px-2 px-1 bg-green-50 cursor-pointer">
            {isAvailable ? "Available" : "Not Available"}
          </p>
          <p className="text-blue-500 text-xs border rounded-full md:py-1 py-0 md:px-2 px-1 bg-green-50 cursor-pointer">
            {experience}+ Experience
          </p>
        </div>
        <div className="flex flex-col px-6">
          <h1 className="text-xl pt-3 font-bold">{name}</h1>
          <h2 className=" text-gray-600">{speciality}</h2>
          <h2 className="border-b-2 border-dashed border-gray-300 text-gray-600 pb-3">
            {education}
          </h2>
          <p className="py-3 text-gray-600">Reg No: {registrationNumber}</p>
        </div>
        <div className="text-center pb-4 ">
          <Link to={`/doctor-details/${name}`}>
            <Button label="View Details" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
