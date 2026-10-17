import { NavLink } from 'react-router-dom';
import { services, servicePath } from '../data/services';
import  { useState } from 'react';
import IRESP from '../assets/IRESP.webp'
import AT from '../assets/AT.png'
import CND from '../assets/CND.png'
import CRAML from '../assets/CRAML.png'
import CREIE from '../assets/CREIE.png'
import EAER from '../assets/EAER.png'
import EEATA from '../assets/EEATA.png'
import IMAE from '../assets/IMAE.png'
import RIGS from '../assets/RIGS.png'
import MADDP from '../assets/maddp.png'


const slides = [
  { code: 'IRESP', image: IRESP },
  { code: 'CND', image: CND },
  { code: 'RIGS', image: RIGS },
  { code: 'CRAML', image: CRAML },
  { code: 'EATA', image: EEATA },
  { code: 'IMAE', image: IMAE },
  { code: 'CREIE', image: CREIE },
  { code: 'EAER', image: EAER },
  { code: 'MADDP', image: MADDP },
  { code: 'AT', image: AT },
].map(({ code, image }) => {
  const service = services.find((s) => s.code === code)!
  return { image, title: service.sliderTitle, path: servicePath(code) }
})

const overlayBase = 'xs:h-[62px] md:h-[124px] lg:h-[162px] xl:h-[202px] object-fill absolute m-2 p-2 shadow-lg rounded-lg inset-0'
const overlayStyles = [
  'bg-linear-to-br from-primary via-primary-100 to-transparent',
  'bg-linear-to-tl from-primary via-transparent to-secondary',
  'bg-linear-to-tr from-primary via-transparent to-other',
  'bg-other opacity-60',
  'bg-linear-to-tl from-primary via-transparent to-secondary',
  'bg-linear-to-t from-primary via-secondary opacity-60 to-other',
  'bg-primary-100',
  'bg-linear-to-tr from-primary-100 via-other-100 to-other-100 opacity-70',
  'bg-linear-to-tr from-primary via-transparent to-other',
  'bg-linear-to-tr from-primary-100 via-other-100 to-other-100 opacity-70',
]

const Slider = () => {
     const [currentIndex, setCurrentIndex] = useState(0);

     const nextSlide = () => {
       setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 3));
     };

     const prevSlide = () => {
       setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
     };

     return (
       <div className="relative xs:mt-10 md:mt-0 w-full h-60 px-7 md:px-11">
         <div className="overflow-hidden w-full h-full">
         <div
           className="flex transition-transform duration-300 my-2"
           style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
         >
           {slides.map((slide, index) => {
             const { title: content, path, image: card } = slide;
             return (
               <NavLink 
                 to={path} 
                 key={index} 
                 className="relative w-1/3 shrink-0 p-2"
               >
                 <img src={card} alt={content} loading="lazy" className='xs:h-[62px] rounded-lg md:h-[124px] lg:h-[162px] xl:h-[202px] overflow-hidden w-full object-fill inset-0 h-53' />
                 <div className='p-2'>
                   <div className={`${overlayStyles[index]} ${overlayBase}`} />
                   <div className='absolute inset-0 font-medium flex justify-center items-center'>
                     <p className='lg:text-xl xs:text-xxs md:text-sm text-white font-semibold flex mx-4 mb-2' style={{ textAlign: 'center' }}>
                       {content}
                     </p>
                   </div>
                 </div>
               </NavLink>
             );
           })}
         </div>
         </div>
         <div className="pointer-events-none absolute inset-x-0 top-4 flex items-center justify-between xs:h-[62px] md:h-[124px] lg:h-[162px] xl:h-[202px]">
           <button
             onClick={prevSlide}
             aria-label="Précédent"
             className="pointer-events-auto flex items-center justify-center w-7 md:w-11 p-0 bg-transparent border-none rounded-none text-other hover:text-primary transition-colors focus:outline-none focus-visible:text-primary"
           >
             <span className="block w-full rotate-180"><svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-auto" aria-hidden="true"><path d="M15.795 11.272L7.795 16.272C6.796 16.896 5.5 16.178 5.5 15V5C5.5 3.822 6.796 3.104 7.795 3.728L15.795 8.728C16.735 9.316 16.735 10.685 15.795 11.272Z" /></svg></span>
           </button>
           <button
             onClick={nextSlide}
             aria-label="Suivant"
             className="pointer-events-auto flex items-center justify-center w-7 md:w-11 p-0 bg-transparent border-none rounded-none text-other hover:text-primary transition-colors focus:outline-none focus-visible:text-primary"
           >
             <span className="block w-full "><svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-auto" aria-hidden="true"><path d="M15.795 11.272L7.795 16.272C6.796 16.896 5.5 16.178 5.5 15V5C5.5 3.822 6.796 3.104 7.795 3.728L15.795 8.728C16.735 9.316 16.735 10.685 15.795 11.272Z" /></svg></span>
           </button>
         </div>
       </div>
     );
   };
   
   export default Slider;
   