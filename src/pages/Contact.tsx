import PageHeader from "../components/PageHeader"
import { Form, useActionData, useNavigation } from "react-router-dom"
import type { ContactResult } from "./contactAction"
import sns from '../assets/Contact/social media.svg'
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
               <section className="relative my-10 px-4 py-14 md:py-20 bg-[url('/Contact1.webp')] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-other/60" aria-hidden="true" />
                    <div className="relative mx-auto grid max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl lg:grid-cols-5">
                         <aside className="flex flex-col justify-between gap-8 bg-other p-8 text-white lg:col-span-2 md:p-10">
                              <div>
                                   <img loading="lazy" src={logow} alt="ALCOEN" className="w-40 brightness-0 invert" />
                                   <h2 className="mt-8 text-2xl font-semibold md:text-3xl">Parlons de votre projet</h2>
                                   <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">Votre connexion vers des solutions expertes et fiables, à un clic de distance.</p>
                              </div>
                              <ul className="space-y-4 text-sm text-white/90">
                                   <li><span className="block text-xs uppercase tracking-wider text-primary">Adresse</span>Rue Principale, Villa N° 96<br />El Marsa (ex Jean Bart), Alger</li>
                                   <li><span className="block text-xs uppercase tracking-wider text-primary">Téléphone</span>+213 (0) 661 570 030</li>
                              </ul>
                         </aside>
                         <Form ref={formRef} method="post" action="" className="grid grid-cols-2 gap-4 p-6 text-sm text-other md:p-10 md:text-base lg:col-span-3">
                              <input required type="text" placeholder="Nom de l'entreprise" aria-label="Nom de l'entreprise" autoComplete="organization" name="Entreprise" className="col-span-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-other placeholder:text-gray-400 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15" />
                              <input required type="text" placeholder="Nom" aria-label="Nom" autoComplete="family-name" name="lastName" className="col-span-2 sm:col-span-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-other placeholder:text-gray-400 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15" />
                              <input required type="text" placeholder="Prénom" aria-label="Prénom" autoComplete="given-name" name="firstName" className="col-span-2 sm:col-span-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-other placeholder:text-gray-400 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15" />
                              <input required type="email" placeholder="E-mail" aria-label="E-mail" autoComplete="email" name="email" className="col-span-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-other placeholder:text-gray-400 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15" />
                              <input required type="tel" placeholder="Téléphone" aria-label="Téléphone" autoComplete="tel" name="phoneNumber" className="col-span-2 sm:col-span-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-other placeholder:text-gray-400 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15" />
                              <input required type="text" placeholder="Pays" aria-label="Pays" autoComplete="country-name" name="country" className="col-span-2 sm:col-span-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-other placeholder:text-gray-400 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15" />
                              <textarea name="message" required rows={5} placeholder="Votre message..." aria-label="Votre message" className="col-span-2 resize-none w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-other placeholder:text-gray-400 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15"></textarea>
                              <label htmlFor="uClient" className="col-span-2 flex cursor-pointer gap-3 text-sm text-secondary">
                                   <input type="checkbox" id="uClient" name="uClient" className="mt-0.5 size-5 shrink-0 cursor-pointer accent-primary" />
                                   <span>Je souhaite être informé(e) des événements, actualités, produits et services <span className="font-semibold">d'ALCOEN</span></span>
                              </label>
                              <label htmlFor="sCopy" className="col-span-2 flex cursor-pointer gap-3 text-sm text-secondary">
                                   <input type="checkbox" id="sCopy" name="sCopy" className="mt-0.5 size-5 shrink-0 cursor-pointer accent-primary" />
                                   <span>Envoyez une copie de ce message à mon adresse e-mail.</span>
                              </label>
                              <button type="submit" disabled={sending} className="col-span-2 mt-2 cursor-pointer rounded-lg border-none bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 active:bg-other disabled:cursor-not-allowed disabled:opacity-60 md:text-lg">{contact}</button>
                              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                              {result && !result.ok && (
                                   <p role="alert" className="col-span-2 text-center font-medium text-primary">{result.error}</p>
                              )}
                         </Form>
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
                                   Rue Principale, Villa N° 96,
                                   El Marsa Ex Jean Bart, Alger; Algérie
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
                    <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 overflow-hidden rounded-2xl shadow-lg">
                         <iframe
                              title="Carte de localisation d'ALCOEN à El Marsa, Alger"
                              src="https://www.openstreetmap.org/export/embed.html?bbox=3.2356%2C36.8011%2C3.2756%2C36.8211&layer=mapnik&marker=36.8111%2C3.2556"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="block h-80 w-full border-0 md:h-[28rem]"
                         />
                         <a href="https://www.openstreetmap.org/?mlat=36.8111&mlon=3.2556#map=15/36.8111/3.2556" target="_blank" rel="noopener noreferrer" className="block bg-other py-3 text-center text-sm font-medium text-white hover:text-primary">Ouvrir la carte en grand</a>
                    </div>
                    <div className="col-start-3 col-span-8 flex justify-center my-10 mb-20">
                         <img loading="lazy" src={logo} alt="" className="rounded-xl" />
                    </div>
               </section>
          </div>
          </>
          
     )
}
