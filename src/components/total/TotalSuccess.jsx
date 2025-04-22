import React from "react";
import doctorImg from "../../assets/success-doctor.png";
import staffImg from "../../assets/success-staffs.png";
import patientImg from "../../assets/success-patients.png";
import reviewImg from "../../assets/success-review.png";
import CountUp from "react-countup";

const total = () => {
  return (
    <div className="pb-12">
      <h1 className="text-center text-3xl font-bold">
        We Provide Best Medical Services
      </h1>
      <p className="text-center text-gray-500 pb-6">
        Experience top-quality healthcare with our expert doctors and advanced
        medical facilities.
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-2 items-center justify-items-center">
        <div className="bg-white flex flex-col justify-start rounded-md p-6">
          <img className="w-10 h-10" src={doctorImg} alt="doctor Img" />
          <h1 className="text-3xl font-bold py-1.5">
            <CountUp end={199} duration={33.75} suffix=" +" />
          </h1>
          <p className="text-gray-600">Total Doctors</p>
        </div>
        <div className="bg-white flex flex-col justify-start rounded-md p-6">
          <img className="w-10 h-10" src={reviewImg} alt="review Img" />
          <h1 className="text-3xl font-bold py-1.5"><CountUp end={467} duration={44.75} suffix=" +" /></h1>
          <p className="text-gray-600">Total Reviews</p>
        </div>
        <div className="bg-white flex flex-col justify-start rounded-md p-6">
          <img className="w-10 h-10" src={patientImg} alt="patient Img" />
          <h1 className="text-3xl font-bold py-1.5"><CountUp end={1900} duration={99.75} suffix=" +" /></h1>
          <p className="text-gray-600">Patients</p>
        </div>
        <div className="bg-white flex flex-col justify-start rounded-md p-6">
          <img className="w-10 h-10" src={staffImg} alt="staff Img" />
          <h1 className="text-3xl font-bold py-1.5"><CountUp end={300} duration={22.75} suffix=" +" /></h1>
          <p className="text-gray-600">Total Stuffs</p>
        </div>
      </div>
    </div>
  );
};

export default total;
