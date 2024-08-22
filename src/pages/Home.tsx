import img from '../assets/Sans titre - 1_Plan de travail 1 1.png'
import DynamicText from '../components/DynamicText'
import { NavLink } from 'react-router-dom'
import triangle from '../assets/triangle-icone.svg'
import homeSection from '../assets/home-section.jpg'
import  Slider  from '../components/Slider'
import  HomeCard  from '../components/HomeCard'

export function Home(){
     
    
     return (
          <>
               <section className='relative top-0 mt-3 mb-10'>
               <div className="bg-[url('../../public/home-page.jpg')] max-xl:bg-cover lg:bg-cover bg-no-repeat relative ">
               <div className='grid grid-cols-2 relative  '>
                    <div className='flex justify-center items-start flex-col  '>
                         <h1 className='text-secondary my-6  font-normal  ml-20 pl-5 mb-2 xl:text-6xl '>Solutions d'Ingénierie</h1>
                         <h1 className='text-secondary my-6  font-normal ml-20 pl-5 mt-2 xl:text-6xl'> Pour un Avenir</h1>
                         
                        <div className='flex justify-between'>
                        <DynamicText/>
                        </div>
                        <div>
                              <p className='text-secondary xl:text-sm  lg:text-xs leading-relaxed w-auto mx-14  xl:mx-12 my-4 px-28'>  
                                   ALCOEN est là pour vous accompagner.
                                   Notre équipe qualifiée vous offre une gamme complète de solutions
                                   personnalisées,Contactez-nous dès maintenant pour découvrir comment
                                   nous pouvons vous aider à atteindre vos objectifs avec succès.
                              </p>
                             <div className='flex justify-center'>
                             <NavLink to={'/contact'} className='text-white bg-primary rounded-lg p-2 px-4 lg:px-2 max-xl:px-3 text-2xl m-2 font-semibold hover:text-white'>
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
                    <div className='flex justify-end  '>
                         
                         <img src={img} alt="" 
                         className='brightness-110 max-w-full mt-4 max-h-full lg:w-8/12 lg:h-[450px] max-xl:h-[550px] max-xl:w-8/12
                         mix-blend-color-burn opacity-90  ' />
                         
                    </div>
               </div>
                   
                    <div className='col-span-2 w-full bg-gradient-to-b from-transparent to-white  h-14'></div>
               </div>
          </section>
          <section className="bg-gradient-to-t from-[url('../../public/home-page.jpg)] to-white ">
               <div className='grid grid-cols-8 ml-24 pl-4 '>
                    <div className='col-span-2 flex flex-col  justify-start items-start  ml-24 '>
                         <h2 className='text-secondary text-5xl font-medium mt-2 pr-20 mb-4'>Qui est</h2>
                         <h2 className='text-primary font-semibold pr-6 text-5xl mb-2'>ALCOEN <span className='text-secondary text-5xl'>?</span></h2>
                    </div>
                    <div className='col-span-6 mt-2 ml-10  mr-48 pr-28'>
                        <div>
                              <span className='pr-10 leading-loose'><span className='text-secondary text-lg font-medium  '>ALCOEN est un acteur incontournable dans les domaines de l'inspection, de l'expertise </span>
                        <span className='text-secondary text-lg font-medium mt-4 mr-14  '>et de l'ingénierie en Algérie. Forts d'une expertise inestimable et d'une expérience de plus de deux décennies, nous nous engageons à fournir des solutions sur mesure et de haute qualité à nos clients.  Chez ALCOEN, nous nous efforçons d'aller au-delà des attentes pour être votre partenaire de confiance dans la réalisation de vos objectifs .
                         </span>
                         <NavLink to={'/a-propos'} className={"flex justify-start items-center"} >
                         <div className='flex justify-start items-center'>
                                        <span className='text-primary inline-block text-lg font-medium'>Voir les services  </span>
                                        <img src={triangle} alt="icon" className='inline-block fill-primary  w-7 h-auto'/>
                                   </div>
                         </NavLink>
                         </span>
                        </div>
                    </div>
               </div>
          </section> 
          <section>
               <div className='grid grid-cols-12'>
                    <div className='col-start-2 ml-20 col-end-7 flex flex-col items-start justify-center'>
                        <div>
                        <h2 className='text-secondary text-5xl font-medium mt-2  mb-4'>Pour quoi</h2>
                        <h2 className='text-primary font-semibold  text-5xl mb-2'>choisir Alcoen ?</h2>
                        </div>
                         <p className='text-secondary leading-loose text-lg font-medium '>
                              Choisissez ALCOEN pour bénéficier d'une expertise inégalée,
                               d'un engagement envers l'excellence et d'une approche sur mesure
                                pour répondre à vos besoins spécifiques. Notre équipe qualifiée 
                                vous assure une conformité réglementaire, une sécurité renforcée
                                 et des solutions d'inspection et d'expertise de haute qualité.
                         </p>
                    </div>
                    <div className='col-start-8 col-end-12 flex justify-center mr-20'>
                         <div className='bg-primary'>
                         <img src={homeSection} alt="home-section-img"
                         className='w-homeS h-homeS -translate-x-6 translate-y-6 drop-shadow-lg' />
                         </div>
                    </div> 
               </div>
          </section>
          <section>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illo debitis quam vitae reprehenderit vero aut alias earum, quisquam aspernatur at corrupti architecto quia praesentium sint fugit repellat mollitia! Provident?
               Tempora reiciendis doloribus dignissimos porro, ipsam incidunt aliquam mollitia cum earum. Delectus eos aperiam saepe in, voluptatum nemo sit debitis alias quam sed dolorum rem asperiores soluta, architecto fugiat voluptates!</p>
          </section>
          <section className='grid grid-cols-12'>
               <div className='col-start-2 ml-16 pl-2 col-end-10'>
               <h2 className='text-7xl font-medium text-secondary'>Découvrez <span className='text-primary'>Nos Services</span></h2>
               
               </div>
               <div className='col-start-2 ml-16 pl-2 col-end-12 mr-20'>
               <p className='text-secondary text-lg leading-loose font-medium mt-4'>
                    Découvrez dès maintenant nos services d'inspection et d'expertise chez ALCOEN.
                     Nous sommes déterminés à vous offrir 
                     des solutions sur mesure, une qualité 
                     de service inégalée et une tranquillité 
                     d'esprit totale. Avec notre équipe hautement qualifiée et notre 
                     engagement envers l'excellence, nous sommes prêts à répondre à tous 
                     vos besoins spécifiques. Faites le choix de la confiance et de 
                     l'efficacité avec ALCOEN, votre partenaire de confiance pour assurer la sécurité et la fiabilité 
                     de vos installations. Nous sommes là pour vous accompagner vers la réussite de vos projets 
                     les plus ambitieux.
               </p>
               </div>
             <div className='col-span-8 col-start-3'>
             <Slider/>
             </div>
          </section>
          <section>
               <div className='grid grid-cols-12'>
                    <div className='col-start-2 col-end-12  p-10 'style={{textAlign:"center"}}>
                         <h2 className='text-primary text-7xl mx-24 px-10 font-semibold leading-normal'>
                              Rejoignez notre famille de clients satisfaits
                         </h2>
                    </div>
                    <div className='col-start-3 col-span-8 my-20 '>
                         <HomeCard/>
                    </div>
               </div>
          </section>
       
          </>
     )
}