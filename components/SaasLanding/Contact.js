import React from 'react';

const Contact = () => {
  return (
    <>
      <div id='contact' className='contact-area ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Contactanos </h2>
            <p>
              Llámanos, escríbenos, sin ningún compromiso y consulta todas las
              dudas que puedas tener acerca de nosotros o nuestra plataforma.
              Elige la vía de contacto que prefieras, nosotros estaremos
              esperándote al otro lado.
            </p>
          </div>

          <div className='contact-content'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 text-center'>
                <a href='http://bit.ly/WhatsAppConstrutec' target='_blank'>
                  <button className='default-btn'>Contactar</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
