import React from 'react';
import Countdown from 'react-countdown';
import Link from 'next/link';
import config from '../../utils/config';

const RegistrationCampaign = () => {
  /* const CompletionCount = () => (
    <div className='description_campaign mt-4'>
      <h3>Promoción finalizada</h3>
    </div>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <CompletionCount />;
    } else {
      return (
        <h3>
          {days} días {hours} horas {minutes} minutos {seconds} segundos
        </h3>
      );
    }
  }; */

  return (
    <div className='registration-campaign-app ptb-100' id='wait-list'>
      <div className='container'>
        <div className='section-title'>
          <h2>¿Quieres utilizar nuestra plataforma?</h2>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='description_campaign'>
              <h5>
                Al registrate en la plataforma podrás acceder de manera gratuita
                tanto al módulo de almacén y al módulo de valorizaciones por un
                periodo de prueba de 15 días sin costo alguno.
              </h5>
            </div>

            <div className='description_campaign'>
              <h6>
                Que esperas, registrate y comienza a disfrutar de los beneficios
              </h6>
            </div>
            <div className='saas-registration-btn mt-4'>
              <Link href={config.REGISTER_PLATFORM_URL}>
                <a className='default-btn bg-red' target='_blank'>
                  Registrarse
                </a>
              </Link>
            </div>
            {/* <div className='description_campaign mt-4'>
              <p>
                Aun queda tiempo para registrarte y acceder de manera gratuita a
                nuestra plataforma, la promoción a un es valida por:
              </p>
            </div>
            <div className='count-down'>
              {<Countdown date={new Date(2024, 3, 30)} renderer={renderer} />}
            </div> */}
          </div>
        </div>
        <div className='row align-items-center'></div>
      </div>
    </div>
  );
};

export default RegistrationCampaign;
