import listIcone from '../../assets/list-icone.svg'
export default function CREIE(){
     return(<>
     <div className="grid grid-cols-12">
          <section className="col-start-2 my-10 ml-10 col-span-10">
               <h2 className="text-primary font-semibold leading-normal mb-10 text-5xl">
               Contrôle réglementaire des équipement & installations électriques
               </h2>
               <p className="text-lg text-black leading-relaxed mb-10 mr-10 pr-5 ">
               Les équipements et installations électriques sont soumis à des règles de sécurité strictes pour prévenir les risques d'incendie, d'électrocution ou de court-circuit. Ces règles sont définies par le Code de la construction et de l'habitation, le Code du travail, la norme et les arrêtés préfectoraux. Le respect de ces règles est contrôlé par des organismes agréés qui délivrent des attestations de conformité ou des rapports de vérification.
               </p>
               <p className="text-lg text-black leading-relaxed mr-10 pr-5 ">
               Le contrôle réglementaire des équipements et installations électriques a pour objectif de vérifier que :
               </p>
               <p className='text-lg text-black leading-relaxed mr-10 pr-5'>
                    <span className='text-xl'>-</span>
                    les équipements et installations électriques sont conformes aux normes en vigueur ;
               </p>
               <p className='text-black text-lg leading-relaxed mr-10 pr-5'>
                    <span className='text-xl'>-</span>
                    les équipements et installations électriques sont adaptés aux besoins et aux caractéristiques du lieu d'utilisation ;

               </p>
               <p className='text-black text-lg leading-relaxed mr-10 pr-5'>
                    <span className='text-xl'>-</span>
                    les équipements et installations électriques sont en bon état de fonctionnement et ne présentent pas de danger pour les personnes et les biens ;
               </p>
          
               <p className='text-black text-lg leading-relaxed mr-10 pr-5'>
                    <span className='text-xl'>-</span>
                    les équipements et installations électriques sont munis des dispositifs de protection nécessaires (disjoncteurs, interrupteurs différentiels, etc.) ;
               </p>
               <p className='text-black text-lg leading-relaxed mr-10 pr-5'>
                    <span className='text-xl'>-</span>
                    les équipements et installations électriques sont correctement raccordés au réseau de distribution publique ou à une source d'énergie autonome ;
               </p>
               <p className='text-black text-lg leading-relaxed mb-10 mr-10 pr-5'>
                    <span className='text-xl'>-</span>
                    les équipements et installations électriques sont régulièrement entretenus et révisés.
               </p>
               <p className='text-lg text-black leading-relaxed mr-10 pr-5'>
               Le contrôle réglementaire des équipements et installations électriques est effectué par un organisme agréé par le ministère chargé de la construction ou par le ministère chargé du travail. L'organisme agréé doit disposer d'un personnel qualifié, d'un matériel adapté et d'une assurance responsabilité civile professionnelle. L'organisme agréé doit respecter un cahier des charges précisant les modalités du contrôle, les documents à fournir et les sanctions en cas de non-conformité.
               </p>
               <p className='text-black text-lg leading-relaxed mr-10 pr-5'>
               Le contrôle réglementaire des équipements et installations électriques donne lieu à la délivrance d'une attestation de conformité ou d'un rapport de vérification. Ces documents doivent être conservés par le propriétaire ou le locataire des locaux équipés et présentés en cas de contrôle par les autorités compétentes. En cas de non-conformité, l'organisme agréé peut prescrire des mesures correctives à réaliser dans un délai imparti. En cas de danger grave ou imminent, l'organisme agréé peut ordonner la mise hors service immédiate des équipements ou installations électriques concernés.
               </p>
              
          </section>
          <section className="col-start-2 ml-10 col-span-10 my-10 ">
               <h2 className="text-secondary font-semibold text-5xl">
                    Maison <span className="text-primary">d'Alcoen</span>
               </h2>
               <ul className="ml-10 mr-5 px-4 ">
                    <li className="text-black leading-relaxed flex relative  items-center my-5 mt-5  gap-x-2 text-lg  ">
                         <img src={listIcone} alt="icone" className='top-3 absolute' />
                         <p className='px-8 pt-2'>
                              Vérification périodique des installations et les appareils électriques
                              conformément aux normes techniques nationales et internationales en
                              matière de sécurité électrique, pour détecter d'éventuelles anomalies.
                         </p>
                    </li>
                    <li className="text-black leading-relaxed relative  text-lg flex items-center my-5  gap-x-2">
                    <img src={listIcone} alt="icone" className='top-3 absolute' />     
                    <p className='px-8 pt-2'>
                         Vérification des schémas électriques et des plans de câblage.
                    </p>
                    </li>
                    <li className="text-black relative  leading-relaxed text-lg flex items-center my-5 gap-x-2">
                         <img src={listIcone} alt="icone" className='top-3 absolute'  />
                         <p className='px-8 pt-2'>
                              Contrôle des dispositifs de protection tels que les disjoncteurs, les
                              interrupteurs différentiels, les fusibles, etc.
                         </p>
                    </li>  
                    <li className='text-black relative leading-relaxed text-lg flex items-center my-5 gap-x-2'>
                         <img src={listIcone} alt="icone" className='absolute top-3' />
                         <p className='px-8 pt-2'>
                         Mesure des paramètres électriques tels que la tension, courant, résistance
                         de terre, etc.
                         </p>
                    </li>
   
                    <li className='text-black relative leading-relaxed text-lg flex items-center my-5 gap-x-2'>
                         <img src={listIcone} alt="icone" className='absolute top-3' />
                         <p className='px-8 pt-2'>
                              Evaluation des risques électriques pour identifier les dangers potentiels et
                              proposer des mesures d'atténuation appropriées, ainsi que la sensibilisation
                              du personnel.
                         </p>
                    </li>
                   
               </ul>

          </section>
     </div>
     </>)
}