import PageHeader from "../components/PageHeader"
import { Form } from "react-router-dom"
import "../styles/checkBox.css"
import sns from '../assets/Contact/social media.svg'
import map from '../assets/Contact/contact-map.png'
import logo from "../assets/Contact/big logo.png"
import logow from '../assets/logo svg.svg'
export function Contact(){
     const  Header = {part1:'CONTACTER',part2:'NOUS'}

     return (
          <>
          <div className="relative top-20 mb-10">
               <PageHeader Header={Header}/>
               <section className="border-2 border-black max-h-[1002px] overflow-hidden my-10 bg-[url('../../public/Contact1.png')] bg-cover bg-no-repeat flex justify-center">
                    <div className="p-4 bg-white rounded-xl my-10 w-1/3">
                         <Form method="post" action="/contact" className="grid grid-cols-2 gap-2 text-other ">
                              <input required type="text" placeholder="Nom de la Companies" name="Entreprise" className="col-span-2 rounded-xl bg-white border-2 border-gray-500 p-2" />
                              <input required type="text" placeholder="Nom" name="lastName" className="bg-white rounded-xl col-span-1 border-2 border-gray-500 p-2" />
                              <input required type="text" placeholder="Prénom" name="firstName" className="bg-white rounded-xl col-span-1 border-2 border-gray-500 p-2"/>
                              <input required type="email" placeholder="E-mail" name="email" className="bg-white rounded-xl border-2 border-gray-500 col-span-2 p-2" />
                              <input required type="tel" placeholder="Téléphone" name="phoneNumber" className="bg-white rounded-xl border-2 border-gray-500 col-span-1 p-2" />
                              <input required type="text" placeholder="Pays" name="country" className="bg-white rounded-xl border-2 border-gray-500 col-span-1 p-2" />
                              <textarea name="message" required className="w-full h-64 p-4 text-lg leading-6 border-2 border-gray-500 resize-none overflow-hidden col-span-2 bg-white text-other rounded-xl break-words whitespace-pre-wrap" placeholder="Type your message here..."></textarea>
                              <div className="col-span-2 flex gap-4">
                              <input required type="checkbox" name="intU" className="w-5 h-5 mt-0.5   border-2 opacity-35  after:border-gray-500 rounded-md checked:opacity-100 accent-primary forced-color-adjust-none peer-checked:border-other peer-checked:border-2" />
                              <label htmlFor="intU" className="text-other  ">Je souhaite être informé(e) des événements, actualités, produits et services <span className="font-semibold">d'ALCOEN</span> </label>
                              </div>
                              <div className="col-span-2 flex gap-4">
                              <input required type="checkbox" name="intU" className="w-5 h-5 mt-0.5   border-2 opacity-35  after:border-gray-500 rounded-md checked:opacity-100 accent-primary forced-color-adjust-none peer-checked:border-other peer-checked:border-2 " />
                              <label htmlFor="intU" className="text-other ">Envoyez une copie de ce message à mon adresse e-mail. </label>
                              </div>
                              <div className="col-span-2 flex justify-center items-center">
                                   <input required type="submit" className="p-4 px-8 border-2 bg-primary text-white font-semibold rounded-xl text-xl hover:bg-secondary active:bg-other" value={"Envoyer"} />
                              </div>
        
                         </Form>
                
                    </div>
                    <div className="flex flex-col justify-end mb-10 mx-5 w-1/5">
                         <img src={logow} alt="logo" className="max-w-[252px]" />
                         <p className="text-center pr-4 ">Votre connexion vers des solutions expertes et fiables, à un clic de distance.</p>
                    </div>
                   

               </section>
               <section className="my-14">
                    <h2 className="text-secondary text-center font-semibold text-5xl">
                    N'hésitez pas à nous contacter
                    </h2>
                    <div className="mx-10 grid grid-cols-12 ">
                    <p className="  ml-10 col-start-3 col-span-7 text-secondary leading-loose text-lg font-medium text-center line-clamp-3  my-10">
                    N'hésitez pas à nous contacter pour toute question, demande d'information ou pour discuter de vos besoins spécifiques. Notre équipe professionnelle est là pour vous fournir l'assistance nécessaire et répondre à vos préoccupations. 
                    </p>
                    </div>
                    <div className="grid grid-cols-12 w-full">
                         <div className="col-start-2 col-span-10 flex justify-between gap-4">
                              <div className="w-1/4">
                                   <h3 className="text-primary text-center font-semibold text-4xl">Adress</h3>
                                   <p className="text-secondary mt-7 line-clamp-4 text-lg leading-relaxed">
                                   Address Cité Mohamed Boudiaf EPLF Bt5,
                                   N° 4 El Marsa Ex Jen Bart BP2, Alger; Algerie
                                   </p>
                              </div>
                              <div className="w-1/4">
                              <h3 className="text-primary text-center font-semibold text-4xl">Contact</h3>
                                   <p className="text-secondary text-center mt-7 mb-3 text-lg leading-relaxed">
                                   +213 (0) 661 570 030
                                   </p>
                                   <p className="text-secondary text-center text-lg leading-relaxed ">+213 (0) 770 643 051</p>
                              </div>
                              <div className="w-1/4">
                              <h3 className="text-primary text-center font-semibold text-4xl">Réseaux Sociaux</h3>
                                  <div className="flex justify-center"><img src={sns} alt="social media" className="mt-7 justify-self-center" /></div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="grid grid-cols-12 gap-y-10">
                    <div className="col-start-3 col-span-8 overflow-hidden rounded-xl">
                         <img src={map} alt="map" className="rounded-xl" />
                    </div>
                    <div className="col-start-3 col-span-8 flex justify-center my-10 mb-20">
                         <img src={logo} alt="map" className="rounded-xl" />
                    </div>
               </section>
          </div>
          </>
          
     )
}