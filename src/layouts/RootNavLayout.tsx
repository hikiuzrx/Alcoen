import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import logo from '../assets/logo1.jpg';
import Menu from '../assets/menu-icon.svg';
import close from '../assets/close.svg'
import { applySeo } from '../seo'

const links = [
  { to: '/a-propos', label: 'A Propos' },
  { to: '/service', label: 'Service' },
  { to: '/secteur', label: 'Secteur' },
  { to: '/contact', label: 'Contact' },
];

function RouteNavLayout() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  // Close the mobile menu and reset scroll on navigation
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
    applySeo(pathname);
  }, [pathname]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `m-4 lg:mt-7 md:mt-8 mb-5 relative group hover:text-primary active:text-primary ${isActive ? 'text-primary' : 'text-black'}`;

  const underlineClasses = (isActive: boolean) =>
    isActive
      ? "absolute left-0 top-full mt-7 w-full h-1 bg-primary scale-x-100"
      : "absolute left-0 top-full mt-7 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out";

  return (
    <>
      <header className="bg-white fixed top-0 p-2 h-24 w-full border-b border-gray-300 z-50">
        <nav className="flex justify-between items-center relative" aria-label="Navigation principale">
          <div>
            <NavLink to="/">
              <img src={logo} className="mt-2 inline-block" alt="ALCOEN - accueil" />
            </NavLink>
          </div>
          <div className="md:hidden block">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-primary focus:outline-hidden mr-2 p-3"
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
            >
              <img src={Menu} alt="" className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden md:flex items-center lg:text-lg md:text-base justify-evenly w-1/2">
            {links.map(({ to, label }, i) => (
              <NavLink key={to} to={to} className={(s) => `${linkClasses(s)}${i === 0 ? ' md:ml-0 md:mr-2' : ''}`}>
                {({ isActive }) => (
                  <>
                    {label}
                    <div className={underlineClasses(isActive)}></div>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
        {/* Mobile overlay menu: hidden from tab order/screen readers while closed */}
        <div
          className={`fixed inset-y-0 right-0 w-2/3 bg-white shadow-lg z-50 p-5 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full invisible'
          } md:hidden`}
          aria-hidden={!menuOpen}
        >
          <button
            className="text-primary bg-white p-2 outline-hidden"
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <img src={close} alt="" className="w-8 border-2 border-black rounded-lg bg-black h-8" />
          </button>
          <div className="flex flex-col items-start mt-16">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} className={linkClasses}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <main className="mt-16 pt-5 grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { RouteNavLayout };
