import img from '../assets/Sans titre - 1_Plan de travail 1 1.png'
import DynamicText from '../components/DynamicText'

export function Home(){
     
    
     return (
          <section className='relative top-0 '>
               <div className="bg-[url('../../public/home-page.jpg')]  bg-cover bg-no-repeat relative ">
               <div className='grid grid-cols-2 relative  '>
                    <div className='flex justify-center items-start flex-col '>
                         <h1 className='text-secondary m-4 text-6xl'>Solutions d'Ingénierie pour un Avenir</h1>
                         
                        <div className='flex justify-between'>
                        <DynamicText/>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                         
                         <img src={img} alt="" className='brightness-125  mix-blend-color-burn opacity-90  ' />
                         
                    </div>
               </div>
                   
                    <div className='col-span-2 w-full  h-10 backdrop-blur-sm'></div>
               </div>
          </section>
     )
}