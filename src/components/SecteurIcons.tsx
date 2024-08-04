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
     <div className="grid grid-flow-row grid-cols-4 gap-4">
          <div className="col-span-1 border-2 border-primary rounded-lg  w-full flex justify-center items-center py-7">
               <div className='m-2 flex flex-col justify-center gap-y-2'>
                    <img src={forag} alt="forage" />
                    <p className='text-primary font-semibold text-center'>Forage</p>
               </div>
          </div>
          <div className="col-span-1 w-full border-2 border-primary flex justify-center items-center rounded-lg">
                <div className='m-2 mt-6 flex flex-col justify-center gap-y-2 '>
                    <div className='flex justify-center mt-2'>
                    <img src={sectp} alt="secteur-petrol" />
                    </div>
                    <p className='text-primary font-semibold text-center px-6'>
                    Secteur pétrolier et gazier / Énergie
                    </p>
               </div>   
          </div>
          <div className="col-span-1 w-full border-2 border-primary rounded-lg  flex justify-center items-center">
               <div className='flex flex-col justify-center gap-y-2'>
                    <img src={ind} alt="industriel" />
                    <p className='text-primary font-semibold text-center'>Industriel</p>
               </div>
          </div>
          <div className="col-span-1 w-full border-2 border-primary rounded-lg  flex justify-center items-center">
               <div className='flex flex-col justify-center gap-y-2'>
                    <img src={hydro} alt="hydrolique" />
                    <p className='text-primary font-semibold text-center'>Hydraulique</p>
               </div>
          </div>
          <div className="col-span-1 w-full border-2 border-primary rounded-lg  flex justify-center items-center">
               <div className='h-[214px]  flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center '>
                    <img src={constr} alt="construction" className='object-contain' />
                    <p className='text-center text-primary mt-1 font-semibold'>Construction</p>
                    </div>
               </div>
          </div>
          <div className="col-span-1 w-full border-2 border-primary rounded-lg  flex justify-center items-center">
               <div className='m-2 flex flex-col items-center '>
                    <img src={tran} alt="transport" className='object-cover' />
                    <p className='text-primary text-center font-semibold'>Transport</p>
               </div>
          </div>
          <div className="col-span-1 w-full border-2 border-primary rounded-lg  flex justify-center items-center">
               <div className='flex flex-col items-center gap-y-2'>
                    <img src={san} alt="santé"  className='object-cover'/>
                    <p className='text-primary text-center font-semibold'>Santé</p>
               </div>
          </div>
          <div className="col-span-1 w-full border-2 border-primary rounded-lg  flex justify-center items-center">
               <div className='flex items-center flex-col gap-y-2'>
                    <div>
                    <img src={agro} alt="agro" />
                    </div>
                    <p className='text-primary text-center font-semibold'>Agroalimentaire</p>
               </div>
          </div>
     </div>
     </>)
}