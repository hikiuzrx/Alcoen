import listIcone from '../../assets/list-icone.svg'
export default function IMAE(){
     return(<>
     <div className="grid grid-cols-12">
          <section className="col-start-2 my-10 xs:ml-4 md:ml-10 col-span-10">
               <h2 className="text-primary font-semibold mb-10 xs:text-3.5xl md:text-5xl">
                    Inspection marchandises avant expédition
               </h2>
               <p className="md:text-lg xs:text-s text-black leading-relaxed md:mr-10 xs:mr-4 pr-5 ">
                    L'inspection des marchandises avant l'expédition est une étape importante pour garantir la qualité et la conformité des produits que vous achetez à l'étranger. Elle vous permet de vérifier que les marchandises respectent les spécifications techniques, les normes de sécurité, les exigences réglementaires et les attentes du client. Elle vous permet également de détecter et de corriger les éventuels défauts, non-conformités ou dommages avant que les marchandises ne quittent le pays d'origine.
               </p>
               <p className="md:text-lg xs:text-s text-black leading-relaxed md:mr-10 xs:mr-4 pr-5 ">
                    L'inspection des marchandises avant l'expédition peut être effectuée par vous-même, par un représentant de votre entreprise, par un tiers indépendant ou par le fournisseur lui-même. Le choix du mode d'inspection dépend de plusieurs facteurs, tels que le niveau de confiance que vous avez envers le fournisseur, le type et la valeur des marchandises, le délai et le coût de l'inspection, etc.
               </p>
               <p className='md:text-lg xs:text-s text-black leading-relaxed md:mr-10 xs:mr-4 pr-5'>
                    Quels sont les avantages de l'inspection des marchandises avant l'expédition ?
                    L'inspection des marchandises avant l'expédition présente plusieurs avantages, tels que :
               </p>
               <p className='text-black md:text-lg xs:text-s leading-relaxed md:mr-10 xs:mr-4 pr-5'>
                    <span className='text-xl'>-</span>
                    Réduire les risques de recevoir des marchandises défectueuses, non conformes ou endommagées ;
               </p>
               <p className='text-black md:text-lg xs:text-s leading-relaxed md:mr-10 xs:mr-4 pr-5'>
                    <span className='text-xl'>-</span>
                    Éviter les retards, les litiges, les réclamations ou les pénalités liés à la qualité des marchandises ;
               </p>
               <p className='text-black md:text-lg xs:text-s leading-relaxed md:mr-10 xs:mr-4 pr-5'>
                    <span className='text-xl'>-</span>
                    Renforcer la relation avec le fournisseur et le client en montrant votre professionnalisme et votre souci du détail ;
               </p>
               <p className='text-black md:text-lg xs:text-s leading-relaxed md:mr-10 xs:mr-4 pr-5'>
                    <span className='text-xl'>-</span>
                    Améliorer la satisfaction et la fidélisation du client en lui livrant des marchandises de qualité ;
               </p>
               <p className='text-black md:text-lg xs:text-s leading-relaxed md:mr-10 xs:mr-4 pr-5'>
                    <span className='text-xl'>-</span>
                    Optimiser le processus logistique et réduire les coûts de transport, de stockage et de réparation.
               </p>
               <p className='md:text-lg xs:text-s text-black leading-relaxed md:mr-10 xs:mr-4 pr-5'>
               L'inspection des marchandises avant l'expédition est donc une pratique essentielle pour assurer la qualité et la satisfaction du client.
               </p>
              
          </section>
          <section className="col-start-2 md:ml-10 xs:ml-4 col-span-10 my-10 ">
               <h2 className="text-secondary font-semibold xs:text-3.5xl md:text-5xl">
                    Maison <span className="text-primary">d'Alcoen</span>
               </h2>
               <ul className="md:ml-10 xs:ml-0 mr-5 px-4 ">
                    <li className="text-black leading-relaxed flex relative  items-center my-5 mt-5  gap-x-2 md:text-lg xs:text-s  ">
                         <img src={listIcone} alt="icone" className='top-3 absolute' />
                         <p className='px-8 md:pr-8 xs:pr-4 pt-2'>
                              Vérification de la conformité aux spécifications définies, telles que la quantité, la taille, le poids, la couleur, marquage, les matériaux, les performances techniques,
                              etc. Elle permet de s'assurer que les produits répondent aux critères convenus.
                         </p>
                    </li>
                    <li className="text-black leading-relaxed relative  md:text-lg xs:text-s flex items-center my-5  gap-x-2">
                    <img src={listIcone} alt="icone" className='top-3 absolute' />     
                    <p className='px-8 md:pr-8 xs:pr-4 pt-2'>
                         Détection des défauts et des non-conformités qui pourraient affecter la qualité, l'intégrité ou la fonctionnalité des marchandises. Cela peut inclure des problèmes tels
                         que des fissures, des rayures, des pièces manquantes, des erreurs d'impression, des anomalies de fonctionnement, etc.
                    </p>
                    </li>
                    <li className="text-black relative  leading-relaxed md:text-lg xs:text-s flex items-center my-5 gap-x-2">
                    <img src={listIcone} alt="icone" className='top-3 absolute'  />
                   
                    <p className='px-8 xs:pr-4 md:pr-8 pt-2'>
                         Évaluation l’adéquation de l'emballage et l'étiquetage des marchandises pour assurer leur protection pendant le transport et s'il est conforme aux réglementations en
                         vigueur. L'étiquetage, y compris les étiquettes de produit, les marquages de sécurité, les instructions d'utilisation, est également vérifié pour assurer sa précision et sa
                         conformité.
                    </p>

                    </li>  
                   
               </ul>

          </section>
     </div>
     </>)
}