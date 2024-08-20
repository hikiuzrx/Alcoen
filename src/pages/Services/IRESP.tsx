import listIcone from '../../assets/list-icone.svg'
export default function IRESP(){
     return(<>
     <div className="grid grid-cols-12">
          <section className="col-start-2 my-10 ml-10 col-span-10">
               <h2 className="text-primary font-semibold mb-10 text-5xl">
               Inspection Réglementaire ESP
               </h2>
               <p className="text-lg text-black leading-relaxed mr-10 pr-5 ">
               L'inspection réglementaire des équipements sous pression (ESP) est une obligation légale pour les exploitants de ces installations. Elle vise à vérifier le respect des règles de sécurité et de prévention des risques liés à la pression. Elle permet également de s'assurer du bon fonctionnement et de la maintenance des ESP.
               L'inspection réglementaire des ESP comprend deux types d'opérations : l'examen avant mise en service (EAMS) et le contrôle périodique (CP). L'EAMS consiste à vérifier la conformité de l'ESP aux normes et aux règles de l'art, ainsi qu'à établir un dossier technique. Le CP consiste à vérifier l'état de l'ESP, à détecter les éventuelles anomalies ou dégradations, et à proposer des mesures correctives.
               </p>
               <p className="text-lg text-black leading-relaxed mr-10 pr-5 ">
               L'inspection réglementaire des ESP est réalisée par des organismes agréés par l'État, appelés organismes habilités (OH). Ces organismes sont indépendants des exploitants et des fabricants d'ESP. Ils disposent de compétences techniques et réglementaires spécifiques. Ils sont soumis à un contrôle de qualité et à une surveillance par l'État.
               L'inspection réglementaire des ESP est un élément essentiel de la sécurité des installations industrielles, mais aussi de la protection de l'environnement et de la santé publique. Elle contribue à prévenir les accidents, les incidents et les pollutions liés à la pression. Elle permet aussi d'optimiser la performance énergétique et la durée de vie des ESP.
               </p>
          </section>
          <section className="col-start-2 ml-10 col-span-10 my-10 ">
               <h2 className="text-secondary font-semibold text-5xl">
                    Maison <span className="text-primary">d'Alcoen</span>
               </h2>
               <ul className="ml-10 mr-5 p-4 ">
                    <li className="text-black leading-relaxed flex items-center my-10 gap-x-2 text-lg  ">
                         <img src={listIcone} alt="icone" className='pb-2  mb-4' />
                         <p className=''>Inspections régulières et périodiques des ESP, y compris la vérification des dossiers techniques, la  vérification des caractéristiques techniques conformément aux normes de sécurité et aux exigences réglementaires</p>
                    </li>
                    <li className="text-black leading-relaxed text-lg flex items-center my-10 gap-x-2">
                    <img src={listIcone} alt="icone" className='' />     
                    Assister et valider des essais et épreuves pour vérifier la résistance et l'intégrité des ESP..

                    </li>
                    <li className="text-black leading-relaxed text-lg flex items-center my-10 gap-x-2">
                    <img src={listIcone} alt="icone"  />
                    Contrôle des dispositifs de sécurité, tels que les soupapes de sécurité, les manomètres, les limiteurs de pression…etc.

                    </li>  
                    <li className="text-black leading-relaxed text-lg flex items-center my-10 gap-x-2">
                    <img src={listIcone} alt="icone" className='' />
                    Évaluation des risques en service et hors service
                    </li>  
                    <li className="text-black leading-relaxed text-lg flex items-center my-10 gap-x-2">
                    <img src={listIcone} alt="icone" className='' />
                    Mise en conformité des installations 
                    </li> 
                    <li className="text-black leading-relaxed text-lg flex items-center my-10 gap-x-2">
                    <img src={listIcone} alt="icone" className='' />
                    Expertise pour dérogation d’épreuve hydrostatique
                    </li>  
                    <li className="text-black leading-relaxed text-lg flex items-center my-10 gap-x-2">
                    <img src={listIcone} alt="icone" className='' />
                    Algérianisation des ESP avec ou sans le dossier technique
                    </li>               

               </ul>

          </section>
     </div>
     </>)
}