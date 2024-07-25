import img from '../assets/Sans titre - 1_Plan de travail 1 1.png'
import DynamicText from '../components/DynamicText'
import { NavLink } from 'react-router-dom'
import triangle from '../assets/triangle-icone.svg'

export function Home(){
     
    
     return (
          <section className='relative top-0 mt-3 '>
               <div className="bg-[url('../../public/home-page.jpg')]  bg-cover bg-no-repeat relative ">
               <div className='grid grid-cols-2 relative  '>
                    <div className='flex justify-center items-start flex-col  '>
                         <h1 className='text-secondary m-8 ml-20 pl-5 mb-4 text-6xl '>Solutions d'Ingénierie</h1>
                         <h1 className='text-secondary m-8 ml-20 pl-5 mt-4 text-6xl'> Pour un Avenir</h1>
                         
                        <div className='flex justify-between'>
                        <DynamicText/>
                        </div>
                        <div>
                              <p className='text-secondary w-auto mx-14 my-4 px-28'>  
                                   ALCOEN est là pour vous accompagner.
                                   Notre équipe qualifiée vous offre une gamme complète de solutions
                                   personnalisées,Contactez-nous dès maintenant pour découvrir comment
                                   nous pouvons vous aider à atteindre vos objectifs avec succès.
                              </p>
                             <div className='flex justify-center'>
                             <NavLink to={'/contact'} className='text-white bg-primary rounded-lg p-2 px-4 text-2xl m-4 font-semibold hover:text-white'>
                                   Contact
                              </NavLink>
                              <NavLink className='text-primary flex justify-start m-2 ' to={'/service'}>
                                   <div className='flex justify-start items-center'>
                                        <span className='text-primary inline-block'>Voir les services  </span>
                                        <img src={triangle} alt="icon" className='inline-block fill-primary  w-5 h-auto'/>
                                   </div>
                              </NavLink>
                            
                             </div>
                         </div>
                    </div>
                    <div className='flex justify-end'>
                         
                         <img src={img} alt="" className='brightness-125  mix-blend-color-burn opacity-90  ' />
                         
                    </div>
               </div>
                   
                    <div className='col-span-2 w-full   backdrop-blur-sm h-14'></div>
               </div>
          </section>
     )
}