import trianglew from '../assets/triangle-slider.svg'
import  { useState } from 'react';
import IRESP from '../assets/IRESP.jpg'
import AT from '../assets/AT.png'
import CND from '../assets/CND.png'
import CRAML from '../assets/CRAML.png'
import CREIE from '../assets/CREIE.png'
import EAER from '../assets/EAER.png'
import EEATA from '../assets/EEATA.png'
import IMAE from '../assets/IMAE.png'
import RIGS from '../assets/RIGS.png'
import MADDP from '../assets/maddp.png'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [IRESP, CND, RIGS, CRAML, EEATA, IMAE,CREIE,EAER,MADDP,AT]; // Example cards

  const nextSlide = () => {
     console.log(currentIndex)
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 3));
    console.log(currentIndex)
  };

  const prevSlide = () => {
     console.log(currentIndex)
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    console.log(currentIndex)
  };
  let customGradiant: string;
  let content :string;
  
function Content(i:number){
     
          switch(i){
               case 0:
                    content = 'Inspection Réglementaire ESP'
                    break;
               case 1:
                    content = 'Contrôle Non Destructifs'
                    break;
               case 2:
                    content = 'RIG Service '
                    break;
               case 3 :
                    content = 'Contrôle réglementaire des appareils de manutention et levage'
                    break;
               case 4: 
                    content = 'Expertise et audit type ATEX'
                    break;
               case 5:
                    content = 'Inspection marchandise avant expédition'
                    break;
               
               case 6:
                    content = 'Contrôle réglementaire des équipements & installations électriques'
                    break;
               case 7:
                    content='Expertise assurance et réassurance'
                    break;
               case 8:
                    content ='Mise à disposition du personnel'
                    break; 
               case 9:
                    content ='assistance technique'
            }
            return content
  
}
let getCustomGradiant = (index:number):string =>{
     switch(index){
          case 0: 
               customGradiant ='bg-gradient-to-br xs:h-[62px] from-primary via-primary-100  to-transparent md:h-[124px] lg:h-[162px]  xl:h-[202px] object-fill absolute m-2  p-2 shadow-lg rounded-lg inset-0'
               break;
          case 1: case 4:
               customGradiant = 'bg-gradient-to-tl xs:h-[62px] from-primary via-transparent to-secondary md:h-[124px] lg:h-[162px] xl:h-[202px] object-fill absolute m-2  p-2 shadow-lg rounded-lg inset-0'
               break;
          case 2 : case 8: 
               customGradiant = 'bg-gradient-to-tr xs:h-[62px] from-primary md:h-[124px] via-transparent to-other lg:h-[162px] xl:h-[202px] object-fill absolute m-2  p-2 shadow-lg rounded-lg inset-0 '
               break;
          case 3: 
               customGradiant = 'bg-other opacity-60 xs:h-[62px] lg:h-[162px] md:h-[124px] xl:h-[202px] object-fill absolute m-2  p-2 shadow-lg rounded-lg inset-0'
               break;
          case 5:
               customGradiant = 'bg-gradient-to-t xs:h-[62px] from-primary md:h-[124px] via-secondary opacity-60  to-other lg:h-[162px]  xl:h-[202px] object-fill absolute m-2  p-2 shadow-lg rounded-lg inset-0'
               break;
          case 6:
               customGradiant ='bg-primary-100 xs:h-[62px] lg:h-[162px] md:h-[124px] xl:h-[202px] object-fill absolute m-2  p-2 shadow-lg rounded-lg inset-0'
               break;
          case 7:
               customGradiant = 'bg-gradient-to-tr  xs:h-[62px] from-primary-100 via-other-100 to-other-100 opacity-70 md:h-[124px]  lg:h-[162px]  xl:h-[202px] object-fill absolute m-2  p-2 shadow-lg rounded-lg inset-0'
               break;
          case 9:
               customGradiant = 'bg-gradient-to-tr xs:h-[62px] from-primary-100 via-other-100  to-other-100 opacity-70 md:h-[124px]  lg:h-[162px]  xl:h-[202px] object-fill absolute m-2  p-2 shadow-lg rounded-lg inset-0 '


     }
    

     return customGradiant
    }
  return (
    <div className="relative overflow-hidden xs:mt-10 md:mt-0 w-full h-60 ">
      <div
        className="flex justify-around transition-transform duration-300 xs:-ml-0.5 md:ml-0 p-2 px-4 m-2"
        style={{ transform: `translateX(-${(currentIndex * 100 / 3)+1.5}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="  relative gap-4 w-1/3 flex-shrink-0  p-2 xl:mr-3 lg:mr-custom-mr-2 xs:mr-1.6 md:mr-1.5 ">
               
               <img src={card} alt="card" className=' xs:h-[62px] rounded-lg  md:h-[124px] lg:h-[162px] xl:h-[202px] overflow-hidden w-full object-fill inset-0 h-53 ' /> 
               
            <div className='p-2'>
            <div className={getCustomGradiant(index)}>
     
     </div> 

     <div className='absolute inset-0 font-meduim  flex justify-center items-center'>
     <p className='lg:text-xl xs:text-xxs md:text-sm text-white font-semibold flex mx-4 mb-2' style={{textAlign:'center'}}>
          {Content(index)}
     </p>
     </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 xs:border-2 xs:bg-other md:border-none md:p-0 xs:text-other xs:p-2 xs:active:border-black xs:hover:border-black xs:border-black xs:-translate-y-20 xs:mt-1 transform md:-translate-y-16 md:w-10  xs:w-5 lg:-translate-y-9 xl:-translate-y-1/2  p-2 focus:outline-none"
        style={{ backgroundColor: 'transparent', /* border: 'none'  */}}
      >
        <img src={trianglew} alt="icon" className="w-10 h-auto object-left rotate-180 " />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 xs:border-2 xs:p-2 md:p-0 xs:bg-other md:w-10 md:border-none xs:border-black xs:hover:border-black transform md:-translate-y-16 xs:-translate-y-20 xs:mt-1 xs:w-5 lg:-translate-y-9 xl:-translate-y-1/2 p-2 focus:outline-none"
        style={{ backgroundColor: 'transparent', /* border: 'none'  */}}
      >
        <img src={trianglew} alt="icon" className='w-10 h-auto mr-1' />
      </button>
    </div>
  );
};

export default Slider;