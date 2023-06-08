import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
  return (
    <div id='home' className='saas-banner-area'>
      <div className='container'>
        <div className='saas-banner-content'>
          <span>Ganador del Startup Peru 9G</span>
          <h1>Elabora Tus informes mensuales de manera más eficiente </h1>
          <p>Reduce el tiempo necesario hasta en un 50%.</p>
          <p>Disminuye los errores hasta en 30%.</p>
          <p>Toda tu información en un solo lugar.</p>

          <div className='saas-banner-btn'>
            <Link href='#wait-list'>
              <a className='default-btn bg-white mr-2'>Versión prueba</a>
            </Link>
            <Link href='#wait-list'>
              <a className='default-btn bg-main'>Comenzar</a>
            </Link>
          </div>
        </div>

        <div className='saas-banner-img'>
          <img
            src='/images/saas-img/saas-laptop.png'
            className='saas-img-1'
            alt='Image'
          />
          {/* <img
            src='/images/saas-img/saas-mobile.png'
            className='saas-img-2'
            alt='Image'
          /> */}
        </div>

        <div className='saas-shape-content'>
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
