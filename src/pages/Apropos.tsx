import { useState, useEffect } from 'react';
import vector from '../assets/Vector.png';
import aboutP1 from '../assets/About-page1.png';
import aboutP2 from "../assets/about-page2.png";
import aboutP3 from '../assets/about-page3.png'
import PageHeader from '../components/PageHeader';
export function Apropos() {
  type RadioElement = {
    id: number;
    header: string;
    content: string;
  };

  type RadioState = {
    id: number;
    active: boolean;
  };
  const Header ={part1:' À PROPOS',part2:" D'ALCOEN"}
  const radioElements: RadioElement[] = [
    {
      id: 0,
      header: 'Excellence',
      content:
        "Chez ALCOEN, nous embrassons une culture d'excellence, où chaque détail compte dans la quête de la perfection. Notre engagement envers nos clients et notre passion pour l'innovation nous inspirent à viser les plus hauts standards de qualité et de performance dans tous les aspects de notre travail.",
    },
    {
      id: 1,
      header: 'Innovation',
      content:
        "L'innovation est au cœur de notre approche chez ALCOEN. Nous croyons en l'adoption de la créativité et de l'amélioration continue comme moteurs de progrès. Cela signifie que nous sommes constamment à la recherche de nouvelles idées.",
    },
    {
      id: 2,
      header: 'Fiabilité',
      content:
        "Nous nous engageons à bâtir une confiance solide avec nos clients en offrant des services qui sont constamment cohérents, fiables et pertinents. Pour nous, la fiabilité signifie que nos clients peuvent compter sur nous à chaque étape de leur parcours avec Alcoen.",
    },
  ];

  const [radioState, setRadioState] = useState<RadioState[]>([
    { id: 0, active: true },
    { id: 1, active: false },
    { id: 2, active: false },
  ]);

  const [firstLetter, setFirstLetter] = useState<string | undefined>(undefined);
  const [header, setHeader] = useState<string | undefined>(undefined);
  const [content, setContent] = useState<string | undefined>(undefined);

  const handleRadio = (id: number) => {
    const newState: RadioState[] = radioState.map((rs, index) => ({
      ...rs,
      active: index === id,
    }));
    setRadioState(newState);
  };

  useEffect(() => {
    const activeRadio = radioState.find((rs) => rs.active);
    if (activeRadio) {
      const activeElement = radioElements.find((el) => el.id === activeRadio.id);
      if (activeElement) {
        setHeader(activeElement.header.slice(1));
        setFirstLetter(activeElement.header.charAt(0));
        setContent(activeElement.content);
      }
    }
  }, [radioState]);

  return (
    <>
      <div className="relative mb-10 top-20 ml-0">
        
        <PageHeader Header={Header}/>
        <section className="grid grid-cols-12">
          <div className="m-10 col-start-2 col-span-full">
            <h2 className="text-6xl font-semibold text-secondary">
              À la découverte <span className="text-primary">d'Alcoen</span>
            </h2>
            <p className="text-4xl text-secondary my-8">Illuminer l'Essence de Notre Entreprise</p>
          </div>
          <div className="col-span-full col-start-2 m-10 flex">
            <div className="w-1/2 flex-col p-2">
              <div className="">
                <span className="text-secondary text-base leading-relaxed">
                  ALCOEN (Algerian Office of Consulting & Engineering) brille au cœur de divers
                  secteurs, tels que l'Énergie, le Pétrole, la Pétrochimie, l'Industrie,
                  l'Agroalimentaire...etc. Notre richesse en expertise découle d'un parcours
                  professionnel exceptionnel de notre Directeur Général, entamé en 1999 avec
                  l'entreprise nationale historique ''ENACT Spa''. Au fil des années, cette société
                  prestigieuse s'est bâtie une réputation inégalée, offrant des services exemplaires
                  tels que le contrôle réglementaire de sécurité, l'expertise technique, les
                  assurances et la réassurance, l'expertise de réformes, le suivi de
                  fabrication...etc. Mais notre ambition ne s'est pas arrêtée là. Nous avons
                  embrassé un nouveau niveau de dimension internationale, accompagnant des
                  entreprises de renom telles que Vincotte International pendant plus de 14 ans,
                  jusqu'en février 2020, puis Applus jusqu'à juillet 2023. Ces collaborations
                  prestigieuses ont façonné notre capital et expertise inestimable, devenant l'âme
                  même d'ALCOEN, dévouée au profit de ses clients. Notre équipe est le fruit d'une
                  synergie sans pareille, alliant l'expérience de nos professionnels chevronnés et
                  le dynamisme de nos nouveaux talents, issus d'universités et d'écoles supérieures
                  de renom. Cette alliance inédite garantit un transfert de savoir-faire continu et
                  une qualité d'accompagnement exemplaire pour nos clients.
                </span>
              </div>
              <div className="mt-14">
                <h2 className="text-secondary text-[64px] font-semibold text-shadow-sm">
                  Notre <span className="text-primary">Vision</span>
                </h2>
                <h3 className="text-secondary text-shadow-sm text-5xl my-4">Assurer l'avenir,</h3>
                <h3 className="text-primary text-shadow-sm text-5xl my-4">inspirer l'excellence</h3>
              </div>
              <div className="mt-20">
                <h2 className="text-6xl my-4 text-secondary font-medium text-shadow-sm">
                  Fondement de Notre
                </h2>
                <h2 className="text-primary my-6 text-6xl text-shadow-sm font-semibold">
                  Engagement
                </h2>
              </div>
              <div>
                <div>
                  <div className="space-y-4 flex justify-between w-full mr-8">
                    <div className="">
                      <h2 className="text-secondary text-5xl mb-5 font-semibold text-shadow-sm">
                        <span className="text-primary">{firstLetter}</span>
                        {header}
                      </h2>
                      <p className="text-shadow-sm leading-relaxed text-secondary">{content}</p>
                    </div>
                    <div className="flex flex-col pt-5 items-end justify-center gap-y-4 pl-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          id="0"
                          name="customRadio"
                          value="option1"
                          className="hidden peer"
                          onChange={() => handleRadio(0)}
                        />
                        <span className="w-5 h-5 text-black inline-block rounded-full border-spacing-2 border-2 border-primary-100 peer-checked:border-other peer-checked:bg-primary transition"></span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          id="1"
                          name="customRadio"
                          value="option2"
                          className="hidden peer"
                          onChange={() => handleRadio(1)}
                        />
                        <span className="w-5 h-5 inline-block rounded-full border-spacing-2 border-2 border-primary-100 peer-checked:border-other peer-checked:bg-primary transition"></span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          id="2"
                          type="radio"
                          name="customRadio"
                          value="option3"
                          className="hidden peer"
                          onChange={() => handleRadio(2)}
                        />
                        <span className="w-5 h-5 inline-block rounded-full border-spacing-2 border-2 border-primary-100 peer-checked:border-other peer-checked:bg-primary transition"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 items-center object-contain my-10">
              <img src={vector} alt="vector" className="translate-y-28 pb-10 mb-4" />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-12">
          <div className="ml-10 col-start-2 col-span-full flex m-10">
            <div className="w-3/5">
              <h2 className="text-6xl font-semibold text-secondary">
                L'Avantage <span className="text-primary">d'Alcoen</span>
              </h2>
              <p className="text-4xl text-secondary my-8">Ce qui Nous Distingue</p>
              <p className="text-secondary font-medium pr-3 text-base leading-loose float right">
                L'expérience et l'excellence sont au cœur de notre engagement envers nos clients et
                institutions. Chez Alcoen, notre équipe incarne la synergie parfaite entre des
                professionnels expérimentés et de nouveaux talents issus d'universités et d'écoles
                supérieures. Ce mélange harmonieux assure un véritable transfert de savoir-faire et
                un accompagnement exemplaire pour répondre aux besoins spécifiques de chaque client.
                Notre objectif principal est de satisfaire pleinement nos clients tout en respectant
                rigoureusement les réglementations, normes et spécifications clients. Dès la
                réception initiale de la demande client, nous mettons en œuvre notre expertise et
                notre savoir-faire pour proposer des solutions sur mesure qui dépassent les
                attentes. Avec efficacité, nous exploitons les outils et technologies modernes de
                communication pour le bénéfice de nos clients et parties intéressées. Chez Eurl
                ALCOEN, nous sommes fiers de notre avantage concurrentiel qui repose sur notre
                engagement envers l'excellence, l'innovation et la satisfaction client.
              </p>
            </div>
            <div className="w-2/5 h-full flex justify-start py-16">
              <div className="bg-primary my-10 ml-6">
                <img src={aboutP1} alt="img" className="-translate-x-5 translate-y-5" />
              </div>
            </div>
          </div>
          <div className="col-start-2 mx-10 col-span-11  flex justify-center">
            
              <div className="w-[488px]  mb-10 mr-5 shadow-black relative drop-shadow-xl  overflow-hidden h-[340px] ">
                <img
                  src={aboutP2}
                  alt="img"
                  className="mix-blend-multiply w-[488px] h-[340px] drop-shadow-xl  inset-0 absolute"
                />
                <div
                  className="bg-about2 w-full inset-0 relative object-cover -translate-x-8 translate-y-8 h-[308px] mix-blend-color-burn bg-opacity-45 overflow-hidden brightness-90"
                >
                  <div
                    className="bg-primary-100 bg-opacity-45 w-full inset-0   relative shadow-md shadow-black h- object-cover -translate-x-12 translate-y-12 mix-blend-color-burn overflow-hidden"
                  >
                    <div
                      className="bg-about1 w-full inset-0 relative shadow-md shadow-black object-cover h-[260px] -translate-x-12 translate-y-12 mix-blend-color-burn overflow-hidden"
                    ></div>
                  </div>
                </div>
              </div>
            
            <div className="mr-28 w-1/2  flex flex-col">
              <h2 className="text-6xl text-shadow-sm  font-semibold text-primary">
                L'Avantage d'Alcoen
              </h2>
              <p className="text-4xl leading-relaxed   text-shadow-sm text-primary my-8">
                Progresser vers le succès avec expertise inégalée et un engagement constant.
              </p>
            </div>
          </div>
          <div className='col-start-2 m-10 mr-20 col-span-11 flex  '>
            <div className=' w-1/2 mb-10'>
              <img src={aboutP3} alt="img" className='translate-x-5 w-full shadow-sm drop-shadow-2xl shadow-black' />
            </div> 
            <div className='flex flex-col w-2/3 gap-y-6  items-start  -translate-x-16  z-10 mr-10 '>
            <h2 className="text-5xl  text-shadow-sm font-semibold text-secondary">
            Portés par <span className='text-primary'>l'Ambition</span>
              </h2>
              <p className='text-3xl text-shadow-sm text-secondary '>
              Révélant Notre Motivation et Nos Objectifs
              </p>
              <p className='text-secondary pt-8 leading-loose text-shadow-sm'> 
              Chez Alcoen, nous sommes animés par une ambition sans limites. Notre quête incessante d'innovation et de performance se conjugue harmonieusement avec un attachement profond à nos traditions et à l'excellence. Convaincus que l'union de l'expérience éprouvée et de la créativité émergente génère des solutions sur mesure, adaptées aux besoins spécifiques de chaque projet, nous nous engageons pleinement dans cette démarche unique.
              Rejoignez-nous dans cette aventure passionnante, où votre réussite est placée au cœur de nos préoccupations. Découvrez l'expertise inégalée d'Alcoen et notre engagement inébranlable envers nos clients et institutions. Nous sommes fiers de vous accompagner dans votre développement et de contribuer à l'épanouissement de vos projets les plus ambitieux.
              Bienvenue dans l'univers d'Alcoen, où l'avenir se construit avec passion et dévouement, où chaque étape est guidée par l'audace et l'aspiration à l'excellence
              </p>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
