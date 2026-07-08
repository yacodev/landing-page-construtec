import React from 'react';
import Head from 'next/head';
import GoTop from './GoTop';
import Preloader from './Preloader';

const SITE_URL = 'https://construtecperu.com';
const SITE_TITLE =
  'Construtec | Software para gestion de almacenes y valorizaciones de obra';
const SITE_DESCRIPTION =
  'Construtec ayuda a constructoras y entidades publicas a gestionar almacenes de obra, inventarios, metrados, reportes y valorizaciones desde una plataforma SaaS.';
const SITE_IMAGE = `${SITE_URL}/images/saas-img/saas-lp-display-construtec.png`;

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Construtec',
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo_construtec.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+51 932001032',
        contactType: 'sales',
        areaServed: 'PE',
        availableLanguage: 'es',
      },
      sameAs: [
        'https://www.facebook.com/ConstrutecPeru3',
        'https://www.linkedin.com/company/constructec-perú',
        'https://www.youtube.com/channel/UCuquY3djKK46Enk6MNKIulw',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software`,
      name: 'Construtec',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: SITE_URL,
      image: SITE_IMAGE,
      description: SITE_DESCRIPTION,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'PEN',
        availability: 'https://schema.org/InStock',
      },
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Construtec',
      description: SITE_DESCRIPTION,
      inLanguage: 'es-PE',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
  ],
};

const Layout = ({ children }) => {
  // Preloader
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='description' content={SITE_DESCRIPTION} />
        <meta
          name='keywords'
          content='software para gestion de almacenes, valorizaciones de obra, almacen de obra, inventario de materiales, gestion de obras, metrados, reportes de obra'
        />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Construtec' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='es_PE' />
        <meta property='og:site_name' content='Construtec' />
        <meta property='og:title' content={SITE_TITLE} />
        <meta property='og:description' content={SITE_DESCRIPTION} />
        <meta property='og:url' content={`${SITE_URL}/`} />
        <meta property='og:image' content={SITE_IMAGE} />
        <meta
          property='og:image:alt'
          content='Panel de Construtec para gestion de almacenes y valorizaciones de obra'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={SITE_TITLE} />
        <meta name='twitter:description' content={SITE_DESCRIPTION} />
        <meta name='twitter:image' content={SITE_IMAGE} />
        <link rel='canonical' href={`${SITE_URL}/`}></link>
        <link rel='alternate' hrefLang='es-PE' href={`${SITE_URL}/`} />
        <link rel='alternate' hrefLang='x-default' href={`${SITE_URL}/`} />
        <script src='https://getlaunchlist.com/js/widget.js' defer></script>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      {children}

      {loader ? <Preloader /> : null}

      <GoTop scrollStepInPx='100' delayInMs='10.50' />
    </>
  );
};

export default Layout;
