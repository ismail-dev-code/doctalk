import React from "react";
import Button from "../ui/Button";

const Doctor = ({ doctor }) => {
  const {
    doctorImage,
    name,
    education,
    speciality,
    experience,
    registrationNumber, available
  } = doctor;
  return (
    <div className="rounded-2xl bg-white max-w-screen mx-auto">
        <div className="card-img">
            <img className="md:w-[347px] md:h-[260px] w-full h-full md:m-4 m-0 rounded-2xl" src={doctorImage} alt="doctor Image" />
        </div>
        <div className="card-details">
           <div className="flex gap-4 px-6">
           <p className="text-green-500 text-xs border rounded-full py-1 px-2 bg-green-50 cursor-pointer">{available? 'Available': 'Not Available'}</p>
           <p className="text-blue-500 text-xs border rounded-full py-1 px-2 bg-green-50 cursor-pointer">{experience}+ Experience</p>
           </div>
           <div className="flex flex-col px-6">
            <h1 className="text-xl pt-3 font-bold">{name}</h1>
            <h2 className=" text-gray-600">{speciality}</h2>
            <h2 className="border-b-2 border-dashed border-gray-300 text-gray-600 pb-3">{education}</h2>
            <p className="py-3 text-gray-600">Reg No: {registrationNumber}</p>
           </div>
          <div className="text-center pb-4">
          <Button label='View Details'/>
          </div>
        </div>
    </div>
  );
};

export default Doctor;
