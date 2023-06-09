import React from 'react';

const WaitList = () => {
  return (
    <div className='built-saas-app ptb-100' id='wait-list'>
      <div className='container'>
        <div className='section-title'>
          <h2>Quieres ser unos de los primeros en usar nuestra plataforma</h2>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='saas-feature-two'>
              <p>
                Al registrate en nuestra lista tendrás acceso a la plataforma de
                manera gratuita por 30 días y tendras acceso a todos nuestros
                módulos cuando la plataforma este disposición de los usuarios.
              </p>
            </div>
          </div>
        </div>
        <div className='row align-items-center'>
          <iframe
            src='https://getlaunchlist.com/w/e/vUNzeH'
            width='500'
            height='300'
            frameborder='0'
            scrolling='auto'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WaitList;
