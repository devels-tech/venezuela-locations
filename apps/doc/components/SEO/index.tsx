import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
 
export const SEOComponentHead = () => {
  const { asPath, defaultLocale, locale } = useRouter()
  const configDoc = useConfig()

  const url = 'https://venezuela-locations.vercel.app' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
  const title = `${ configDoc.title } - Venezuela API Locations` || 'Venezuela API Locations'
  const description = 'Venezuela API Locations'

  return <>
    <meta http-equiv='Content-Language' content='es' />

    <meta property='og:url' content={ url } />
    <meta property='og:title' content={ title } />
    <meta property='og:description' content={ description } />

    <title>{ title }</title>
    <meta property='description' content={ description } />
  </>
}