import listIcone from '../../assets/list-icone.svg'
export default function CND(){
     return(<>

     <div className="grid grid-cols-12">
          <section className="col-start-2 my-10 ml-10 col-span-10">
               <h2 className="text-primary font-semibold mb-10 text-5xl">
               Contrôle non destructifs
               </h2>
               <p className="text-lg text-black leading-relaxed mr-10 pr-5 ">
               Le contrôle non destructif (CND) est une méthode qui permet de vérifier l'intégrité, la qualité ou la conformité d'un matériau, d'une pièce ou d'un assemblage sans le détériorer ou le modifier. Le CND est utilisé dans de nombreux domaines industriels, tels que l'aéronautique, le nucléaire, le pétrole, la construction ou l'automobile.

               </p>
               <p className="text-lg text-black leading-relaxed mr-10 pr-5 ">
               Le CND repose sur l'utilisation de différentes techniques qui exploitent les propriétés physiques des matériaux, comme la réflexion, la réfraction, la diffraction ou l'absorption des ondes. Parmi les techniques les plus courantes, on peut citer :
               
               </p>
               <h4 className='text-primary text-lg font-semibold my-2'>La radiographie</h4>
               <p className="text-lg text-black leading-relaxed mr-10 pr-5 ">
               Elle consiste à faire passer des rayons X ou gamma à travers le matériau et à observer l'image obtenue sur un film ou un écran. Cette technique permet de détecter des défauts internes, comme des fissures, des porosités ou des inclusions.
               </p>
               <h4 className='text-primary text-lg font-semibold my-2'>L'ultrason</h4>
               <p className='text-lg  text-black leading-relaxed'>
               Il s'agit d'émettre des ondes sonores de haute fréquence (supérieure à 20 kHz) et de mesurer le temps de parcours ou l'amplitude des échos renvoyés par le matériau. Cette technique permet de mesurer l'épaisseur, la vitesse ou la densité du matériau, ainsi que de localiser des défauts internes ou externes.
               </p>
               <h4 className='text-primary text-lg font-semibold my-2'>Le magnétoscopie </h4>
               <p className='text-lg text-black leading-relaxed'>
               Elle consiste à aimanter le matériau et à révéler les défauts de surface ou proches de la surface par l'application d'une poudre magnétique. Cette technique permet de détecter des discontinuités ferromagnétiques, comme des criques, des piqûres ou des soudures.

               </p>
               <h4 className='text-primary text-lg font-semibold my-2'>Le ressuage</h4>
               <p className='text-black leading-relaxed text-lg'>
               Il s'agit d'appliquer un liquide pénétrant sur le matériau et de le faire ressortir par capillarité après un temps d'attente. Le liquide pénétrant est ensuite rendu visible par un révélateur. Cette technique permet de détecter des défauts de surface, comme des fissures, des pores ou des rayures.

               </p>
               <p className='text-black text-lg leading-relaxed my-10'>
               Le CND présente de nombreux avantages, comme :
               <ul>
                    <li><span className='text-xl'>-</span> La préservation du matériau et de ses propriétés mécaniques</li>
                    <li><span className='text-xl'>-</span> La réduction des coûts et des délais de contrôle</li>
                    <li><span className='text-xl'>-</span> La fiabilité et la sécurité des installations et des équipements</li>
                    <li><span className='text-xl'>-</span> La prévention des accidents et des risques environnementaux</li>
               </ul>
               </p>
               <p className='text-lg text-black leading-relaxed '>Le CND est donc une méthode essentielle pour garantir la qualité et la performance des produits industriels.</p>


          </section>
          <section className="col-start-2 ml-10 col-span-10 my-10 ">
               <h2 className="text-secondary font-semibold text-5xl">
                    Maison <span className="text-primary">d'Alcoen</span>
               </h2>
               <ul className="ml-10 mr-5 p-4 ">
                    <li className="text-black leading-relaxed flex items-center my-10 gap-x-2 text-lg  ">
                         <img src={listIcone} alt="icone" className='pb-2  mb-4' />
                         <p className=''>
                         Contrôle Non Destructifs conventionnel: Visual testing (VT); Ressuage (PT);Magnétique (MT); Mesure d’épaisseur par ultrason (ME); contrôle de défaut
                         par ultrason, y compris corrosion mapping
                         </p>
                    </li>
                    <li className="text-black leading-relaxed text-lg flex items-center my-10 gap-x-2">
                    <img src={listIcone} alt="icone" className='' />     
                    Contrôle Non Destructifs avancé, tels que PhasedArray Ultrasonics (PAUT), Le TOFD (Time-of-Flight Diffraction)
                    </li>
                    <li className="text-black leading-relaxed text-lg flex items-center my-10 gap-x-2">
                    <img src={listIcone} alt="icone"  />
                    PMI (Positive Matériel Identification)

                    </li>  
                    <li className="text-black leading-relaxed text-lg flex items-center my-10 gap-x-2">
                    <img src={listIcone} alt="icone" className='' />
                    Dureté.
                    </li>  
                    <li className="text-black leading-relaxed text-lg flex items-center my-10 gap-x-2">
                    <img src={listIcone} alt="icone" className='' />
                    Réplique métallographique
                    </li>               
               </ul>

          </section>
     </div>
     </>)
}