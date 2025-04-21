import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import logoImg from '../assets/logo.png'
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className=" md:py-18 py-8 px-4">
      <div className="flex flex-col items-center space-y-4">

       
        <div className="flex justify-center items-center space-x-2">

          <img className="w-6 h-6" src={logoImg} alt="logoImg" />
        <Link to="/" className="font-bold text-xl">
          DocTalk
        </Link>
        </div>
        <ul className="menu menu-horizontal border-b-1 border-gray-200 pb-4">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-600 underline" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-600 underline" : "")}
              to="/booking"
            >
              My-Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-600 underline" : "")}
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-600 underline" : "")}
              to="/contact-us"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

       
        <div className="flex space-x-6">
          <a
            href="https://github.com/ismail-dev-code"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ismail-hossain24/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/m.ismail.hossain24/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/m.ismailhossain24/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        
        <p className="text-sm text-gray-400 text-center">
          <small>&copy; {new Date().getFullYear()} Ismail. All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
