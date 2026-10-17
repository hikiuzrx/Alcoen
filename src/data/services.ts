export interface ServiceInfo {
  /** ASCII URL slug, served at /service/<slug> */
  slug: string
  /** Key of the page component in App.tsx */
  code: string
  /** Title shown in the service page header */
  title: string
  /** Short label shown on the home slider */
  sliderTitle: string
  /** Header background, served from /public */
  headerImage: string
  /** Former (accented) URL, kept so old links still work */
  legacyPath: string
}

export const services: ServiceInfo[] = [
  { slug: 'inspection-reglementaire-esp', code: 'IRESP', title: 'Inspection Réglementaire ESP', sliderTitle: 'Inspection Réglementaire ESP', headerImage: '/services/IRESP.webp', legacyPath: 'Inspection-Réglementaire-ESP' },
  { slug: 'controle-non-destructifs', code: 'CND', title: 'Contrôle non destructifs', sliderTitle: 'Contrôle Non Destructifs', headerImage: '/services/CND.webp', legacyPath: 'Contrôle-Non-Destructifs' },
  { slug: 'rig-service', code: 'RIGS', title: 'RIG service', sliderTitle: 'RIG Service', headerImage: '/services/RIGS.webp', legacyPath: 'RIG-service' },
  { slug: 'controle-reglementaire-appareils-manutention-levage', code: 'CRAML', title: 'Contrôle réglementaire des appareils de manutention et levage', sliderTitle: 'Contrôle réglementaire des appareils de manutention et levage', headerImage: '/services/CRAML.webp', legacyPath: 'Contrôle-réglementaire-des-appareils-de-manutention-et-levage' },
  { slug: 'expertise-audit-atex', code: 'EATA', title: 'Expertise et audit type ATEX', sliderTitle: 'Expertise et audit type ATEX', headerImage: '/services/EATA.webp', legacyPath: 'Expertise-et-audit-type-ATEX' },
  { slug: 'inspection-marchandises-avant-expedition', code: 'IMAE', title: 'Inspection marchandises avant expédition', sliderTitle: 'Inspection marchandise avant expédition', headerImage: '/services/IMAE.webp', legacyPath: 'Inspection-marchandises-avant-expédition' },
  { slug: 'controle-reglementaire-equipements-installations-electriques', code: 'CREIE', title: 'Contrôle réglementaire des équipement & installations électriques', sliderTitle: 'Contrôle réglementaire des équipements & installations électriques', headerImage: '/services/CREIE.webp', legacyPath: 'Contrôle-réglementaire-des-équipement-&-installations-électriques' },
  { slug: 'expertise-assurance-reassurance', code: 'EAER', title: 'Expertise assurance et réassurance', sliderTitle: 'Expertise assurance et réassurance', headerImage: '/services/EAER.webp', legacyPath: 'Expertise-assurance-et-réassurance' },
  { slug: 'mise-a-disposition-du-personnel', code: 'MADDP', title: 'Mise à disposition du personnel', sliderTitle: 'Mise à disposition du personnel', headerImage: '/services/MADDP.webp', legacyPath: 'Mise-à-disposition-du-personnel' },
  { slug: 'assistance-technique', code: 'AT', title: 'Assistance technique', sliderTitle: 'Assistance technique', headerImage: '/services/AT.webp', legacyPath: 'Assistance-technique' },
  { slug: 'formation-api', code: 'FAPI', title: 'Formation : API 510, 570, 579, 653...etc.', sliderTitle: 'Formation API', headerImage: '/services/FAPI.webp', legacyPath: 'Formation-API-510-,-570,-,-579-,-653...etc.' },
  { slug: 'formation-cnd', code: 'FCND', title: 'Formation CND LI & LII renouvellement certificat', sliderTitle: 'Formation CND', headerImage: '/services/FCND.webp', legacyPath: 'Formation-CND-LI-&-LII-renouvellement-certificat' },
  { slug: 'formation-sensibilisation', code: 'FES', title: 'Formation et sensibilisation', sliderTitle: 'Formation et sensibilisation', headerImage: '/services/FES.webp', legacyPath: 'Formation-et-sensibilisation' },
]

export const servicePath = (code: string) => {
  const s = services.find((x) => x.code === code)
  if (!s) throw new Error(`Unknown service code: ${code}`)
  return `/service/${s.slug}`
}
