import { useState, useEffect } from 'react';
import vector from '../assets/Vector.png';

export function Apropos() {
  type RadioElement = {
    id: number,
    header: string,
    content: string
  }
  type RadioState = {
    id: number,
    active: boolean
  }
  const radioElements: RadioElement[] = [{
    id: 0,
    header: 'Excellence',
    content: "Chez ALCOEN, nous embrassons une culture d'excellence, où chaque détail compte dans la quête de la perfection. Notre engagement envers nos clients et notre passion pour l'innovation nous inspirent à viser les plus hauts standards de qualité et de performance dans tous les aspects de notre travail."
  }, {
    id: 1,
    header: "Innovation",
    content: "L'innovation est au cœur de notre approche chez ALCOEN. Nous croyons en l'adoption de la créativité et de l'amélioration continue comme moteurs de progrès. Cela signifie que nous sommes constamment à la recherche de nouvelles idées."
  }, {
    id: 2,
    header: "Fiabilité",
    content: "Nous nous engageons à bâtir une confiance solide avec nos clients en offrant des services qui sont constamment cohérents, fiables et pertinents. Pour nous, la fiabilité signifie que nos clients peuvent compter sur nous à chaque étape de leur parcours avec Alcoen."
  }]
  const [radioState, setRadioState] = useState<RadioState[]>([{ id: 0, active: true }, { id: 1, active: false }, { id: 2, active: false }])
  
  const [firstLetter, setFirstLetter] = useState<string | undefined>(undefined);
  const [header, setHeader] = useState<string | undefined>(undefined);
  const [content, setContent] = useState<string | undefined>(undefined);

  const handleRadio = (id: number) => {
    const newState: RadioState[] = radioState.map((rs, index) => ({
      ...rs,
      active: index === id
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
        <h1 className="flex items-center mt-4">
          <div className="w-40 h-40 inline-block shadow-md shadow-black bg-secondary"></div>
          <div className="">
            <p className="text-primary inline-block relative font-semibold ml-4 mt-4 m-2 text-shadow-md">
              A PROPOS
            </p>
            <p className="text-secondary text-shadow-md block relative font-semibold ml-4">
              D'ALCOEN
            </p>
          </div>
        </h1>

        <section className="grid grid-cols-12">
          <div className="m-10 col-start-2 col-span-full">
            <h2 className="text-6xl font-semibold text-secondary">
              À la découverte <span className="text-primary">d'Alcoen</span>
            </h2>
            <p className="text-4xl text-secondary my-8">
              Illuminer l'Essence de Notre Entreprise
            </p>
          </div>
          <div className="col-span-full col-start-2 m-10 flex">
            <div className="w-1/2 flex-col  p-2 ">
              <div className=""> {/* Add margin bottom to create spacing */}
                <span className="text-secondary text-base leading-relaxed">
                  ALCOEN (Algerian Office of Consulting & Engineering) brille au
                  cœur de divers secteurs, tels que l'Énergie, le Pétrole, la
                  Pétrochimie, l'Industrie, l'Agroalimentaire...etc. Notre richesse
                  en expertise découle d'un parcours professionnel exceptionnel de
                  notre Directeur Général, entamé en 1999 avec l'entreprise
                  nationale historique ''ENACT Spa''. Au fil des années, cette
                  société prestigieuse s'est bâtie une réputation inégalée, offrant
                  des services exemplaires tels que le contrôle réglementaire de
                  sécurité, l'expertise technique, les assurances et la
                  réassurance, l'expertise de réformes, le suivi de
                  fabrication...etc. Mais notre ambition ne s'est pas arrêtée là.
                  Nous avons embrassé un nouveau niveau de dimension
                  internationale, accompagnant des entreprises de renom telles que
                  Vincotte International pendant plus de 14 ans, jusqu'en février
                  2020, puis Applus jusqu'à juillet 2023. Ces collaborations
                  prestigieuses ont façonné notre capital et expertise inestimable,
                  devenant l'âme même d'ALCOEN, dévouée au profit de ses clients.
                  Notre équipe est le fruit d'une synergie sans pareille, alliant
                  l'expérience de nos professionnels chevronnés et le dynamisme de
                  nos nouveaux talents, issus d'universités et d'écoles supérieures
                  de renom. Cette alliance inédite garantit un transfert de
                  savoir-faire continu et une qualité d'accompagnement exemplaire
                  pour nos clients.
                </span>
              </div>
              <div className="mt-14">
                <h2 className="text-secondary text-[64px] font-semibold text-shadow-sm">
                  Notre <span className="text-primary">Vision</span>
                </h2>
                <h3 className="text-secondary text-shadow-sm text-5xl my-4">
                  Assurer l'avenir,
                </h3>
                <h3 className="text-primary text-shadow-sm text-5xl my-4">
                  inspirer l'excellence
                </h3>
              </div>
              <div className='mt-20 '>
                <h2 className='text-6xl my-4 text-secondary font-medium text-shadow-sm '>Fondement de Notre </h2>
                <h2 className='text-primary my-6 text-6xl text-shadow-sm font-semibold'>Engagement</h2>
              </div>
              <div>
        
                <div>
                  
                  <div className="space-y-4 flex justify-between w-full mr-8">
                  <div>
                  <h2 className='text-secondary text-5xl font-semibold text-shadow-sm'><span className='text-primary'>{firstLetter}</span>{header}</h2>
                  <p className='text-shadow-sm leading-relaxed text-secondary'>{content}</p>
                  </div>
                    <div className='flex flex-col items-end justify-center gap-y-4  pl-4'>
                    <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          id='0'
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
          id='1'
          name="customRadio"
          value="option2"
          className="hidden peer"
          onChange={() => handleRadio(1)}
        />
        <span className="w-5 h-5 inline-block rounded-full border-spacing-2 border-2 border-primary-100 peer-checked:border-other peer-checked:bg-primary transition"></span>
      </label>
      <label className="flex items-center cursor-pointer">
        <input
          id='2'
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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ipsam velit exercitationem fugiat dignissimos cupiditate minus! Tenetur ipsum deleniti blanditiis, modi voluptatum veniam, facilis, hic obcaecati id dolorum repellat ratione.
          Ratione laudantium a, eius corporis fugit doloribus consectetur ipsum blanditiis eligendi, qui vero? Eum in suscipit optio temporibus facilis recusandae et provident numquam dignissimos molestias nobis dolores, soluta at minus.</p>
        </section>
      </div>
    </>
  );
}
