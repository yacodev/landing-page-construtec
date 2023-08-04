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
                  <i className='las la-pencil-alt'></i>
                </div>
                <h3>Ingenieros Residente de Obra</h3>
                <p>
                  Podrás realizar el <strong>control del avance de obra</strong>
                  , las valorizaciones de las partidas ejecutadas y el control
                  de tu almacen de obra.
                </p>
              </div>

              <div className='saas-features'>
                <div className='icon bg-2'>
                  <i className='las la-file-alt'></i>
                </div>
                <h3>Ingenieros Asistentes Técnicos</h3>
                <p>
                  Podrás ingresar los metrados diarios y generar la
                  correspondiente <strong> valorización de obra </strong>,
                  tambien podrás generar los mayores metrados y las partidas
                  nuevas con sus correspondientes valorizaciones.
                </p>
              </div>

              <div className='saas-features'>
                <div className='icon bg-3'>
                  <i className='las la-box'></i>
                </div>
                <h3>Almaceneros</h3>
                <p>
                  Podrás dar ingreso y salida a todos los materiales,{' '}
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
