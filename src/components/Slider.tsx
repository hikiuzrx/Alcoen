import trianglew from '../assets/triangle-slider.svg'
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
  'bg-gradient-to-br from-primary via-primary-100 to-transparent',
  'bg-gradient-to-tl from-primary via-transparent to-secondary',
  'bg-gradient-to-tr from-primary via-transparent to-other',
  'bg-other opacity-60',
  'bg-gradient-to-tl from-primary via-transparent to-secondary',
  'bg-gradient-to-t from-primary via-secondary opacity-60 to-other',
  'bg-primary-100',
  'bg-gradient-to-tr from-primary-100 via-other-100 to-other-100 opacity-70',
  'bg-gradient-to-tr from-primary via-transparent to-other',
  'bg-gradient-to-tr from-primary-100 via-other-100 to-other-100 opacity-70',
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
       <div className="relative overflow-hidden xs:mt-10 md:mt-0 w-full h-60 ">
         <div
           className="flex justify-around transition-transform duration-300 xs:-ml-0.5 md:ml-0 p-2 px-4 m-2"
           style={{ transform: `translateX(-${(currentIndex * 100 / 3) + 1.5}%)` }}
         >
           {slides.map((slide, index) => {
             const { title: content, path, image: card } = slide;
             return (
               <NavLink 
                 to={path} 
                 key={index} 
                 className="relative gap-4 w-1/3 flex-shrink-0 p-2 xl:mr-3 lg:mr-custom-mr-2 xs:mr-1.6 md:mr-1.5"
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
         <button
           onClick={prevSlide}
           aria-label="Précédent"
           className="absolute top-1/2 left-0 xs:border-2 xs:bg-other md:border-none md:p-0 xs:text-other xs:p-2 xs:active:border-black xs:hover:border-black xs:border-black xs:-translate-y-20 xs:mt-1 transform md:-translate-y-16 md:w-10 xs:w-5 lg:-translate-y-9 xl:-translate-y-1/2 p-2 focus:outline-none"
           style={{ backgroundColor: 'transparent' }}
         >
           <img loading="lazy" src={trianglew} alt="" className="w-10 h-auto object-left rotate-180 " />
         </button>
         <button
           onClick={nextSlide}
           aria-label="Suivant"
           className="absolute top-1/2 right-0 xs:border-2 xs:p-2 md:p-0 xs:bg-other md:w-10 md:border-none xs:border-black xs:hover:border-black transform md:-translate-y-16 xs:-translate-y-20 xs:mt-1 xs:w-5 lg:-translate-y-9 xl:-translate-y-1/2 p-2 focus:outline-none"
           style={{ backgroundColor: 'transparent' }}
         >
           <img loading="lazy" src={trianglew} alt="" className='w-10 h-auto mr-1' />
         </button>
       </div>
     );
   };
   
   export default Slider;
   