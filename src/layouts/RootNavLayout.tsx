import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { Footer } from "../components/Footer";
import logo from '../assets/logo1.jpg';

function RouteNavLayout() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // State for hamburger menu

  const handleClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false); // Close menu on link click
  };

  const getLinkClasses = (link: string) => {
    return link === activeLink
      ? 'm-4 text-primary lg:mt-7 md:mt-8 mb-5  relative group hover:text-primary'
      : 'm-4 text-black lg:mt-7 md:mt-8 mb-5  hover:text-primary active:text-primary relative group';
  };

  const getUnderLineClass = (link: string) => {
    return link === activeLink
      ? "absolute left-0 top-full mt-7 w-full h-1 bg-primary scale-x-100 "
      : "absolute left-0 top-full mt-7 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out";
  };

  return (
    <>   
      <header className="bg-white fixed top-0 p-2 h-24 w-full border-b border-gray-300 z-50">
        <nav className="flex justify-between items-center relative">
          {/* Logo */}
          <div>
            <NavLink to="/" onClick={() => handleClick('/')}>
              <img src={logo} className="mt-2 inline-block" alt="Logo" />
            </NavLink>
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden block">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-primary focus:outline-none mr-2 p-3"
            >
              <svg
                className="w-6 h-6  "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Navigation Links */}
          <div
            className={`hidden md:flex items-center lg:text-lg md:text-base justify-evenly  w-1/2`}
          >
            <NavLink
              to="a-propos"
              className={`${getLinkClasses('/a-propos')} md:ml-0 md:mr-2`}
              onClick={() => handleClick('/a-propos')}
            >
              A Propos
              <div className={getUnderLineClass('/a-propos')}></div>
            </NavLink>
            <NavLink
              to="service"
              className={getLinkClasses('/service')}
              onClick={() => handleClick('/service')}
            >
              Service
              <div className={getUnderLineClass('/service')}></div>
            </NavLink>
            <NavLink
              to="secteur"
              className={getLinkClasses('/secteur')}
              onClick={() => handleClick('/secteur')}
            >
              Secteur
              <div className={getUnderLineClass('/secteur')}></div>
            </NavLink>
            <NavLink
              to="contact"
              className={getLinkClasses('/contact')}
              onClick={() => handleClick('/contact')}
            >
              Contact
              <div className={getUnderLineClass('/contact')}></div>
            </NavLink>
          </div>
        </nav>
        {/* Overlay Menu */}
        <div
          className={`fixed inset-y-0 right-0 w-2/3 bg-white shadow-lg z-50 p-5 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <button
            className="text-primary outline-none border-0"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            CLOSE
          </button>
          <div className="flex flex-col items-start mt-16">
            <NavLink
              to="a-propos"
              className={getLinkClasses('/a-propos')}
              onClick={() => handleClick('/a-propos')}
            >
              A Propos
            </NavLink>
            <NavLink
              to="service"
              className={getLinkClasses('/service')}
              onClick={() => handleClick('/service')}
            >
              Service
            </NavLink>
            <NavLink
              to="secteur"
              className={getLinkClasses('/secteur')}
              onClick={() => handleClick('/secteur')}
            >
              Secteur
            </NavLink>
            <NavLink
              to="contact"
              className={getLinkClasses('/contact')}
              onClick={() => handleClick('/contact')}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </header>
      
      <main className="mt-16 pt-5 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { RouteNavLayout };
