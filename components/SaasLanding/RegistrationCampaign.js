import React from 'react';
import Countdown from 'react-countdown';
import Link from 'next/link';

const RegistrationCampaign = () => {
  const CompletionCount = () => <span>Promoción finalizada</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <h3>
          {days} días {hours} horas {minutes} minutos {seconds} segundos
        </h3>
      );
    }
  };

  return (
    <div className='registration-campaign-app ptb-100' id='wait-list'>
      <div className='container'>
        <div className='section-title'>
          <h2>Quieres utilizar nuestra plataforma</h2>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='description_campaign'>
              <p>
                Al registrate en la plataforma podrás acceder de manera gratuita
                al módulo de almacen por un periodo de prueba por 30 días sin
                costo alguno. Esta promoción solo es valida hasta el 31 de
                Agosto del 2023.
              </p>
            </div>
            <div className='saas-registration-btn mt-4'>
              <Link href='#'>
                <a className='default-btn bg-red'>Registrarse</a>
              </Link>
            </div>
            <div className='description_campaign mt-4'>
              <p>
                Aun queda tiempo para registrarte y acceder de manera gratuita a
                nuestra plataforma, la promoción a un es valida por::
              </p>
            </div>
            <div className='count-down'>
              {<Countdown date={new Date(2023, 7, 31)} renderer={renderer} />}
            </div>
          </div>
        </div>
        <div className='row align-items-center'></div>
      </div>
    </div>
  );
};

export default RegistrationCampaign;
