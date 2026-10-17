import PageHeader from "../components/PageHeader"
import { Form, useActionData, useNavigation } from "react-router-dom"
import type { ContactResult } from "./contactAction"
import "../styles/checkBox.css"
import sns from '../assets/Contact/social media.svg'
import map from '../assets/Contact/contact-map.webp'
import logo from "../assets/Contact/big logo.png"
import logow from '../assets/logo svg.svg'
import { useEffect, useRef } from "react"

export function  Contact(){

     const result = useActionData() as ContactResult | undefined
     const navigation = useNavigation()
     const formRef = useRef<HTMLFormElement>(null)
     const sending = navigation.state !== 'idle'
     const contact = sending ? 'Envoi...' : result?.ok ? 'Message Envoyé' : 'Envoyer'
     const Header = {part1:'CONTACTER',part2:'NOUS'}

     useEffect(() => {
          if (result?.ok) formRef.current?.reset()
     }, [result])
     return (
          <>
          <div className="relative top-20 mb-10">
               <PageHeader Header={Header}/>
               <section className=" max-h-[1002px] overflow-hidden my-10 bg-[url('/Contact1.webp')] bg-cover bg-no-repeat flex justify-center">
                    <div className="p-4 bg-white rounded-xl my-10 lg:w-1/3 md:w-1/2 xs:w-2/3">
                         <Form ref={formRef} method="post" action="" className="grid grid-cols-2 gap-2 text-other md:text-base xs:text-xs ">
                              <input required type="text" placeholder="Nom de l'entreprise" aria-label="Nom de l'entreprise" autoComplete="organization" name="Entreprise" className="col-span-2 rounded-xl bg-white border-2 border-gray-500 p-2" />
                              <input required type="text" placeholder="Nom" aria-label="Nom" autoComplete="family-name" name="lastName" className="bg-white rounded-xl col-span-1 border-2 border-gray-500 p-2" />
                              <input required type="text" placeholder="Prénom" aria-label="Prénom" autoComplete="given-name" name="firstName" className="bg-white rounded-xl col-span-1 border-2 border-gray-500 p-2"/>
                              <input required type="email" placeholder="E-mail" aria-label="E-mail" autoComplete="email" name="email" className="bg-white rounded-xl border-2 border-gray-500 col-span-2 p-2" />
                              <input required type="tel" placeholder="Téléphone" aria-label="Téléphone" autoComplete="tel" name="phoneNumber" className="bg-white rounded-xl border-2 border-gray-500 col-span-1 p-2" />
                              <input required type="text" placeholder="Pays" aria-label="Pays" autoComplete="country-name" name="country" className="bg-white rounded-xl border-2 border-gray-500 col-span-1 p-2" />
                              <textarea name="message" required className="w-full md:h-64 xs:h-48 p-4 md:text-lg xs:text-xs leading-6 border-2 border-gray-500 resize-none overflow-hidden col-span-2 bg-white text-other rounded-xl break-words whitespace-pre-wrap" placeholder="Votre message..." aria-label="Votre message"></textarea>
                              <div className="col-span-2 flex gap-3 mt-2">
                              <input type="checkbox" id="uClient" name="uClient" className="w-8 h-5 
                              mt-0.5   border-2 opacity-35  after:border-gray-500 rounded-md checked:opacity-100 accent-primary forced-color-adjust-none peer-checked:border-other" />
                              <label htmlFor="uClient" className="text-other md:text-base xs:text-xs  ">Je souhaite être informé(e) des événements, actualités, produits et services <span className="font-semibold">d'ALCOEN</span> </label>
                              </div>
                              <div className="col-span-2 flex gap-4">
                              <input type="checkbox" id="sCopy" name="sCopy" className="w-7 h-5 md:w-6 -ml-0.5 mt-0.5   border-2 opacity-35  after:border-gray-500 rounded-md checked:opacity-100 accent-primary forced-color-adjust-none peer-checked:border-other  " />
                              <label htmlFor="sCopy" className="text-other md:text-base xs:text-xs ">Envoyez une copie de ce message à mon adresse e-mail. </label>
                              </div>
                              <div className="col-span-2 flex justify-center items-center">
                                   <input type="submit" disabled={sending} className="p-4 md:px-8 xs:px-3 xs:py-2 xs:text-base border-2 bg-primary text-white font-semibold rounded-xl md:text-xl hover:bg-secondary active:bg-other" value={contact}  />
                              </div>
        
                              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                              {result && !result.ok && (
                                   <p role="alert" className="col-span-2 text-center text-primary font-medium">{result.error}</p>
                              )}
                         </Form>
                
                    </div>
                    <div className="flex flex-col justify-end mb-10 lg:mx-5 md:mx-2 lg:w-1/5 xs:w-1/4 md:w-4/12">
                         <img loading="lazy" src={logow} alt="ALCOEN" className="max-w-[252px]" />
                         <p className="text-center lg:text-base md:text-s lg:pr-4 md:pr-2 xs:text-xxs ">Votre connexion vers des solutions expertes et fiables, à un clic de distance.</p>
                    </div>
                   

               </section>
               <section className="my-14">
                    <h2 className="text-secondary text-center font-semibold lg:text-5xl xs:text-2.5xl md:text-4.5xl">
                    N'hésitez pas à nous contacter
                    </h2>
                    <div className="md:mx-10 xs:mx-2 grid grid-cols-12 ">
                    <p className="  md:ml-10 md:col-start-3 md:col-span-7 xs:col-start-2 xs:col-span-10 text-secondary leading-loose md:text-lg xs:text-base font-medium md:text-center    lg:my-10 md:my-7">
                    N'hésitez pas à nous contacter pour toute question, demande d'information ou pour discuter de vos besoins spécifiques. Notre équipe professionnelle est là pour vous fournir l'assistance nécessaire et répondre à vos préoccupations. 
                    </p>
                    </div>
                    <div className="grid grid-cols-12 w-full">
                         <div className="col-start-2 col-span-10 md:flex w-full  mt-4 xs:grid xs:grid-cols-2 
                          md:justify-between xs:justify-around  xs:gap-1 md:gap-4">
                              <div className="md:w-1/4 xs:w-2/3 xs:ml-14 md:ml-0" >
                                   <h3 className="text-primary md:text-center xs:text-start md:ml-0 xs:ml-10 xl:-ml-6 font-semibold md:text-4xl xs:text-1.4xl">Adresse</h3>
                                   <p className="text-secondary md:pl-6 lg:pl-0 md:text-base lg:text-lg md:mt-7 xs:mt-3  xs:text-m leading-relaxed">
                                   Cité Mohamed Boudiaf EPLF Bt5,
                                   N° 4 El Marsa Ex Jen Bart BP2, Alger; Algerie
                                   </p>
                              </div>
                              <div className="md:w-1/4  xs:w-1/2 xs:ml-10">
                              <h3 className="text-primary md:text-center xs:text-center font-semibold md:text-4xl xs:text-1.4xl">Contact</h3>
                                   <p className="text-secondary text-center md:mt-7 xs:mt-4 mb-3 md:text-lg xs:text-m xs:text-nowrap leading-relaxed">
                                   +213 (0) 661 570 030
                                   </p>
                                   <p className="text-secondary text-center md:text-lg xs:text-m xs:text-nowrap leading-relaxed ">+213 (0) 770 643 051</p>
                              </div>
                              <div className="md:w-1/4 xs:w-full xs:col-span-full xs:flex xs:flex-col xs:items-center">
                              <h3 className="text-primary text-center xs:text-nowrap md:text-wrap font-semibold xs:text-1.4xl md:text-4xl">Réseaux Sociaux</h3>
                                  <div className="flex justify-center"><img loading="lazy" src={sns} alt="Réseaux sociaux" className="md:mt-7 xs:mt-4 xs:w-2/3 xl:w-full  justify-self-center" /></div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="grid grid-cols-12 md:gap-y-10 xs:gap-y-2">
                    <div className="col-start-3 col-span-8 overflow-hidden rounded-xl">
                         <img loading="lazy" src={map} alt="Carte de localisation d'ALCOEN" className="rounded-xl" />
                    </div>
                    <div className="col-start-3 col-span-8 flex justify-center my-10 mb-20">
                         <img loading="lazy" src={logo} alt="" className="rounded-xl" />
                    </div>
               </section>
          </div>
          </>
          
     )
}
