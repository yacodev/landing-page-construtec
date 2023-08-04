import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
  return (
    <div id='home' className='saas-banner-area'>
      <div className='container'>
        <div className='saas-banner-content'>
          <span>Ganador del Startup Perú 9G del 2023</span>
          <h1>
            Elabora tus informes mensuales de obra de manera más eficiente.
          </h1>
          <p>Gestiona tu almacén y realiza tus valorizaciones de obra.</p>
          <div className='saas-banner-btn mt-4'>
            <Link href='#wait-list'>
              <a className='default-btn bg-white mr-2'>Quiero probarlo</a>
            </Link>
          </div>
        </div>

        <div className='saas-banner-img'>
          <img
            src='/images/saas-img/saas-laptop.png'
            className='saas-img-1'
            alt='Image'
          />
        </div>

        <div className='saas-shape-content mt-4'>
          <img
            src='/images/shape/shape1.png'
            className='saas-shape-1'
            alt='Shape'
          />
          <img
            src='/images/shape/shape2.png'
            className='saas-shape-2'
            alt='Shape'
          />
          <img
            src='/images/shape/shape3.png'
            className='saas-shape-3'
            alt='Shape'
          />
          <img
            src='/images/shape/shape4.png'
            className='saas-shape-4'
            alt='Shape'
          />
          <img
            src='/images/shape/shape5.png'
            className='saas-shape-5'
            alt='Shape'
          />
          <img
            src='/images/shape/shape6.png'
            className='saas-shape-6'
            alt='Shape'
          />
          <img
            src='/images/shape/shape7.png'
            className='saas-shape-7'
            alt='Shape'
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
