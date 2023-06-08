import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  items: 1,
  loop: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  dots: false,
  navText: [
    "<i class='las la-long-arrow-alt-left'></i>",
    "<i class='las la-long-arrow-alt-right'></i>",
  ],
};

const ReviewSlider = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

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

      <div className='container'>
        {display ? (
          <OwlCarousel
            className='clients-slider owl-carousel owl-theme'
            {...options}
          >
            <div className='clients-slider-item'>
              <div className=''>
                <div className='col-lg-6'>
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
                    <span>Gerente de Infraestructura</span>
                  </div>
                </div>
                {/* <div className='col-lg-6'>
                  <div className='client-image'>
                    <img src='/images/saas-img/client1.jpg' alt='Image' />
                  </div>
                </div> */}
              </div>
            </div>

            <div className='clients-slider-item'>
              <div className='row align-items-center'>
                <div className='col-lg-6'>
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
                    <span>Residente de Obra</span>
                  </div>
                </div>
                {/* <div className='col-lg-6'>
                  <div className='client-image'>
                    <img src='/images/saas-img/client2.jpg' alt='Image' />
                  </div>
                </div> */}
              </div>
            </div>

            <div className='clients-slider-item'>
              <div className='row align-items-center'>
                <div className='col-lg-6'>
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
                    <span>Residente de Obra</span>
                  </div>
                </div>
                {/* <div className='col-lg-6'>
                  <div className='client-image'>
                    <img src='/images/saas-img/client3.jpg' alt='Image' />
                  </div>
                </div> */}
              </div>
            </div>

            <div className='clients-slider-item'>
              <div className='row align-items-center'>
                <div className='col-lg-6'>
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
                    <span>Almacenero</span>
                  </div>
                </div>
                {/* <div className='col-lg-6'>
                  <div className='client-image'>
                    <img src='/images/saas-img/client4.jpg' alt='Image' />
                  </div>
                </div> */}
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ''
        )}

        {/* <div className='claint-shape'>
          <img src='/images/shape/shape9.png' className='shape-9' alt='Shape' />
          <img
            src='/images/shape/shape10.png'
            className='shape-10'
            alt='Shape'
          />
        </div> */}
      </div>
    </div>
  );
};

export default ReviewSlider;
