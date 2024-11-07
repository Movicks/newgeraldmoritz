// Header.tsx
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdDashboardCustomize, MdOutlineHomeRepairService, MdOutlinePhoneCallback, MdRateReview } from "react-icons/md";
import { PiBuildingOffice } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const linkClasses = "flex items-center hover:text-gray-400 space-x-2";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect which section is currently active on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="bg-white text-black border-b-2 sticky top-0 left-0 z-[100]">
      <div className="h-[3.5rem] md:h-[4.3rem] mx-auto px-4 lg:px-[4rem] flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold h-[4.3rem] flex items-center">
            <b className="text-red-500"><span className="bg-red-500 text-white px-2 rounded-md">G</span>eraldLaw</b>
        </div>

        {/* Navigation links for larger screens */}
        <nav className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className={
              activeSection === "/"
                ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
            <MdDashboardCustomize className="text-2xl text-red-500" /> <span>Home</span>
          </Link>
          <Link
            to="practices"
            className={
              activeSection === "practice"
                ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
            <MdOutlineHomeRepairService className="text-2xl text-red-500" /> <span>Our Practices</span>
          </Link>
          <Link
            to="about"
            className={
              activeSection === "about"
                ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
            <PiBuildingOffice className="text-2xl text-red-500" />
            <span>About us</span>
          </Link>

          <Link
            to="reviews"
            className={
              activeSection === "reviews"
                ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
            <MdRateReview className="text-2xl text-red-500" />
            <span>Reviews</span>
          </Link>
          <Link
            to="team"
            className={
              activeSection === "team"
                ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
            <RiTeamLine className="text-2xl text-red-500" />
            <span>Our Team</span>
          </Link>
          <Link
            to="contact"
            className={
              activeSection === "contact"
                ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
            <MdOutlinePhoneCallback className="text-2xl text-red-500" />
            <span >Contact Us</span>
          </Link>
          <div className="flex items-center space-x-2 ">
            <a
              href="tel:+12702902019"
              className="text-white bg-red-500 px-4 py-2 rounded"
              aria-label="Login"
            >
              +1 270-290-2019
            </a>
          </div>
        </nav>

        {/* Hamburger menu for smaller screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-90 bg-white transform overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden w-3/4 max-w-sm`}
      >
        <nav className="pl-4 flex flex-col justify-between h-full gap-1">
        <div className="text-2xl font-bold h-[4.3rem] flex items-center">
            <b className="text-red-500"><span className="bg-red-500 text-white px-2 rounded-md">G</span>eraldLaw</b>
        </div>
          <div className="flex flex-col items-start space-y-4 gap-3 border-r-2 h-full max-h-[40rem] pt-3 pb-9 pr-4">
            <Link
              to="/"
              className={
                activeSection === "/"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
              <MdDashboardCustomize className="text-3xl" /> <span className="text-lg">Home</span>
            </Link>
            <Link
              to="practices"
              className={
                activeSection === "practice"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
              <MdOutlineHomeRepairService className="text-3xl" /> <span className="text-lg">Our Practices</span>
            </Link>
            <Link
              to="about"
              className={
                activeSection === "about"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
              <PiBuildingOffice className="text-3xl" />
              <span className="text-lg">About us</span>
            </Link>
            <Link
              to="reviews"
              className={
                activeSection === "reviews"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
              <MdRateReview className="text-3xl" />
              <span className="text-lg">Reviews</span>
            </Link>
            <Link
              to="team"
              className={
                activeSection === "team"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
              <RiTeamLine className="text-3xl" />
              <span className="text-lg">Our Team</span>
            </Link>
            <Link
              to="contact"
              className={
                activeSection === "contact"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
              <MdOutlinePhoneCallback className="text-3xl" />
              <span className="text-lg">Contact Us</span>
            </Link>
          </div>
          <div className="flex items-center justify-center w-full h-full max-h-[5rem] border-r-2 pr-4">
            <a
              href="tel:+12702902019"
              className="text-white bg-red-500 px-4 py-2 rounded w-full max-w-[20rem] font-semibold text-center"
              aria-label="Login"
            >
              +1 270-290-2019
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
