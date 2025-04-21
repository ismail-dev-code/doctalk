import React from "react";

const Button = ({ label, type }) => {
  return (
    <button
      type={type}
      className="relative inline-block text-lg group cursor-pointer"
    >
      <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-full group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#176AE5] group-hover:-rotate-180 ease"></span>
        <span className="relative">{label}</span>
      </span>
    </button>
  );
};

export default Button;
