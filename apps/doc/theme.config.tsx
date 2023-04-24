import { DocsThemeConfig } from 'nextra-theme-docs'
import { SEOComponentHead } from './components/SEO'

const config: DocsThemeConfig = {
  logo: <span>Venezuela API Locations</span>,
  project: {
    link: 'https://github.com/devels-tech/venezuela-locations',
  },
  docsRepositoryBase: 'https://github.com/devels-tech/venezuela-locations',
  footer: {
    text: 'Venezuela API Locations - Devels Technology',
  },
  search: {
    component: () => {}
  },
  useNextSeoProps: () => ({
    titleTemplate: '%s \u2013 Venezuela API Locations',
    twitter: { cardType: 'summary_large_image', site: '@develstech' }
  }),
  editLink: { text: '' },
  feedback: {
    content: '¿Preguntas? Danos tu feedback →',
    useLink: ((...args) => 'https://devels.tech')
  },
  toc: {
    title: 'Secciones'
  },
  head: SEOComponentHead,
}

export default config
