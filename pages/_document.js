import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    return (
      <Html lang='es' dir={dir}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5433W6D4)'
              `,
            }}
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
            rel='stylesheet'
          />
          <link
            rel='icon'
            type='image/png'
            href='/images/favicon_construtec.png'
          ></link>

          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-1EDCC90MBH'
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());
                gtag('config', 'G-1EDCC90MBH');
              `,
            }}
          />
        </Head>
        <body>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-5433W6D4'
            title='Google Tag Manager'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
