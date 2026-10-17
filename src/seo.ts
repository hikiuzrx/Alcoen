import { services } from './data/services'

export const SITE_NAME = 'Alcoen'
export const BASE_TITLE = "Alcoen | Assurer l'avenir, inspirer l'excellence"
export const BASE_DESCRIPTION =
  "ALCOEN : inspection réglementaire, contrôles non destructifs, expertise, assistance technique et formation pour les secteurs de l'énergie et de l'industrie en Algérie."

interface PageMeta {
  title: string
  description: string
}

const pages: Record<string, PageMeta> = {
  '/': { title: BASE_TITLE, description: BASE_DESCRIPTION },
  '/a-propos': {
    title: 'À propos | Alcoen',
    description:
      "Découvrez ALCOEN, acteur de l'inspection, de l'expertise et de l'ingénierie en Algérie : plus de vingt ans d'expérience au service de l'énergie et de l'industrie.",
  },
  '/service': {
    title: 'Services | Alcoen',
    description:
      "Inspection réglementaire, contrôles non destructifs, expertise ATEX, assistance technique, mise à disposition de personnel et formations API et CND : tous les services d'ALCOEN.",
  },
  '/secteur': {
    title: 'Secteurs | Alcoen',
    description:
      "ALCOEN accompagne les secteurs du pétrole et du gaz, de l'énergie, de l'industrie, du transport et de l'assurance avec des solutions d'inspection et d'expertise fiables.",
  },
  '/contact': {
    title: 'Contact | Alcoen',
    description:
      "Contactez ALCOEN à El Marsa, Alger : rue Principale, villa n° 96. Téléphone +213 (0) 661 570 030. Une équipe à votre écoute pour vos projets d'inspection et d'expertise.",
  },
}

export function getPageMeta(pathname: string): PageMeta {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (pages[path]) return pages[path]
  const slug = path.startsWith('/service/') ? path.slice('/service/'.length) : null
  const service = slug ? services.find((s) => s.slug === slug) : undefined
  if (service) {
    return {
      title: `${service.title} | Alcoen`,
      description: `${service.title} : service proposé par ALCOEN en Algérie pour les secteurs de l'énergie et de l'industrie. Demandez un devis.`,
    }
  }
  return { title: BASE_TITLE, description: BASE_DESCRIPTION }
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

export function applySeo(pathname: string) {
  const { title, description } = getPageMeta(pathname)
  const path = pathname.replace(/\/+$/, '') || '/'
  const url = `${window.location.origin}${path}`

  document.title = title
  setMeta('meta[name="description"]', 'name', 'description', description)
  setMeta('meta[property="og:title"]', 'property', 'og:title', title)
  setMeta('meta[property="og:description"]', 'property', 'og:description', description)
  setMeta('meta[property="og:url"]', 'property', 'og:url', url)
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

  setMeta('meta[name="robots"]', 'name', 'robots', sitemapPaths.includes(path) ? 'index, follow' : 'noindex, follow')

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = url
}

/** Public paths listed in sitemap.xml */
export const sitemapPaths = ['/', '/a-propos', '/service', '/secteur', '/contact', ...services.map((s) => `/service/${s.slug}`)]
