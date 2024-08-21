import listIcone from '../../assets/list-icone.svg'
export default function CRAML(){
     return(<>
     <div className="grid grid-cols-12">
          <section className="col-start-2 my-10 ml-10 col-span-10">
               <h2 className="text-primary leading-normal font-semibold mb-10 text-5xl">
               Contrôle réglementaire des appareils de manutention et levage
               </h2>
               <p className="text-lg text-black leading-relaxed mr-10 pr-5 ">
               Le contrôle réglementaire des appareils de manutention et levage est une obligation légale qui vise à garantir la sécurité des travailleurs et des biens lors de l'utilisation de ces équipements. 
               Les appareils de manutention et levage sont des machines ou des accessoires qui permettent de déplacer, soulever ou stocker des charges. Ils peuvent être fixes ou mobiles, manuels ou motorisés, et sont utilisés dans de nombreux secteurs d'activité, comme le bâtiment, l'industrie, le commerce ou l'agriculture. Parmi les exemples les plus courants, on peut citer les chariots élévateurs, les grues, les ponts roulants, les palans, les élingues ou les harnais.
               Ces appareils présentent des risques importants pour la santé et la sécurité des travailleurs et des tiers, comme les chutes de charges, les renversements, les écrasements, les heurts ou les électrocutions. C'est pourquoi ils doivent faire l'objet d'un contrôle réglementaire périodique par un organisme agréé, qui vérifie leur conformité aux normes techniques et leur bon état de fonctionnement.
               </p>
               <p className="text-lg text-black leading-relaxed mr-10 pr-5 ">
               Le contrôle réglementaire des appareils de manutention et levage doit être effectué au moins une fois par an, ou plus fréquemment selon le type d'appareil, son usage et son environnement. Il comprend une vérification visuelle, une vérification fonctionnelle et une vérification des documents relatifs à l'appareil (notice d'instructions, carnet d'entretien, certificat de conformité, etc.). Le contrôleur délivre ensuite un rapport de vérification qui atteste du résultat du contrôle (favorable ou défavorable) et qui mentionne les éventuelles anomalies ou recommandations.
               Le respect du contrôle réglementaire des appareils de manutention et levage est une obligation légale qui incombe au chef d'entreprise ou au responsable du site où se trouvent les appareils. En cas de non-respect, il s'expose à des sanctions pénales (amende, emprisonnement) et civiles (responsabilité en cas d'accident). Il doit donc veiller à ce que les appareils soient contrôlés dans les délais impartis et à ce que les rapports de vérification soient conservés pendant au moins cinq ans.
               </p>
               <p className='text-lg text-black leading-relaxed mr-10 pr-5'>
               Le contrôle réglementaire des appareils de manutention et levage est donc un élément essentiel pour assurer la sécurité des travailleurs et des biens lors de l'utilisation de ces équipements. Il permet également de prévenir les pannes, d'optimiser la performance et la durée de vie des appareils, et de se conformer à la réglementation en vigueur. 
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
                              Vérifier l’état général, et la conformité desAPL aux normes techniques,
                              ainsi que leur fonctionnement sécurisé, y compris la vérification du
                              dossier technique constructeur.

                         </p>
                    </li>
                    <li className="text-black leading-relaxed relative  text-lg flex items-center my-5  gap-x-2">
                    <img src={listIcone} alt="icone" className='top-3 absolute' />     
                    <p className='px-8 pt-2'>
                    Essais et vérifications fonctionnelles sans et avec charge.
                    </p>
                    </li>
                    <li className="text-black relative  leading-relaxed text-lg flex items-center my-5 gap-x-2">
                    <img src={listIcone} alt="icone" className='top-3 absolute'  />
                   
                    <p className='px-8 pt-2'>
                         Assister aux épreuves statique/dynamique pour évaluer la capacité de
                         levage desAPL et vérifier leur résistance.
                    </p>

                    </li>  
                    <li className="text-black leading-relaxed text-lg relative  flex items-center my-5 gap-x-2">
                    <img src={listIcone} alt="icone" className='absolute top-3' />
                    <p className='px-8 pt-2'>
                              Contrôler et vérifier les dispositifs de sécurité, tels que les limiteurs de
                              charge, course, les freins, les dispositifs de verrouillage, etc. 
                    </p>
                    </li>  
                    <li className="text-black leading-relaxed relative  text-lg flex items-center my-5 gap-x-2">
                    <img src={listIcone} alt="icone" className='absolute top-3' />
                    <p className='px-8 pt-2'>
                         Vérification l’adéquation desAPL, évaluation des risques ainsi que la
                         sensibilisation du personnel.
                    </p>
                    </li> 
                    <li className="text-black leading-relaxed relative  text-lg flex items-center my-5 gap-x-2">
                    <img src={listIcone} alt="icone" className='absolute top-3' />
                    <p className='px-8 pt-2'>
                         Renseigner le registre de sécurité les anomalies les plus pertinante pour
                         y remédiation urgente de la part du Client
                    </p>
                    </li>  
                                 

               </ul>

          </section>
     </div>
     </>)
}