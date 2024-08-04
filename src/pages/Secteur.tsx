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
  const Header = {part1: 'Nos',part2:'Secteur'}
     return (
       <div className="relative mb-10 top-20 ml-0">
       <PageHeader Header={Header}/>
       <section className="grid grid-cols-12 ">
        <div className="col-start-2  my-10 font-semibold ml-10 col-span-7">
          <h2 className="text-other my-8 text-shadow-sm text-6xl">
          Nos Domaines <span className="text-primary">d'Expertise</span>
          </h2>
          <p className="text-black leading-relaxed mt-10">
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
        <div className=" col-start-3  col-span-8 my-10  ">
          <div className="">
          <SecteurIcons/>
          </div>
         
        </div>
        <div className="col-start-2 col-span-8 my-10 ml-10 flex ">
          <div className="w-1/2">
            <h3 className="text-6xl font-semibold text-primary leading-normal">
              Solutions Polyvalentes
            pour Divers Secteurs
            </h3>
          </div>
          <div className="w-1/2 text-secondary font-medium py-8 leading-relaxed justify-end flex-col gap-y-5 items-start">
            <p className=" w-full">
            Découvrez la richesse de notre expertise dans divers secteurs d'activité,
             mais ne vous arrêtez pas là. Notre engagement envers l'excellence se manifeste
              également dans la gamme étendue de services que nous proposons. Pour en savoir plus
               sur la manière dont nous pouvons répondre à vos besoins spécifiques,
                explorez notre page dédiée aux services. 
              
            </p>
            <NavLink className='text-primary flex  mt-14 w-full justify-start my-4 ' to={'/service'}>
              <div className='flex justify-start items-center'>
                <span className='text-primary inline-block'>Voir les services  </span>
                <img src={triangle} alt="icon" className='inline-block fill-primary  w-5 h-auto'/>
              </div>
            </NavLink>
          </div>
        </div>
       </section>
       <section className=" my-10 bg-[url('../../public/Secteur-bg.png')] bg-cover bg-no-repeat grid grid-cols-12">
          <div className="col-start-2 m-9 col-span-8 my-10 ">
            <h2 className="text-primary text-6xl">
              <span className="text-white font-semibold">ALCOEN </span>Portfolio
            </h2>
            <p className="text-xl line-clamp-2 pr-20 mr-20">Au fil des années, nous avons accumulé un impressionnant éventail de réalisations qui témoignent de notre engagement envers l'excellence</p>
          </div>
          <div className="col-start-3 col-span-8 grid grid-cols-4 grid-flow-row gap-4 my-10 ">
              <div  className="flex flex-col items-center text-center justify-between px-4 rounded-2xl overflow-hidden gap-y-6 gap-x-4 bg-slate-200 text-other" >
                <p className="font-medium mt-3 px-4">
                  Linde Gas Algérie, 
                  Spa - Alger
                </p>
                <p>
                Expertise des ESP pour dérogation du test de Ré-épreuve
                </p>
                <p className="font-medium mb-3">
                  2022
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-between px-4 rounded-2xl overflow-hidden gap-y-6 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 px-4">
              Groupement SH/CEPSA BMS/Bir El Msana field
              (BMS)
                </p>
                <p>
                Service de support pour la corrosion et l'insepction lors des arrêts
                </p>
                <p className="font-medium mb-3">
                  2021
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-between px-4 rounded-2xl overflow-hidden gap-y-6 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 px-4">
                  FERTIAL
                </p>
                <p>
                Legal Inspection & NDT
                </p>
                <p className="font-medium mb-3">
                  2019
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-between px-4 rounded-2xl overflow-hidden gap-y-6 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 px-4">
                  SORFERT ALGERIE
                </p>
                <p>
                Replica & API 510 Expert
                </p>
                <p className="font-medium mb-3">
                  2017
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-between px-4 rounded-2xl overflow-hidden gap-y-6 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 px-4">
              Raffinerie d'Alger
                </p>
                <p>
                Expertise 4 fours
                </p>
                <p className="font-medium mb-3">
                  2015
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-between px-4 rounded-2xl overflow-hidden gap-y-6 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 px-4">
                Sonatrach Activité Amont Division Laboratoires
              </p>
                <p className="mb-11 ">
                Legal Inspection
                </p>
                <p className="font-medium mb-3">
                  2012
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-between px-4 rounded-2xl overflow-hidden gap-y-6 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 px-4">
                IBERDROLA
              </p>
              <p>
              QAQC staffing power plant Edraouch Etaref
              </p>
              <p className="font-medium mb-3">
                  2008
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-between px-4 rounded-2xl overflow-hidden gap-y-6 gap-x-4 bg-slate-200 text-other" >
              <p className="font-medium mt-3 px-4">
                  ENAFOR
                </p>
                <p>
                  NDT Rotary
                </p>
                <p className="font-medium mb-3">
                  2004
                </p>
              </div>
          </div>
       
       </section>
       <section className="grid grid-cols-12 ">
       <div className="col-start-2 col-span-5  m-10">
              <h3 className="text-primary text-5xl font-semibold">Principaux Clients</h3>
              <p className="text-other leading-relaxed mb-10 mt-5 font-meduim">
                Nos clients sont au cœur de tout ce que
                nous faisons chez ALCOEN. Nous collaborons
                étroitement avec une vaste gamme d'entreprises,
                des petites et moyennes entreprises
                aux grandes organisations internationales.
              </p>
          </div>
          <div className="col-start-3 col-span-8 grid grid-cols-6 gap-3  my-7 ">
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other  flex justify-center items-center">
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
            <div className="h-[131px] bg-gray-200 drop-shadow-md flex items-center rounded-lg overflow-hidden">
              <img src={somiz} alt="somiz" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={smoik} alt="somik" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={psp} alt="psp" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={sbs} alt="sbs" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={entp} alt="entp" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={bt} alt="bt" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl overflow-hidden py-5">
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
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={ig} alt="ig" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={dp} alt="dp world" />
            </div>
           
            <div className="flex justify-center col-span-full">
              
              <div className="bg-gray-200 drop-shadow-md rounded-xl p-2 overflow-hidden  text-other flex justify-center items-center">
              <img src={ourch} alt="" />
              </div>
               <div className="bg-gray-200 drop-shadow-md h-[131px] rounded-xl text-other flex justify-center items-center">
              <img src={grn} alt="grn" />
            </div>
            <div className="bg-gray-200 drop-shadow-md rounded-xl text-other flex justify-center items-center">
              <img src={gsa} alt="gsa" />
            </div>
            </div>

          </div>
          <h2 className=" col-start-2 ml-10 leading-snug my-10 col-span-6 text-secondary text-5xl font-semibold">
          Rejoignez notre famille de clients satisfaits
            et contactez-nous
            <p className="text-primary"> dès aujourd'hui</p>
          </h2>
       </section>
       </div>
     )
}