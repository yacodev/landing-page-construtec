import React from 'react';

const Features = () => {
  return (
    <div id='features' className='features-area ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='row'>
            <div className='features-card-content'>
              <h2 className='title'>¿A quién está dirigido?</h2>

              <div className='saas-features '>
                <div className='icon bg-1'>
                  <i className='las la-file-alt'></i>
                </div>
                <h3>Empresas constructoras </h3>
                <p>
                  Constructoras que contratán con el estado la ejecución de
                  obras públicas, mediante la plataforma podrán
                  <strong>gestion todos sus proyectos</strong>, conocer el
                  estado actual de cada proyecto (valorización), asi como el
                  estado de sus almacenes de obra.
                </p>
              </div>

              <div className='saas-features '>
                <div className='icon bg-2'>
                  <i className='las la-pencil-alt'></i>
                </div>
                <h3>Ingenieros Residente de Obra</h3>
                <p>
                  Que trabajen en constructoras o instituciones publicas:
                  Municipalidades, Gobiernos regionales y Ministerios, podrán
                  realizar sus{' '}
                  <strong>
                    valorizaciones de obra ejecutadas tanto por administración
                    directa e indirecta.
                  </strong>
                </p>
              </div>

              <div className='saas-features'>
                <div className='icon bg-3'>
                  <i className='las la-box'></i>
                </div>
                <h3>Almaceneros</h3>
                <p>
                  Que trabajen en constructoras o instituciones publicas, podrán
                  realizar el control de su almacén
                  <strong>
                    generar tus notas de entrada/salida, tu bincard digital y la
                    valorización de tu almacen.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
