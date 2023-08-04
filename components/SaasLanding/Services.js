import React from 'react';

const Services = () => {
  return (
    <div id='services' className='saas-services-area pt-260 pb-70'>
      <div className='container mt-4'>
        <div className='section-title'>
          {/* <span>Our Services</span> */}
          <h2>Contamos con una plataforma para el control de obras públicas</h2>
          <p>
            Descubre todas las ventajas de nuestra plataforma,{' '}
            <strong>
              para elaborar informes mensuales y realizar el control de la
              ejecución de obras públicas.
            </strong>{' '}
            Gracias a sus distinto módulos (metrados, valorizaciones, almacén y
            financiero) podrás elaborar tus informes mensuales con un solo click
            de manera más eficiente y organizada.
          </p>
        </div>
        <div className='section-title'>
          <h2> Beneficios de utilizar nuestra plataforma </h2>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-6'>
            <div className='saas-service-card'>
              <div className='icon bg-1'>
                <i className='las la-clock'></i>
              </div>
              <h3>Optimización</h3>
              <p>
                Reduce el tiempo necesario para que elabores tu informe mensual{' '}
                <strong>hasta en un 50%.</strong>
              </p>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <div className='saas-service-card'>
              <div className='icon bg-4'>
                <i className='las la-lock'></i>
              </div>
              <h3>Seguridad</h3>
              <p>
                Disminuye la cantidad de errores de los informes mensuales{' '}
                <strong> hasta en un 30%</strong>, gracias al sistema de control
                de errores.
              </p>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <div className='saas-service-card'>
              <div className='icon bg-6'>
                <i className='las la-database'></i>
              </div>
              <h3>Organización</h3>
              <p>
                En un solo lugar tienes todos los informes mensuales organizados
                y entrelazados, olvidate de tener un excel por cada mes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
