import sontarak from '../assets/companies-logos/sontrak.png'
import beakine from '../assets/companies-logos/beakine.png'
import cobra from '../assets/companies-logos/cobra.png'
import enafor from '../assets/companies-logos/enafor.png'
import hilos from '../assets/companies-logos/hilos.png'
import lafarge from '../assets/companies-logos/lafarge.png'
import linde from '../assets/companies-logos/linde.png'
import touatGaz from '../assets/companies-logos/touat gaz.png'
import fertial from '../assets/companies-logos/fertial.png'
import naftal from '../assets/companies-logos/naftal.png'
import saipem from '../assets/companies-logos/saipem.png'
import helison from '../assets/companies-logos/helison.png'
export default function HomeCard(){
     return (<>
          <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-row-2 gap-4 ">
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={sontarak} alt="logo" /></div>
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={hilos} alt="log" /></div>
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={beakine} alt="logo" /></div>
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={helison} alt="logo" /></div>
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={lafarge} alt="logo" /></div>
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={linde} alt="logo" /></div>
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={saipem} alt="log" /></div>
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={naftal} alt="logo" /></div>
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={enafor} alt="logo" /></div>
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={touatGaz} alt="logo" /></div>
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={fertial} alt="logo" /></div>
               <div className="rounded-xl flex justify-center items-center h-[130px] bg-white"><img className='object-cover drop-shadow-md' src={cobra} alt="logo" /></div>
          </div>
     </>)
}