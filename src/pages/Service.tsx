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
                    <div className="xs:col-start-2 xs:col-span-10 md:col-start-3 lg:col-start-3 lg:col-span-8  md:col-span-8 md:m-0 lg:my-10">
                    <h2 className="text-secondary lg:text-6xl lg:leading-tight md:text-5xl xs:text-2.5xl md:leading-tight text-center font-medium my-10">Découvrez Nos Services à la Pointe de <span className="text-primary">l'Expertise</span></h2>
                    <p className="text-center text-other xl:leading-loose lg:leading-relaxed md:leading-relaxed xs:leading-relaxed xs:text-m lg:text-base xl:text-lg xs:my-4 md:my-6 px-8">
                    Chez Alcoen, nous proposons une gamme complète de services d'inspection, de consultation et d'ingénierie, garantissant l'excellence et la conformité réglementaire. Nos prestations couvrent une variété de domaines, allant des inspections réglementaires aux contrôles non destructifs, en passant par l'expertise technique selon les normes API.
                    </p>
                    </div>
                    <div className="col-start-3 col-span-8 grid xs:grid-cols-2 md:grid-cols-3 md:gap-x-3 xs:gap-x-1 mb-10 xs:gap-y-2 xl:gap-y-8 md:gap-y-3 lg:gap-y-6">
                        <NavLink to='Inspection-Réglementaire-ESP' className={"order-1"}>
                        <div className="relative overflow-hidden">
                              <img src={IRESP} alt="irsp" className="w-full xl:h-[322px] xs:h-[128px] lg:h-[282px] md:h-[182px]  inset-0" />
                              <div className="bg-gradient-to-br    from-primary via-primary opacity-85  to-transparent   object-fill absolute  shadow-lg  inset-0"></div>
                              <div className="absolute inset-0 text-white xl:gap-y-10 lg:gap-y-5 p-3 flex flex-col  md:justify-around xs:justify-between ">
                                   <p className="xl:mr-4 xl:text-1.2xl lg:mr-2 leading-loose xl:px-4 lg:px-3 md:px-1 md:mb-4 md:pb-6  lg:pb-2 md:mr-1  xl:mb-4   font-semibold  md:text-s md:leading-tight  lg:text-lg xs:text-xs">
                                   Inspection <span className="md:text-nowrap lg:text-nowrap xs:text-nowrap">Réglementaire ESP</span>
                                   </p>
                                   <p className="leading-relaxed lg:mb-10  font-light  xl:mr-4 md:pl-1 md:mr-1 lg:mr-2 lg:pl-3 md:text-xs  md:line-clamp-4 lg:line-clamp-none xs:text-x xs:line-clamp-3 md:mb-1 xl:text-base lg:text-s xl:pl-4">
                                        Découvrez notre service d'Inspection Réglementaire des Équipements Sous Pression (ESP) chez ALCOEN
                                   </p>
                              </div>

                         </div>
                        </NavLink>
                       <NavLink to='Contrôle-Non-Destructifs' className={"order-2"}>
                       <div className="relative overflow-hidden">
                              <img src={CND} alt="CND" className="w-full object-fill inset-0 xl:h-[322px] lg:h-[282px] md:h-[182px]  xs:h-[128px] " />
                              <div className="absolute inset-0 bg-slate-800 opacity-20"></div>
                              <div className="bg-gradient-to-tl from-primary via-transparent    to-secondary  object-fill absolute    shadow-lg  inset-0"></div>
  
                              <div className="absolute inset-0 text-white xl:gap-y-12 lg:gap-y-8  p-3 flex flex-col lg:justify-around xs:justify-between md:justify-between">
                                   <p className="xl:leading-tight lg:leading-normal md:mb-4 md:pb-6 xl:mb-4  lg:pb-0  lg:text-lg  xl:mr-4 lg:mr-2 md:leading-tight lg:pl-3 xl:pl-4  lg:mb-2   font-semibold xl:text-1.2xl xs:text-xs xs:leading-tight md:text-s">
                                   Contrôle Non
                                   <p>  Destructifs</p>
                                   </p>
                                   <p className="leading-relaced font-light md:mb-2  xl:mr-4 xl:pl-4 lg:pl-3 xl:text-base lg:text-s md:line-clamp-4 lg:line-clamp-none md:text-xs lg:mb-3 xl:mb-0 lg:mr-2 xs:text-x xs:line-clamp-3 ">Avec ALCOEN, bénéficiez de services de Contrôle Non Destructif (CND) hautement qualifiés pour garantir la sécurité et la conformité de vos équipements.</p>
                              </div>

                         </div>
                         </NavLink>
                         <NavLink to="RIG-service" className={"md:order-3 xs:order-6"}>
                         <div className="relative overflow-hidden">
                              <img src={RIGS} alt="RIGS" className="w-full inset-0  xl:h-[322px] lg:h-[282px] md:h-[182px]  xs:h-[128px] rounded-none" />
                              <div className="bg-gradient-to-tr from-primary via-transparent to-other rounded-none absolute   inset-0 "></div>
                              <div className="absolute inset-0 text-white xl:gap-y-10 lg:gap-y-6 p-3 flex flex-col lg:justify-around md:justify-between xs:justify-between">
                                   <p className="leading-relaxed md:mb-4 md:pb-6  lg:mb-0 xl:mr-4 xl:pl-4 lg:mr-2 lg:pl-3 lg:pb-9 xl:pb-0  font-semibold xl:text-1.2xl md:text-s xs:text-xs lg:text-lg">
                                   RIG Service
                                   </p>
                                   <p className="leading-relaced xl:mb-2 lg:mb-3 xl:mr-4 lg:mr-2 lg:pl-3 xl:text-base md:mb-2 lg:text-s md:line-clamp-4 lg:line-clamp-none xl:pl-4 md:text-xs xs:text-x xs:line-clamp-4 font-light">Découvrez notre service de RIG (Station Forage) chez ALCOEN, où nous veillons à la sécurité, à la conformité et à l'efficacité de vos opérations.</p>
                              </div>

                         </div>
                         </NavLink>
                         <NavLink to="Contrôle-réglementaire-des-appareils-de-manutention-et-levage" className='w-full text-white hover:text-white xs:col-span-1 order-4 md:col-span-full'>
                         <div className="col-span-3 relative ">
                              <img src={CRAML} alt="craml" className="xl:h-[322px] lg:h-[282px] md:h-[182px]  xs:h-[128px] w-full object cover" />
                              <div className="inset-0 absolute bg-gradient-to-r opacity-70 from-other via-other-100 to-transparent transition duration-300 ease-in-out md:hover:bg-gradient-to-r hover:from-primary hover:via-primary-200 hover:to-primary-200"></div>
    
                   
                              <div className="absolute inset-0 gradiant1 z-10 flex flex-col md:justify-around xs:justify-between md:p-5 xs:p-1 ">
                                   <span className="leading-relaxed  xl:mr-4 lg:mr-2 lg:leading-normal xl:pl-4 md:mb-4 md:pl-2  lg:pl-3 inline  font-semibold md:leading-tight md:text-lg xl:text-3xl lg:text-2.5xl xs:text-xs">
                                   <p className="xs:inline md:block">Contrôle réglementaire des appareils </p>
                                  <p className="xs:inline md:block "> de manutention et levage</p>

                                   </span>
                                   <p className="leading-relaxed z-10 md:line-clamp-none  mb-2  md:mr-4 md:px-4 font-light lg:w-1/2 md:w-2/3 xs:w-full xs:line-clamp-2 md:pl-2 xl:pr-10 md:pr-2 lg:text-s md:text-xs xl:text-base xs:text-x">Notre service de Contrôle Réglementaire des Appareils de Manutention et Levage (APL)  vous offre une assurance de conformité aux normes techniques les plus strictes .</p>
                                  
                              </div>
                              <div className="gradiant inset-0  absolute w-full  "></div>
                              <img src={triangle} alt="triangle"  className="inset-0 absolute transition duration-1000 top-1/2 w-10 scale-0 hover:scale-100 right-0 "/>
                         </div>
                         </NavLink>
                         
                         <div className="col-span-full flex md:gap-x-3 xs:gap-x-1  order-5">
                           <NavLink to='Expertise-et-audit-type-ATEX' className="w-1/2 relative text-white hover:text-white">
                           
                              <img src={EEATA} alt="eeta"  className="w-full  xl:h-[322px] lg:h-[282px] md:h-[182px]  xs:h-[128px] "/>
                              <div className="inset-0 absolute bg-gradient-to-tl from-primary via-transparent to-other"></div>
                              <div className="absolute inset-0  z-10 flex flex-col md:justify-around xs:justify-between md:p-5 xs:p-3">
                                   <span className="leading-relaxed  lg:mr-4 md:mr-1 md:pl-2 md:mb-2 lg:pl-4 inline  font-semibold lg:text-2xl lg:leading-relaxed md:text-base xl:text-3xl xs:text-xs">
                                   <p >Expertise et audit </p>
                                  <p> type ATEX</p>

                                   </span>
                                   <p className="leading-relaxed z-10  lg:mb-2 md:mb-1 md:line-clamp-5 lg:line-clamp-none  lg:pl-4 md:pl-2 font-light xl:text-base lg:text-s md:text-xs xs:text-x xs:line-clamp-3  ">Nous mettons notre expertise en matière de prévention des explosions au service de votre sécurité et de votre conformité aux directives et normes réglementaires.</p>
                                  
                              </div>

                             
                           </NavLink>
                            <NavLink to="Inspection-marchandises-avant-expédition" className="w-1/2 relative text-white hover:text-white">
                         
                                   <img src={IMAE} alt="IMAE" className="w-full xl:h-[322px] lg:h-[282px] md:h-[182px]  xs:h-[128px]" />
                                   <div className="inset-0 absolute bg-gradient-to-t from-primary  via-secondary opacity-75 to-secondary">
                                   <div className="absolute inset-0  z-10 flex flex-col md:justify-around xs:justify-between md:p-5 xs:p-2 ">
                                   <span className="leading-relaxed  xl:mr-4 md:mr-1 lg:mr-2 xl:px-4 md:pl-2 md:leading-tight xs:mb-2 md:mb-4    inline  font-semibold xl:text-3xl lg:leading-relaxed md:text-base lg:text-2xl xs:text-xs">
                                   <p className="md:text-nowrap md:block xs:inline">Inspection marchandise</p>
                                  <p className="xs:inline md:block"> avant expédition</p>

                                   </span>
                                   <p className="leading-relaxed z-10  mb-2 xl:text-base lg:text-s lg:pl-2 md:text-xs md:pl-2 xl:px-4  md:line-clamp-5  lg:line-clamp-none font-light  xs:text-x xs:line-clamp-3  ">Avec ALCOEN, vous pouvez avoir l'assurance que vos marchandises sont prêtes à être expédiées en toute confiance, respectant les critères de qualité les plus élevés.</p>
                                  
                              </div>

                              </div>
                        
                            </NavLink>

                         </div>
                         <NavLink to="Contrôle-réglementaire-des-équipement-&-installations-électriques" className="relative xs:col-span-1 md:col-span-full text-white md:order-6 xs:order-3  hover:text-white">
                              <img src={CREIE} alt="creie" className=" xl:h-[322px] lg:h-[282px] md:h-[182px]  xs:h-[128px] w-full " />
                              <div className="inset-0 absolute bg-primary-200"></div>
                              <div className="absolute inset-0 gradiant1 z-10 flex flex-col justify-around md:p-5 xs:p-1 ">
                                   <span className="leading-relaxed lg:leading-normal  md:mr-4  md:mb-4 lg:mb-0 md:px-4 inline xs:pl-1 md:pl-4  font-semibold md:text-lg xs:text-xs md:leading-tight lg:text-2.5xl xl:text-3xl">
                                   <p className="xs:inline md:block" >Contrôle réglementaire des équipements</p>
                                  <p className="xs:inline md:block">& installations électriques</p>

                                   </span>
                                   <p className="leading-relaxed z-10  mb-2 md:mr-4 md:px-4 md:mb-0 xs:pl-1 md:pl-4   md:line-clamp-5 lg:line-clamp-none xs:text-x xs:line-clamp-2 font-light xl:text-base lg:text-s lg:w-1/2 md:w-2/3 md:text-xs pr-10"> 
                                        nous veillons à votre sécurité électrique en conformité avec les normes nationales et internationales. Nos experts vérifient périodiquement vos installations et appareils pour détecter toute anomalie potentielle.
                                   </p>
                                  
                              </div>
                         </NavLink>
                         <NavLink to="Assistance-technique" className="text-white hover:text-white relative order-7 w-full">
                              <img src={AT} alt="AT" className="w-full  xl:h-[322px] lg:h-[282px] md:h-[182px] xs:h-[102p xs:h-[128px]"/>
                              <div className="inset-0 absolute bg-gradient-to-tr  from-primary-100 via-other-100 to-other-100 opacity-70"></div>
                              <div className="absolute inset-0 text-white xl:gap-y-10 lg:gap-y-4 p-3 flex flex-col lg:justify-around md:justify-between  ">
                                   <span className="xl:mr-4 xl:mt-3 lg:mr-2 md:text-base  leading-loose xl:px-4 lg:pl-3 mb-4 md:pl-2 md:leading-tight  font-semibold xl:text-1.2xl xs:text-xs lg:leading-normal lg:text-lg">
                                   <p>Assistance technique</p>
                                  

                                   </span>
                                   <p className="leading-relaxed z-10  mb-2 xl:text-base lg:text-s md:text-xs md:line-clamp-4 md:pl-1 lg:line-clamp-5 xl:line-clamp-none xl:pl-4 lg:pl-3  font-light text-base xs:text-x xs:line-clamp-3  ">ALCOEN vous  propose une assistance technique spécialisée pour accompagner nos clients dans la réalisation de projets complexes. Nos experts techniquessont là pour fournir des solutions sur mesure à vos besoins.</p>
                                  
                              </div>
                            
                              
                         </NavLink>
                         <NavLink to={'Expertise-assurance-et-réassurance'} className={"order-8"}>
                         <div className="relative"><img src={EAER} alt="eaer" className="w-full xl:h-[322px] lg:h-[282px] md:h-[182px]  xs:h-[128px]" />
                              <div className="bg-gradient-to-tr from-primary via-transparent  to-secondary inset-0 absolute"></div>
                              <div className="absolute inset-0 text-white xl:gap-y-10 lg:gap-y-10 p-3 flex flex-col lg:justify-around md:justify-between xs:justify-between">
                                   <p className="xl:mr-4 lg:mr-2 xl:pt-0  md:text-base md:pl-0 lg:pt-2 xl:mt-0 lg:mt-custom-mr leading-loose xl:pl-4  md:text-s md:leading-tight lg:pl-3  md:mb-4 xs:mb-0 xs:leading-tight font-semibold xl:text-1.2xl lg:text-lg xs:text-xs">
                                   <p className="lg:text-nowrap">Expertise assurance</p>
                                   <p>et réassurance</p>
                                   </p>
                                   <p className="leading-relaced mb-10 font-light lg:text-s xl:text-base xl:mr-4 lg:mr-2 lg:pl-3 md:leading-tight md:line-clamp-4 md:pl-1 md:text-xs md:mb-2 xs:mb-1 xl:pl-4  xs:text-x xs:line-clamp-3 ">Découvrez notre service d'Inspection Réglementaire des Équipements Sous Pression (ESP) chez ALCOEN</p>
                              </div>
                         </div>
                         </NavLink>
                       <NavLink to={'Mise-à-disposition-du-personnel'} className={"order-9"}>
                       <div className="relative">
                              <img src={MADDP} alt="MADDP"  className="w-full xl:h-[322px] lg:h-[282px] md:h-[182px]  xs:h-[128px]"/>
                              <div className="inset-0 absolute bg-gradient-to-tr  from-primary via-transparent to-secondary "></div>
                              <div className="absolute inset-0 text-white gap-y-10 p-3 flex flex-col lg:justify-evenly md:justify-between xs:justify-between ">
                                   <p className="xl:mr-4 lg:mr-2 md:mr-1 md:pl-1 md:text-s md:leading-tight xl:mt-0 lg:mt-2  leading-loose xl:pl-4 lg:pl-3 xs:mb-1 md:mb-4 font-semibold xl:text-1.2xl xs:text-xs lg:text-lg ">
                                   <p className="md:text-nowrap lg:text-wrap">Mise à disposition</p>
                                   <p>du personnel</p>
                                   </p>
                                   <p className="leading-relaced mb-10 md:text-xs md:pl-1 md:mb-2 font-light xl:text-base lg:text-s xl:line-clamp-none md:line-clamp-4 lg:line-clamp-5 xs:text-x xs:line-clamp-3 xs:leading-tight xs:mb-1 xl:mr-4 lg:mr-2 lg:pl-3 xl:pl-4 xs:text-xs"> Nous mettons à votre disposition une main-d'œuvre qualifiée et compétente, soigneusement sélectionnée pour s'adapter à divers secteurs d'activité</p>
                              </div>
                         </div>
                       </NavLink>

                    </div>
                    <h2 className="md:col-start-3 md:col-span-8 xs:col-start-2 xs:col-span-10 lx:text-6xl lg:text-5xl md:text-4xl xs:text-2.5xl text-center  lg:leading-tight xl:px-10 lg:px-2 xl:m-10 lg:m-5 lg:my-20 xs:my-4 md:my-10 font-medium  text-secondary">
                    Découvrez Nos Formations et Renforcez vos <span className="text-primary xl:block lg:inline">compétences</span>
                    </h2>
                    <p className="text-lg text-other leading-relaxed text-center font-medium col-start-3 col-span-8 mb-10 md:text-s lg:text-base xs:text-sm">
                         Nos formations chez ALCOEN vous offrent une opportunité unique de développer vos compétences professionnelles. Que ce soit pour renforcer vos connaissances techniques, vous familiariser avec les normes industrielles ou améliorer vos pratiques,  nos programmes sont conçus pour répondre à vos besoins spécifiques. Faites un pas vers l'excellence professionnelle avec ALCOEN et accédez à un savoir-faire de pointe pour réussir dans votre domaine.
                    </p>
                    <div className="col-start-3 col-span-8  gap-x-3 grid grid-cols-3 xs:gap-y-4  ">
                 <NavLink to={'Formation-API-510-,-570,-,-579-,-653...etc.'} className={"md:col-span-1 xs:col-span-full"}>
                 <div className="relative  overflow-hidden md:mb-10">
                              <img src={form3} alt="API 510" className="w-full xl:h-[322px] lg:h-[282px] md:h-[182px] xs:h-[160px] inset-0" />
                              <div className="bg-gradient-to-tr    from-primary-100 via-primary-200    to-other    object-fill absolute  shadow-lg  inset-0"></div>
                              <div className="absolute inset-0 text-white xl:gap-y-6 lg:gap-y-6 xs:gap-y-6  p-3 flex flex-col justify-between xl:h-[340px] md:h-[182px]  xs:h-[128px] lg:h-[282px]">
                                   <p className="xl:mr-4 lg:mr-2 lg:leading-relaxed xl:leading-loose xl:pl-4 lg:pl-3 lg:mb-4 md:pl-1 md:mr-1 xl:mb-0 md:leading-tight font-semibold lg:text-xl md:text-s xs:text-lg  xl:text-xl">
                                        <p className="md:text-nowrap lg:text-nowrap">Formation : API 510, </p>
                                        <p className="md:text-nowrap lg:text-nowrap">570, 579, 653...etc.</p>
                                   </p>
                                   <p className="leading-relaxed  lg:text-s xl:text-base xs:text-sm md:pl-1 md:text-xs md:line-clamp-4 font-light md:mb-2 lg:line-clamp-5 lg:mb-4 xl:line-clamp-none xs:-mb-10 xs:line-clamp-3   xl:mr-4 xl:pl-4 lg:pl-3 lg:mr-2">
                                   La formation API est un programme de certification professionnelle qui vise à évaluer les connaissances et les compétences des inspecteurs et du personnel technique dans le domaine du pétrole et du gaz .
                                   </p>
                              </div>

                    </div>
                 </NavLink>
                    <NavLink to={'Formation-CND-LI-&-LII-renouvellement-certificat'}className={'md:col-span-1 xs:col-span-full'}>
                    <div className="relative col-span-1 overflow-hidden md:mb-10">
                              <img src={form1} alt="API 510" className="w-full xl:h-[322px] lg:h-[282px] md:h-[182px] xs:h-[160px] inset-0" />
                              <div className= "  bg-gradient-to-tr    from-transparent    via-other-100 to-other opacity-75 object-fill absolute  shadow-lg  inset-0"></div>
                              <div className="absolute inset-0 text-white xl:gap-y-6 lg:gap-y-6 xs:gap-y-6  lg:pb-6  xl:pb-0 md:gap-y-0 p-3 flex flex-col lg:justify-between md:justify-between xl:h-[340px] lg:h-[282px] md:h-[182px] ">
                                   <p className="xl:mr-4 leading-loose xl:mt-5 lg:mb-4   xl:pl-4 lg:pl-3 lg:text-xl lg:mr-2 md:mr-1 md:pl-1 xs:text-lg md:text-s md:leading-tight  font-semibold xl:text-xl">
                                   <p className="lg:inline xl:block md:inline "> Formation CND LI & LII </p>
                                   <p className="lg:inline xl:block md:inline ">renouvellement certificat</p>
                                   </p>
                                   <p className="leading-relaxed font-meduim xl:text-base lg:text-s lg:mb-6 xl:line-clamp-none md:pl-1 xs:text-sm xs:line-clamp-3 md:line-clamp-4 md:mb-2 font-light  md:text-xs lg:line-clamp-4  xl:mr-4 xl:pl-4  lg:mr-2 lg:pl-3">
                                   Acquérez une expertise avancée en Contrôle Non Destructif grâce à notre programme de formation complet de Niveau I & II, incluant le renouvellement de certificat.
                                   </p>
                              </div>

                    </div>
                    </NavLink>
                  <NavLink to={'Formation-et-sensibilisation'} className={"md:col-span-1 xs:col-span-full"}>
                  <div className="relative col-span-1 overflow-hidden mb-10">
                              <img src={form2} alt="API 510" className="w-full xl:h-[322px] lg:h-[282px] md:h-[182px] xs:h-[160px]  inset-0" />
                              <div className="bg-gradient-to-tr    from-primary      to-transparent   object-fill absolute  shadow-lg  inset-0"></div>
                              <div className="absolute inset-0 text-white gap-y-6 lg:gap-y-10 xs:gap-y-4 p-3 flex flex-col lg:justify-between md:justify-between xl:justify-between xl:h-[340px] lg:h-[282px] md:h-[182px] ">
                                   <p className="xl:mr-4 lg:leading-relaxed xl:leading-loose xl:pl-4 lg:pl-3 md:pl-1 md:mr-1 md:leading-tight lg:text-xl lg:mr-2 xs:text-lg font-semibold xl:text-xl md:text-s  ">
                                        <p>Formation et  </p>
                                        <p>sensibilisation</p>
                                   </p>
                                   <p className="leading-relaxed mb-16 md:mb-2 md:pl-1 md:text-xs md:line-clamp-4 font-light xs:pl-0 xs:text-sm xs:line-clamp-3 xs:mb-2 font-meduim xl:text-base lg:text-s lg:mb-10 xl:mr-4 px-4">
                                   Formation et sensibilisation HSE et conduite des engins de
                                   levage en toute sécurité.
                                   </p>
                              </div>

                    </div>
                  </NavLink>

                    </div>

                    </section >
               </div>
          </>
     )
}