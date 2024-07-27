import logo from '../assets/logo svg.svg'
import { NavLink } from 'react-router-dom'
export function Footer(){
     return(<>
           <footer className="bg-other grid grid-col-12">
            <div className='col-start-3'>
                  <ul className='flex flex-col text-lg justify-center items-start'>
                        <li className='text-white active:text-white hover:text-white font-medium '><NavLink to={'/'}></NavLink></li >
                        <li className='text-white active:text-white font-medium '><NavLink to={'/a-propos'}>À Propos</NavLink></li>
                        <li className='text-white active:text-white font-medium '><NavLink to={'/service'}>Services</NavLink></li>
                        <li className='text-white active:text-white font-medium '><NavLink to={'/secteur'}>Secteur</NavLink></li >
                        <li className='text-white active:text-white font-medium '><NavLink to={'/contact'}>Contact</NavLink></li >
                  </ul>
            </div>
            <div className='col-start-6'></div>
            <div className='col-start-9 flex justify-center items-center col-end-12'>
                  <img className='bg-transparent text-transparent' src={logo} alt="" />
            </div>

           </footer>
     </>)
    
}