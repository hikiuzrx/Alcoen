import dim from '../assets/Service/dimond.svg'
import { NavigateFunction, useLocation,useNavigate } from 'react-router-dom'
import backBtn from '../assets/arrow-ios-back.svg'
import IRESP from '../../public/services/IRESP.png'
import RIGS from '../../public/services/RIGS.png'
import IMAE from '../../public/services/IMAE.png'
import CRAML from '../../public/services/CRAML.png'
import EATA from '../../public/services/EATA.png'
import CREIE from '../../public/services/CREIE.png'
import AT from '../../public/services/AT.png'
import CND from '../../public/services/CND.png'
import EAER from '../../public/services/EAER.png'
import FAPI from '../../public/services/FAPI.png'
import FCND from '../../public/services/FCND.png'
import FES from '../../public/services/FES.png'
import MADDP from '../../public/services/MADDP.png'
export default function ServiceHeader(){
     const location:string = decodeURIComponent(useLocation().pathname);
     let headData :any = {
          header:{
               part1:'NOS',
               part2:'SERVICES'
          },
     }
     const navigate:NavigateFunction = useNavigate()
     let backHandler = () =>{
          navigate('/service')
     }
     console.log(location)
     switch (location){
          case '/service/Inspection-Réglementaire-ESP':
          headData.desc = 'Insepection Réglementaire ESP'
          headData.bg = IRESP
      
          
          break;
          case '/service/Inspection-marchandises-avant-expédition':
               headData.desc = 'Inspection marchandises avant expédition'
               headData.bg = IMAE
          break;
          case '/service/Contrôle-réglementaire-des-appareils-de-manutention-et-levage':
               headData.desc = 'Contrôle réglementaire des appareils de manutention et levage'
               headData.bg = CRAML
          break;
          case '/service/Contrôle-Non-Destructifs':
               headData.desc = 'Contrôle non destructifs'
               headData.bg = CND
          break;
          case '/service/RIG-service':
               headData.desc = 'RIG service'
               headData.bg= RIGS
              
          break;
          case '/service/Expertise-et-audit-type-ATEX':
               headData.desc = 'Expertise et audit type ATEX'
               headData.bg = EATA
          break;
          case '/service/Contrôle-réglementaire-des-équipement-&-installations-électriques':
               headData.desc= ' Contrôle réglementaire des équipement & installations électriques'
               headData.bg = CREIE
          break;
          case '/service/Assistance-technique':
               headData.desc = 'Assistance technique'
               headData.bg = AT
          break;
          case '/service/Expertise-assurance-et-réassurance':
               headData.desc = 'Expertise assurance et réassurance'
               headData.bg = EAER
          break;
          case '/service/Mise-à-disposition-du-personnel':
               headData.desc = 'Mise à disposition du personnel'
               headData.bg = MADDP
          break;
          case '/service/Formation-API-510-,-570,-,-579-,-653...etc.':
               headData.desc = 'Formation : API 510, 570, 579, 653...etc.'
               headData.bg = FAPI
          break;
          case '/service/Formation-CND-LI-&-LII-renouvellement-certificat':
               headData.desc ='Formation CND LI & LII renouvellement certificat'
               headData.bg = FCND
          break;
          case '/service/Formation-et-sensibilisation':
               headData.desc ='Formation et sensibilisation'
               headData.bg = FES
          break;
        
     }
     return (<>
          <div 
          className={`relative  top-3 ml-0 w-full  bg-cover bg-no-repeat `}

          >
               <img src={headData.bg} alt=""className='h-[400px] w-full' />
               <div className='inset-0 absolute '>
               <button
                className='bg-transparent hover:border-secondary  hover:border-2
                  border-2 relative p-1 top-6 mb-2 left-28 border-gray-200'
                  onClick={()=>backHandler()}
                  >
                    <img src={backBtn} alt="button" className='w-10' />
               </button>
          <h1 className="flex items-center mt-4">
               
          <div className="md:w-40 xs:w-24 xs:h-24 md:h-40 inline-block bg-secondary"></div>
     
          <div className='mt-5 md:text-5xl xs:text-3.5xl'>
          <p className="text-primary inline-block relative  ml-4 mt-4 m-2 ">
            {headData.header.part1}
            </p>
            <p className="text-white mb-10  block relative font-semibold ml-4">
             {headData.header.part2}
            </p>
 
      
          </div>
         
         
        </h1>
        <div className='grid grid-cols-12 mt-6 ml-14  '>
          <p className='text-lg text-white  font-meduim col-start-2 col-span-full flex items-center   gap-x-2  ' >
          <img src={dim} alt="dimond" className='inline-block w-5' />
          {headData.desc}
          </p>
          </div>
               </div>
       
      

          </div>
     </>)
}