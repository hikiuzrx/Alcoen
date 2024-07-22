import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/logo1.jpg';

function RouteNavLayout() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  const getLinkClasses = (link: string) => {
    return link === activeLink
      ? 'm-2 text-primary relative group hover:text-primary'
      : 'm-2 text-black hover:text-primary active:text-primary relative group';
  };
  const getUnderLineClass = (link :string) =>{
     return link === activeLink
     ?"absolute left-0 top-full mt-4 w-full h-1 bg-primary scale-x-100 "
     :"absolute left-0 top-full mt-4 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
  }

  return (
    <>   
      <header className="absolute top-0 p-2 w-full border-b border-gray-300">
        <nav className="flex justify-around">
          <div>
            <NavLink to="/" onClick={() => handleClick('/')}>
              <img src={logo} className="inline-block" alt="Logo" />
            </NavLink>
          </div>
          <div className="flex items-center text-lg justify-evenly w-1/2">
            <NavLink
              to="a-propos"
              className={getLinkClasses('a-propos')}
              onClick={() => handleClick('a-propos')}
            >
              A Propos
              <div className={getUnderLineClass('a-propos')}></div>
            </NavLink>
            <NavLink
              to="service"
              className={getLinkClasses('service')}
              onClick={() => handleClick('service')}
            >
              Service
              <div className={getUnderLineClass('service')}></div>
            </NavLink>
            <NavLink
              to="secteur"
              className={getLinkClasses('secteur')}
              onClick={() => handleClick('secteur')}
            >
              Secteur
              <div className={getUnderLineClass('secteur')}></div>
            </NavLink>
            <NavLink
              to="contact"
              className={getLinkClasses('contact')}
              onClick={() => handleClick('contact')}
            >
              Contact
              <div className={getUnderLineClass('contact')}></div>
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export { RouteNavLayout };