import React from 'react';
import Countdown from 'react-countdown';
import Link from 'next/link';

const WaitList = () => {
  const Completionist = () => <span>Promoción finalizada</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className='section-title mt-4'>
          <h3>
            {days} días {hours} horas {minutes} minutos {seconds} segundos
          </h3>
        </div>
      );
    }
  };
  const classOne = 'navbar-collapse collapse show';

  return (
    <div className='built-saas-app ptb-100' id='wait-list'>
      <div className='container'>
        <div className='section-title'>
          <h2>Quieres utilizar nuestra plataforma</h2>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='saas-feature-two'>
              <p>
                Al registrate en la plataforma podrás acceder de manera gratuita
                al módulo de almacen por un periodo de prueba por 30 días sin
                costo alguno. Esta promoción solo es valida hasta el 31 de
                Agosto del 2023, aun tienes para registrarte:
              </p>
              <div>
                {<Countdown date={new Date(2023, 7, 31)} renderer={renderer} />}
              </div>
              <div>
                <div className='nav-btn'>
                  <Link href='#'>
                    <a className='default-btn  bg-main'>
                      {' '}
                      <p>Registrarse</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row align-items-center'></div>
      </div>
    </div>
  );
};

export default WaitList;
