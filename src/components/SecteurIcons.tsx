import agro from '../assets/Secteur/agro.svg'
import constr from '../assets/Secteur/construction.svg'
import forag from '../assets/Secteur/forage.svg'
import hydro from '../assets/Secteur/hydrolique.svg'
import ind from '../assets/Secteur/industriel.svg'
import san from '../assets/Secteur/santé.svg'
import sectp from '../assets/Secteur/secteur petrolier.svg'
import tran from '../assets/Secteur/transport.svg'
export default function SecteurIcons(){
     return(<>
     <div className="grid grid-flow-row md:grid-cols-4 xs:grid-cols-2 md:gap-4 xs:gap-2">
          <div className="col-span-1 border-2 border-primary rounded-lg  w-full flex justify-center items-center lg:py-7 md:py-1 ">
               <div className='lg:m-2 md:m-custom-mr  flex flex-col justify-center xl:text-lg lg:text-s md:text-xs xs:text-m xs:px-1 xl:px-6 gap-y-2'>
                    <img src={forag} alt="forage" />
                    <p className='text-primary font-semibold  text-center'>Forage</p>
               </div>
          </div>
          <div className="col-span-1 w-full border-2 border-primary flex justify-center items-center rounded-lg">
                <div className='lg:m-2 md:m-custom-mr lg:mt-6 flex flex-col justify-center gap-y-2 '>
                    <div className='flex justify-center mt-2'>
                    <img src={sectp} alt="secteur-petrol" />
                    </div>
                    <p className='text-primary font-semibold text-center xl:text-lg xl:px-6 lg:text-s md:text-xs xs:text-xs md:leading-tight xs:px-1 '>
                    Secteur pétrolier et gazier / Énergie
                    </p>
               </div>   
          </div>
          <div className="col-span-1 md:m-custom-mr w-full border-2 border-primary rounded-lg  flex justify-center items-center">
               <div className='flex flex-col justify-center gap-y-2'>
                    <img src={ind} alt="industriel" />
                    <p className='text-primary font-semibold text-center xl:pt-5  xl:text-lg xl:px-6 xs:px-1 xs:text-xs lg:text-s md:text-xs xs:pb-2 md:px-2 '>Industriel</p>
               </div>
          </div>
          <div className="col-span-1 w-full border-2 border-primary rounded-lg  flex justify-center items-center">
               <div className='flex flex-col justify-center gap-y-2'>
                    <img src={hydro} alt="hydrolique" />
                    <p className='text-primary font-semibold  xl:text-lg xl:px-6 lg:text-s xs:text-xs xs:pb-2 xs:px-1 text-center'>Hydraulique</p>
               </div>
          </div>
          <div className="col-span-1 w-full border-2 border-primary rounded-lg  flex justify-center items-center">
               <div className='lg:h-[214px] md:m-2 p-2  flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center '>
                    <img src={constr} alt="construction" className='object-contain' />
                    <p className='text-center text-primary mt-1  xl:text-lg xl:px-6 lg:text-s xs:text-xs xs:px-1 font-semibold'>Construction</p>
                    </div>
               </div>
          </div>
          <div className="col-span-1 w-full border-2 border-primary rounded-lg  flex justify-center items-center">
               <div className='m-2 flex flex-col items-center '>
                    <img src={tran} alt="transport" className='object-cover' />
                    <p className='text-primary text-center font-semibold  xl:text-lg xl:px-6 xs:text-xs lg:text-s xs:px-1'>Transport</p>
               </div>
          </div>
          <div className="col-span-1 w-full border-2  border-primary rounded-lg   flex justify-center items-center">
               <div className='flex flex-col items-center gap-y-2'>
                    <img src={san} alt="santé"  className='object-cover'/>
                    <p className='text-primary text-center md:pb-2 md:mb-custom-mr font-semibold xs:text-xs xl:text-lg  xl:px-6 lg:text-s xs:px-1 lg:pb-2'>Santé</p>
               </div>
          </div>
          <div className="col-span-1 w-full border-2 border-primary rounded-lg  xs:text-xs  flex justify-center items-center pt-2">
               <div className='flex items-center flex-col gap-y-2'>
                    <div>
                    <img src={agro} alt="agro" />
                    </div>
                    <p className='text-primary text-center font-semibold xs:text-xs  xl:text-lg xl:px-6 lg:text-s xs:px-1 lg:pb-2 xs:pb-3  '>Agroalimentaire</p>
               </div>
          </div>
     </div>
     </>)
}