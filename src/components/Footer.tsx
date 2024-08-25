
import logo from '../assets/logo svg.svg';
import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-other  flex-wrap flex justify-evenly gap-4 mt-20 min-h-[436px] p-10 ">
   
       <div className="flex flex-col items-end  md:gap-y-6 xs:gap-y-2">
        <NavLink to="/" className="text-white font-medium md:text-1.4xl xs:text-xl  lg:text-2xl md:pr-9 xs:pr-8 ">Home</NavLink>
        <NavLink to="/a-propos" className="text-white md:text-1.4xl xs:text-xl   lg:text-2xl  font-medium text-2xl pr-1">À Propos</NavLink>
        <NavLink to="/service" className="text-white pr-2 md:text-1.4xl xs:text-xl   font-medium lg:text-2xl">Services</NavLink>
        <NavLink to="/secteur" className="text-white pr-4 md:text-1.4xl xs:text-xl  lg:text-2xl font-medium text-2xl">Secteur</NavLink>
        <NavLink to="/contact" className="text-white pr-3 md:text-1.4xl xs:text-xl  lg:text-2xl font-medium text-2xl">Contact</NavLink>
      </div>

      <ul className="flex flex-col md:gap-10 xs:gap-y-3  ">
        <li className="text-2xl font-semibold flex items-center">
          <svg className="w-12 mx-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z" fill='#FFFF'></path>
          </svg>
          <span className='md:text-1.4xl xs:text-xl  lg:text-2xl'>Facebook</span>
        </li>
        <li className="text-2xl font-semibold flex items-center">
          <svg className="w-12 mx-2" xmlns="http://www.w3.org/2000/svg" fill='#FFFF' width="32" height="32" viewBox="0 0 32 32">
            <path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path>
          </svg>
          <span className='md:text-1.4xl xs:text-xl  lg:text-2xl'>LinkedIn</span>
        </li>
        <li className="text-2xl font-semibold flex items-center">
          <svg className="w-12 mx-2" fill='#FFFF' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
          </svg>
          <span className='md:text-1.4xl xs:text-xl  lg:text-2xl'>Twitter</span>
        </li>
        <li className="text-2xl font-semibold flex items-center">
          <svg className="w-12 mx-2" xmlns="http://www.w3.org/2000/svg" fill='#FFFF' width="32" height="32" viewBox="0 0 32 32">
            <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
          </svg>
          <span className='md:text-1.4xl xs:text-xl  lg:text-2xl'>Instagram</span>
        </li>
      </ul>
      <ul className="flex flex-col items-start  xl:w-3/12 xs:w-1/3   gap-2 xs:ml-10   ">
        <li className="xl:text-4xl lg:text-3xl font-semibold md:text-2.5xl xs:text-1.4xl mb-4 xs:text-start "><h3>Adresse</h3></li>
        <li className="xl:text-lg md:text-base xs:text-xs ">
          <span className='text-wrap'>Address Cité Mohamed Boudiaf EPLF Bt5, 4 El Marsa Ex Jen Bart BP2, Alger; Algerie</span>
        </li>
        <li className="xl:text-4xl lg:text-3xl md:text-2.5xl xs:text-1.4xl  font-semibold my-4"><h3>Téléphone</h3></li>
        <li className="xl:text-lg lg:text-base xs:text-xs xs:text-nowrap">+213 (0) 661 570 030</li>
        <li className="xl:text-lg lg:text-base xs:text-xs xs:text-nowrap ">+213 (0) 770 643 051</li>
      </ul>
       
    

      
      <div className="flex   lg:justify-center  xs:-pr-10    items-center md:w-3/12 xs:w-1/2 ">
        <NavLink to="/">
          <img className="bg-transparent xl:w-60 lg:w-56" src={logo} alt="Logo" />
        </NavLink>
      </div>
    </footer>
  );
}
