import { NavLink, Outlet } from "react-router-dom";
import { useState, } from "react";
import { Footer } from "../components/Footer";
import logo from '../assets/logo1.jpg';

function RouteNavLayout() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
 
  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  const getLinkClasses = (link: string) => {
    return link === activeLink
      ? 'm-4 text-primary mt-7 mb-5 relative group hover:text-primary'
      : 'm-4 text-black mt-7 mb-5 hover:text-primary active:text-primary relative group';
  };
  const getUnderLineClass = (link :string) =>{
     return link === activeLink
     ?"absolute left-0 top-full mt-7 w-full h-1 bg-primary scale-x-100 "
     :"absolute left-0 top-full mt-7 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
  }

  return (
    <>   
      <header className="bg-white absolute top-0 p-2 h-24 mb-16 w-full border-b border-gray-300">
        <nav className="flex justify-around items-center ">
          <div>
            <NavLink to="/" onClick={() => handleClick('/')}>
              <img src={logo} className=" mt-2 inline-block" alt="Logo" />
            </NavLink>
          </div>
          <div className="flex items-center text-lg justify-evenly w-1/2">
            <NavLink
              to="a-propos"
              className={getLinkClasses('/a-propos')}
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
      </header>
      
        <main className="mt-16 pt-5 flex-grow" >
        <Outlet />
        </main>
      <Footer/>
    </>
  );
}

export { RouteNavLayout };
