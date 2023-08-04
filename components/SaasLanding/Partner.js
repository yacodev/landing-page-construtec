import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  dots: false,
  margin: 40,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};

const Partner = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className='partner-area ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <h2>Somos ganadores de Startup Perú 9G+ 2023</h2>
          <p>
            Construtec es un proyecto cofinanciado por el Programa Proinnóvate
            del Ministerio de la Producción, a través del concurso Startup Perú
            donde fuimos ganadores de la edición 9G+ del 2023, bajo el
            acompañamiento de S360
          </p>
        </div>

        {display ? (
          <OwlCarousel
            className='partner-slider owl-carousel owl-theme'
            {...options}
          >
            <div className='partner-slider-item'>
              <a href='#' target='_blank'>
                <img
                  src='/images/partner/partner_ministerio_produccion.png'
                  alt='logo'
                />
              </a>
            </div>

            <div className='partner-slider-item'>
              <a href='#' target='_blank'>
                <img src='/images/partner/partner_proinnovate.png' alt='logo' />
              </a>
            </div>

            <div className='partner-slider-item'>
              <a href='#' target='_blank'>
                <img
                  src='/images/partner/partner_startup_peru.png'
                  alt='logo'
                />
              </a>
            </div>

            <div className='partner-slider-item'>
              <a href='#' target='_blank'>
                <img src='/images/partner/partner_s360.png' alt='logo' />
              </a>
            </div>
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Partner;
