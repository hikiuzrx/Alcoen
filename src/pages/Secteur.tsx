import PageHeader from "../components/PageHeader"
import SecteurIcons from "../components/SecteurIcons"
import { NavLink } from "react-router-dom"
import triangle from '../assets/triangle-icone.svg'
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
import bt from '../assets/companies-logos/bt.png'
import entp from '../assets/companies-logos/entp.png'
import grn from '../assets/companies-logos/GRN.png'
import ig from '../assets/companies-logos/ig.png'
import gsa from '../assets/companies-logos/gsa.png'
import ourch from '../assets/companies-logos/ourch.png'
import psp from '../assets/companies-logos/psp.png'
import sbs from '../assets/companies-logos/sbs.png'
import sc from '../assets/companies-logos/sc.png'
import sorf from '../assets/companies-logos/sorf.png'
import tosa from '../assets/companies-logos/tosAlg.png'
import smoik from '../assets/companies-logos/somik.png'
import dp from '../assets/companies-logos/dp world.png'
import def from '../assets/companies-logos/def.png'
import somiz from '../assets/companies-logos/somiz.png'
export function Secteur(){
  const Header = {part1: 'NOS',part2:'SECTEUR'}
     return (
       <div className="relative mb-10 top-20 ml-0">
       <PageHeader Header={Header}/>
       <section className="grid grid-cols-12 ">
        <div className="md:col-start-2 lg:col-start-2  lg:ml-10 my-10 font-semibold md:ml-10 xl:ml-10   xs:ml-10 md:col-span-7 xs:col-span-11 ">
          <h2 className="text-other my-8 md:ml-6 lg:ml-0  lg:text-6xl md:text-5xl xs:text-3xl">
          Nos Domaines <span className="text-primary">d'Expertise</span>
          </h2>
          <p className="text-black leading-relaxed md:ml-6 lg:ml-0 md:text-base mt-10 xs:text-m xs:w-full">
          Nos services couvrent une vaste gamme de secteurs, de l'énergie et 
          de la pétrochimie à la santé et au transport. Que 
          vous opériez dans l'industrie pétrolière, gazière,
           l'agroalimentaire, ou tout autre domaine, nous avons les solutions adaptées
            à vos besoins. Notre expertise s'étend
             également à des secteurs critiques tels que la santé, où nous offrons 
             une précieuse assistance aux laboratoires et aux hôpitaux. Si vous 
             êtes impliqué dans la construction, le forage, ou le transport,
              notre équipe est prête à fournir des services d'inspection, d'audit, d'expertise et bien plus encore. Explorez nos offres de services pour voir comment nous pouvons répondre à vos besoins spécifiques, quelle que soit votre industrie.
          </p>
        </div>
        <div className=" col-start-3  col-span-8   my-10  ">
          <div className="">
          <SecteurIcons/>
          </div>
         
        </div>
        <div className="md:col-start-2  col-span-8 my-10 md:ml-16   xs:ml-2 flex ">
          <div className="md:w-1/2 xs:w-4/12">
            <h3 className="xl:text-6xl lg:text-5xl  md:text-4xl xs:text-1.4xl md:leading-normal font-semibold text-primary xl:leading-normal xs:ml-7 md:ml-0 lg:leading-normal">
              Solutions Polyvalentes
            pour Divers Secteurs
            </h3>
          </div>
          <div className="md:w-1/2 xs:w-8/12 text-secondary font-medium xl:py-8  xs:text-xs md:text-base lg:py-0 lg:leading-relaxed md:leading-normal justify-end  flex-col gap-y-5 xl:items-start  lg:items-end">
            <p className=" w-full lg:ml-10 md:ml-8 xs:ml-20 xl:ml-0">
            Découvrez la richesse de notre expertise dans divers secteurs d'activité,
             mais ne vous arrêtez pas là. Notre engagement envers l'excellence se manifeste
              également dans la gamme étendue de services que nous proposons. Pour en savoir plus
               sur la manière dont nous pouvons répondre à vos besoins spécifiques,
                explorez notre page dédiée aux services. 
                <NavLink className='text-primary flex   w-full justify-start my-4 ' to={'/service'}>
              <div className='flex justify-start items-center'>
                <span className='text-primary inline-block'>Voir les services  </span>
                <img src={triangle} alt="icon" className='inline-block fill-primary  w-5 h-auto'/>
              </div>
            </NavLink>
            </p>
          
          </div>
        </div>
       </section>
       <section className=" my-10 bg-[url('../../public/Secteur-bg.png')] bg-cover bg-no-repeat grid grid-cols-12">
          <div className="md:col-start-2 lg:col-start-2 lg:m-10 md:ml-16 lg:ml-10 md:m-10 xs:my-10 xs:ml-3 col-span-8 my-10 ">
            <h2 className="text-primary lg:text-6xl md:text-5xl xs:ml-10 lg:ml-10 xl:ml-0 xl:mb-4 xs:text-2xl">
              <span className="text-white font-semibold">ALCOEN </span>Portfolio
            </h2>
            <p className="md:text-xl   lg:pr-20 lg:ml-10 xl:ml-0 md:pr-10 xs:ml-10 lg:mr-20 xs:mr-2 xs:text-base  md:mr-10">Au fil des années, nous avons accumulé un impressionnant éventail de réalisations qui témoignent de notre engagement envers l'excellence</p>
          </div>
          <div className="xl:col-start-3 xl:col-span-8 xs:col-start-2 xs:col-span-10 grid md:grid-cols-4 xs:grid-cols-2 grid-flow-row gap-4   my-10 ">
              <div  className="flex flex-col items-center text-center justify-between xl:px-4 lg:px-1 rounded-2xl overflow-hidden xl:gap-y-6 lg:gap-y-2 md:gap-y-1 gap-x-4 bg-slate-200 text-other" >
                <p className="font-medium mt-3 md:text-m xs:text-xs xl:text-base xl:px-4 md:px-1">
                  Linde Gas Algérie, 
                  Spa - Alger
                </p>
                <p className="md:text-m lg:text-s xs:text-xs  xl:text-base">
                Expertise des ESP pour dérogation du test de Ré-épreuve
                </p>
                <p className="font-medium mb-3 md:text-s xs:text-s  xl:text-base">
                  2022
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-between xl:px-4 lg:px-1 rounded-2xl overflow-hidden xl:gap-y-6 lg:gap-y-2  md:gap-y-3 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 xl:px-4  xs:px-1 lg:text-s xs:text-xs md:text-m xl:text-base ">
              Groupement SH/CEPSA BMS/Bir El Msana field
              (BMS)
                </p>
                <p className="md:text-m lg:text-s xs:px-1 lg:px-4 xs:text-xs xl:text-base">
                Service de support pour la corrosion et l'insepction lors des arrêts
                </p>
                <p className="font-medium mb-3 md:text-s xl:text-base">
                  2021
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-between xl:px-4 lg:px-1 rounded-2xl overflow-hidden xl:gap-y-6 lg:gap-y-2 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 md:text-m xs:text-xs lg:px-4 md:px-1 lg:text-s xl:text-base">
                  FERTIAL
                </p>
                <p className="lg:text-s md:text-m  xs:text-xs xl:text-base">
                Legal Inspection & NDT
                </p>
                <p className="font-medium mb-3 md:text-s xl:text-base">
                  2019
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-between xl:px-4 lg:px-1 rounded-2xl overflow-hidden xs:gap-y-7 xs:py-1 xl:gap-y-6 lg:gap-y-2 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 lg:px-4 xs:text-xs md:px-1 md:text-m  lg:text-s xl:text-base">
                  SORFERT ALGERIE
                </p>
                <p className="lg:text-s md:text-m xs:text-xs xl:text-base">
                Replica & API 510 Expert
                </p>
                <p className="font-medium  mb-3 lg:text-s xl:text-base">
                  2017
                </p>
              </div>
              <div className="flex flex-col items-center text-center xs:py-1.5 justify-between xl:px-4 lg:px-1 rounded-2xl overflow-hidden  xl:gap-y-6 lg:gap-y-2 xs:gap-y-5 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 lg:px-4 xs:text-xs md:text-m md:px-1 lg:text-s xl:text-base">
              Raffinerie d'Alger
                </p>
                <p className="lg:text-s mt-3 md:text-m xs:text-xs xl:text-base">
                Expertise 4 fours
                </p>
                <p className="font-medium mb-3 lg:text-s xl:text-base">
                  2015
                </p>
              </div>
              <div className="flex flex-col items-center text-center xs:gap-y-4 xs:py-1.5 justify-between xl:px-4 lg:px-1 rounded-2xl  overflow-hidden xl:gap-y-6 lg:gap-y-2 md:gap-y-4 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 lg:px-4 xs:text-xs  md:px-1 md:text-m lg:text-s xl:text-base">
                Sonatrach Activité Amont Division Laboratoires
              </p>
                <p className="xl:mb-11 md:mb-10 lg:text-s xs:text-xs md:text-m xl:text-base ">
                Legal Inspection
                </p>
                <p className="font-medium mb-3 lg:text-s   xl:text-base">
                  2012
                </p>
              </div>
              <div className="flex flex-col items-center text-center xs:gap-y-5 justify-between xl:px-4 lg:px-1 rounded-2xl overflow-hidden xl:gap-y-6 lg:gap-y-2 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 lg:px-4 md:text-m md:px-1 lg:text-s xl:text-base">
                IBERDROLA
              </p>
              <p className="lg:text-s md:text-m xs:text-xs xl:text-base">
              QAQC staffing power plant Edraouch Etaref
              </p>
              <p className="font-medium mb-3  lg:text-s xl:text-base ">
                  2008
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-between xl:px-4 lg:px-1 rounded-2xl overflow-hidden xl:gap-y-6 lg:gap-y-2 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 lg:px-4 xs:text-xs md:px-1 md:text-m lg:text-s xl:text-base">
                  ENAFOR
                </p>
                <p className="lg:text-s xl:text-base xs:text-xs md:text-m">
                  NDT Rotary
                </p>
                <p className="font-medium mb-3 lg:text-s xl:text-base">
                  2004
                </p>
              </div>
          </div>
       
       </section>
       <section className="grid grid-cols-12 ">
       <div className="md:col-start-2 lg:cols-start-2 xl:col-span-5 md:col-span-8 xs:col-span-11 md:ml-0 xs:ml-10 md:pl-6 lg:pl-0 lg:m-10 xl:pl-8 ">
              <h3 className="text-primary lg:text-5xl md:text-4.5xl xs:text-3xl xs:text-nowrap   md:ml-10 md:text-nowrap xl:ml-20 xl:pl-2 font-semibold lg:text-nowrap">Principaux Clients</h3>
              <p className="text-other leading-relaxed mb-10  md:ml-10 xl:ml-20 xl:pl-2 mt-5 font-meduim">
                Nos clients sont au cœur de tout ce que
                nous faisons chez ALCOEN. Nous collaborons
                étroitement avec une vaste gamme d'entreprises,
                des petites et moyennes entreprises
                aux grandes organisations internationales.
              </p>
          </div>
          <div className="col-start-3 col-span-8 grid lg:grid-cols-6 lg:grid-rows-6 xs:grid-cols-4 gap-3  my-7 ">
            <div className="bg-gray-200 drop-shadow-md rounded-xl  text-other  flex justify-center items-center">
              <img src={sontarak} alt="sonatrak" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center" >
              <img src={hilos} alt="helios" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={beakine} alt="beakine" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={helison} alt="helison" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={lafarge} alt="lafrage" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={linde} alt="linde" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={saipem} alt="saipem" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={naftal} alt="naftal" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={enafor} alt="enafor" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={touatGaz} alt="touatgaz" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={fertial} alt="fertial" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={cobra} alt="cobra" />
            </div>
            <div className=" bg-gray-200 drop-shadow-md  flex items-center rounded-lg overflow-hidden">
              <img src={somiz} alt="somiz" />
            </div>
            <div className="bg-gray-200 drop-shadow-md xs:h-[43.8px] md:h-[97.5px] lg:h-[131px] rounded-xl text-other flex justify-center items-center">
              <img src={smoik} alt="somik" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl md:h-auto xs:h-[43.8px]  text-other flex justify-center items-center">
              <img src={psp} alt="psp" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl md:h-auto xs:h-[43.8px] text-other flex justify-center items-center">
              <img src={sbs} alt="sbs" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl md:h-auto xs:h-[43.8px] text-other flex justify-center items-center">
              <img src={entp} alt="entp" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl xs:h-[43.8px] md:h-[97.5px] lg:h-[131px] text-other flex justify-center items-center">
              <img src={bt} alt="bt" />
            </div>
            <div className="bg-gray-200 drop-shadow-md xs:h-[43.8px] md:h-auto rounded-xl overflow-hidden py-5">
            <img src={def} alt="def" /></div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={sorf} alt="sorfert" className="object-fill" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={tosa} alt="tosa" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={sc} alt="sc" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl xs:h-[43.8px] md:h-[97px] lg:h-[131px] text-other flex justify-center items-center">
              <img src={ig} alt="ig" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl  text-other flex justify-center items-center">
              <img src={dp} alt="dp world" />
            </div>
           
            <div className="flex justify-center gap-3 lg:col-span-full lg:h-[131px] md:h-[97.5px] xs:h-[43.8px] xs:px-6 md:px-12 lg:px-auto  xs:col-span-full">
              
              <div className="bg-gray-200 drop-shadow-md rounded-xl p-2 overflow-hidden  text-other flex justify-center items-center">
              <img src={ourch} alt="" />
              </div>
               <div className="bg-gray-200 drop-shadow-md  rounded-xl text-other flex justify-center items-center">
              <img src={grn} alt="grn" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={gsa} alt="gsa" />
            </div>
            </div>

          </div>
          <h2 className=" lg:col-start-2  md:col-start-2 lg:ml-10 xs:ml-10 xs:pr-5  xl:leading-snug lg:leading-snug my-10 lg:col-span-8 xs:col-span-full  text-secondary xs:text-2.5xl lg:text-5xl md:text-3.5xl lg:pl-10 xl:pl-0 md:pl-6   font-semibold">
          Rejoignez notre famille de clients satisfaits
            et contactez-nous
            <p className="text-primary"> dès aujourd'hui</p>
          </h2>
       </section>
       </div>
     )
}