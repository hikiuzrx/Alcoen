import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { sitemapPaths, BASE_DESCRIPTION } from './src/seo'

const organization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ALCOEN',
  description: BASE_DESCRIPTION,
  telephone: ['+213661570030', '+213770643051'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rue Principale, Villa N° 96',
    addressLocality: 'El Marsa',
    addressRegion: 'Alger',
    addressCountry: 'DZ',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 36.8111, longitude: 3.2556 },
  areaServed: 'DZ',
}

// Set VITE_SITE_URL (e.g. https://www.example.dz) at build time to get absolute
// canonical/og URLs, sitemap.xml and the robots.txt Sitemap line.
function seo(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/+$/, '')
  return {
    name: 'alcoen-seo',
    transformIndexHtml() {
      const tags: { tag: string; attrs?: Record<string, string>; children?: string; injectTo: 'head' }[] = [
        { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify({ ...organization, ...(base && { url: base, logo: `${base}/favicon.png` }) }), injectTo: 'head' },
      ]
      if (base) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: `${base}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: `${base}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image', content: `${base}/favicon.png` }, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'twitter:image', content: `${base}/favicon.png` }, injectTo: 'head' },
        )
      }
      return tags
    },
    generateBundle() {
      if (!base) {
        this.warn('VITE_SITE_URL is not set: sitemap.xml and absolute canonical/og URLs were skipped.')
        return
      }
      const urls = sitemapPaths.map((p) => `  <url><loc>${base}${p === '/' ? '/' : p}</loc></url>`).join('\n')
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n` })
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n` })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: { port: 3000 },
    plugins: [react(), seo(env.VITE_SITE_URL ?? '')],
  }
})
