import { NavLink } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import IRESP from '../assets/IRESP.jpg'
import AT from '../assets/AT.png'
import CND from '../assets/serviceimg.png'
import CRAML from '../assets/CRAML BIG.png'
import CREIE from '../assets/BIG CERIE.png'
import EAER from '../assets/EAER.png'
import EEATA from '../assets/EEATA.png'
import IMAE from '../assets/IMAE.png'
import RIGS from '../assets/RIGS.png'
import MADDP from '../assets/maddp.png'
import triangle from '../assets/triangle-slider.svg'
import '../styles/gradiant1.css'
import form1 from "../assets/Service/Formation1.png"
import form2 from '../assets/Service/Formation2.png'
import form3 from '../assets/Service/Formation3.png'

export function Service(){
     let Header = {part1:'NOS',part2:"SERVICES"}
          return (<>
               <div className="relative mb-10 top-20 ">
                    <PageHeader Header={Header} />
                    <section className="grid grid-cols-12 pb-10">
                    <div className="col-start-3 col-span-8 m-10">
                    <h2 className="text-secondary text-6xl text-center font-medium my-10">Découvrez Nos Services à la Pointe de <span className="text-primary">l'Expertise</span></h2>
                    <p className="text-center text-other leading-relaxed px-8">
                    Chez Alcoen, nous proposons une gamme complète de services d'inspection, de consultation et d'ingénierie, garantissant l'excellence et la conformité réglementaire. Nos prestations couvrent une variété de domaines, allant des inspections réglementaires aux contrôles non destructifs, en passant par l'expertise technique selon les normes API.
                    </p>
                    </div>
                    <div className="col-start-3 col-span-8 grid grid-cols-3 gap-x-3 mb-10 gap-y-8">
                        <NavLink to='Inspection-Réglementaire-ESP'>
                        <div className="relative overflow-hidden">
                              <img src={IRESP} alt="irsp" className="w-full h-[322px] inset-0" />
                              <div className="bg-gradient-to-br    from-primary via-primary opacity-85  to-transparent   object-fill absolute  shadow-lg  inset-0"></div>
                              <div className="absolute inset-0 text-white gap-y-10 p-3 flex flex-col justify-around ">
                                   <p className="mr-4 leading-loose px-4 mb-4 font-semibold text-xl">
                                   Inspection Réglementaire ESP
                                   </p>
                                   <p className="leading-relaced mb-10 font-light  mr-4 px-4">Découvrez notre service d'Inspection Réglementaire des Équipements Sous Pression (ESP) chez ALCOEN</p>
                              </div>

                         </div>
                        </NavLink>
                       <NavLink to='Contrôle-Non-Destructifs'>
                       <div className="relative overflow-hidden">
                              <img src={CND} alt="CND" className="w-full object-fill inset-0 h-[322px]" />
                              <div className="absolute inset-0 bg-slate-800 opacity-20"></div>
                              <div className="bg-gradient-to-tl from-primary via-transparent    to-secondary  object-fill absolute    shadow-lg  inset-0"></div>
  
                              <div className="absolute inset-0 text-white gap-y-10 p-3 flex flex-col justify-around">
                                   <p className="leading-loose mr-4 px-4 mb-4 font-semibold text-xl">
                                   Contrôle Non
                                   <p>  Destructifs</p>
                                   </p>
                                   <p className="leading-relaced font-light  mr-4 px-4">Avec ALCOEN, bénéficiez de services de Contrôle Non Destructif (CND) hautement qualifiés pour garantir la sécurité et la conformité de vos équipements.</p>
                              </div>

                         </div>
                         </NavLink>
                         <NavLink to="RIG-service">
                         <div className="relative overflow-hidden">
                              <img src={RIGS} alt="RIGS" className="w-full inset-0 h-[322px] rounded-none" />
                              <div className="bg-gradient-to-tr from-primary via-transparent to-other rounded-none absolute   inset-0 "></div>
                              <div className="absolute inset-0 text-white gap-y-10 p-3 flex flex-col justify-around">
                                   <p className="leading-relaxed mr-4 px-4  font-semibold text-xl">
                                   RIG Service
                                   </p>
                                   <p className="leading-relaced mb-2 mr-4 px-4 font-light">Découvrez notre service de RIG (Station Forage) chez ALCOEN, où nous veillons à la sécurité, à la conformité et à l'efficacité de vos opérations.</p>
                              </div>

                         </div>
                         </NavLink>
                         <NavLink to="Contrôle-réglementaire-des-appareils-de-manutention-et-levage" className='w-full text-white hover:text-white col-span-full'>
                         <div className="col-span-3 relative ">
                              <img src={CRAML} alt="craml" className="h-[322px] w-full object cover" />
                              <div className="inset-0 absolute bg-gradient-to-r opacity-70 from-other via-other-100 to-transparent transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-primary hover:via-primary-200 hover:to-primary-200"></div>
    
                   
                              <div className="absolute inset-0 gradiant1 z-10 flex flex-col justify-around p-5 ">
                                   <span className="leading-relaxed  mr-4 px-4 inline  font-semibold text-3xl">
                                   <p >Contrôle réglementaire des appareils </p>
                                  <p> de manutention et levage</p>

                                   </span>
                                   <p className="leading-relaxed z-10  mb-2 mr-4 px-4 font-light w-1/2 pr-10">Notre service de Contrôle Réglementaire des Appareils de Manutention et Levage (APL)  vous offre une assurance de conformité aux normes techniques les plus strictes .</p>
                                  
                              </div>
                              <div className="gradiant inset-0 absolute w-full  "></div>
                              <img src={triangle} alt="triangle"  className="inset-0 absolute transition duration-1000 top-1/2 w-10 scale-0 hover:scale-100 right-0 "/>
                         </div>
                         </NavLink>
                         
                         <div className="col-span-full flex gap-x-4">
                           <NavLink to='Expertise-et-audit-type-ATEX' className="w-1/2 relative text-white hover:text-white">
                           
                              <img src={EEATA} alt="eeta"  className="w-full h-[322px]"/>
                              <div className="inset-0 absolute bg-gradient-to-tl from-primary via-transparent to-other"></div>
                              <div className="absolute inset-0  z-10 flex flex-col justify-around p-5 ">
                                   <span className="leading-relaxed  mr-4 px-4 inline  font-semibold text-3xl">
                                   <p >Expertise et audit </p>
                                  <p> type ATEX</p>

                                   </span>
                                   <p className="leading-relaxed z-10  mb-2  px-4 font-light   ">Nous mettons notre expertise en matière de prévention des explosions au service de votre sécurité et de votre conformité aux directives et normes réglementaires.</p>
                                  
                              </div>

                             
                           </NavLink>
                            <NavLink to="Inspection-marchandises-avant-expédition" className="w-1/2 relative text-white hover:text-white">
                         
                                   <img src={IMAE} alt="IMAE" className="w-full h-[322px]" />
                                   <div className="inset-0 absolute bg-gradient-to-t from-primary  via-secondary opacity-75 to-secondary">
                                   <div className="absolute inset-0  z-10 flex flex-col justify-around p-5 ">
                                   <span className="leading-relaxed  mr-4 px-4 inline  font-semibold text-3xl">
                                   <p>Inspection marchandise</p>
                                  <p> avant expédition</p>

                                   </span>
                                   <p className="leading-relaxed z-10  mb-2  px-4 font-light   ">Avec ALCOEN, vous pouvez avoir l'assurance que vos marchandises sont prêtes à être expédiées en toute confiance, respectant les critères de qualité les plus élevés.</p>
                                  
                              </div>

                              </div>
                        
                            </NavLink>

                         </div>
                         <NavLink to="Contrôle-réglementaire-des-équipement-&-installations-électriques" className="relative col-span-full text-white hover:text-white">
                              <img src={CREIE} alt="creie" className="object-cover w-full " />
                              <div className="inset-0 absolute bg-primary-200"></div>
                              <div className="absolute inset-0 gradiant1 z-10 flex flex-col justify-around p-5 ">
                                   <span className="leading-relaxed  mr-4 px-4 inline  font-semibold text-3xl">
                                   <p >Contrôle réglementaire des équipements</p>
                                  <p>& installations électriques</p>

                                   </span>
                                   <p className="leading-relaxed z-10  mb-2 mr-4 px-4 font-light w-1/2 pr-10"> nous veillons à votre sécurité électrique en conformité avec les normes nationales et internationales. Nos experts vérifient périodiquement vos installations et appareils pour détecter toute anomalie potentielle.</p>
                                  
                              </div>
                         </NavLink>
                         <NavLink to="Assistance-technique" className="text-white hover:text-white relative w-full">
                              <img src={AT} alt="AT" className="w-full  h-[322px]"/>
                              <div className="inset-0 absolute bg-gradient-to-tr  from-primary-100 via-other-100 to-other-100 opacity-70"></div>
                              <div className="absolute inset-0 text-white gap-y-10 p-3 flex flex-col justify-around  ">
                                   <span className="mr-4 leading-loose px-4 mb-4 font-semibold text-xl">
                                   <p>Assistance technique</p>
                                  

                                   </span>
                                   <p className="leading-relaxed z-10  mb-2  px-4 font-light text-base  ">ALCOEN vous  propose une assistance technique spécialisée pour accompagner nos clients dans la réalisation de projets complexes. Nos experts techniquessont là pour fournir des solutions sur mesure à vos besoins.</p>
                                  
                              </div>
                            
                              
                         </NavLink>
                         <div className="relative"><img src={EAER} alt="eaer" className="w-full h-[322px]" />
                              <div className="bg-gradient-to-tr from-primary via-transparent  to-secondary inset-0 absolute"></div>
                              <div className="absolute inset-0 text-white gap-y-10 p-3 flex flex-col justify-around ">
                                   <p className="mr-4 leading-loose px-4 mb-4 font-semibold text-xl">
                                   <p>Expertise assurance</p>
                                   <p>et réassurance</p>
                                   </p>
                                   <p className="leading-relaced mb-10 font-light  mr-4 px-4">Découvrez notre service d'Inspection Réglementaire des Équipements Sous Pression (ESP) chez ALCOEN</p>
                              </div>
                         </div>
                         <div className="relative">
                              <img src={MADDP} alt="MADDP"  className="w-full h-[322px]"/>
                              <div className="inset-0 absolute bg-gradient-to-tr  from-primary via-transparent to-secondary "></div>
                              <div className="absolute inset-0 text-white gap-y-10 p-3 flex flex-col justify-around ">
                                   <p className="mr-4 leading-loose px-4 mb-4 font-semibold text-xl">
                                   <p>Mise à disposition</p>
                                   <p>du personnel</p>
                                   </p>
                                   <p className="leading-relaced mb-10 font-light  mr-4 px-4"> Nous mettons à votre disposition une main-d'œuvre qualifiée et compétente, soigneusement sélectionnée pour s'adapter à divers secteurs d'activité</p>
                              </div>
                         </div>

                    </div>
                    <h2 className="col-start-3 col-span-8 text-6xl text-center leading-tight px-10 m-10 my-20 font-medium text-secondary">
                    Découvrez Nos Formations et Renforcez vos <span className="text-primary block">compétences</span>
                    </h2>
                    <p className="text-lg text-other leading-relaxed text-center font-medium col-start-3 col-span-8 mb-10">Nos formations chez ALCOEN vous offrent une opportunité unique de développer vos compétences professionnelles. Que ce soit pour renforcer vos connaissances techniques, vous familiariser avec les normes industrielles ou améliorer vos pratiques,  nos programmes sont conçus pour répondre à vos besoins spécifiques. Faites un pas vers l'excellence professionnelle avec ALCOEN et accédez à un savoir-faire de pointe pour réussir dans votre domaine.</p>
                    <div className="col-start-3 col-span-8 gap-x-3 grid grid-cols-3 ">
                    <div className="relative col-span-1 overflow-hidden mb-10">
                              <img src={form3} alt="API 510" className="w-full min-h-[322px] inset-0" />
                              <div className="bg-gradient-to-tr    from-primary-100 via-primary-200    to-other    object-fill absolute  shadow-lg  inset-0"></div>
                              <div className="absolute inset-0 text-white gap-y-6 p-3 flex flex-col justify-center min-h-[340px] ">
                                   <p className="mr-4 leading-loose px-4 font-semibold text-xl">
                                        <p>Formation : API 510, </p>
                                        <p>570, 579, 653...etc.</p>
                                   </p>
                                   <p className="leading-relaxed font-meduim text-sm  mr-4 px-4">
                                   La formation API est un programme de certification professionnelle qui vise à évaluer les connaissances et les compétences des inspecteurs et du personnel technique dans le domaine du pétrole et du gaz .
                                   </p>
                              </div>

                    </div>
                    <div className="relative col-span-1 overflow-hidden mb-10">
                              <img src={form1} alt="API 510" className="w-full min-h-[322px] inset-0" />
                              <div className= "  bg-gradient-to-tr    from-transparent    via-other-100 to-other opacity-75 object-fill absolute  shadow-lg  inset-0"></div>
                              <div className="absolute inset-0 text-white gap-y-6 p-3 flex flex-col justify-center min-h-[340px] ">
                                   <p className="mr-4 leading-loose mt-5 px-4 pr-3 font-semibold text-xl">
                                   <p> Formation CND LI & LII</p>
                                   <p>renouvellement certificat</p>
                                   </p>
                                   <p className="leading-relaxed font-meduim text-sm mb-10 mr-4 px-4">
                                   Acquérez une expertise avancée en Contrôle Non Destructif grâce à notre programme de formation complet de Niveau I & II, incluant le renouvellement de certificat.
                                   </p>
                              </div>

                    </div>
                    <div className="relative col-span-1 overflow-hidden mb-10">
                              <img src={form2} alt="API 510" className="w-full min-h-[322px] inset-0" />
                              <div className="bg-gradient-to-tr    from-primary      to-transparent   object-fill absolute  shadow-lg  inset-0"></div>
                              <div className="absolute inset-0 text-white gap-y-6 p-3 flex flex-col justify-center min-h-[340px] ">
                                   <p className="mr-4 leading-loose px-4 font-semibold text-xl">
                                        <p>Formation et  </p>
                                        <p>sensibilisation</p>
                                   </p>
                                   <p className="leading-relaxed mb-16 font-meduim text-sm  mr-4 px-4">
                                   Formation et sensibilisation HSE et conduite des engins de
                                   levage en toute sécurité.
                                   </p>
                              </div>

                    </div>

                    </div>

                    </section >
               </div>
          </>
     )
}