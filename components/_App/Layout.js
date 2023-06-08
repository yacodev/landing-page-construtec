import React from 'react';
import Head from 'next/head';
import GoTop from './GoTop';
import Preloader from './Preloader';

const Layout = ({ children }) => {
  // Preloader
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  return (
    <>
      <Head>
        <title>Constructec - Software para la construcción</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta
          name='description'
          content='Construtec - Software para la construcción'
        />
        <meta
          name='og:title'
          property='og:title'
          content='Construtec - Software para la construcción'
        ></meta>
        <meta
          name='twitter:card'
          content='Construtec - Software para la construcción'
        ></meta>
        <link rel='canonical' href='https://construtecperu.com/'></link>
        <script src='https://getlaunchlist.com/js/widget.js' defer></script>
      </Head>

      {children}

      {loader ? <Preloader /> : null}

      <GoTop scrollStepInPx='100' delayInMs='10.50' />
    </>
  );
};

export default Layout;
