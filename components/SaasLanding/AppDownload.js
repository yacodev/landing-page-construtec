import React from 'react';

const AppDownload = () => {
  return (
    <div className='saas-downloand-area ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-8'>
            <div className='download-text'>
              <div className='section-title'>
                <h2>Multiplataforma.</h2>
              </div>

              <p>
                Podrás acceder a nuestra plataforma desde un teléfono movil o
                tablet para visualizar tus reportes o el estado de tus proyectos
                en cualquier momento y desde la comodidad de tu telefono movil.
              </p>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='download-image'>
              <img
                src='/images/saas-img/saas-mobile-construtec.png'
                className='mobile-1'
                alt='Image'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
