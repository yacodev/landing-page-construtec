import React from 'react';

const Features = () => {
  return (
    <div id='features' className='features-area ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='features-contant'>
              <div className='features-image'>
                <img src='/images/saas-img/feature1.png' alt='Image' />
              </div>

              <div className='features-shape'>
                <img src='/images/shape/shape8.png' alt='Shape' />
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='features-card-content'>
              <h2 className='title'>¿A quien esta diregido?</h2>
              <div className='saas-features'>
                <div className='icon bg-1'>
                  <i className='las la-pencil-alt'></i>
                </div>
                <h3>Residente de obra</h3>
                <p>
                  Podrás ingresar los metrados diarios y generar la
                  correspondiente valorización de obra, tambien podrás realizar
                  el control de la maquinaria en obra.
                </p>
              </div>

              <div className='saas-features'>
                <div className='icon bg-2'>
                  <i className='las la-file-alt'></i>
                </div>
                <h3>Asistentes administrativos</h3>
                <p>
                  Podrás reportar todas las adquisiciones (ordenes de compra,
                  ordenes de servicio, y demás) para llevar el control
                  financiero de tu proyecto. .
                </p>
              </div>

              <div className='saas-features'>
                <div className='icon bg-3'>
                  <i className='las la-box'></i>
                </div>
                <h3>Almaceneros</h3>
                <p>
                  Podrás dar ingreso y salida a todos los materiales, generar
                  tus notas de entrada/salida, tu bincard digital y la
                  valorización de tu almacen .
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
