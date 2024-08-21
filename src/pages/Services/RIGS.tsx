import listIcone from '../../assets/list-icone.svg'
export default function RIGS(){
     return(<>
     <div className="grid grid-cols-12">
          <section className="col-start-2 my-10 ml-10 col-span-10">
               <h2 className="text-primary font-semibold mb-10 text-5xl">
               RIG Service
               </h2>
               <p className="text-lg text-black leading-relaxed mr-10 pr-5 ">
               Une station de forage RIG est un environnement complexe et critique dans l'industrie de l'énergie. Chez ALCOEN, nous comprenons l'importance capitale de ces installations pour les opérations de forage et d'exploration pétrolière. Notre expertise en inspection, audit et évaluation des stations de forage RIG nous permet de garantir la sécurité, la fiabilité et la conformité de ces structures essentielles.
               </p>
               <p className="text-lg text-black leading-relaxed mr-10 pr-5 ">
               Notre équipe de professionnels hautement qualifiés est spécialisée dans l'accompagnement et l'inspection des RIG, s'assurant que les installations respectent les normes de sécurité et les réglementations en vigueur. Nous offrons des services complets d'audit et d'inspection pour évaluer la conformité des équipements, la gestion des risques et la qualité des opérations.
Que ce soit pour une inspection régulière, un suivi technique ou une évaluation globale, ALCOEN est votre partenaire de confiance pour optimiser la performance et la sûreté de vos stations de forage RIG. Nous mettons en œuvre des solutions sur mesure pour répondre à vos besoins spécifiques et vous aider à atteindre vos objectifs en toute tranquillité d'esprit. Faites confiance à notre expertise éprouvée pour garantir l'efficacité et le succès de vos opérations de forage.
               </p>
          </section>
          <section className="col-start-2 ml-10 col-span-10 my-10 ">
               <h2 className="text-secondary font-semibold text-5xl">
                    Maison <span className="text-primary">d'Alcoen</span>
               </h2>
               <ul className="ml-10 mr-5 px-4 ">
                    <li className="text-black leading-relaxed flex relative items-center mt-5 mb-2 gap-x-2 text-lg  ">
                         <img src={listIcone} alt="icone" className='top-3 absolute' />
                         <p className='px-8 pt-2'>Sécurité: Evalue les politiques, les procédures de sécurité. Cela comprend l'examen des pratiques de prévention des accidents, formation du personnel, la gestion des situations d'urgence et de sécurité incendie.
                         </p>
                    </li>
                    <li className="text-black leading-relaxed relative text-lg flex items-center mb-2  gap-x-2">
                    <img src={listIcone} alt="icone" className='top-3 absolute' />     
                    <p className='px-8 pt-2'>Conformité réglementaire : Cela peut inclure les réglementations sur la santé, la sécurité, l'environnement, l'exploitation des ressources naturelles, etc.</p>
                    </li>
                    <li className="text-black relative leading-relaxed text-lg flex items-center mb-2 gap-x-2">
                    <img src={listIcone} alt="icone" className='top-3 absolute'  />
                   
                    <p className='px-8 pt-2'>
                         L'audit examine l'état de l'équipement de forage, y compris les plates-formes de forage, 
                         les équipements de levage, les systèmes de contrôle, les systèmes de sécurité, etc. Il vérifie également la mise en œuvre des procédures de maintenance préventive et corrective.
                    </p>

                    </li>  
                    <li className="text-black leading-relaxed text-lg relative flex items-center mb-2 gap-x-2">
                    <img src={listIcone} alt="icone" className='absolute top-3' />
                    <p className='px-8 pt-2'>
                    Gestion risques: Identifie et évalue les risques potentiels associés aux opérations de forage. Cela comprend l'analyse des procédures, des plans d'intervention
                    d'urgence et des mesures de prévention des incidents.
  
                    </p>
                    </li>  
                    <li className="text-black leading-relaxed relative text-lg flex items-center mb-2 gap-x-2">
                    <img src={listIcone} alt="icone" className='absolute top-3' />
                    <p className='px-8 pt-2'>
                    Performances opérationnelles : Evaluation des performances générales de la station de forage RIG, y compris la productivité, l'efficacité des opérations, la gestion
                    des coûts, la gestion des stocks et la conformité aux objectifs de production
                    </p>
                    </li> 
                    <li className="text-black leading-relaxed relative text-lg flex items-center my-10 gap-x-2">
                    <img src={listIcone} alt="icone" className='absolute top-3' />
                    <p className='px-8 pt-2'>
                         Une fois l'audit réalisé, un rapport détaillé est généralement produit, mettant en évidence les domaines de conformité et d'amélioration (Action trackerATK), ainsi
                         que les recommandations spécifiques pour remédier aux problèmes identifiés. Ces recommandations peuvent concerner des ajustements de procédures, des
                         investissements dans l'équipement, des formations supplémentaires du personnel, ou d'autres mesures visant à renforcer la sécurité et l'efficacité des opérations
                         de forage
                    </p>
                    </li>  
                                 

               </ul>

          </section>
     </div>
     </>)
}