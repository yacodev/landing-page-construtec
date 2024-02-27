import React from 'react';
import Slider from 'react-slick';

const ReviewSlider = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='clients-area ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <h2>Opiniones</h2>
          <p>
            ¿No estás seguro? aquí encontrarás algunos de los testimonios de
            personas que ya utilizarón el CPIP:
          </p>
        </div>
      </div>
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <div className='container'>
        {display ? (
          <Slider
            className='clients-slider owl-carousel owl-theme'
            {...settings}
          >
            <div className='clients-slider-item'>
              <div className=''>
                <div className='col-lg-12'>
                  <div className='client-text'>
                    <div className='text'>
                      <i className='las la-quote-left text-icon-1'></i>
                      <p>
                        "En la Municipalidad de Wanchaq, nos permitió
                        estandarizar los formatos de los informes mensuales,
                        todos presentaban su informe en un mismo formato"
                      </p>
                      <i className='las la-quote-right text-icon-2'></i>
                    </div>
                    <div className='rating'>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                    </div>
                    <h3>Heber Gutierrez</h3>
                    <p>Gerente de Infraestructura</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-slider-item'>
              <div className='row align-items-center'>
                <div className='col-lg-12'>
                  <div className='client-text'>
                    <div className='text'>
                      <i className='las la-quote-left text-icon-1'></i>
                      <p>
                        "Lo utilice durante la ejecución de mi obra, me ayudo a
                        presentar los informes mensuales mas rápido y a pre-
                        liquidar mi proyecto".
                      </p>
                      <i className='las la-quote-right text-icon-2'></i>
                    </div>
                    <div className='rating'>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                    </div>
                    <h3>Jojanes Bejar</h3>
                    <p>Residente de Obra</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-slider-item'>
              <div className='row align-items-center'>
                <div className='col-lg-12'>
                  <div className='client-text'>
                    <div className='text'>
                      <i className='las la-quote-left text-icon-1'></i>
                      <p>
                        "Ya no tengo que estar generando un archivo de excel por
                        cada mes, ni copiando los acumulados de las
                        valorizaciones del mes anterior al mes actual".
                      </p>
                      <i className='las la-quote-right text-icon-2'></i>
                    </div>
                    <div className='rating'>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                    </div>
                    <h3>Cristhian Patiño </h3>
                    <p>Residente de Obra</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-slider-item'>
              <div className='row align-items-center'>
                <div className='col-lg-12'>
                  <div className='client-text'>
                    <div className='text'>
                      <i className='las la-quote-left text-icon-1'></i>
                      <p>
                        "Con la plataforma ya no tengo que volver a escribir a
                        mano una nota de entrada/salida de materiales".
                      </p>
                      <i className='las la-quote-right text-icon-2'></i>
                    </div>
                    <div className='rating'>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                      <i className='las la-star'></i>
                    </div>
                    <h3>Carlos Valeriano </h3>
                    <p>Almacenero</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default ReviewSlider;
