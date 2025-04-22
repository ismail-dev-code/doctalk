import React from "react";
import Button from "./ui/Button";
import bannerImg from "../assets/banner-img-1.png";
import bannerImg2 from "../assets/two-doctor-banner.jpg";

const Banner = () => {
  return (
    <div className="text-center py-16 border-4 bg-linear-to-t from-white to-[#EFEFEF] border-white rounded-2xl space-y-4 shadow-md">
      <h2 className="lg:text-5xl text-3xl font-thin text-gray-900">
        Dependable Care, Backed by Trusted Professionals.
      </h2>
      <p className="text-gray-500 w-full lg:max-w-5/6 mx-auto">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <form className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24">
        <input
          placeholder="Search any doctor.. "
          className="bg-white lg:text-base text-xs border border-gray-300 rounded-4xl shadow-md w-2/3 h-8 md:h-9 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
        />

        <Button type="submit" label="Search Now" />
      </form>
      <div className="flex md:flex-row flex-col gap-4 max-w-10/12 mx-auto">
        <img
          className="rounded-2xl mb-3 md:mb-0 lg:mb-0"
          src={bannerImg}
          alt="banner image"
        />
        <img className="rounded-2xl" src={bannerImg2} alt="banner image2" />
      </div>
    </div>
  );
};

export default Banner;
