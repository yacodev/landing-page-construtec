import React from 'react';
import Link from 'next/link';

const AppDownload = () => {
  return (
    <div className='saas-downloand-area ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='download-text'>
              <div className='section-title'>
                {/* <span>App Download</span> */}
                <h2>Multiplataforma.</h2>
              </div>

              <p>
                Puedes acceder a nuestra plataforma desde un telefono movil o
                tablet para visualizar tus reportes o el estado de tus
                proyectos.
              </p>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='download-image'>
              <img
                src='/images/saas-img/saas-mobile-construtec.png'
                className='mobile-1'
                alt='Image'
              />
              {/* <img
                src='/images/saas-img/saas-mobile2.png'
                className='mobile-2'
                alt='Image'
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
