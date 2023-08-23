import React from 'react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
          <Slider
            className='partner-slider owl-carousel owl-theme'
            {...settings}
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
                <img
                  src='/images/partner/partner_proinnovate.png'
                  width='168px'
                  height='70px'
                  alt='logo'
                />
              </a>
            </div>

            <div className='partner-slider-item'>
              <a href='#' target='_blank'>
                <img
                  src='/images/partner/partner_startup_peru.png'
                  alt='logo'
                  height='60px'
                />
              </a>
            </div>

            <div className='partner-slider-item'>
              <a href='#' target='_blank'>
                <img src='/images/partner/partner_s360.png' alt='logo' />
              </a>
            </div>
          </Slider>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Partner;
