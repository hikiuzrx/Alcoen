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
               <div className='flex  relative '>
                    <div className='flex justify-center items-start flex-col  w-10/12  '>
                         <h1 className='text-secondary my-6 md:ml-10 xs:ml-4 font-normal  lg:ml-20 pl-5 md:mb-0 xs:mb-1 mb-2 lg:text-5xl xl:text-6xl md:text-4.5xl  xs:pl-2 xs:text-2xl '>Solutions d'Ingénierie</h1>
                         <h1 className='text-secondary my-6 md:ml-10 xs:ml-4 font-normal lg:ml-20 pl-5 mt-2 lg:text-5xl xl:text-6xl md:text-4.5xl xs:pl-2 xs:text-2xl'> Pour un Avenir</h1>
                         
                        <div className='flex justify-between'>
                        <DynamicText/>
                        </div>
                        <div className='xl:mr-20 xl:pr-32'>
                              <p className='text-secondary xs:text-xxs xs:ml-10    lg:text-sm md:leading-normal xl:leading-relaxed w-auto xl:mx-14 lg:mr-20   md:mr-4  my-4  md:text-sm md:px-14 xl:px-28 lg:px-28'>  
                                   ALCOEN est là pour vous accompagner.
                                   Notre équipe qualifiée vous offre une gamme complète de solutions
                                   personnalisées,Contactez-nous dès maintenant pour découvrir comment
                                   nous pouvons vous aider à atteindre vos objectifs avec succès.
                              </p>
                             <div className='flex justify-center'>
                             <NavLink to={'/contact'} className='text-white bg-primary rounded-lg p-2 px-4 lg:px-2 max-xl:px-3 xl:text-2xl lg:text-xl xs:text-base m-2 font-semibold hover:text-white'>
                                   Contact
                              </NavLink>
                              <NavLink className='text-primary flex justify-start m-2 ' to={'/service'}>
                                   <div className='flex justify-start lg:text-sm xs:text-xs items-center'>
                                        <span className='text-primary inline-block'>Voir les services  </span>
                                        <img src={triangle} alt="icon" className='inline-block fill-primary w-5  xl:w-5 lg:w-4 h-auto'/>
                                   </div>
                              </NavLink>
                            
                             </div>
                         </div>
                    </div>
                    <div className='flex justify-end w-1/2 md:w-1/3 xs:w-2/5  '>
                         
                         <img src={img} alt="" 
                         className='brightness-110 max-w-full mt-4 w-full 
                         
                         mix-blend-color-burn opacity-90  ' />
                         
                    </div>
               </div>
                   
                    <div className='col-span-2 w-full bg-gradient-to-b from-transparent to-white  h-14'></div>
               </div>
          </section>
          <section className="bg-gradient-to-t from-[url('../../public/home-page.jpg)] to-white ">
               <div className='grid grid-cols-8 lg:ml-24 pl-4 xs:ml-16 '>
                    <div className='md:col-span-2 xs:col-span-full xs:gap-x-2 flex md:flex-col  justify-start items-start lg:ml-14  xl:ml-24 md:ml-10 '>
                         <h2 className='text-secondary text-5xl lg:text-4xl xl:text-4.5xl md:text-3xl xl:mb-4 font-medium md:mb-2  mt-2 md:pr-0  pr-20 lg:pr-0 mb-4 lg:mb-1 xs:pr-0 xs:text-2.5xl '>Qui est</h2>
                         <h2 className='text-primary font-semibold pr-6 lg:pr-0 lg:text-4xl md:text-3xl xs:text-2.5xl text-5xl xl:text-4.5xl mb-2'>ALCOEN<span className='text-secondary md:text-3xl text-4xl '>?</span></h2>
                    </div>
                    <div className='col-span-6 xs:text-xs xs:col-span-full mt-2 ml-10 md:mr-16 lg:mr-24 mr-48 xs:mx-0  xs:px-0 xs:pr-16 xs:flex xs:justify-center  md:pr-20  pr-28'>
                        <div className='w-full'>
                              <span className='pr-10 xs:leading-relaxed xs:text-xs xs:pr-4 md:leading-relaxed lg:leading-loose'><span className='text-secondary xs:leading-relaxed xs:text-xs md:leading-relaxed lg:leading-loose text-lg font-medium  '>ALCOEN est un acteur incontournable dans les domaines de l'inspection, de l'expertise </span>
                        <span className='text-secondary sx:leading-relaxed xs:text-xs md:leading-relaxed lg:leading-loose text-lg font-medium mt-4 lg:mr-14 md:mr-8  '>et de l'ingénierie en Algérie. Forts d'une expertise inestimable et d'une expérience de plus de deux décennies, nous nous engageons à fournir des solutions sur mesure et de haute qualité à nos clients.  Chez ALCOEN, nous nous efforçons d'aller au-delà des attentes pour être votre partenaire de confiance dans la réalisation de vos objectifs .
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

          <section className='mt-10'>
               <div className='grid grid-cols-12'>
                    <div className='col-start-2  col-end-7 xs:ml-12 md:ml-10 ml-20 col-span-8 flex flex-col items-start justify-center'>
                        <div className=''>
                        <h2 className='text-secondary text-5xl xl:text-4.5xl lg:text-4xl font-medium 
                        mt-2 md:text-3xl  xl:mb-2 lg:mb-1 md:mb-1 xs:text-2.5xl  mb-4'>Pour quoi</h2>
                        <h2 className='text-primary font-semibold md:text-3xl xs:text-2.5xl xl:text-4.5xl lg:text-4xl  text-5xl mb-2'>choisir Alcoen ?</h2>
                        </div>
                         <p className='text-secondary xs:text-xs  md:leading-relaxed xs:leading-relaxed lg:leading-relaxed text-lg font-medium '>
                              Choisissez ALCOEN pour bénéficier d'une expertise inégalée,
                               d'un engagement envers l'excellence et d'une approche sur mesure
                                pour répondre à vos besoins spécifiques. Notre équipe qualifiée 
                                vous assure une conformité réglementaire, une sécurité renforcée
                                 et des solutions d'inspection et d'expertise de haute qualité.
                         </p>
                    </div>
                    <div className='col-start-8 xs:translate-y-28 col-end-12 flex justify-center  md:mr-12  lg:mr-20'>
                         <div className='bg-primary w-homeS xs:h-home3x md:h-home2xs md:w-homeM xl:h-homeS xs:h-home3xs lg:h-homeXs'>
                         <img src={homeSection} alt="home-section-img"
                         className='w-homeS h-homeS xs:w-home3xs xs:h-home3x md:h-home2xs  lg:h-homeXs xs:-translate-x-2 xs:translate-y-2 xl:-translate-x-6 xl:translate-y-6 md:-translate-x-4 md:translate-y-4 drop-shadow-lg' />
                         </div>
                    </div> 
               </div>
          </section>
     
          <section className='grid grid-cols-12 mt-28'>
               <div className='col-start-2 xs:ml-10 ml-16 pl-2 col-span-full'>
               <h2 className='text-7xl lg:text-5xl md:text-4.5xl xs:text-2.5xl font-medium text-secondary '>Découvrez <span className='text-primary xs:mt-2 xs:block'>Nos Services</span></h2>
               
               </div>
               <div className='col-start-2 ml-16 pl-2 xs:ml-10 col-end-12 mr-20'>
               <p className='text-secondary xs:text-xs text-lg lg:text-base lg:leading-relaxed md:leading-relaxed xl:leading-loose font-medium mt-4'>
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
             <div className='col-span-8 col-start-3  xs:pr-2 md:pr-0'>
             <Slider/>
             </div>
          </section>
          <section>
               <div className='grid grid-cols-12'>
                    <div className=' col-span-full  p-10 text-center  '>
                         <h2 className='text-primary md:text-5xl xs:text-2.5xl md:leading-normal lg:text-6xl xl:text-7xl lg:mx-16 xs:px-4 xl:mx-24 px-10 font-semibold leading-normal'>
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