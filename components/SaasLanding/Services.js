import React from 'react';

const Services = () => {
  return (
    <div id='services' className='saas-services-area pt-260 pb-70'>
      <div className='container mt-4'>
        <div className='section-title'>
          {/* <span>Our Services</span> */}
          <h2>Descubre todas las ventajas de nuestra plataforma Web.</h2>
          <p>
            Gracias a sus distintas funcionalidades: presupuesto, metrados,
            valorizaciones, reajustes, formula polinomica, almacén y reportes,
            <strong>
              {' '}
              podrás elaborar tus valorizaciones de obra y gestionar tu almacen
              de obra de manera más eficiente y organizada
            </strong>{' '}
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
                Reduce el tiempo necesario para que elaborar tus valorizaciones
                de obra <strong>hasta en un 50%.</strong>
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
                Disminuye la cantidad de errores de la valorización de obra y
                gestion de almacén
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
                En un solo lugar tienes todos las valorizaciones de obra y
                almacen organizados y entrelazados, olvidate de tener un excel
                por cada mes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
